// priority: 0


// CELESTIAL HARVESTER LAUNCH RENDER
//
// Renders the currently-processing harvester input item while working.
// Only renders inputs whose id/text contains "harvester".
// Keeps the existing launch animation + smoke particle behavior.
//
// Clean rebuild:
// - removed duplicate helper functions
// - removed broken debug leftovers
// - explicit SizedIngredient handling
// - smoke is independent from item stack lookup
//
// Renderer id: kubejs:celestial_harvester_launch

var CHR_Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
var CHR_ItemDisplayContext = Java.loadClass('net.minecraft.world.item.ItemDisplayContext');
var CHR_OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture');
var CHR_AABB = Java.loadClass('net.minecraft.world.phys.AABB');
var CHR_Direction = Java.loadClass('net.minecraft.core.Direction');
var CHR_BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
var CHR_LevelRenderer = Java.loadClass('net.minecraft.client.renderer.LevelRenderer');
var CHR_ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
var CHR_BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
var CHR_ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes');
var CHR_Axis = Java.loadClass('com.mojang.math.Axis');

// ------------------------------------------------------------
// DEBUG / FALLBACK
// ------------------------------------------------------------

var CHR_DEBUG_LOG = true;

var CHR_USE_FALLBACK_STACK_WHEN_NO_MATCH = false;
var CHR_FALLBACK_STACK = Item.of('gtceu:gravitation_engine_unit');

// Only render stacks whose text contains this.
// "harvester" is enough for kubejs:harvester_tier_1, etc.
var CHR_REQUIRED_ITEM_ID_TEXT = 'harvester';

// Skip programmed circuit pseudo-inputs
var CHR_SKIP_PROGRAMMED_CIRCUITS = true;

// ------------------------------------------------------------
// CELESTIAL HARVESTER TWEAKS
// ------------------------------------------------------------

var CHR_START_RIGHT = 0.0;
var CHR_START_FORWARD = -3.0;
var CHR_START_UP = 2.0;

var CHR_RENDER_SCALE = 1.75;
var CHR_CENTER_XZ = 0.5;

var CHR_LAUNCH_HEIGHT = 250.0;

var CHR_ASCEND_END_TIME = 0.25;
var CHR_LAND_TIME = 0.95;

var CHR_HIDE_WHEN_TOO_HIGH = true;
var CHR_MAX_VISIBLE_HEIGHT_FROM_START = 50.0;

var CHR_SPIN_ITEM = false;
var CHR_SPIN_SPEED_DEGREES = 180.0;

var CHR_ROT_X = 0.0;
var CHR_ROT_Y = 0.0;
var CHR_ROT_Z = 0.0;

var CHR_VIEW_DISTANCE = 256;
var CHR_BBOX_HORIZONTAL = 64.0;
var CHR_BBOX_DOWN = 16.0;
var CHR_BBOX_UP = 160.0;

var CHR_ANIMATE_ONLY_WHEN_WORKING = true;

// Smoke particles
var CHR_ENABLE_SMOKE = true;
var CHR_SMOKE_COUNT = 1;
var CHR_SMOKE_SPREAD = 0.4;
var CHR_SMOKE_Y_SPEED = 0.01;
var CHR_SMOKE_MIN_FLIGHT_HEIGHT = 0.2;

var CHR_SMOKE_OFFSET_RIGHT = 0.0;
var CHR_SMOKE_OFFSET_FORWARD = 0.0;
var CHR_SMOKE_OFFSET_UP = -0.5;

// ------------------------------------------------------------
// DYNAMIC RENDER REGISTRATION
// ------------------------------------------------------------

