// priority: 0


    (function () {
        console.info('[SRG] Loading custom JEI conversions (random_seed_generator)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:random_seed_generator';

        // data
        var CustomConversions = [
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'minecraft:wheat_seeds', description: 'sky_greg.kjs.jei.desc.155' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'minecraft:pumpkin_seeds', description: 'sky_greg.kjs.jei.desc.156' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'minecraft:melon_seeds', description: 'sky_greg.kjs.jei.desc.157' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'minecraft:beetroot_seeds', description: 'sky_greg.kjs.jei.desc.158' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'ex_hammers:grass_seed', description: 'sky_greg.kjs.jei.desc.159' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'farmersdelight:rice', description: 'sky_greg.kjs.jei.desc.160' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'farmersdelight:cabbage_seeds', description: 'sky_greg.kjs.jei.desc.161' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'farmersdelight:tomato_seeds', description: 'sky_greg.kjs.jei.desc.162' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:red_grape_seeds', description: 'sky_greg.kjs.jei.desc.163' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:white_grape_seeds', description: 'sky_greg.kjs.jei.desc.164' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:savanna_grape_seeds_red', description: 'sky_greg.kjs.jei.desc.165' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:savanna_grape_seeds_white', description: 'sky_greg.kjs.jei.desc.166' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:taiga_grape_seeds_red', description: 'sky_greg.kjs.jei.desc.167' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:taiga_grape_seeds_white', description: 'sky_greg.kjs.jei.desc.168' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:jungle_grape_seeds_red', description: 'sky_greg.kjs.jei.desc.169' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'vinery:jungle_grape_seeds_white', description: 'sky_greg.kjs.jei.desc.170' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'bakery:strawberry_seeds', description: 'sky_greg.kjs.jei.desc.171' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'bakery:oat_seeds', description: 'sky_greg.kjs.jei.desc.172' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'brewery:hops_seeds', description: 'sky_greg.kjs.jei.desc.173' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'brewery:barley_seeds', description: 'sky_greg.kjs.jei.desc.174' },
            { catalystBlock: 'simple_resource_generators:random_seed_generator', output: 'brewery:corn_seeds', description: 'sky_greg.kjs.jei.desc.175' },
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
                    .title(Text.translate('sky_greg.kjs.jei.title.154'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('simple_resource_generators:random_seed_generator')))
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
