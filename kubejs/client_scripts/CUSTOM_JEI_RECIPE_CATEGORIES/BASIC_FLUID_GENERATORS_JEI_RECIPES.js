// priority: 0


    (function () {
        console.info('[SFG] Loading custom JEI conversions (simple_fluid_generators)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:simple_fluid_generators';

        // data
        var CustomConversions = [
            { catalystBooster: 'minecraft:air', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 1, description: 'sky_greg.kjs.jei.desc.2' },
            { catalystBooster: 'gtceu:cupronickel_coil_block', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 2, description: 'sky_greg.kjs.jei.desc.3' },
            { catalystBooster: 'gtceu:kanthal_coil_block', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 5, description: 'sky_greg.kjs.jei.desc.4' },
            { catalystBooster: 'gtceu:nichrome_coil_block', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 10, description: 'sky_greg.kjs.jei.desc.5' },
            { catalystBooster: 'gtceu:rtm_alloy_coil_block', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 15, description: 'sky_greg.kjs.jei.desc.6' },
            { catalystBooster: 'gtceu:hssg_coil_block', catalystBlock: 'simplefluidgenerators:basic_lava_generator', output: 'minecraft:lava', qty: 20, description: 'sky_greg.kjs.jei.desc.7' },
            { catalystBooster: 'minecraft:air', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 100, description: 'sky_greg.kjs.jei.desc.8' },
            { catalystBooster: 'gtceu:cupronickel_coil_block', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 200, description: 'sky_greg.kjs.jei.desc.9' },
            { catalystBooster: 'gtceu:kanthal_coil_block', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 400, description: 'sky_greg.kjs.jei.desc.10' },
            { catalystBooster: 'gtceu:nichrome_coil_block', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 600, description: 'sky_greg.kjs.jei.desc.11' },
            { catalystBooster: 'gtceu:rtm_alloy_coil_block', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 800, description: 'sky_greg.kjs.jei.desc.12' },
            { catalystBooster: 'gtceu:hssg_coil_block', catalystBlock: 'simplefluidgenerators:basic_water_generator', output: 'minecraft:water', qty: 1000, description: 'sky_greg.kjs.jei.desc.13' },
        ];

        function err(msg) { console.error('[SFG] ' + msg); }

        function verifyRecipe(recipe) {
            return !!(recipe && recipe.data && recipe.data.catalystBooster && recipe.data.catalystBlock && recipe.data.output);
        }

        function handleLookup(builder, recipe, focuses) {
            try {
                if (!verifyRecipe(recipe)) return;

                var inStack = Item.of(String(recipe.data.catalystBooster));
                var catalystStack = Item.of(String(recipe.data.catalystBlock));
                var outFluidId = String(recipe.data.output);
                var outFluidQty = (recipe.data.qty);

                builder.addSlot('CATALYST', 7, 34)
                    .addItemStack(inStack)
                    .setSlotName('catalyst');

                builder.addSlot('CATALYST', 7, 17)
                    .addItemStack(catalystStack)
                    .setSlotName('catalyst');

                builder.addSlot('OUTPUT', 7, 0)
                    .addFluidStack(outFluidId, outFluidQty)
                    .setSlotName('output');

                builder.addInvisibleIngredients('CATALYST').addItemStack(inStack);
                builder.addInvisibleIngredients('CATALYST').addItemStack(catalystStack);
                builder.addInvisibleIngredients('OUTPUT').addFluidStack(outFluidId, outFluidQty);

            } catch (e) {
                err('handleLookup error: ' + String(e));
            }
        }

        function render(recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) {
            try {
                if (!verifyRecipe(recipe)) return;

                var desc = (recipe.data.description) ? String(recipe.data.description) : '';
                if (desc.length > 0) {
                    guiGraphics.drawWordWrap(Client.font, Text.translate(desc), 6, 51, 160, 50);
                }
            } catch (e) {
                err('draw error: ' + String(e));
            }
        }

        JEIAddedEvents.registerCategories(function (event) {
            var guiHelper = event.JEI_HELPERS.guiHelper;

            event.custom(CATEGORY_ID, function (category) {
                category.width = 30;
                category.height = 60;

                category
                    .title(Text.translate('sky_greg.kjs.jei.title.1'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('simplefluidgenerators:basic_lava_generator')))
                    .isRecipeHandled(function (recipe) { return verifyRecipe(recipe); })
                    .handleLookup(function (builder, recipe, focuses) { handleLookup(builder, recipe, focuses); })
                    .setDrawHandler(function (recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) {
                        render(recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
                    });
            });
        });

        JEIAddedEvents.registerRecipes(function (event) {
            var cat = event.custom(CATEGORY_ID);

            for (var i = 0; i < CustomConversions.length; i++) {
                var entry = CustomConversions[i];
                cat.add({
                    catalystBooster: entry.catalystBooster,
                    catalystBlock: entry.catalystBlock,
                    output: entry.output,
                    qty: entry.qty,
                    description: entry.description || ''
                });
            }

            console.info('[SFG] Registered ' + CustomConversions.length + ' custom conversion JEI entries (' + CATEGORY_ID + ').');
        });
    })();
