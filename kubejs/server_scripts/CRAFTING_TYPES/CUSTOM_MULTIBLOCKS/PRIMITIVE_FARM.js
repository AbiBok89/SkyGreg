// priority: 0


ServerEvents.recipes(event => {

    // **** machine recipe **** //

    event.shaped(
        'gtceu:primitive_farm',
        [
            'BCB',
            'CAC',
            'BCB'
        ], {
        A: '#botanypots:hopper_botany_pots',
        B: 'minecraft:stone_bricks',
        C: 'gtceu:sticky_resin',
    }
    ).id('kubejs:crafting/gtceu/primitive_farm')

    // **** farm recipes **** //

    function farm(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.primitive_farm(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x minecraft:bone_meal')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(2400)
        } else {
            event.recipes.gtceu.primitive_farm(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(2400)
        }
    }


    // *************** //
    // **** TREES **** //
    // *************** //

    // Rubber
    farm('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    farm('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    farm('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '8x minecraft:apple', '4x minecraft:oak_sapling'], false)
    farm('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '16x minecraft:apple', '4x minecraft:oak_sapling'], true)

    // Dark Oak
    farm('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
    farm('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

    // Spruce
    farm('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
    farm('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

    // Birch
    farm('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
    farm('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

    // Acacia
    farm('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
    farm('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

    // Jungle
    farm('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
    farm('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

    // Cherry
    farm('cherry_sapling', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], false)
    farm('cherry_sapling_boosted', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], true)

    // Azalea
    farm('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
    farm('azalea_sapling_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

    // Flowering Azalea
    farm('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
    farm('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

    // Mangrove
    farm('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
    farm('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)

    // Dark Cherry
    farm('dark_cherry_sapling', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '8x vinery:cherry', '4x vinery:dark_cherry_sapling'], false)
    farm('dark_cherry_sapling_boosted', 'vinery:dark_cherry_sapling', 1000, ['64x vinery:dark_cherry_log', '64x vinery:dark_cherry_log', '16x vinery:cherry', '4x vinery:dark_cherry_sapling'], true)

    // Apple Tree
    farm('apple_tree_sapling', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '16x minecraft:apple', '4x vinery:apple_tree_sapling'], false)
    farm('apple_tree_sapling_boosted', 'vinery:apple_tree_sapling', 1000, ['64x vinery:apple_log', '64x vinery:apple_log', '32x minecraft:apple', '4x vinery:apple_tree_sapling'], true)


    // *************** //
    // **** CROPS **** //
    // *************** //

    // Sugarcane
    farm('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
    farm('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

    // Kelp
    farm('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
    farm('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

    // Bamboo
    farm('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
    farm('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

    // Cactus
    farm('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
    farm('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

    // Wheat
    farm('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
    farm('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

    // Carrot
    farm('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
    farm('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

    // Potato
    farm('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
    farm('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

    // Beetroot
    farm('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
    farm('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

    // Melon
    farm('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
    farm('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

    // Pumpkin
    farm('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
    farm('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

    // Nether Wart
    farm('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
    farm('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

    // Red Mushroom
    farm('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
    farm('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

    // Brown Mushroom
    farm('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
    farm('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)

    // Crimson Fungus
    farm('crimson_fungus', 'minecraft:crimson_fungus', 1000, '12x minecraft:crimson_fungus', false)
    farm('crimson_fungus_boosted', 'minecraft:crimson_fungus', 1000, '24x minecraft:crimson_fungus', true)

    // Warped Fungus
    farm('warped_fungus', 'minecraft:warped_fungus', 1000, '12x minecraft:warped_fungus', false)
    farm('warped_fungus_boosted', 'minecraft:warped_fungus', 1000, '24x minecraft:warped_fungus', true)

    // Onion
    farm('onion', 'farmersdelight:onion', 1000, '24x farmersdelight:onion', false)
    farm('onion_boosted', 'farmersdelight:onion', 1000, '48x farmersdelight:onion', true)

    // Rice
    farm('rice', 'farmersdelight:rice', 1000, '24x farmersdelight:rice_panicle', false)
    farm('rice_boosted', 'farmersdelight:rice', 1000, '48x farmersdelight:rice_panicle', true)

    // Cabbage
    farm('cabbage_seeds', 'farmersdelight:cabbage_seeds', 1000, '24x farmersdelight:cabbage', false)
    farm('cabbage_seeds_boosted', 'farmersdelight:cabbage_seeds', 1000, '48x farmersdelight:cabbage', true)

    // Tomato
    farm('tomato_seeds', 'farmersdelight:tomato_seeds', 1000, '24x farmersdelight:tomato', false)
    farm('tomato_seeds_boosted', 'farmersdelight:tomato_seeds', 1000, '48x farmersdelight:tomato', true)

    // Red Grape
    farm('red_grape_seeds', 'vinery:red_grape_seeds', 1000, '12x vinery:red_grape', false)
    farm('red_grape_seeds_boosted', 'vinery:red_grape_seeds', 1000, '24x vinery:red_grape', true)

    // White Grape
    farm('white_grape_seeds', 'vinery:white_grape_seeds', 1000, '12x vinery:white_grape', false)
    farm('white_grape_seeds_boosted', 'vinery:white_grape_seeds', 1000, '24x vinery:white_grape', true)

    // Red Savanna Grapes
    farm('savanna_grape_seeds_red', 'vinery:savanna_grape_seeds_red', 1000, '12x vinery:savanna_grapes_red', false)
    farm('savanna_grape_seeds_red_boosted', 'vinery:savanna_grape_seeds_red', 1000, '24x vinery:savanna_grapes_red', true)

    // White Savanna Grapes
    farm('savanna_grape_seeds_white', 'vinery:savanna_grape_seeds_white', 1000, '12x vinery:savanna_grapes_white', false)
    farm('savanna_grape_seeds_white_boosted', 'vinery:savanna_grape_seeds_white', 1000, '24x vinery:savanna_grapes_white', true)

    // Red Taiga Grapes
    farm('taiga_grape_seeds_red', 'vinery:taiga_grape_seeds_red', 1000, '12x vinery:taiga_grapes_red', false)
    farm('taiga_grape_seeds_red_boosted', 'vinery:taiga_grape_seeds_red', 1000, '24x vinery:taiga_grapes_red', true)

    // White Taiga Grapes
    farm('taiga_grape_seeds_white', 'vinery:taiga_grape_seeds_white', 1000, '12x vinery:taiga_grapes_white', false)
    farm('taiga_grape_seeds_white_boosted', 'vinery:taiga_grape_seeds_white', 1000, '24x vinery:taiga_grapes_white', true)

    // Red Jungle Grapes
    farm('jungle_grape_seeds_red', 'vinery:jungle_grape_seeds_red', 1000, '12x vinery:jungle_grapes_red', false)
    farm('jungle_grape_seeds_red_boosted', 'vinery:jungle_grape_seeds_red', 1000, '24x vinery:jungle_grapes_red', true)

    // White Jungle Grapes
    farm('jungle_grape_seeds_white', 'vinery:jungle_grape_seeds_white', 1000, '12x vinery:jungle_grapes_white', false)
    farm('jungle_grape_seeds_white_boosted', 'vinery:jungle_grape_seeds_white', 1000, '24x vinery:jungle_grapes_white', true)

    // Strawberry
    farm('strawberry_seeds', 'bakery:strawberry_seeds', 1000, '24x bakery:strawberry', false)
    farm('strawberry_seeds_boosted', 'bakery:strawberry_seeds', 1000, '48x bakery:strawberry', true)

    // Oat
    farm('oat_seeds', 'bakery:oat_seeds', 1000, '24x bakery:oat', false)
    farm('oat_seeds_boosted', 'bakery:oat_seeds', 1000, '48x bakery:oat', true)

    // Hops
    farm('hops_seeds', 'brewery:hops_seeds', 1000, '12x brewery:hops', false)
    farm('hops_seeds_boosted', 'brewery:hops_seeds', 1000, '24x brewery:hops', true)

    // Hops
    farm('barley_seeds', 'brewery:barley_seeds', 1000, '12x brewery:barley', false)
    farm('barley_seeds_boosted', 'brewery:barley_seeds', 1000, '24x brewery:barley', true)

    // Corn
    farm('corn_seeds', 'brewery:corn_seeds', 1000, '12x brewery:corn', false)
    farm('corn_seeds_boosted', 'brewery:corn_seeds', 1000, '24x brewery:corn', true)


    // ***************** //
    // **** FLOWERS **** //
    // ***************** //

    // dandelion
    farm('dandelion', 'minecraft:dandelion', 1000, '12x minecraft:dandelion', false)
    farm('dandelion_boosted', 'minecraft:dandelion', 1000, '24x minecraft:dandelion', true)

    // poppy
    farm('poppy', 'minecraft:poppy', 1000, '12x minecraft:poppy', false)
    farm('poppy_boosted', 'minecraft:poppy', 1000, '24x minecraft:poppy', true)

    // blue_orchid
    farm('blue_orchid', 'minecraft:blue_orchid', 1000, '12x minecraft:blue_orchid', false)
    farm('blue_orchid_boosted', 'minecraft:blue_orchid', 1000, '24x minecraft:blue_orchid', true)

    // allium
    farm('allium', 'minecraft:allium', 1000, '12x minecraft:allium', false)
    farm('allium_boosted', 'minecraft:allium', 1000, '24x minecraft:allium', true)

    // azure_bluet
    farm('azure_bluet', 'minecraft:azure_bluet', 1000, '12x minecraft:azure_bluet', false)
    farm('azure_bluet_boosted', 'minecraft:azure_bluet', 1000, '24x minecraft:azure_bluet', true)

    // red_tulip
    farm('red_tulip', 'minecraft:red_tulip', 1000, '12x minecraft:red_tulip', false)
    farm('red_tulip_boosted', 'minecraft:red_tulip', 1000, '24x minecraft:red_tulip', true)

    // orange_tulip
    farm('orange_tulip', 'minecraft:orange_tulip', 1000, '12x minecraft:orange_tulip', false)
    farm('orange_tulip_boosted', 'minecraft:orange_tulip', 1000, '24x minecraft:orange_tulip', true)

    // white_tulip
    farm('white_tulip', 'minecraft:white_tulip', 1000, '12x minecraft:white_tulip', false)
    farm('white_tulip_boosted', 'minecraft:white_tulip', 1000, '24x minecraft:white_tulip', true)

    // pink_tulip
    farm('pink_tulip', 'minecraft:pink_tulip', 1000, '12x minecraft:pink_tulip', false)
    farm('pink_tulip_boosted', 'minecraft:pink_tulip', 1000, '24x minecraft:pink_tulip', true)

    // oxeye_daisy
    farm('oxeye_daisy', 'minecraft:oxeye_daisy', 1000, '12x minecraft:oxeye_daisy', false)
    farm('oxeye_daisy_boosted', 'minecraft:oxeye_daisy', 1000, '24x minecraft:oxeye_daisy', true)

    // cornflower
    farm('cornflower', 'minecraft:cornflower', 1000, '12x minecraft:cornflower', false)
    farm('cornflower_boosted', 'minecraft:cornflower', 1000, '24x minecraft:cornflower', true)

    // lily_of_the_valley
    farm('lily_of_the_valley', 'minecraft:lily_of_the_valley', 1000, '12x minecraft:lily_of_the_valley', false)
    farm('lily_of_the_valley_boosted', 'minecraft:lily_of_the_valley', 1000, '24x minecraft:lily_of_the_valley', true)

    // torchflower
    farm('torchflower', 'minecraft:torchflower', 1000, '12x minecraft:torchflower', false)
    farm('torchflower_boosted', 'minecraft:torchflower', 1000, '24x minecraft:torchflower', true)

    // wither_rose
    farm('wither_rose', 'minecraft:wither_rose', 1000, '12x minecraft:wither_rose', false)
    farm('wither_rose_boosted', 'minecraft:wither_rose', 1000, '24x minecraft:wither_rose', true)

    // pink_petals
    farm('pink_petals', 'minecraft:pink_petals', 1000, '12x minecraft:pink_petals', false)
    farm('pink_petals_boosted', 'minecraft:pink_petals', 1000, '24x minecraft:pink_petals', true)

    // sunflower
    farm('sunflower', 'minecraft:sunflower', 1000, '12x minecraft:sunflower', false)
    farm('sunflower_boosted', 'minecraft:sunflower', 1000, '24x minecraft:sunflower', true)

    // lilac
    farm('lilac', 'minecraft:lilac', 1000, '12x minecraft:lilac', false)
    farm('lilac_boosted', 'minecraft:lilac', 1000, '24x minecraft:lilac', true)

    // rose_bush
    farm('rose_bush', 'minecraft:rose_bush', 1000, '12x minecraft:rose_bush', false)
    farm('rose_bush_boosted', 'minecraft:rose_bush', 1000, '24x minecraft:rose_bush', true)

    // peony
    farm('peony', 'minecraft:peony', 1000, '12x minecraft:peony', false)
    farm('peony_boosted', 'minecraft:peony', 1000, '24x minecraft:peony', true)

    // pitcher_plant
    farm('pitcher_plant', 'minecraft:pitcher_plant', 1000, '12x minecraft:pitcher_plant', false)
    farm('pitcher_plant_boosted', 'minecraft:pitcher_plant', 1000, '24x minecraft:pitcher_plant', true)


    // fin //

})