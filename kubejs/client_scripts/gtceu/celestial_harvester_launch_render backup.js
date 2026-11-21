// // kubejs/client_scripts/gtceu/celestial_harvester_launch_render.js
// // CELESTIAL HARVESTER LAUNCH RENDER

// var CHR_Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
// var CHR_ItemDisplayContext = Java.loadClass('net.minecraft.world.item.ItemDisplayContext');
// var CHR_OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture');
// var CHR_AABB = Java.loadClass('net.minecraft.world.phys.AABB');
// var CHR_Direction = Java.loadClass('net.minecraft.core.Direction');
// var CHR_BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
// var CHR_LevelRenderer = Java.loadClass('net.minecraft.client.renderer.LevelRenderer');

// var CHR_ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes');

// // ------------------------------------------------------------
// // CELESTIAL HARVESTER UNIQUE TWEAK VARIABLES
// // ------------------------------------------------------------

// var CHR_TEST_STACK = Item.of('gtceu:gravitation_engine_unit');

// var CHR_START_RIGHT = 0.0;
// var CHR_START_FORWARD = -3.0;
// var CHR_START_UP = 2.0;

// var CHR_RENDER_SCALE = 1.75;
// var CHR_CENTER_XZ = 0.5;

// var CHR_LAUNCH_HEIGHT = 250.0;

// var CHR_ASCEND_END_TIME = 0.25;   // reaches peak at 45% recipe progress
// var CHR_LAND_TIME = 0.95;         // lands back on pad at 85% recipe progress

// var CHR_HIDE_WHEN_TOO_HIGH = true;
// var CHR_MAX_VISIBLE_HEIGHT_FROM_START = 50.0;

// var CHR_SPIN_ITEM = false;
// var CHR_SPIN_SPEED_DEGREES = 180.0;

// var CHR_ROT_X = 0.0;
// var CHR_ROT_Y = 0.0;
// var CHR_ROT_Z = 0.0;

// var CHR_VIEW_DISTANCE = 256;
// var CHR_BBOX_HORIZONTAL = 64.0;
// var CHR_BBOX_DOWN = 16.0;
// var CHR_BBOX_UP = 160.0;

// var CHR_ANIMATE_ONLY_WHEN_WORKING = true;

// // Smoke particles

// var CHR_ENABLE_SMOKE = true;

// // How many smoke particles per render tick while in flight
// var CHR_SMOKE_COUNT = 1;

// // Random horizontal spread around the item
// var CHR_SMOKE_SPREAD = 0.4;

// // Small upward motion the smoke gets
// var CHR_SMOKE_Y_SPEED = 0.01;

// // Only spawn smoke while above this height off the pad
// var CHR_SMOKE_MIN_FLIGHT_HEIGHT = 0.2;

// var CHR_SMOKE_OFFSET_RIGHT = 0.0;
// var CHR_SMOKE_OFFSET_FORWARD = 0.0;
// var CHR_SMOKE_OFFSET_UP = -0.5;

// // ------------------------------------------------------------
// // DYNAMIC RENDER REGISTRATION
// // ------------------------------------------------------------

// GTRenderJSEvents.registerDynamicRender(function (event) {
//     event.create('kubejs:celestial_harvester_launch', function (builder) {

//         builder
//             .viewDistance(CHR_VIEW_DISTANCE)
//             .shouldRender(function (machine) {
//                 return machine != null;
//             })
//             .shouldRenderOffScreen(function (machine) {
//                 return machine != null;
//             })
//             .renderBoundingBox(function (machine) {
//                 try {
//                     var p = machine.getPos();
//                     var x = p.getX();
//                     var y = p.getY();
//                     var z = p.getZ();

//                     return new CHR_AABB(
//                         x - CHR_BBOX_HORIZONTAL,
//                         y - CHR_BBOX_DOWN,
//                         z - CHR_BBOX_HORIZONTAL,
//                         x + CHR_BBOX_HORIZONTAL,
//                         y + CHR_BBOX_UP,
//                         z + CHR_BBOX_HORIZONTAL
//                     );
//                 } catch (e) {
//                     return new CHR_AABB(
//                         -CHR_BBOX_HORIZONTAL, -CHR_BBOX_DOWN, -CHR_BBOX_HORIZONTAL,
//                         CHR_BBOX_HORIZONTAL, CHR_BBOX_UP, CHR_BBOX_HORIZONTAL
//                     );
//                 }
//             })
//             .render(function (ctx) {
//                 var mc = CHR_Minecraft.getInstance();
//                 var machine = ctx.machine;
//                 if (!machine) return;

//                 var stack = CHR_TEST_STACK;
//                 if (!stack || stack.isEmpty()) return;

//                 var logic = null;
//                 try {
//                     logic = machine.getRecipeLogic ? machine.getRecipeLogic() : null;
//                 } catch (e0) {
//                     logic = null;
//                 }

//                 var working = false;
//                 try {
//                     working = !!(logic && logic.isWorking && logic.isWorking());
//                 } catch (e1) {
//                     working = false;
//                 }

//                 var t = 0.0;

//                 if (logic && working) {
//                     try {
//                         var p = logic.getProgress();
//                         var m = logic.getMaxProgress();
//                         if (m > 0) {
//                             t = p / m;
//                         }
//                     } catch (e2) {
//                         t = 0.0;
//                     }
//                 }

//                 if (t < 0) t = 0.0;
//                 if (t > 1) t = 1.0;

//                 var facing = null;
//                 try {
//                     facing = machine.getFrontFacing ? machine.getFrontFacing() : null;
//                 } catch (e3) {
//                     facing = null;
//                 }

