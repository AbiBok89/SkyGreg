// priority: 0


    (function () {
        console.info('[EH] Loading custom JEI conversions (crushing_hammers)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:crushing_hammers';

        // data
        var CustomConversions = [
            { input: 'minecraft:stone', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.28' },
            { input: 'minecraft:cobblestone', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.29' },
            { input: 'minecraft:gravel', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:sand', description: 'sky_greg.kjs.jei.desc.30' },
            { input: 'minecraft:sand', catalystBlock: 'ex_hammers:stone_hammer', output: 'ex_hammers:dust', description: 'sky_greg.kjs.jei.desc.31' },
            { input: 'minecraft:stone', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.32' },
            { input: 'minecraft:cobblestone', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.33' },
            { input: 'minecraft:gravel', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:sand', description: 'sky_greg.kjs.jei.desc.34' },
            { input: 'minecraft:sand', catalystBlock: 'ex_hammers:iron_hammer', output: 'ex_hammers:dust', description: 'sky_greg.kjs.jei.desc.35' },
            { input: 'minecraft:stone', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.36' },
            { input: 'minecraft:cobblestone', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.37' },
            { input: 'minecraft:gravel', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:sand', description: 'sky_greg.kjs.jei.desc.38' },
            { input: 'minecraft:sand', catalystBlock: 'ex_hammers:diamond_hammer', output: 'ex_hammers:dust', description: 'sky_greg.kjs.jei.desc.39' },
            { input: 'minecraft:stone', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.40' },
            { input: 'minecraft:cobblestone', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:gravel', description: 'sky_greg.kjs.jei.desc.41' },
            { input: 'minecraft:gravel', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:sand', description: 'sky_greg.kjs.jei.desc.42' },
            { input: 'minecraft:sand', catalystBlock: 'ex_hammers:netherite_hammer', output: 'ex_hammers:dust', description: 'sky_greg.kjs.jei.desc.43' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'ex_hammers:plant_fiber', description: 'sky_greg.kjs.jei.desc.44' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'ex_hammers:plant_fiber', description: 'sky_greg.kjs.jei.desc.45' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'ex_hammers:plant_fiber', description: 'sky_greg.kjs.jei.desc.46' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'ex_hammers:plant_fiber', description: 'sky_greg.kjs.jei.desc.47' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'gtceu:rubber_sapling', description: 'sky_greg.kjs.jei.desc.48' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'gtceu:rubber_sapling', description: 'sky_greg.kjs.jei.desc.49' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'gtceu:rubber_sapling', description: 'sky_greg.kjs.jei.desc.50' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'gtceu:rubber_sapling', description: 'sky_greg.kjs.jei.desc.51' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:oak_sapling', description: 'sky_greg.kjs.jei.desc.52' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:oak_sapling', description: 'sky_greg.kjs.jei.desc.53' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:oak_sapling', description: 'sky_greg.kjs.jei.desc.54' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:oak_sapling', description: 'sky_greg.kjs.jei.desc.55' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:spruce_sapling', description: 'sky_greg.kjs.jei.desc.56' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:spruce_sapling', description: 'sky_greg.kjs.jei.desc.57' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:spruce_sapling', description: 'sky_greg.kjs.jei.desc.58' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:spruce_sapling', description: 'sky_greg.kjs.jei.desc.59' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:birch_sapling', description: 'sky_greg.kjs.jei.desc.60' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:birch_sapling', description: 'sky_greg.kjs.jei.desc.61' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:birch_sapling', description: 'sky_greg.kjs.jei.desc.62' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:birch_sapling', description: 'sky_greg.kjs.jei.desc.63' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:jungle_sapling', description: 'sky_greg.kjs.jei.desc.64' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:jungle_sapling', description: 'sky_greg.kjs.jei.desc.65' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:jungle_sapling', description: 'sky_greg.kjs.jei.desc.66' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:jungle_sapling', description: 'sky_greg.kjs.jei.desc.67' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:acacia_sapling', description: 'sky_greg.kjs.jei.desc.68' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:acacia_sapling', description: 'sky_greg.kjs.jei.desc.69' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:acacia_sapling', description: 'sky_greg.kjs.jei.desc.70' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:acacia_sapling', description: 'sky_greg.kjs.jei.desc.71' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:dark_oak_sapling', description: 'sky_greg.kjs.jei.desc.72' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:dark_oak_sapling', description: 'sky_greg.kjs.jei.desc.73' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:dark_oak_sapling', description: 'sky_greg.kjs.jei.desc.74' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:dark_oak_sapling', description: 'sky_greg.kjs.jei.desc.75' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:cherry_sapling', description: 'sky_greg.kjs.jei.desc.76' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:cherry_sapling', description: 'sky_greg.kjs.jei.desc.77' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:cherry_sapling', description: 'sky_greg.kjs.jei.desc.78' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:cherry_sapling', description: 'sky_greg.kjs.jei.desc.79' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:mangrove_propagule', description: 'sky_greg.kjs.jei.desc.80' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:mangrove_propagule', description: 'sky_greg.kjs.jei.desc.81' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:mangrove_propagule', description: 'sky_greg.kjs.jei.desc.82' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:mangrove_propagule', description: 'sky_greg.kjs.jei.desc.83' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:azalea', description: 'sky_greg.kjs.jei.desc.84' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:azalea', description: 'sky_greg.kjs.jei.desc.85' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:azalea', description: 'sky_greg.kjs.jei.desc.86' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:azalea', description: 'sky_greg.kjs.jei.desc.87' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'minecraft:flowering_azalea', description: 'sky_greg.kjs.jei.desc.88' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'minecraft:flowering_azalea', description: 'sky_greg.kjs.jei.desc.89' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'minecraft:flowering_azalea', description: 'sky_greg.kjs.jei.desc.90' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'minecraft:flowering_azalea', description: 'sky_greg.kjs.jei.desc.91' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'vinery:dark_cherry_sapling', description: 'sky_greg.kjs.jei.desc.92' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'vinery:dark_cherry_sapling', description: 'sky_greg.kjs.jei.desc.93' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'vinery:dark_cherry_sapling', description: 'sky_greg.kjs.jei.desc.94' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'vinery:dark_cherry_sapling', description: 'sky_greg.kjs.jei.desc.95' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:stone_hammer', output: 'vinery:apple_tree_sapling', description: 'sky_greg.kjs.jei.desc.96' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:iron_hammer', output: 'vinery:apple_tree_sapling', description: 'sky_greg.kjs.jei.desc.97' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:diamond_hammer', output: 'vinery:apple_tree_sapling', description: 'sky_greg.kjs.jei.desc.98' },
            { input: 'minecraft:dirt', catalystBlock: 'ex_hammers:netherite_hammer', output: 'vinery:apple_tree_sapling', description: 'sky_greg.kjs.jei.desc.99' },
        ];

        function err(msg) { console.error('[EH] ' + msg); }

        function verifyRecipe(recipe) {
            return !!(recipe && recipe.data && recipe.data.input && recipe.data.catalystBlock && recipe.data.output);
        }

        function handleLookup(builder, recipe, focuses) {
            try {
                if (!verifyRecipe(recipe)) return;

                var inStack = Item.of(String(recipe.data.input));
                var catalystStack = Item.of(String(recipe.data.catalystBlock));
                var outStack = Item.of(String(recipe.data.output));

                builder.addSlot('INPUT', 0, 0)
                    .addItemStack(inStack)
                    .setSlotName('input');

                builder.addSlot('CATALYST', 43, 0)
                    .addItemStack(catalystStack)
                    .setSlotName('catalyst');

                builder.addSlot('OUTPUT', 84, 0)
                    .addItemStack(outStack)
                    .setSlotName('output');

                builder.addInvisibleIngredients('INPUT').addItemStack(inStack);
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
                    guiGraphics.drawWordWrap(Client.font, Text.translate(desc), 0, 20, 160, 50);
                }
            } catch (e) {
                err('draw error: ' + String(e));
            }
        }

        JEIAddedEvents.registerCategories(function (event) {
            var guiHelper = event.JEI_HELPERS.guiHelper;

            event.custom(CATEGORY_ID, function (category) {
                category.width = 100;
                category.height = 30;

                category
                    .title(Text.translate('sky_greg.kjs.jei.title.27'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('ex_hammers:diamond_hammer')))
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
                    input: entry.input,
                    catalystBlock: entry.catalystBlock,
                    output: entry.output,
                    description: entry.description || ''
                });
            }

            console.info('[EH] Registered ' + CustomConversions.length + ' custom conversion JEI entries (' + CATEGORY_ID + ').');
        });
    })();
