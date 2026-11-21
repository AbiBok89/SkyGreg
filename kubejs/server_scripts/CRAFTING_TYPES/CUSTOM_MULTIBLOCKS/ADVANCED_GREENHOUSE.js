// priority: 0


ServerEvents.recipes(event => {

    // **** machine recipe **** //

    event.shaped('gtceu:advanced_greenhouse', [
        'CDC',
        'BAB',
        'DBD'
    ], {
        A: 'gtceu:plascrete',
        B: '#gtceu:circuits/ev',
        C: 'gtceu:hv_robot_arm',
        D: 'gtceu:gold_single_cable'
    }).id('gtceu:shaped/advanced_greenhouse')

    // **** advanced greenhouse recipes **** //

    function advGreenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.advanced_greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .inputFluids(Fluid.of('gtceu:ammonia', 250))
                .itemOutputs(output)
                .duration(600)
                .EUt(120)
        } else {
            event.recipes.gtceu.advanced_greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(900)
                .EUt(120)
        }
    }


    // *************** //
    // **** TREES **** //
    // *************** //

    // Rubber
    advGreenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    advGreenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    advGreenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '8x minecraft:apple', '4x minecraft:oak_sapling'], false)
    advGreenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '16x minecraft:apple', '4x minecraft:oak_sapling'], true)

    // Dark Oak
    advGreenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
    advGreenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

    // Spruce
    advGreenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
    advGreenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

    // Birch
    advGreenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
    advGreenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

    // Acacia
    advGreenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
    advGreenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

    // Jungle
    advGreenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
    advGreenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

    // Cherry
    advGreenhouse('cherry_sapling', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], false)
    advGreenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], true)

    // Azalea
    advGreenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
    advGreenhouse('azalea_sapling_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

    // Flowering Azalea
    advGreenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
    advGreenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

    // Mangrove
    advGreenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
    advGreenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

    // Dark Cherry
    advGreenhouse('dark_cherry_sapling', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '8x vinery:cherry', '4x vinery:dark_cherry_sapling'], false)
    advGreenhouse('dark_cherry_sapling_boosted', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '64x vinery:dark_cherry_log', '16x vinery:cherry', '4x vinery:dark_cherry_sapling'], true)

    // Apple Tree
    advGreenhouse('apple_tree_sapling', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '16x minecraft:apple', '4x vinery:apple_tree_sapling'], false)
    advGreenhouse('apple_tree_sapling_boosted', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '64x vinery:apple_log', '32x minecraft:apple', '4x vinery:apple_tree_sapling'], true)


    // *************** //
    // **** CROPS **** //
    // *************** //

    // Sugarcane
    advGreenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
    advGreenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

    // Kelp
    advGreenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
    advGreenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

    // Bamboo
    advGreenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
    advGreenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

    // Cactus
    advGreenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
    advGreenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

    // Wheat
    advGreenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
    advGreenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

    // Carrot
    advGreenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
    advGreenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

    // Potato
    advGreenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
    advGreenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

    // Beetroot
    advGreenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
    advGreenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

    // Melon
    advGreenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
    advGreenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

    // Pumpkin
    advGreenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
    advGreenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

    // Nether Wart
    advGreenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
    advGreenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

    // Red Mushroom
    advGreenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
    advGreenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

    // Brown Mushroom
    advGreenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
    advGreenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)

    // Crimson Fungus
    advGreenhouse('crimson_fungus', 'minecraft:crimson_fungus', 1000, '12x minecraft:crimson_fungus', false)
    advGreenhouse('crimson_fungus_boosted', 'minecraft:crimson_fungus', 1000, '24x minecraft:crimson_fungus', true)

    // Warped Fungus
    advGreenhouse('warped_fungus', 'minecraft:warped_fungus', 1000, '12x minecraft:warped_fungus', false)
    advGreenhouse('warped_fungus_boosted', 'minecraft:warped_fungus', 1000, '24x minecraft:warped_fungus', true)

    // Onion
    advGreenhouse('onion', 'farmersdelight:onion', 1000, '24x farmersdelight:onion', false)
    advGreenhouse('onion_boosted', 'farmersdelight:onion', 1000, '48x farmersdelight:onion', true)

    // Rice
    advGreenhouse('rice', 'farmersdelight:rice', 1000, '24x farmersdelight:rice_panicle', false)
    advGreenhouse('rice_boosted', 'farmersdelight:rice', 1000, '48x farmersdelight:rice_panicle', true)

    // Cabbage
    advGreenhouse('cabbage_seeds', 'farmersdelight:cabbage_seeds', 1000, '24x farmersdelight:cabbage', false)
    advGreenhouse('cabbage_seeds_boosted', 'farmersdelight:cabbage_seeds', 1000, '48x farmersdelight:cabbage', true)

    // Tomato
    advGreenhouse('tomato_seeds', 'farmersdelight:tomato_seeds', 1000, '24x farmersdelight:tomato', false)
    advGreenhouse('tomato_seeds_boosted', 'farmersdelight:tomato_seeds', 1000, '48x farmersdelight:tomato', true)

    // Red Grape
    advGreenhouse('red_grape_seeds', 'vinery:red_grape_seeds', 1000, '12x vinery:red_grape', false)
    advGreenhouse('red_grape_seeds_boosted', 'vinery:red_grape_seeds', 1000, '24x vinery:red_grape', true)

    // White Grape
    advGreenhouse('white_grape_seeds', 'vinery:white_grape_seeds', 1000, '12x vinery:white_grape', false)
    advGreenhouse('white_grape_seeds_boosted', 'vinery:white_grape_seeds', 1000, '24x vinery:white_grape', true)

    // Red Savanna Grapes
    advGreenhouse('savanna_grape_seeds_red', 'vinery:savanna_grape_seeds_red', 1000, '12x vinery:savanna_grapes_red', false)
    advGreenhouse('savanna_grape_seeds_red_boosted', 'vinery:savanna_grape_seeds_red', 1000, '24x vinery:savanna_grapes_red', true)

    // White Savanna Grapes
    advGreenhouse('savanna_grape_seeds_white', 'vinery:savanna_grape_seeds_white', 1000, '12x vinery:savanna_grapes_white', false)
    advGreenhouse('savanna_grape_seeds_white_boosted', 'vinery:savanna_grape_seeds_white', 1000, '24x vinery:savanna_grapes_white', true)

    // Red Taiga Grapes
    advGreenhouse('taiga_grape_seeds_red', 'vinery:taiga_grape_seeds_red', 1000, '12x vinery:taiga_grapes_red', false)
    advGreenhouse('taiga_grape_seeds_red_boosted', 'vinery:taiga_grape_seeds_red', 1000, '24x vinery:taiga_grapes_red', true)

    // White Taiga Grapes
    advGreenhouse('taiga_grape_seeds_white', 'vinery:taiga_grape_seeds_white', 1000, '12x vinery:taiga_grapes_white', false)
    advGreenhouse('taiga_grape_seeds_white_boosted', 'vinery:taiga_grape_seeds_white', 1000, '24x vinery:taiga_grapes_white', true)

    // Red Jungle Grapes
    advGreenhouse('jungle_grape_seeds_red', 'vinery:jungle_grape_seeds_red', 1000, '12x vinery:jungle_grapes_red', false)
    advGreenhouse('jungle_grape_seeds_red_boosted', 'vinery:jungle_grape_seeds_red', 1000, '24x vinery:jungle_grapes_red', true)

    // White Jungle Grapes
    advGreenhouse('jungle_grape_seeds_white', 'vinery:jungle_grape_seeds_white', 1000, '12x vinery:jungle_grapes_white', false)
    advGreenhouse('jungle_grape_seeds_white_boosted', 'vinery:jungle_grape_seeds_white', 1000, '24x vinery:jungle_grapes_white', true)

    // Strawberry
    advGreenhouse('strawberry_seeds', 'bakery:strawberry_seeds', 1000, '24x bakery:strawberry', false)
    advGreenhouse('strawberry_seeds_boosted', 'bakery:strawberry_seeds', 1000, '48x bakery:strawberry', true)

    // Oat
    advGreenhouse('oat_seeds', 'bakery:oat_seeds', 1000, '24x bakery:oat', false)
    advGreenhouse('oat_seeds_boosted', 'bakery:oat_seeds', 1000, '48x bakery:oat', true)

    // Hops
    advGreenhouse('hops_seeds', 'brewery:hops_seeds', 1000, '12x brewery:hops', false)
    advGreenhouse('hops_seeds_boosted', 'brewery:hops_seeds', 1000, '24x brewery:hops', true)

    // Hops
    advGreenhouse('barley_seeds', 'brewery:barley_seeds', 1000, '12x brewery:barley', false)
    advGreenhouse('barley_seeds_boosted', 'brewery:barley_seeds', 1000, '24x brewery:barley', true)

    // Corn
    advGreenhouse('corn_seeds', 'brewery:corn_seeds', 1000, '12x brewery:corn', false)
    advGreenhouse('corn_seeds_boosted', 'brewery:corn_seeds', 1000, '24x brewery:corn', true)


    // ***************** //
    // **** FLOWERS **** //
    // ***************** //

    // dandelion
    advGreenhouse('dandelion', 'minecraft:dandelion', 1000, '12x minecraft:dandelion', false)
    advGreenhouse('dandelion_boosted', 'minecraft:dandelion', 1000, '24x minecraft:dandelion', true)

    // poppy
    advGreenhouse('poppy', 'minecraft:poppy', 1000, '12x minecraft:poppy', false)
    advGreenhouse('poppy_boosted', 'minecraft:poppy', 1000, '24x minecraft:poppy', true)

    // blue_orchid
    advGreenhouse('blue_orchid', 'minecraft:blue_orchid', 1000, '12x minecraft:blue_orchid', false)
    advGreenhouse('blue_orchid_boosted', 'minecraft:blue_orchid', 1000, '24x minecraft:blue_orchid', true)

    // allium
    advGreenhouse('allium', 'minecraft:allium', 1000, '12x minecraft:allium', false)
    advGreenhouse('allium_boosted', 'minecraft:allium', 1000, '24x minecraft:allium', true)

    // azure_bluet
    advGreenhouse('azure_bluet', 'minecraft:azure_bluet', 1000, '12x minecraft:azure_bluet', false)
    advGreenhouse('azure_bluet_boosted', 'minecraft:azure_bluet', 1000, '24x minecraft:azure_bluet', true)

    // red_tulip
    advGreenhouse('red_tulip', 'minecraft:red_tulip', 1000, '12x minecraft:red_tulip', false)
    advGreenhouse('red_tulip_boosted', 'minecraft:red_tulip', 1000, '24x minecraft:red_tulip', true)

    // orange_tulip
    advGreenhouse('orange_tulip', 'minecraft:orange_tulip', 1000, '12x minecraft:orange_tulip', false)
    advGreenhouse('orange_tulip_boosted', 'minecraft:orange_tulip', 1000, '24x minecraft:orange_tulip', true)

    // white_tulip
    advGreenhouse('white_tulip', 'minecraft:white_tulip', 1000, '12x minecraft:white_tulip', false)
    advGreenhouse('white_tulip_boosted', 'minecraft:white_tulip', 1000, '24x minecraft:white_tulip', true)

    // pink_tulip
    advGreenhouse('pink_tulip', 'minecraft:pink_tulip', 1000, '12x minecraft:pink_tulip', false)
    advGreenhouse('pink_tulip_boosted', 'minecraft:pink_tulip', 1000, '24x minecraft:pink_tulip', true)

    // oxeye_daisy
    advGreenhouse('oxeye_daisy', 'minecraft:oxeye_daisy', 1000, '12x minecraft:oxeye_daisy', false)
    advGreenhouse('oxeye_daisy_boosted', 'minecraft:oxeye_daisy', 1000, '24x minecraft:oxeye_daisy', true)

    // cornflower
    advGreenhouse('cornflower', 'minecraft:cornflower', 1000, '12x minecraft:cornflower', false)
    advGreenhouse('cornflower_boosted', 'minecraft:cornflower', 1000, '24x minecraft:cornflower', true)

    // lily_of_the_valley
    advGreenhouse('lily_of_the_valley', 'minecraft:lily_of_the_valley', 1000, '12x minecraft:lily_of_the_valley', false)
    advGreenhouse('lily_of_the_valley_boosted', 'minecraft:lily_of_the_valley', 1000, '24x minecraft:lily_of_the_valley', true)

    // torchflower
    advGreenhouse('torchflower', 'minecraft:torchflower', 1000, '12x minecraft:torchflower', false)
    advGreenhouse('torchflower_boosted', 'minecraft:torchflower', 1000, '24x minecraft:torchflower', true)

    // wither_rose
    advGreenhouse('wither_rose', 'minecraft:wither_rose', 1000, '12x minecraft:wither_rose', false)
    advGreenhouse('wither_rose_boosted', 'minecraft:wither_rose', 1000, '24x minecraft:wither_rose', true)

    // pink_petals
    advGreenhouse('pink_petals', 'minecraft:pink_petals', 1000, '12x minecraft:pink_petals', false)
    advGreenhouse('pink_petals_boosted', 'minecraft:pink_petals', 1000, '24x minecraft:pink_petals', true)

    // sunflower
    advGreenhouse('sunflower', 'minecraft:sunflower', 1000, '12x minecraft:sunflower', false)
    advGreenhouse('sunflower_boosted', 'minecraft:sunflower', 1000, '24x minecraft:sunflower', true)

    // lilac
    advGreenhouse('lilac', 'minecraft:lilac', 1000, '12x minecraft:lilac', false)
    advGreenhouse('lilac_boosted', 'minecraft:lilac', 1000, '24x minecraft:lilac', true)

    // rose_bush
    advGreenhouse('rose_bush', 'minecraft:rose_bush', 1000, '12x minecraft:rose_bush', false)
    advGreenhouse('rose_bush_boosted', 'minecraft:rose_bush', 1000, '24x minecraft:rose_bush', true)

    // peony
    advGreenhouse('peony', 'minecraft:peony', 1000, '12x minecraft:peony', false)
    advGreenhouse('peony_boosted', 'minecraft:peony', 1000, '24x minecraft:peony', true)

    // pitcher_plant
    advGreenhouse('pitcher_plant', 'minecraft:pitcher_plant', 1000, '12x minecraft:pitcher_plant', false)
    advGreenhouse('pitcher_plant_boosted', 'minecraft:pitcher_plant', 1000, '24x minecraft:pitcher_plant', true)


    // fin //

})