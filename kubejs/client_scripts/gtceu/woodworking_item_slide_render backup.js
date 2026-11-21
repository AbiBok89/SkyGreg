// // kubejs/client_scripts/gtceu/woodworking_item_slide_render.js
// // MOVEMENT TEST:
// // - Renders the currently-processing recipe input item when working
// // - Otherwise renders a fallback (barrier)
// // - Slides left->right above the controller based on recipe progress
// //
// // Renderer id: kubejs:woodworking_item_slide

// var Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
// var ItemDisplayContext = Java.loadClass('net.minecraft.world.item.ItemDisplayContext');
// var OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture');
// var AABB = Java.loadClass('net.minecraft.world.phys.AABB');
// var ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');

// function toNativeStack(stackLike) {
//     if (!stackLike) return null;
//     try {
//         if (stackLike.getItemStack) return stackLike.getItemStack();
//     } catch (e) { }
//     return stackLike;
// }

// var FALLBACK = toNativeStack(Item.of('minecraft:barrier'));

// GTRenderJSEvents.registerDynamicRender(function (event) {
//     event.create('kubejs:woodworking_item_slide', function (builder) {

//         builder
//             .viewDistance(128)
//             .shouldRender(function (machine) { return machine != null; })
//             .shouldRenderOffScreen(function (machine) { return machine != null; })

//             // Big bounding box so it never gets frustum-culled while moving
//             .renderBoundingBox(function (machine) {
//                 try {
//                     var p = machine.getPos();
//                     var x = p.getX(), y = p.getY(), z = p.getZ();
//                     return new AABB(x - 16, y - 16, z - 16, x + 16, y + 16, z + 16);
//                 } catch (e) {
//                     return new AABB(-16, -16, -16, 16, 16, 16);
//                 }
//             })

//             .render(function (ctx) {
//                 var mc = Minecraft.getInstance();
//                 var machine = ctx.machine;
//                 if (!machine) return;

//                 // Recipe logic + working
//                 var logic = null;
//                 try { logic = machine.getRecipeLogic ? machine.getRecipeLogic() : null; } catch (e0) { logic = null; }

//                 var working = false;
//                 try { working = !!(logic && logic.isWorking && logic.isWorking()); } catch (e1) { working = false; }

//                 // Progress fraction 0..1 when working, else 0
//                 var t = 0;
//                 if (working && logic) {
//                     try {
//                         var p = logic.getProgress();
//                         var m = logic.getMaxProgress();
//                         if (m > 0) t = p / m;
//                     } catch (e2) {
//                         t = 0;
//                     }
//                 }
//                 if (t < 0) t = 0;
//                 if (t > 1) t = 1;

//                 // Choose stack: recipe input while working, else fallback
//                 var stack = null;

//                 if (working && logic) {
//                     var recipe = null;
//                     try { recipe = logic.getLastRecipe(); } catch (e3) { recipe = null; }
//                     if (!recipe) {
//                         try { recipe = logic.getLastOriginRecipe(); } catch (e4) { recipe = null; }
//                     }

//                     if (recipe) {
//                         stack = getPrimaryInputStackFromGTRecipe(recipe);
//                     }
//                 }

//                 if (!stack || stack.isEmpty()) {
//                     stack = FALLBACK;
//                 }

//                 if (!stack || stack.isEmpty()) return;

//                 // ---- MOVEMENT (super obvious) ----
//                 // We’re rendering in "local-ish" coordinates above controller.
//                 // Slide across X from left to right based on t.
//                 //
//                 // Make it very wide so it’s easy to see moving.
//                 var startX = -1.5;
//                 var endX = 1.5;

//                 // Base position above controller (keep it obvious)
//                 var baseY = 2.2;
//                 var baseZ = 0.5;

//                 var x = lerp(startX, endX, t);

//                 renderStackAt(ctx, stack, x, baseY, baseZ, 1.4);
//             });

//         // ---------------- helpers ----------------

//         function lerp(a, b, t) {
//             return a + (b - a) * t;
//         }

//         function renderStackAt(ctx, stack, x, y, z, scale) {
//             var mc = Minecraft.getInstance();
//             var poseStack = ctx.poseStack;
//             var buffer = ctx.buffer;
//             var light = ctx.packedLight;

//             poseStack.pushPose();

//             poseStack.translate(x, y, z);
//             poseStack.scale(scale, scale, scale);

//             mc.getItemRenderer().renderStatic(
//                 stack,
//                 ItemDisplayContext.FIXED,
//                 light,
//                 OverlayTexture.NO_OVERLAY,
//                 poseStack,
//                 buffer,
//                 mc.level,
//                 0
//             );

//             poseStack.popPose();
//         }

//         function getPrimaryInputStackFromGTRecipe(recipe) {
//             try {
//                 var list = recipe.getInputContents(ItemRecipeCapability.CAP);
//                 if (!list || list.isEmpty() || list.size() <= 0) return null;

//                 for (var i = 0; i < list.size(); i++) {
//                     var c = list.get(i);
//                     if (!c || !c.getContent) continue;

//                     var raw = null;
//                     try { raw = c.getContent(); } catch (e0) { raw = null; }
//                     if (!raw) continue;

//                     var st = unwrapToItemStack(raw);

//                     // Try via capability decode if direct unwrap failed
//                     if (!st || st.isEmpty()) {
//                         try {
//                             var ingr = ItemRecipeCapability.CAP.of(raw);
//                             if (ingr && ingr.getItems) {
//                                 var arr = ingr.getItems();
//                                 if (arr && arr.length > 0) st = arr[0];
//                             }
//                         } catch (e1) { }
//                     }

//                     if (st && !st.isEmpty()) {
//                         // Skip integrated circuit if present
//                         var itemStr = '';
//                         try { itemStr = String(st.getItem()); } catch (e2) { itemStr = ''; }
//                         if (itemStr.indexOf('integrated_circuit') >= 0) continue;

//                         return st;
//                     }
//                 }

//                 return null;
//             } catch (e) {
//                 return null;
//             }
//         }

//         function unwrapToItemStack(obj) {
//             try {
//                 if (!obj) return null;

//                 // Already an ItemStack?
//                 if (obj.isEmpty !== undefined) return obj;

//                 // Ingredient-like -> getItems() -> ItemStack[]
//                 if (obj.getItems) {
//                     var arr = obj.getItems();
//                     if (arr && arr.length > 0) return arr[0];
//                 }

//                 // Some wrappers have getStack()
//                 if (obj.getStack) {
//                     var st = obj.getStack();
//                     if (st) return unwrapToItemStack(st);
//                 }

//                 // Some wrappers have getStacks() -> List<ItemStack>
//                 if (obj.getStacks) {
//                     var stacks = obj.getStacks();
//                     if (stacks && stacks.size && stacks.size() > 0) return stacks.get(0);
//                 }

//                 return null;
//             } catch (e) {
//                 return null;
//             }
//         }

//     });
// });
