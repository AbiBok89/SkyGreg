// // kubejs/client_scripts/gtceu/woodworking_item_slide_render.js
// // MOVEMENT TEST (controller-relative + rotated):
// // - Renders the currently-processing recipe input item when working
// // - Otherwise renders a fallback (barrier)
// // - Moves from START -> END based on recipe progress
// // ADDITION:
// // - Renders a "wood dust" burst around 50% progress
// // - Toss is now STRAIGHT UP (no random diagonals), with an arc and landing
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

// // ----------------- EASY TWEAK VARIABLES -----------------
// // Controller-relative coordinates:
// // RIGHT: + = controller's right, - = controller's left
// // FORWARD: + = in front of controller, - = behind controller
// // UP: vertical Y

// var START_RIGHT = 1.2;
// var START_UP = 1.0;
// var START_FORWARD = -1.0;

// var END_RIGHT = -1.2;
// var END_UP = 1.0;
// var END_FORWARD = -1.0;

// var CENTER_XZ = 0.5;      // center within block space
// var RENDER_SCALE = 1.25;  // main item size

// // ----------------- DUST BURST TWEAK VARIABLES -----------------

// // Starting point for the dust (controller-relative)
// var DUST_START_RIGHT = 0.0;
// var DUST_START_UP = 1.5;
// var DUST_START_FORWARD = -1.0;

// var DUST_RENDER_SCALE = 0.4;

// // When to spawn the burst (progress fraction)
// var DUST_TRIGGER_CENTER = 0.50; // 50%
// var DUST_TRIGGER_WIDTH = 0.08;  // +- this range around center

// // NOTE: toss distance is no longer used (dust is straight up in-place)
// // var DUST_TOSS_DISTANCE = 1.0;

// // Vertical motion targets:
// // - peak should be about +1.0 from start around the middle
// // - end should be about -1.5 from start when it "lands"
// var DUST_PEAK_UP = 1.0;
// var DUST_END_DROP = 1.5;

// // Optional (currently does NOT actually rotate; left here for future if you want)
// var DUST_SPIN = false;
// var DUST_SPIN_SPEED = 18.0;
// // ---------------------------------------------------------------

// // Dust item to render (visual only; no entity)
// var DUST_STACK = toNativeStack(Item.of('gtceu:wood_dust'));

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

//                 // Facing (used for both the slide + dust)
//                 var facing = null;
//                 try {
//                     facing = machine.getFrontFacing ? machine.getFrontFacing() : null;
//                 } catch (eF) {
//                     facing = null;
//                 }

//                 // ---- MAIN ITEM POSITION + MOVEMENT (controller-relative + rotated) ----
//                 var right = lerp(START_RIGHT, END_RIGHT, t);
//                 var up = lerp(START_UP, END_UP, t);
//                 var forward = lerp(START_FORWARD, END_FORWARD, t);

//                 var rz = rotateRightForwardToXZ(right, forward, facing);

//                 var x = rz.x + CENTER_XZ;
//                 var y = up;
//                 var z = rz.z + CENTER_XZ;

//                 renderStackAt(ctx, stack, x, y, z, RENDER_SCALE);

//                 // ---- DUST BURST (ADDITIONAL RENDER) ----
//                 // Only when working; visual-only dust burst around 50% progress.
//                 if (working && logic && DUST_STACK && !DUST_STACK.isEmpty()) {
//                     renderDustBurst(ctx, t, facing);
//                 }
//             });

//         // ---------------- helpers ----------------

//         function lerp(a, b, t) {
//             return a + (b - a) * t;
//         }

//         function clamp01(v) {
//             if (v < 0) return 0;
//             if (v > 1) return 1;
//             return v;
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

//         function rotateRightForwardToXZ(right, forward, facing) {
//             if (!facing) {
//                 return { x: right, z: -forward };
//             }

//             var Direction = Java.loadClass('net.minecraft.core.Direction');

//             // NORTH: +forward = -Z, +right = +X
//             if (String(facing) === 'north' || facing === Direction.NORTH) {
//                 return { x: right, z: -forward };
//             }

//             // SOUTH: +forward = +Z, +right = -X
//             if (String(facing) === 'south' || facing === Direction.SOUTH) {
//                 return { x: -right, z: forward };
//             }

//             // EAST: +forward = +X, +right = +Z
//             if (String(facing) === 'east' || facing === Direction.EAST) {
//                 return { x: forward, z: right };
//             }

//             // WEST: +forward = -X, +right = -Z
//             if (String(facing) === 'west' || facing === Direction.WEST) {
//                 return { x: -forward, z: -right };
//             }

//             return { x: right, z: -forward };
//         }

//         // ---------------- DUST BURST ----------------

//         function renderDustBurst(ctx, t, facing) {
//             // window around center
//             var start = DUST_TRIGGER_CENTER - DUST_TRIGGER_WIDTH;
//             var end = DUST_TRIGGER_CENTER + DUST_TRIGGER_WIDTH;

//             if (t < start || t > end) return;

//             // phase 0..1 within the burst window
//             var phase = (t - start) / (end - start);
//             phase = clamp01(phase);

//             // Straight up: right/forward stay constant (only Y animates)
//             var right = DUST_START_RIGHT;
//             var forward = DUST_START_FORWARD;

//             // Vertical arc:
//             // - start at DUST_START_UP
//             // - peak around middle at +DUST_PEAK_UP
//             // - end at DUST_START_UP - DUST_END_DROP
//             //
//             // arcHeight chosen so midpoint hits exactly +peak when combined with linear drop
//             var arcHeight = DUST_PEAK_UP + (0.5 * DUST_END_DROP);
//             var arc = (4.0 * phase * (1.0 - phase)) * arcHeight;
//             var drop = phase * DUST_END_DROP;

//             var up = DUST_START_UP + arc - drop;

//             // Rotate controller-relative (right, forward) into local x/z
//             var rz = rotateRightForwardToXZ(right, forward, facing);

//             var x = rz.x + CENTER_XZ;
//             var y = up;
//             var z = rz.z + CENTER_XZ;

//             // Render dust
//             renderStackAt(ctx, DUST_STACK, x, y, z, DUST_RENDER_SCALE);
//         }

//         // ---------------- recipe input extraction ----------------

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
