// priority: 0


ServerEvents.recipes(event => {

    // **** machine recipe **** //

    event.shaped(
        'gtceu:greenhouse',
        ['AWA', 'CSC', 'WCW'],
        {
            A: 'gtceu:mv_robot_arm',
            W: 'gtceu:copper_single_cable',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:solid_machine_casing'
        }
    ).id('gtceu:shaped/greenhouse')

    // **** greenhouse recipes **** //

    function Greenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(1200)
                .EUt(120)
        } else {
            event.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(1200)
                .EUt(120)
        }
    }


    // *************** //
    // **** TREES **** //
    // *************** //

    // Rubber
    Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '8x minecraft:apple', '4x minecraft:oak_sapling'], false)
    Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '16x minecraft:apple', '4x minecraft:oak_sapling'], true)

    // Dark Oak
    Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
    Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

    // Spruce
    Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
    Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

    // Birch
    Greenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
    Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

    // Acacia
    Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
    Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

    // Jungle
    Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
    Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

    // Cherry
    Greenhouse('cherry_sapling', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], false)
    Greenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], true)

    // Azalea
    Greenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
    Greenhouse('azalea_sapling_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

    // Flowering Azalea
    Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
    Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

    // Mangrove
    Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
    Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

    // Dark Cherry
    Greenhouse('dark_cherry_sapling', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '8x vinery:cherry', '4x vinery:dark_cherry_sapling'], false)
    Greenhouse('dark_cherry_sapling_boosted', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '64x vinery:dark_cherry_log', '16x vinery:cherry', '4x vinery:dark_cherry_sapling'], true)

    // Apple Tree
    Greenhouse('apple_tree_sapling', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '16x minecraft:apple', '4x vinery:apple_tree_sapling'], false)
    Greenhouse('apple_tree_sapling_boosted', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '64x vinery:apple_log', '32x minecraft:apple', '4x vinery:apple_tree_sapling'], true)


    // *************** //
    // **** CROPS **** //
    // *************** //

    // Sugarcane
    Greenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
    Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

    // Kelp
    Greenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
    Greenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

    // Bamboo
    Greenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
    Greenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

    // Cactus
    Greenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
    Greenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

    // Wheat
    Greenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
    Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

    // Carrot
    Greenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
    Greenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

    // Potato
    Greenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
    Greenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

    // Beetroot
    Greenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
    Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

    // Melon
    Greenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
    Greenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

    // Pumpkin
    Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
    Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

    // Nether Wart
    Greenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
    Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

    // Red Mushroom
    Greenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
    Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

    // Brown Mushroom
    Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
    Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)

    // Crimson Fungus
    Greenhouse('crimson_fungus', 'minecraft:crimson_fungus', 1000, '12x minecraft:crimson_fungus', false)
    Greenhouse('crimson_fungus_boosted', 'minecraft:crimson_fungus', 1000, '24x minecraft:crimson_fungus', true)

    // Warped Fungus
    Greenhouse('warped_fungus', 'minecraft:warped_fungus', 1000, '12x minecraft:warped_fungus', false)
    Greenhouse('warped_fungus_boosted', 'minecraft:warped_fungus', 1000, '24x minecraft:warped_fungus', true)

    // Onion
    Greenhouse('onion', 'farmersdelight:onion', 1000, '24x farmersdelight:onion', false)
    Greenhouse('onion_boosted', 'farmersdelight:onion', 1000, '48x farmersdelight:onion', true)

    // Rice
    Greenhouse('rice', 'farmersdelight:rice', 1000, '24x farmersdelight:rice_panicle', false)
    Greenhouse('rice_boosted', 'farmersdelight:rice', 1000, '48x farmersdelight:rice_panicle', true)

    // Cabbage
    Greenhouse('cabbage_seeds', 'farmersdelight:cabbage_seeds', 1000, '24x farmersdelight:cabbage', false)
    Greenhouse('cabbage_seeds_boosted', 'farmersdelight:cabbage_seeds', 1000, '48x farmersdelight:cabbage', true)

    // Tomato
    Greenhouse('tomato_seeds', 'farmersdelight:tomato_seeds', 1000, '24x farmersdelight:tomato', false)
    Greenhouse('tomato_seeds_boosted', 'farmersdelight:tomato_seeds', 1000, '48x farmersdelight:tomato', true)

    // Red Grape
    Greenhouse('red_grape_seeds', 'vinery:red_grape_seeds', 1000, '12x vinery:red_grape', false)
    Greenhouse('red_grape_seeds_boosted', 'vinery:red_grape_seeds', 1000, '24x vinery:red_grape', true)

    // White Grape
    Greenhouse('white_grape_seeds', 'vinery:white_grape_seeds', 1000, '12x vinery:white_grape', false)
    Greenhouse('white_grape_seeds_boosted', 'vinery:white_grape_seeds', 1000, '24x vinery:white_grape', true)

    // Red Savanna Grapes
    Greenhouse('savanna_grape_seeds_red', 'vinery:savanna_grape_seeds_red', 1000, '12x vinery:savanna_grapes_red', false)
    Greenhouse('savanna_grape_seeds_red_boosted', 'vinery:savanna_grape_seeds_red', 1000, '24x vinery:savanna_grapes_red', true)

    // White Savanna Grapes
    Greenhouse('savanna_grape_seeds_white', 'vinery:savanna_grape_seeds_white', 1000, '12x vinery:savanna_grapes_white', false)
    Greenhouse('savanna_grape_seeds_white_boosted', 'vinery:savanna_grape_seeds_white', 1000, '24x vinery:savanna_grapes_white', true)

    // Red Taiga Grapes
    Greenhouse('taiga_grape_seeds_red', 'vinery:taiga_grape_seeds_red', 1000, '12x vinery:taiga_grapes_red', false)
    Greenhouse('taiga_grape_seeds_red_boosted', 'vinery:taiga_grape_seeds_red', 1000, '24x vinery:taiga_grapes_red', true)

    // White Taiga Grapes
    Greenhouse('taiga_grape_seeds_white', 'vinery:taiga_grape_seeds_white', 1000, '12x vinery:taiga_grapes_white', false)
    Greenhouse('taiga_grape_seeds_white_boosted', 'vinery:taiga_grape_seeds_white', 1000, '24x vinery:taiga_grapes_white', true)

    // Red Jungle Grapes
    Greenhouse('jungle_grape_seeds_red', 'vinery:jungle_grape_seeds_red', 1000, '12x vinery:jungle_grapes_red', false)
    Greenhouse('jungle_grape_seeds_red_boosted', 'vinery:jungle_grape_seeds_red', 1000, '24x vinery:jungle_grapes_red', true)

    // White Jungle Grapes
    Greenhouse('jungle_grape_seeds_white', 'vinery:jungle_grape_seeds_white', 1000, '12x vinery:jungle_grapes_white', false)
    Greenhouse('jungle_grape_seeds_white_boosted', 'vinery:jungle_grape_seeds_white', 1000, '24x vinery:jungle_grapes_white', true)

    // Strawberry
    Greenhouse('strawberry_seeds', 'bakery:strawberry_seeds', 1000, '24x bakery:strawberry', false)
    Greenhouse('strawberry_seeds_boosted', 'bakery:strawberry_seeds', 1000, '48x bakery:strawberry', true)

    // Oat
    Greenhouse('oat_seeds', 'bakery:oat_seeds', 1000, '24x bakery:oat', false)
    Greenhouse('oat_seeds_boosted', 'bakery:oat_seeds', 1000, '48x bakery:oat', true)

    // Hops
    Greenhouse('hops_seeds', 'brewery:hops_seeds', 1000, '12x brewery:hops', false)
    Greenhouse('hops_seeds_boosted', 'brewery:hops_seeds', 1000, '24x brewery:hops', true)

    // Hops
    Greenhouse('barley_seeds', 'brewery:barley_seeds', 1000, '12x brewery:barley', false)
    Greenhouse('barley_seeds_boosted', 'brewery:barley_seeds', 1000, '24x brewery:barley', true)

    // Corn
    Greenhouse('corn_seeds', 'brewery:corn_seeds', 1000, '12x brewery:corn', false)
    Greenhouse('corn_seeds_boosted', 'brewery:corn_seeds', 1000, '24x brewery:corn', true)


    // ***************** //
    // **** FLOWERS **** //
    // ***************** //

    // dandelion
    Greenhouse('dandelion', 'minecraft:dandelion', 1000, '12x minecraft:dandelion', false)
    Greenhouse('dandelion_boosted', 'minecraft:dandelion', 1000, '24x minecraft:dandelion', true)

    // poppy
    Greenhouse('poppy', 'minecraft:poppy', 1000, '12x minecraft:poppy', false)
    Greenhouse('poppy_boosted', 'minecraft:poppy', 1000, '24x minecraft:poppy', true)

    // blue_orchid
    Greenhouse('blue_orchid', 'minecraft:blue_orchid', 1000, '12x minecraft:blue_orchid', false)
    Greenhouse('blue_orchid_boosted', 'minecraft:blue_orchid', 1000, '24x minecraft:blue_orchid', true)

    // allium
    Greenhouse('allium', 'minecraft:allium', 1000, '12x minecraft:allium', false)
    Greenhouse('allium_boosted', 'minecraft:allium', 1000, '24x minecraft:allium', true)

    // azure_bluet
    Greenhouse('azure_bluet', 'minecraft:azure_bluet', 1000, '12x minecraft:azure_bluet', false)
    Greenhouse('azure_bluet_boosted', 'minecraft:azure_bluet', 1000, '24x minecraft:azure_bluet', true)

    // red_tulip
    Greenhouse('red_tulip', 'minecraft:red_tulip', 1000, '12x minecraft:red_tulip', false)
    Greenhouse('red_tulip_boosted', 'minecraft:red_tulip', 1000, '24x minecraft:red_tulip', true)

    // orange_tulip
    Greenhouse('orange_tulip', 'minecraft:orange_tulip', 1000, '12x minecraft:orange_tulip', false)
    Greenhouse('orange_tulip_boosted', 'minecraft:orange_tulip', 1000, '24x minecraft:orange_tulip', true)

    // white_tulip
    Greenhouse('white_tulip', 'minecraft:white_tulip', 1000, '12x minecraft:white_tulip', false)
    Greenhouse('white_tulip_boosted', 'minecraft:white_tulip', 1000, '24x minecraft:white_tulip', true)

    // pink_tulip
    Greenhouse('pink_tulip', 'minecraft:pink_tulip', 1000, '12x minecraft:pink_tulip', false)
    Greenhouse('pink_tulip_boosted', 'minecraft:pink_tulip', 1000, '24x minecraft:pink_tulip', true)

    // oxeye_daisy
    Greenhouse('oxeye_daisy', 'minecraft:oxeye_daisy', 1000, '12x minecraft:oxeye_daisy', false)
    Greenhouse('oxeye_daisy_boosted', 'minecraft:oxeye_daisy', 1000, '24x minecraft:oxeye_daisy', true)

    // cornflower
    Greenhouse('cornflower', 'minecraft:cornflower', 1000, '12x minecraft:cornflower', false)
    Greenhouse('cornflower_boosted', 'minecraft:cornflower', 1000, '24x minecraft:cornflower', true)

    // lily_of_the_valley
    Greenhouse('lily_of_the_valley', 'minecraft:lily_of_the_valley', 1000, '12x minecraft:lily_of_the_valley', false)
    Greenhouse('lily_of_the_valley_boosted', 'minecraft:lily_of_the_valley', 1000, '24x minecraft:lily_of_the_valley', true)

    // torchflower
    Greenhouse('torchflower', 'minecraft:torchflower', 1000, '12x minecraft:torchflower', false)
    Greenhouse('torchflower_boosted', 'minecraft:torchflower', 1000, '24x minecraft:torchflower', true)

    // wither_rose
    Greenhouse('wither_rose', 'minecraft:wither_rose', 1000, '12x minecraft:wither_rose', false)
    Greenhouse('wither_rose_boosted', 'minecraft:wither_rose', 1000, '24x minecraft:wither_rose', true)

    // pink_petals
    Greenhouse('pink_petals', 'minecraft:pink_petals', 1000, '12x minecraft:pink_petals', false)
    Greenhouse('pink_petals_boosted', 'minecraft:pink_petals', 1000, '24x minecraft:pink_petals', true)

    // sunflower
    Greenhouse('sunflower', 'minecraft:sunflower', 1000, '12x minecraft:sunflower', false)
    Greenhouse('sunflower_boosted', 'minecraft:sunflower', 1000, '24x minecraft:sunflower', true)

    // lilac
    Greenhouse('lilac', 'minecraft:lilac', 1000, '12x minecraft:lilac', false)
    Greenhouse('lilac_boosted', 'minecraft:lilac', 1000, '24x minecraft:lilac', true)

    // rose_bush
    Greenhouse('rose_bush', 'minecraft:rose_bush', 1000, '12x minecraft:rose_bush', false)
    Greenhouse('rose_bush_boosted', 'minecraft:rose_bush', 1000, '24x minecraft:rose_bush', true)

    // peony
    Greenhouse('peony', 'minecraft:peony', 1000, '12x minecraft:peony', false)
    Greenhouse('peony_boosted', 'minecraft:peony', 1000, '24x minecraft:peony', true)

    // pitcher_plant
    Greenhouse('pitcher_plant', 'minecraft:pitcher_plant', 1000, '12x minecraft:pitcher_plant', false)
    Greenhouse('pitcher_plant_boosted', 'minecraft:pitcher_plant', 1000, '24x minecraft:pitcher_plant', true)


    // fin //

})