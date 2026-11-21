// priority: 0


    (function () {
        console.info('[SRG] Loading custom JEI conversions (random_sapling_generator)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:random_sapling_generator';

        // data
        var CustomConversions = [
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'gtceu:rubber_sapling', description: 'sky_greg.kjs.jei.desc.141' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:oak_sapling', description: 'sky_greg.kjs.jei.desc.142' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:spruce_sapling', description: 'sky_greg.kjs.jei.desc.143' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:birch_sapling', description: 'sky_greg.kjs.jei.desc.144' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:jungle_sapling', description: 'sky_greg.kjs.jei.desc.145' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:acacia_sapling', description: 'sky_greg.kjs.jei.desc.146' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:dark_oak_sapling', description: 'sky_greg.kjs.jei.desc.147' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:cherry_sapling', description: 'sky_greg.kjs.jei.desc.148' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:mangrove_propagule', description: 'sky_greg.kjs.jei.desc.149' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:azalea', description: 'sky_greg.kjs.jei.desc.150' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'minecraft:flowering_azalea', description: 'sky_greg.kjs.jei.desc.151' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'vinery:dark_cherry_sapling', description: 'sky_greg.kjs.jei.desc.152' },
            { catalystBlock: 'simple_resource_generators:random_sapling_generator', output: 'vinery:apple_tree_sapling', description: 'sky_greg.kjs.jei.desc.153' },
        ];

        function err(msg) { console.error('[SRG] ' + msg); }

        function verifyRecipe(recipe) {
            return !!(recipe && recipe.data && recipe.data.catalystBlock && recipe.data.output);
        }

        function handleLookup(builder, recipe, focuses) {
            try {
                if (!verifyRecipe(recipe)) return;

                // var inStack = Item.of(String(recipe.data.input));
                var catalystStack = Item.of(String(recipe.data.catalystBlock));
                var outStack = Item.of(String(recipe.data.output));

                // builder.addSlot('INPUT', 7, 0)
                //     .addItemStack(inStack)
                //     .setSlotName('input');

                builder.addSlot('CATALYST', 11, 0)
                    .addItemStack(catalystStack)
                    .setSlotName('catalyst');

                builder.addSlot('OUTPUT', 11, 17)
                    .addItemStack(outStack)
                    .setSlotName('output');

                // builder.addInvisibleIngredients('INPUT').addItemStack(inStack);
                builder.addInvisibleIngredients('CATALYST').addItemStack(catalystStack);
                builder.addInvisibleIngredients('OUTPUT').addItemStack(outStack);

            } catch (e) {
                err('handleLookup error: ' + String(e));
            }
        }

        function render(recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) {
            try {
                if (!verifyRecipe(recipe)) return;

                var desc = (recipe.data.description) ? String(recipe.data.description) : '';
                if (desc.length > 0) {
                    guiGraphics.drawWordWrap(Client.font, Text.translate(desc), 1, 40, 160, 50);
                }
            } catch (e) {
                err('draw error: ' + String(e));
            }
        }

        JEIAddedEvents.registerCategories(function (event) {
            var guiHelper = event.JEI_HELPERS.guiHelper;

            event.custom(CATEGORY_ID, function (category) {
                category.width = 40;
                category.height = 50;

                category
                    .title(Text.translate('sky_greg.kjs.jei.title.140'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('simple_resource_generators:random_sapling_generator')))
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
                    // input: entry.input,
                    catalystBlock: entry.catalystBlock,
                    output: entry.output,
                    description: entry.description || ''
                });
            }

            console.info('[SRG] Registered ' + CustomConversions.length + ' custom conversion JEI entries (' + CATEGORY_ID + ').');
        });
    })();
