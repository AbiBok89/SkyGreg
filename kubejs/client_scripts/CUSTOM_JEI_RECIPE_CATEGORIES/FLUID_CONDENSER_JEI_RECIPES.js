// priority: 0


    (function () {
        console.info('[SRG] Loading custom JEI conversions (fluid_condensers)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:fluid_condensers';

        // data
        var CustomConversions = [
            { input: 'minecraft:bucket', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:water_bucket', description: 'sky_greg.kjs.jei.desc.15' },
            { input: 'minecraft:dirt', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:mud', description: 'sky_greg.kjs.jei.desc.16' },
            { input: 'ex_hammers:dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay', description: 'sky_greg.kjs.jei.desc.17' },
            { input: 'gtceu:stone_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.18' },
            { input: 'gtceu:andesite_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.19' },
            { input: 'gtceu:diorite_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.20' },
            { input: 'gtceu:granite_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.21' },
            { input: 'gtceu:deepslate_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.22' },
            { input: 'gtceu:basalt_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.23' },
            { input: 'gtceu:netherrack_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.24' },
            { input: 'gtceu:endstone_dust', catalystBlock: 'simple_resource_generators:simple_water_condenser', output: 'minecraft:clay_ball', description: 'sky_greg.kjs.jei.desc.25' },
            { input: 'minecraft:bucket', catalystBlock: 'simple_resource_generators:simple_lava_condenser', output: 'minecraft:lava_bucket', description: 'sky_greg.kjs.jei.desc.26' },
        ];

        function err(msg) { console.error('[SRG] ' + msg); }

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
                    .title(Text.translate('sky_greg.kjs.jei.title.14'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('simple_resource_generators:simple_water_condenser')))
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

            console.info('[SRG] Registered ' + CustomConversions.length + ' custom conversion JEI entries (' + CATEGORY_ID + ').');
        });
    })();