//                 var right = CHR_START_RIGHT;
//                 var forward = CHR_START_FORWARD;
//                 var up = CHR_START_UP;

//                 if (working || !CHR_ANIMATE_ONLY_WHEN_WORKING) {
//                     if (working) {
//                         up += chrGetLaunchVerticalOffset(t);
//                     }
//                 }

//                 if (CHR_HIDE_WHEN_TOO_HIGH) {
//                     var extraHeight = up - CHR_START_UP;
//                     if (extraHeight > CHR_MAX_VISIBLE_HEIGHT_FROM_START) {
//                         return;
//                     }
//                 }

//                 var rotated = chrRotateRightForwardToXZ(right, forward, facing);

//                 var x = rotated.x + CHR_CENTER_XZ;
//                 var y = up;
//                 var z = rotated.z + CHR_CENTER_XZ;

//                 if (working && CHR_ENABLE_SMOKE) {
//                     var flightHeight = up - CHR_START_UP;
//                     if (flightHeight > CHR_SMOKE_MIN_FLIGHT_HEIGHT) {
//                         chrSpawnSmokeParticles(machine, facing, x, y, z);
//                     }
//                 }

//                 chrRenderStackAt(ctx, stack, x, y, z, CHR_RENDER_SCALE, t, working);
//             });

//         function chrClamp01(v) {
//             if (v < 0.0) return 0.0;
//             if (v > 1.0) return 1.0;
//             return v;
//         }

//         function chrLerp(a, b, t) {
//             return a + (b - a) * t;
//         }

//         function chrGetLaunchVerticalOffset(t) {
//             t = chrClamp01(t);

//             // Safety clamp so bad values don't break animation
//             var ascendEnd = chrClamp01(CHR_ASCEND_END_TIME);
//             var landTime = chrClamp01(CHR_LAND_TIME);

//             // Make sure land time is always after ascend end
//             if (landTime <= ascendEnd) {
//                 landTime = Math.min(1.0, ascendEnd + 0.01);
//             }

//             // Before launch peak: go up
//             if (t <= ascendEnd) {
//                 return chrLerp(0.0, CHR_LAUNCH_HEIGHT, t / ascendEnd);
//             }

//             // Between peak and land time: come back down
//             if (t <= landTime) {
//                 return chrLerp(
//                     CHR_LAUNCH_HEIGHT,
//                     0.0,
//                     (t - ascendEnd) / (landTime - ascendEnd)
//                 );
//             }

//             // After landing: stay landed
//             return 0.0;
//         }

//         function chrRotateRightForwardToXZ(right, forward, facing) {
//             if (!facing) {
//                 return { x: right, z: -forward };
//             }

//             if (String(facing) === 'north' || facing === CHR_Direction.NORTH) {
//                 return { x: right, z: -forward };
//             }

//             if (String(facing) === 'south' || facing === CHR_Direction.SOUTH) {
//                 return { x: -right, z: forward };
//             }

//             if (String(facing) === 'east' || facing === CHR_Direction.EAST) {
//                 return { x: forward, z: right };
//             }

//             if (String(facing) === 'west' || facing === CHR_Direction.WEST) {
//                 return { x: -forward, z: -right };
//             }

//             return { x: right, z: -forward };
//         }

//         function chrSpawnSmokeParticles(machine, facing, relX, relY, relZ) {
//             try {
//                 var mc = CHR_Minecraft.getInstance();
//                 if (!mc || !mc.level) return;

//                 var pos = machine.getPos();

//                 // Rotate particle offset the same way as the harvester offset
//                 var smokeRotated = chrRotateRightForwardToXZ(
//                     CHR_SMOKE_OFFSET_RIGHT,
//                     CHR_SMOKE_OFFSET_FORWARD,
//                     facing
//                 );

//                 // Convert relative render position to world position
//                 var worldX = pos.getX() + relX + smokeRotated.x;
//                 var worldY = pos.getY() + relY + CHR_SMOKE_OFFSET_UP;
//                 var worldZ = pos.getZ() + relZ + smokeRotated.z;

//                 for (var i = 0; i < CHR_SMOKE_COUNT; i++) {
//                     var offX = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;
//                     var offY = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;
//                     var offZ = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;

//                     mc.level.addParticle(
//                         CHR_ParticleTypes.SMOKE,
//                         worldX + offX,
//                         worldY + offY,
//                         worldZ + offZ,
//                         0.0,
//                         CHR_SMOKE_Y_SPEED,
//                         0.0
//                     );
//                 }
//             } catch (e) {
//             }
//         }

//         function chrRenderStackAt(ctx, stack, x, y, z, scale, t, working) {
//             var mc = CHR_Minecraft.getInstance();
//             var poseStack = ctx.poseStack;
//             var buffer = ctx.buffer;

//             var light = ctx.packedLight;
//             try {
//                 if (ctx.machine && ctx.machine.getPos && mc && mc.level) {
//                     var pos = ctx.machine.getPos();
//                     var samplePos = new CHR_BlockPos(pos.getX(), pos.getY() + 1, pos.getZ());
//                     light = CHR_LevelRenderer.getLightColor(mc.level, samplePos);
//                 }
//             } catch (e) {
//             }

//             poseStack.pushPose();

//             poseStack.translate(x, y, z);
//             poseStack.scale(scale, scale, scale);

//             mc.getItemRenderer().renderStatic(
//                 stack,
//                 CHR_ItemDisplayContext.FIXED,
//                 light,
//                 CHR_OverlayTexture.NO_OVERLAY,
//                 poseStack,
//                 buffer,
//                 mc.level,
//                 0
//             );

//             poseStack.popPose();
//         }
//     });
// });