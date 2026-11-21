// priority: 0


    (function () {
        console.info('[IB] Loading custom JEI conversions (infinite_blocks)...');

        // unique per file
        var CATEGORY_ID = 'kubejs:infinite_blocks';

        // data
        var CustomConversions = [
            { input: 'infinite_blocks:blackest_stone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'infinite_blocks:blackest_stone', description: 'sky_greg.kjs.jei.desc.101' },
            { input: 'xtonesreworked:xtone_tile', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'xtonesreworked:xtone_tile', description: 'sky_greg.kjs.jei.desc.102' },
            { input: 'laboratoryblocks:laboratory_block', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'laboratoryblocks:laboratory_block', description: 'sky_greg.kjs.jei.desc.103' },
            { input: 'laboratoryblocks:pla_block', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'laboratoryblocks:pla_block', description: 'sky_greg.kjs.jei.desc.104' },
            { input: 'factory_blocks:factory', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'factory_blocks:factory', description: 'sky_greg.kjs.jei.desc.105' },
            { input: 'factory_blocks:sturdy', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'factory_blocks:sturdy', description: 'sky_greg.kjs.jei.desc.106' },
            { input: 'minecraft:cobblestone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:cobblestone', description: 'sky_greg.kjs.jei.desc.107' },
            { input: 'minecraft:mossy_cobblestone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:mossy_cobblestone', description: 'sky_greg.kjs.jei.desc.108' },
            { input: 'minecraft:stone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:stone', description: 'sky_greg.kjs.jei.desc.109' },
            { input: 'minecraft:granite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:granite', description: 'sky_greg.kjs.jei.desc.110' },
            { input: 'minecraft:polished_granite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:polished_granite', description: 'sky_greg.kjs.jei.desc.111' },
            { input: 'minecraft:diorite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:diorite', description: 'sky_greg.kjs.jei.desc.112' },
            { input: 'minecraft:polished_diorite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:polished_diorite', description: 'sky_greg.kjs.jei.desc.113' },
            { input: 'minecraft:andesite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:andesite', description: 'sky_greg.kjs.jei.desc.114' },
            { input: 'minecraft:polished_andesite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:polished_andesite', description: 'sky_greg.kjs.jei.desc.115' },
            { input: 'gtceu:red_granite_cobblestone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'gtceu:red_granite_cobblestone', description: 'sky_greg.kjs.jei.desc.116' },
            { input: 'gtceu:red_granite', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'gtceu:red_granite', description: 'sky_greg.kjs.jei.desc.117' },
            { input: 'gtceu:marble_cobblestone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'gtceu:marble_cobblestone', description: 'sky_greg.kjs.jei.desc.118' },
            { input: 'gtceu:marble', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'gtceu:marble', description: 'sky_greg.kjs.jei.desc.119' },
            { input: 'minecraft:cobbled_deepslate', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:cobbled_deepslate', description: 'sky_greg.kjs.jei.desc.120' },
            { input: 'minecraft:deepslate', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:deepslate', description: 'sky_greg.kjs.jei.desc.121' },
            { input: 'minecraft:polished_deepslate', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:polished_deepslate', description: 'sky_greg.kjs.jei.desc.122' },
            { input: 'minecraft:tuff', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:tuff', description: 'sky_greg.kjs.jei.desc.123' },
            { input: 'minecraft:infested_cobblestone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:infested_cobblestone', description: 'sky_greg.kjs.jei.desc.124' },
            { input: 'minecraft:infested_stone', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:infested_stone', description: 'sky_greg.kjs.jei.desc.125' },
            { input: 'minecraft:infested_deepslate', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:infested_deepslate', description: 'sky_greg.kjs.jei.desc.126' },
            { input: 'minecraft:dirt', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:dirt', description: 'sky_greg.kjs.jei.desc.127' },
            { input: 'minecraft:coarse_dirt', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:coarse_dirt', description: 'sky_greg.kjs.jei.desc.128' },
            { input: 'minecraft:rooted_dirt', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:rooted_dirt', description: 'sky_greg.kjs.jei.desc.129' },
            { input: 'minecraft:mud', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:mud', description: 'sky_greg.kjs.jei.desc.130' },
            { input: 'minecraft:grass_block', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:grass_block', description: 'sky_greg.kjs.jei.desc.131' },
            { input: 'minecraft:podzol', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:podzol', description: 'sky_greg.kjs.jei.desc.132' },
            { input: 'minecraft:mycelium', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:mycelium', description: 'sky_greg.kjs.jei.desc.133' },
            { input: 'minecraft:moss_block', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:moss_block', description: 'sky_greg.kjs.jei.desc.134' },
            { input: 'minecraft:muddy_mangrove_roots', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:muddy_mangrove_roots', description: 'sky_greg.kjs.jei.desc.135' },

            { input: 'minecraft:terracotta', catalystBlock: 'infinite_blocks:infinite_block_generator', output: 'minecraft:terracotta', description: 'sky_greg.kjs.jei.desc.136' },
        ];

        // Add all dye terracotta variants
        Color.DYE.forEach(color => {
            CustomConversions.push({
                input: `minecraft:${color}_terracotta`,
                catalystBlock: 'infinite_blocks:infinite_block_generator',
                output: `minecraft:${color}_terracotta`,
                description: 'sky_greg.kjs.jei.desc.137'
            });
        });

        // // Add all glazed terracotta variants
        // Color.DYE.forEach(color => {
        //     CustomConversions.push({
        //         input: `minecraft:${color}_glazed_terracotta`,
        //         catalystBlock: 'infinite_blocks:infinite_block_generator',
        //         output: `minecraft:${color}_glazed_terracotta`,
        //         description: 'sky_greg.kjs.jei.desc.138'
        //     });
        // });

        // Add all dye concrete variants
        Color.DYE.forEach(color => {
            CustomConversions.push({
                input: `minecraft:${color}_concrete`,
                catalystBlock: 'infinite_blocks:infinite_block_generator',
                output: `minecraft:${color}_concrete`,
                description: 'sky_greg.kjs.jei.desc.139'
            });
        });

        function err(msg) { console.error('[IB] ' + msg); }

        function verifyRecipe(recipe) {
            return !!(recipe && recipe.data && recipe.data.input && recipe.data.catalystBlock && recipe.data.output);
        }

        function handleLookup(builder, recipe, focuses) {
            try {
                if (!verifyRecipe(recipe)) return;

                var inStack = Item.of(String(recipe.data.input));
                var catalystStack = Item.of(String(recipe.data.catalystBlock));
                var outStack = Item.of(String(recipe.data.output));

                builder.addSlot('INPUT', 7, 0)
                    .addItemStack(inStack)
                    .setSlotName('input');

                builder.addSlot('CATALYST', 7, 17)
                    .addItemStack(catalystStack)
                    .setSlotName('catalyst');

                builder.addSlot('OUTPUT', 7, 34)
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
                    .title(Text.translate('sky_greg.kjs.jei.title.100'))
                    .background(guiHelper.createBlankDrawable(100, 50))
                    .icon(guiHelper.createDrawableItemStack(Item.of('infinite_blocks:infinite_block_generator')))
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

            console.info('[IB] Registered ' + CustomConversions.length + ' custom conversion JEI entries (' + CATEGORY_ID + ').');
        });
    })();