GTRenderJSEvents.registerDynamicRender(function (event) {
    event.create('kubejs:celestial_harvester_launch', function (builder) {

        builder
            .viewDistance(CHR_VIEW_DISTANCE)
            .shouldRender(function (machine) {
                return machine != null;
            })
            .shouldRenderOffScreen(function (machine) {
                return machine != null;
            })
            .renderBoundingBox(function (machine) {
                try {
                    var p = machine.getPos();
                    var x = p.getX();
                    var y = p.getY();
                    var z = p.getZ();

                    return new CHR_AABB(
                        x - CHR_BBOX_HORIZONTAL,
                        y - CHR_BBOX_DOWN,
                        z - CHR_BBOX_HORIZONTAL,
                        x + CHR_BBOX_HORIZONTAL,
                        y + CHR_BBOX_UP,
                        z + CHR_BBOX_HORIZONTAL
                    );
                } catch (e) {
                    return new CHR_AABB(
                        -CHR_BBOX_HORIZONTAL,
                        -CHR_BBOX_DOWN,
                        -CHR_BBOX_HORIZONTAL,
                        CHR_BBOX_HORIZONTAL,
                        CHR_BBOX_UP,
                        CHR_BBOX_HORIZONTAL
                    );
                }
            })
            .render(function (ctx) {
                var mc = CHR_Minecraft.getInstance();
                var machine = ctx.machine;
                if (!machine) return;

                var logic = null;
                try {
                    logic = machine.getRecipeLogic ? machine.getRecipeLogic() : null;
                } catch (e0) {
                    logic = null;
                }

                var working = false;
                try {
                    working = !!(logic && logic.isWorking && logic.isWorking());
                } catch (e1) {
                    working = false;
                }

                var t = 0.0;
                if (logic && working) {
                    try {
                        var p = logic.getProgress();
                        var m = logic.getMaxProgress();
                        if (m > 0) {
                            t = p / m;
                        }
                    } catch (e2) {
                        t = 0.0;
                    }
                }

                if (t < 0) t = 0.0;
                if (t > 1) t = 1.0;

                var facing = null;
                try {
                    facing = machine.getFrontFacing ? machine.getFrontFacing() : null;
                } catch (e3) {
                    facing = null;
                }

                var right = CHR_START_RIGHT;
                var forward = CHR_START_FORWARD;
                var up = CHR_START_UP;

                if (working || !CHR_ANIMATE_ONLY_WHEN_WORKING) {
                    if (working) {
                        up += chrGetLaunchVerticalOffset(t);
                    }
                }

                if (CHR_HIDE_WHEN_TOO_HIGH) {
                    var extraHeight = up - CHR_START_UP;
                    if (extraHeight > CHR_MAX_VISIBLE_HEIGHT_FROM_START) {
                        return;
                    }
                }

                var rotated = chrRotateRightForwardToXZ(right, forward, facing);

                var x = rotated.x + CHR_CENTER_XZ;
                var y = up;
                var z = rotated.z + CHR_CENTER_XZ;

                // Smoke is independent from stack lookup
                if (working && CHR_ENABLE_SMOKE) {
                    var flightHeight = up - CHR_START_UP;
                    if (flightHeight > CHR_SMOKE_MIN_FLIGHT_HEIGHT) {
                        chrSpawnSmokeParticles(machine, facing, x, y, z);
                    }
                }

                var stack = null;

                if (working && logic) {
                    var recipe = null;
                    try {
                        recipe = logic.getLastRecipe();
                    } catch (e4) {
                        recipe = null;
                    }

                    if (!recipe) {
                        try {
                            recipe = logic.getLastOriginRecipe();
                        } catch (e5) {
                            recipe = null;
                        }
                    }

                    if (CHR_DEBUG_LOG) {
                        console.info('[celestial_harvester_render] recipe found=' + (recipe != null));
                    }

                    if (recipe) {
                        stack = chrGetHarvesterInputStackFromGTRecipe(recipe);
                    }
                }

                if ((!stack || stack.isEmpty()) && CHR_USE_FALLBACK_STACK_WHEN_NO_MATCH) {
                    stack = CHR_FALLBACK_STACK;
                }

                if (!stack || stack.isEmpty()) return;

                chrRenderStackAt(ctx, stack, x, y, z, CHR_RENDER_SCALE, t, working);
            });

        // --------------------------------------------------------
        // Animation helpers
        // --------------------------------------------------------

        function chrClamp01(v) {
            if (v < 0.0) return 0.0;
            if (v > 1.0) return 1.0;
            return v;
        }

        function chrLerp(a, b, t) {
            return a + (b - a) * t;
        }

        function chrGetLaunchVerticalOffset(t) {
            t = chrClamp01(t);

            var ascendEnd = chrClamp01(CHR_ASCEND_END_TIME);
            var landTime = chrClamp01(CHR_LAND_TIME);

            if (landTime <= ascendEnd) {
                landTime = Math.min(1.0, ascendEnd + 0.01);
            }

            if (t <= ascendEnd) {
                return chrLerp(0.0, CHR_LAUNCH_HEIGHT, t / ascendEnd);
            }

            if (t <= landTime) {
                return chrLerp(
                    CHR_LAUNCH_HEIGHT,
                    0.0,
                    (t - ascendEnd) / (landTime - ascendEnd)
                );
            }

            return 0.0;
        }

        function chrRotateRightForwardToXZ(right, forward, facing) {
            if (!facing) {
                return { x: right, z: -forward };
            }

            if (String(facing) === 'north' || facing === CHR_Direction.NORTH) {
                return { x: right, z: -forward };
            }

            if (String(facing) === 'south' || facing === CHR_Direction.SOUTH) {
                return { x: -right, z: forward };
            }

            if (String(facing) === 'east' || facing === CHR_Direction.EAST) {
                return { x: forward, z: right };
            }

            if (String(facing) === 'west' || facing === CHR_Direction.WEST) {
                return { x: -forward, z: -right };
            }

            return { x: right, z: -forward };
        }

        // --------------------------------------------------------
        // Particles
        // --------------------------------------------------------

        function chrSpawnSmokeParticles(machine, facing, relX, relY, relZ) {
            try {
                var mc = CHR_Minecraft.getInstance();
                if (!mc || !mc.level) return;

                var pos = machine.getPos();

                var smokeRotated = chrRotateRightForwardToXZ(
                    CHR_SMOKE_OFFSET_RIGHT,
                    CHR_SMOKE_OFFSET_FORWARD,
                    facing
                );

                var worldX = pos.getX() + relX + smokeRotated.x;
                var worldY = pos.getY() + relY + CHR_SMOKE_OFFSET_UP;
                var worldZ = pos.getZ() + relZ + smokeRotated.z;

                for (var i = 0; i < CHR_SMOKE_COUNT; i++) {
                    var offX = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;
                    var offY = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;
                    var offZ = (Math.random() - 0.5) * 2 * CHR_SMOKE_SPREAD;

                    mc.level.addParticle(
                        CHR_ParticleTypes.SMOKE,
                        worldX + offX,
                        worldY + offY,
                        worldZ + offZ,
                        0.0,
                        CHR_SMOKE_Y_SPEED,
                        0.0
                    );
                }
            } catch (e) {
                if (CHR_DEBUG_LOG) {
                    console.info('[celestial_harvester_render] smoke error=' + e);
                }
            }
        }

        // --------------------------------------------------------
        // Stack render
        // --------------------------------------------------------

        function chrRenderStackAt(ctx, stack, x, y, z, scale, t, working) {
            var mc = CHR_Minecraft.getInstance();
            var poseStack = ctx.poseStack;
            var buffer = ctx.buffer;

            var light = ctx.packedLight;
            try {
                if (ctx.machine && ctx.machine.getPos && mc && mc.level) {
                    var pos = ctx.machine.getPos();
                    var samplePos = new CHR_BlockPos(pos.getX(), pos.getY() + 1, pos.getZ());
                    light = CHR_LevelRenderer.getLightColor(mc.level, samplePos);
                }
            } catch (e) {
            }

            poseStack.pushPose();

            poseStack.translate(x, y, z);

            if (CHR_ROT_X !== 0.0) poseStack.mulPose(CHR_Axis.XP.rotationDegrees(CHR_ROT_X));
            if (CHR_ROT_Y !== 0.0) poseStack.mulPose(CHR_Axis.YP.rotationDegrees(CHR_ROT_Y));
            if (CHR_ROT_Z !== 0.0) poseStack.mulPose(CHR_Axis.ZP.rotationDegrees(CHR_ROT_Z));

            if (CHR_SPIN_ITEM && working) {
                var spinDegrees = t * CHR_SPIN_SPEED_DEGREES * 360.0;
                poseStack.mulPose(CHR_Axis.YP.rotationDegrees(spinDegrees));
            }

            poseStack.scale(scale, scale, scale);

            mc.getItemRenderer().renderStatic(
                stack,
                CHR_ItemDisplayContext.FIXED,
                light,
                CHR_OverlayTexture.NO_OVERLAY,
                poseStack,
                buffer,
                mc.level,
                0
            );

            poseStack.popPose();
        }

        // --------------------------------------------------------
        // Recipe input extraction
        // --------------------------------------------------------

        function chrGetHarvesterInputStackFromGTRecipe(recipe) {
            try {
                var list = recipe.getInputContents(CHR_ItemRecipeCapability.CAP);
                if (!list || list.isEmpty() || list.size() <= 0) {
                    if (CHR_DEBUG_LOG) {
                        console.info('[celestial_harvester_render] no item input contents found');
                    }
                    return null;
                }

                if (CHR_DEBUG_LOG) {
                    console.info('[celestial_harvester_render] input content count=' + list.size());
                }

                for (var i = 0; i < list.size(); i++) {
                    var c = list.get(i);
                    if (!c || !c.getContent) continue;

                    var raw = null;
                    try {
                        raw = c.getContent();
                    } catch (e0) {
                        raw = null;
                    }

                    if (!raw) {
                        if (CHR_DEBUG_LOG) {
                            console.info('[celestial_harvester_render] content[' + i + '] raw=<null>');
                        }
                        continue;
                    }

                    if (CHR_DEBUG_LOG) {
                        console.info('[celestial_harvester_render] content[' + i + '] class=' + chrGetClassName(raw));
                    }

                    var candidates = [];
                    chrCollectStacksFromRawContent(raw, candidates);

                    if (CHR_DEBUG_LOG) {
                        console.info('[celestial_harvester_render] content[' + i + '] candidate stack count=' + candidates.length);
                    }

                    for (var j = 0; j < candidates.length; j++) {
                        var st = candidates[j];
                        if (!st || st.isEmpty()) continue;

                        var itemId = chrGetItemRegistryId(st);
                        var itemString = chrGetItemString(st);
                        var stackString = chrGetStackString(st);

                        if (CHR_DEBUG_LOG) {
                            console.info(
                                '[celestial_harvester_render] candidate content[' + i + '][' + j + ']' +
                                ' id=' + itemId +
                                ' item=' + itemString +
                                ' stack=' + stackString
                            );
                        }

                        if (CHR_SKIP_PROGRAMMED_CIRCUITS) {
                            var combinedText = (itemId + ' ' + itemString + ' ' + stackString).toLowerCase();
                            if (combinedText.indexOf('programmed_circuit') >= 0) {
                                continue;
                            }
                        }

                        if (chrStackMatchesRequiredText(st, CHR_REQUIRED_ITEM_ID_TEXT)) {
                            if (CHR_DEBUG_LOG) {
                                console.info('[celestial_harvester_render] matched harvester input on content[' + i + '][' + j + ']');
                            }
                            return st;
                        }
                    }
                }

                if (CHR_DEBUG_LOG) {
                    console.info('[celestial_harvester_render] no matching harvester input found');
                }

                return null;
            } catch (e) {
                if (CHR_DEBUG_LOG) {
                    console.info('[celestial_harvester_render] input scan error=' + e);
                }
                return null;
            }
        }

        // Main wrapper-aware collector
        function chrCollectStacksFromRawContent(raw, out) {
            if (!raw || !out) return;

            var className = chrGetClassName(raw);

            // Explicit GTCEu SizedIngredient handling first
            if (className.indexOf('SizedIngredient') >= 0) {
                // Best chance first: KJS display stacks
                try {
                    if (raw['kjs$getDisplayStacks']) {
                        var displayStacks = raw['kjs$getDisplayStacks']();
                        chrCollectFromMaybeArrayOrList(displayStacks, out, 0);
                        if (out.length > 0) return;
                    }
                } catch (e0) {
                }

                // KJS stacks
                try {
                    if (raw['kjs$getStacks']) {
                        var kjsStacks = raw['kjs$getStacks']();
                        chrCollectFromMaybeArrayOrList(kjsStacks, out, 0);
                        if (out.length > 0) return;
                    }
                } catch (e1) {
                }

                // KJS first
                try {
                    if (raw['kjs$getFirst']) {
                        var first = raw['kjs$getFirst']();
                        if (first) {
                            chrCollectCandidateStacks(first, out, 0);
                            if (out.length > 0) return;
                        }
                    }
                } catch (e2) {
                }

                // Inner ingredient
                try {
                    if (raw.getInner) {
                        var inner = raw.getInner();
                        if (inner) {
                            chrCollectCandidateStacks(inner, out, 0);
                            if (out.length > 0) return;
                        }
                    }
                } catch (e3) {
                }

                // Values as last wrapper-specific fallback
                try {
                    if (raw.getValues) {
                        var values = raw.getValues();
                        chrCollectFromMaybeArrayOrList(values, out, 0);
                        if (out.length > 0) return;
                    }
                } catch (e4) {
                }
            }

            // Generic fallback
            chrCollectCandidateStacks(raw, out, 0);
        }

        function chrCollectFromMaybeArrayOrList(obj, out, depth) {
            if (!obj) return;

            try {
                if (obj.length !== undefined) {
                    for (var i = 0; i < obj.length; i++) {
                        chrCollectCandidateStacks(obj[i], out, depth + 1);
                    }
                    return;
                }
            } catch (e0) {
            }

            try {
                if (obj.size) {
                    for (var j = 0; j < obj.size(); j++) {
                        chrCollectCandidateStacks(obj.get(j), out, depth + 1);
                    }
                    return;
                }
            } catch (e1) {
            }

            chrCollectCandidateStacks(obj, out, depth + 1);
        }

        function chrCollectCandidateStacks(obj, out, depth) {
            if (!obj) return;
            if (!out) return;
            if (depth > 8) return;

            try {
                if (chrLooksLikeItemStack(obj)) {
                    if (!chrIsEmptyStack(obj)) {
                        out.push(obj);
                        return;
                    }
                }
            } catch (e0) {
            }

            try {
                if (obj.getItemStack) {
                    var nativeStack = obj.getItemStack();
                    if (nativeStack) {
                        chrCollectCandidateStacks(nativeStack, out, depth + 1);
                    }
                }
            } catch (e1) {
            }

            try {
                if (obj.getItems) {
                    var arr = obj.getItems();
                    if (arr) {
                        for (var i = 0; i < arr.length; i++) {
                            chrCollectCandidateStacks(arr[i], out, depth + 1);
                        }
                    }
                }
            } catch (e2) {
            }

            try {
                if (obj.getStack) {
                    var st = obj.getStack();
                    if (st) {
                        chrCollectCandidateStacks(st, out, depth + 1);
                    }
                }
            } catch (e3) {
            }

            try {
                if (obj.getStacks) {
                    var stacks = obj.getStacks();
                    chrCollectFromMaybeArrayOrList(stacks, out, depth + 1);
                }
            } catch (e4) {
            }

            try {
                if (obj['kjs$getStacks']) {
                    var kjsStacks = obj['kjs$getStacks']();
                    chrCollectFromMaybeArrayOrList(kjsStacks, out, depth + 1);
                }
            } catch (e5) {
            }

            try {
                if (obj['kjs$getDisplayStacks']) {
                    var kjsDisplayStacks = obj['kjs$getDisplayStacks']();
                    chrCollectFromMaybeArrayOrList(kjsDisplayStacks, out, depth + 1);
                }
            } catch (e6) {
            }

            try {
                if (obj.getInner) {
                    var inner = obj.getInner();
                    if (inner && inner !== obj) {
                        chrCollectCandidateStacks(inner, out, depth + 1);
                    }
                }
            } catch (e7) {
            }

            try {
                if (obj.getContent) {
                    var content = obj.getContent();
                    if (content && content !== obj) {
                        chrCollectCandidateStacks(content, out, depth + 1);
                    }
                }
            } catch (e8) {
            }

            try {
                if (obj.getValues) {
                    var values = obj.getValues();
                    chrCollectFromMaybeArrayOrList(values, out, depth + 1);
                }
            } catch (e9) {
            }
        }

        // --------------------------------------------------------
        // Utility helpers
        // --------------------------------------------------------

        function chrLooksLikeItemStack(obj) {
            try {
                return obj && obj.getItem && obj.isEmpty !== undefined;
            } catch (e) {
                return false;
            }
        }

        function chrIsEmptyStack(stack) {
            try {
                return !stack || stack.isEmpty();
            } catch (e) {
                return true;
            }
        }

        function chrGetItemRegistryId(stack) {
            try {
                if (!stack || stack.isEmpty()) return '';
                var key = CHR_BuiltInRegistries.ITEM.getKey(stack.getItem());
                if (!key) return '';
                return String(key);
            } catch (e) {
                return '';
            }
        }

        function chrGetItemString(stack) {
            try {
                if (!stack || stack.isEmpty()) return '';
                return String(stack.getItem());
            } catch (e) {
                return '';
            }
        }

        function chrGetStackString(stack) {
            try {
                if (!stack || stack.isEmpty()) return '';
                return String(stack);
            } catch (e) {
                return '';
            }
        }

        function chrGetClassName(obj) {
            try {
                if (!obj) return '<null>';
                if (obj.getClass) return String(obj.getClass().getName());
                return typeof obj;
            } catch (e) {
                return '<unknown>';
            }
        }

        function chrStackMatchesRequiredText(stack, requiredText) {
            try {
                if (!stack || stack.isEmpty()) return false;
                if (!requiredText || requiredText.length <= 0) return true;

                var needle = String(requiredText).toLowerCase();

                var idText = chrGetItemRegistryId(stack).toLowerCase();
                var itemText = chrGetItemString(stack).toLowerCase();
                var stackText = chrGetStackString(stack).toLowerCase();

                if (idText.indexOf(needle) >= 0) return true;
                if (itemText.indexOf(needle) >= 0) return true;
                if (stackText.indexOf(needle) >= 0) return true;

                return false;
            } catch (e) {
                return false;
            }
        }
    });
});