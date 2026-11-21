// priority: 0


ServerEvents.recipes(event => {

    let cuttingMachine = (output, input, id) =>

        event.recipes.gtceu.auto_cutting_board(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(100)
            .EUt(30)


    // *************** //
    // **** KNIFE **** //
    // *************** //

    // beef
    cuttingMachine(
        ['4x farmersdelight:minced_beef'],
        '1x minecraft:beef',
        'kubejs:minced_beef/from/beef')

    // brown_mushroom_colony
    cuttingMachine(
        ['10x minecraft:brown_mushroom'],
        '1x farmersdelight:brown_mushroom_colony',
        'kubejs:brown_mushroom/from/brown_mushroom_colony')

    // oxeye_daisy
    cuttingMachine(
        ['4x minecraft:light_gray_dye'],
        '1x minecraft:oxeye_daisy',
        'kubejs:light_gray_dye/from/oxeye_daisy')

    // azure_bluet
    cuttingMachine(
        ['4x minecraft:light_gray_dye'],
        '1x minecraft:azure_bluet',
        'kubejs:light_gray_dye/from/azure_bluet')

    // ham
    cuttingMachine(
        ['4x minecraft:porkchop', '1x minecraft:bone'],
        '1x farmersdelight:ham',
        'kubejs:porkchop/from/ham')

    // cake
    cuttingMachine(
        ['7x farmersdelight:cake_slice'],
        '1x minecraft:cake',
        'kubejs:cake_slice/from/cake')

    // cooked_mutton
    cuttingMachine(
        ['4x farmersdelight:cooked_mutton_chops'],
        '1x minecraft:cooked_mutton',
        'kubejs:cooked_mutton_chops/from/cooked_mutton')

    // allium
    cuttingMachine(
        ['4x minecraft:magenta_dye'],
        '1x minecraft:allium',
        'kubejs:magenta_dye/from/allium')

    // orange_tulip
    cuttingMachine(
        ['4x minecraft:orange_dye'],
        '1x minecraft:orange_tulip',
        'kubejs:orange_dye/from/orange_tulip')

    // melon
    cuttingMachine(
        ['9x minecraft:melon_slice'],
        '1x minecraft:melon',
        'kubejs:melon_slice/from/melon')

    // salmon
    cuttingMachine(
        ['4x farmersdelight:salmon_slice', '2x minecraft:bone_meal'],
        '1x minecraft:salmon',
        'kubejs:salmon_slice/from/salmon')

    // wild_potatoes
    cuttingMachine(
        ['2x minecraft:potato', '2x minecraft:purple_dye'],
        '1x farmersdelight:wild_potatoes',
        'kubejs:potato/from/wild_potatoes')

    // smoked_ham
    cuttingMachine(
        ['4x minecraft:cooked_porkchop', '1x minecraft:bone'],
        '1x farmersdelight:smoked_ham',
        'kubejs:cooked_porkchop/from/smoked_ham')

    // sweet_berry_cheesecake
    cuttingMachine(
        ['4x farmersdelight:sweet_berry_cheesecake_slice'],
        '1x farmersdelight:sweet_berry_cheesecake',
        'kubejs:sweet_berry_cheesecake_slice/from/sweet_berry_cheesecake')

    // chicken
    cuttingMachine(
        ['4x farmersdelight:chicken_cuts', '2x minecraft:bone_meal'],
        '1x minecraft:chicken',
        'kubejs:sweet_berry_cheesecake_slice/from/chicken')

    // ink_sac
    cuttingMachine(
        ['4x minecraft:black_dye'],
        '1x minecraft:ink_sac',
        'kubejs:black_dye/from/ink_sac')

    // cooked_cod
    cuttingMachine(
        ['4x farmersdelight:cooked_cod_slice', '2x minecraft:bone_meal'],
        '1x minecraft:cooked_cod',
        'kubejs:black_dye/from/cooked_cod')

    // dough
    cuttingMachine(
        ['2x farmersdelight:raw_pasta'],
        '1x #forge:dough',
        'kubejs:raw_pasta/from/dough')

    // lily_of_the_valley
    cuttingMachine(
        ['4x minecraft:white_dye'],
        '1x minecraft:lily_of_the_valley',
        'kubejs:white_dye/from/lily_of_the_valley')

    // rice_panicle
    cuttingMachine(
        ['2x farmersdelight:rice', '2x farmersdelight:straw'],
        '1x farmersdelight:rice_panicle',
        'kubejs:rice/from/rice_panicle')

    // kelp_roll
    cuttingMachine(
        ['6x farmersdelight:kelp_roll_slice'],
        '1x farmersdelight:kelp_roll',
        'kubejs:kelp_roll_slice/from/kelp_roll')

    // white_tulip
    cuttingMachine(
        ['4x minecraft:light_gray_dye'],
        '1x minecraft:white_tulip',
        'kubejs:light_gray_dye/from/white_tulip')

    // pumpkin
    cuttingMachine(
        ['4x farmersdelight:pumpkin_slice'],
        '1x minecraft:pumpkin',
        'kubejs:pumpkin_slice/from/pumpkin')

    // wild_beetroots
    cuttingMachine(
        ['2x minecraft:beetroot_seeds', '2x minecraft:red_dye'],
        '1x farmersdelight:wild_beetroots',
        'kubejs:beetroot_seeds/from/wild_beetroots')

    // wild_rice
    cuttingMachine(
        ['2x farmersdelight:rice', '2x farmersdelight:straw'],
        '1x farmersdelight:wild_rice',
        'kubejs:rice/from/wild_rice')

    // wild_onions
    cuttingMachine(
        ['2x farmersdelight:onion', '4x minecraft:magenta_dye', '2x minecraft:lime_dye'],
        '1x farmersdelight:wild_onions',
        'kubejs:onion/from/wild_onions')

    // mutton
    cuttingMachine(
        ['4x farmersdelight:mutton_chops'],
        '1x minecraft:mutton',
        'kubejs:mutton_chops/from/mutton')

    // red_mushroom_colony
    cuttingMachine(
        ['10x minecraft:red_mushroom'],
        '1x farmersdelight:red_mushroom_colony',
        'kubejs:red_mushroom/from/red_mushroom_colony')

    // chocolate_pie
    cuttingMachine(
        ['4x farmersdelight:chocolate_pie_slice'],
        '1x farmersdelight:chocolate_pie',
        'kubejs:chocolate_pie_slice/from/chocolate_pie')

    // poppy
    cuttingMachine(
        ['4x minecraft:red_dye'],
        '1x minecraft:poppy',
        'kubejs:red_dye/from/poppy')

    // cooked_salmon
    cuttingMachine(
        ['4x farmersdelight:cooked_salmon_slice', '2x minecraft:bone_meal'],
        '1x minecraft:cooked_salmon',
        'kubejs:cooked_salmon_slice/from/cooked_salmon')

    // wither_rose
    cuttingMachine(
        ['4x minecraft:black_dye'],
        '1x minecraft:wither_rose',
        'kubejs:black_dye/from/wither_rose')

    // porkchop
    cuttingMachine(
        ['4x farmersdelight:bacon'],
        '1x minecraft:porkchop',
        'kubejs:bacon/from/porkchop')

    // cabbage
    cuttingMachine(
        ['4x farmersdelight:cabbage_leaf'],
        '1x farmersdelight:cabbage',
        'kubejs:cabbage_leaf/from/cabbage')

    // blue_orchid
    cuttingMachine(
        ['4x minecraft:light_blue_dye'],
        '1x minecraft:blue_orchid',
        'kubejs:light_blue_dye/from/blue_orchid')

    // dandelion
    cuttingMachine(
        ['4x minecraft:yellow_dye'],
        '1x minecraft:dandelion',
        'kubejs:yellow_dye/from/dandelion')

    // apple_pie
    cuttingMachine(
        ['4x farmersdelight:apple_pie_slice'],
        '1x farmersdelight:apple_pie',
        'kubejs:apple_pie_slice/from/apple_pie')

    // pink_tulip
    cuttingMachine(
        ['4x minecraft:pink_dye'],
        '1x minecraft:pink_tulip',
        'kubejs:pink_dye/from/pink_tulip')

    // torchflower
    cuttingMachine(
        ['4x minecraft:orange_dye'],
        '1x minecraft:torchflower',
        'kubejs:orange_dye/from/torchflower')

    // wild_cabbages
    cuttingMachine(
        ['2x farmersdelight:cabbage_seeds', '4x minecraft:yellow_dye'],
        '1x farmersdelight:wild_cabbages',
        'kubejs:cabbage_seeds/from/wild_cabbages')

    // cornflower
    cuttingMachine(
        ['4x minecraft:blue_dye'],
        '1x minecraft:cornflower',
        'kubejs:blue_dye/from/cornflower')

    // cod
    cuttingMachine(
        ['4x farmersdelight:cod_slice', '2x minecraft:bone_meal'],
        '1x minecraft:cod',
        'kubejs:cod_slice/from/cod')

    // cooked_chicken
    cuttingMachine(
        ['4x farmersdelight:cooked_chicken_cuts', '2x minecraft:bone_meal'],
        '1x minecraft:cooked_chicken',
        'kubejs:cooked_chicken_cuts/from/cooked_chicken')

    // wild_carrots
    cuttingMachine(
        ['2x minecraft:carrot', '4x minecraft:light_gray_dye'],
        '1x farmersdelight:wild_carrots',
        'kubejs:carrot/from/wild_carrots')

    // wild_tomatoes
    cuttingMachine(
        ['2x farmersdelight:tomato_seeds', '2x farmersdelight:tomato', '2x minecraft:green_dye'],
        '1x farmersdelight:wild_tomatoes',
        'kubejs:tomato_seeds/from/wild_tomatoes')

    // red_tulip
    cuttingMachine(
        ['4x minecraft:red_dye'],
        '1x minecraft:red_tulip',
        'kubejs:red_dye/from/red_tulip')


    // ************* //
    // **** AXE **** //
    // ************* //

    // dark_oak_log
    cuttingMachine(
        ['1x minecraft:stripped_dark_oak_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:dark_oak_log',
        'kubejs:stripped_dark_oak_log/from/dark_oak_log')

    // dark_oak_wood
    cuttingMachine(
        ['1x minecraft:stripped_dark_oak_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:dark_oak_wood',
        'kubejs:stripped_dark_oak_wood/from/dark_oak_wood')

    // birch_log
    cuttingMachine(
        ['1x minecraft:stripped_birch_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:birch_log',
        'kubejs:stripped_birch_log/from/birch_log')

    // birch_wood
    cuttingMachine(
        ['1x minecraft:stripped_birch_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:birch_wood',
        'kubejs:stripped_birch_wood/from/birch_wood')

    // spruce_log
    cuttingMachine(
        ['1x minecraft:stripped_spruce_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:spruce_log',
        'kubejs:stripped_spruce_log/from/spruce_log')

    // spruce_wood
    cuttingMachine(
        ['1x minecraft:stripped_spruce_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:spruce_wood',
        'kubejs:stripped_spruce_wood/from/spruce_wood')

    // mangrove_log
    cuttingMachine(
        ['1x minecraft:stripped_mangrove_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:mangrove_log',
        'kubejs:stripped_mangrove_log/from/mangrove_log')

    // mangrove_wood
    cuttingMachine(
        ['1x minecraft:stripped_mangrove_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:mangrove_wood',
        'kubejs:stripped_mangrove_wood/from/mangrove_wood')

    // oak_log
    cuttingMachine(
        ['1x minecraft:stripped_oak_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:oak_log',
        'kubejs:stripped_oak_log/from/oak_log')

    // oak_wood
    cuttingMachine(
        ['1x minecraft:stripped_oak_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:oak_wood',
        'kubejs:stripped_oak_wood/from/oak_wood')

    // acacia_log
    cuttingMachine(
        ['1x minecraft:stripped_acacia_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:acacia_log',
        'kubejs:stripped_acacia_log/from/acacia_log')

    // acacia_wood
    cuttingMachine(
        ['1x minecraft:stripped_acacia_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:acacia_wood',
        'kubejs:stripped_acacia_wood/from/acacia_wood')

    // jungle_log
    cuttingMachine(
        ['1x minecraft:stripped_jungle_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:jungle_log',
        'kubejs:stripped_jungle_log/from/jungle_log')

    // jungle_wood
    cuttingMachine(
        ['1x minecraft:stripped_jungle_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:jungle_wood',
        'kubejs:stripped_jungle_wood/from/jungle_wood')

    // cherry_log
    cuttingMachine(
        ['1x minecraft:stripped_cherry_log', '2x farmersdelight:tree_bark'],
        '1x minecraft:cherry_log',
        'kubejs:stripped_cherry_log/from/cherry_log')

    // cherry_wood
    cuttingMachine(
        ['1x minecraft:stripped_cherry_wood', '2x farmersdelight:tree_bark'],
        '1x minecraft:cherry_wood',
        'kubejs:stripped_cherry_wood/from/cherry_wood')

    // dark_cherry_log
    cuttingMachine(
        ['1x vinery:stripped_dark_cherry_log', '2x farmersdelight:tree_bark'],
        '1x vinery:dark_cherry_log',
        'kubejs:stripped_dark_cherry_log/from/dark_cherry_log')

    // dark_cherry_wood
    cuttingMachine(
        ['1x vinery:stripped_dark_cherry_wood', '2x farmersdelight:tree_bark'],
        '1x vinery:dark_cherry_wood',
        'kubejs:stripped_dark_cherry_wood/from/dark_cherry_wood')

    // rubber_log
    cuttingMachine(
        ['1x gtceu:stripped_rubber_log', '2x farmersdelight:tree_bark'],
        '1x gtceu:rubber_log',
        'kubejs:stripped_rubber_log/from/rubber_log')

    // rubber_wood
    cuttingMachine(
        ['1x gtceu:stripped_rubber_wood', '2x farmersdelight:tree_bark'],
        '1x gtceu:rubber_wood',
        'kubejs:stripped_rubber_wood/from/rubber_wood')

    // crimson_stem
    cuttingMachine(
        ['1x minecraft:stripped_crimson_stem', '2x farmersdelight:tree_bark'],
        '1x minecraft:crimson_stem',
        'kubejs:stripped_crimson_stem/from/crimson_stem')

    // crimson_hyphae
    cuttingMachine(
        ['1x minecraft:stripped_crimson_hyphae', '2x farmersdelight:tree_bark'],
        '1x minecraft:crimson_hyphae',
        'kubejs:stripped_crimson_hyphae/from/crimson_hyphae')

    // warped_stem
    cuttingMachine(
        ['1x minecraft:stripped_warped_stem', '2x farmersdelight:tree_bark'],
        '1x minecraft:warped_stem',
        'kubejs:stripped_warped_stem/from/warped_stem')

    // warped_hyphae
    cuttingMachine(
        ['1x minecraft:stripped_warped_hyphae', '2x farmersdelight:tree_bark'],
        '1x minecraft:warped_hyphae',
        'kubejs:stripped_warped_hyphae/from/warped_hyphae')

    // bamboo_block
    cuttingMachine(
        ['1x minecraft:stripped_bamboo_block', '2x farmersdelight:straw'],
        '1x minecraft:bamboo_block',
        'kubejs:stripped_bamboo_block/from/bamboo_block')

    // oak_hanging_sign
    cuttingMachine(
        ['2x minecraft:oak_planks'],
        '1x minecraft:oak_hanging_sign',
        'kubejs:oak_planks/from/oak_hanging_sign')

    // oak_trapdoor
    cuttingMachine(
        ['2x minecraft:oak_planks'],
        '1x minecraft:oak_trapdoor',
        'kubejs:oak_planks/from/oak_trapdoor')

    // oak_sign
    cuttingMachine(
        ['2x minecraft:oak_planks'],
        '1x minecraft:oak_sign',
        'kubejs:oak_planks/from/oak_sign')

    // oak_door
    cuttingMachine(
        ['2x minecraft:oak_planks'],
        '1x minecraft:oak_door',
        'kubejs:oak_planks/from/oak_door')

    // dark_oak_hanging_sign
    cuttingMachine(
        ['2x minecraft:dark_oak_planks'],
        '1x minecraft:dark_oak_hanging_sign',
        'kubejs:dark_oak_planks/from/dark_oak_hanging_sign')

    // dark_oak_trapdoor
    cuttingMachine(
        ['2x minecraft:dark_oak_planks'],
        '1x minecraft:dark_oak_trapdoor',
        'kubejs:dark_oak_planks/from/dark_oak_trapdoor')

    // dark_oak_sign
    cuttingMachine(
        ['2x minecraft:dark_oak_planks'],
        '1x minecraft:dark_oak_sign',
        'kubejs:dark_oak_planks/from/dark_oak_sign')

    // dark_oak_door
    cuttingMachine(
        ['2x minecraft:dark_oak_planks'],
        '1x minecraft:dark_oak_door',
        'kubejs:dark_oak_planks/from/dark_oak_door')

    // spruce_hanging_sign
    cuttingMachine(
        ['2x minecraft:spruce_planks'],
        '1x minecraft:spruce_hanging_sign',
        'kubejs:spruce_planks/from/spruce_hanging_sign')

    // spruce_trapdoor
    cuttingMachine(
        ['2x minecraft:spruce_planks'],
        '1x minecraft:spruce_trapdoor',
        'kubejs:spruce_planks/from/spruce_trapdoor')

    // spruce_sign
    cuttingMachine(
        ['2x minecraft:spruce_planks'],
        '1x minecraft:spruce_sign',
        'kubejs:spruce_planks/from/spruce_sign')

    // spruce_door
    cuttingMachine(
        ['2x minecraft:spruce_planks'],
        '1x minecraft:spruce_door',
        'kubejs:spruce_planks/from/spruce_door')

    // mangrove_hanging_sign
    cuttingMachine(
        ['2x minecraft:mangrove_planks'],
        '1x minecraft:mangrove_hanging_sign',
        'kubejs:mangrove_planks/from/mangrove_hanging_sign')

    // mangrove_trapdoor
    cuttingMachine(
        ['2x minecraft:mangrove_planks'],
        '1x minecraft:mangrove_trapdoor',
        'kubejs:mangrove_planks/from/mangrove_trapdoor')

    // mangrove_sign
    cuttingMachine(
        ['2x minecraft:mangrove_planks'],
        '1x minecraft:mangrove_sign',
        'kubejs:mangrove_planks/from/mangrove_sign')

    // mangrove_door
    cuttingMachine(
        ['2x minecraft:mangrove_planks'],
        '1x minecraft:mangrove_door',
        'kubejs:mangrove_planks/from/mangrove_door')

    // acacia_hanging_sign
    cuttingMachine(
        ['2x minecraft:acacia_planks'],
        '1x minecraft:acacia_hanging_sign',
        'kubejs:acacia_planks/from/acacia_hanging_sign')

    // acacia_trapdoor
    cuttingMachine(
        ['2x minecraft:acacia_planks'],
        '1x minecraft:acacia_trapdoor',
        'kubejs:acacia_planks/from/acacia_trapdoor')

    // acacia_sign
    cuttingMachine(
        ['2x minecraft:acacia_planks'],
        '1x minecraft:acacia_sign',
        'kubejs:acacia_planks/from/acacia_sign')

    // acacia_door
    cuttingMachine(
        ['2x minecraft:acacia_planks'],
        '1x minecraft:acacia_door',
        'kubejs:acacia_planks/from/acacia_door')

    // warped_hanging_sign
    cuttingMachine(
        ['2x minecraft:warped_planks'],
        '1x minecraft:warped_hanging_sign',
        'kubejs:warped_planks/from/warped_hanging_sign')

    // warped_trapdoor
    cuttingMachine(
        ['2x minecraft:warped_planks'],
        '1x minecraft:warped_trapdoor',
        'kubejs:warped_planks/from/warped_trapdoor')

    // warped_sign
    cuttingMachine(
        ['2x minecraft:warped_planks'],
        '1x minecraft:warped_sign',
        'kubejs:warped_planks/from/warped_sign')

    // warped_door
    cuttingMachine(
        ['2x minecraft:warped_planks'],
        '1x minecraft:warped_door',
        'kubejs:warped_planks/from/warped_door')

    // birch_hanging_sign
    cuttingMachine(
        ['2x minecraft:birch_planks'],
        '1x minecraft:birch_hanging_sign',
        'kubejs:birch_planks/from/birch_hanging_sign')

    // birch_trapdoor
    cuttingMachine(
        ['2x minecraft:birch_planks'],
        '1x minecraft:birch_trapdoor',
        'kubejs:birch_planks/from/birch_trapdoor')

    // birch_sign
    cuttingMachine(
        ['2x minecraft:birch_planks'],
        '1x minecraft:birch_sign',
        'kubejs:birch_planks/from/birch_sign')

    // birch_door
    cuttingMachine(
        ['2x minecraft:birch_planks'],
        '1x minecraft:birch_door',
        'kubejs:birch_planks/from/birch_door')

    // jungle_hanging_sign
    cuttingMachine(
        ['2x minecraft:jungle_planks'],
        '1x minecraft:jungle_hanging_sign',
        'kubejs:jungle_planks/from/jungle_hanging_sign')

    // jungle_trapdoor
    cuttingMachine(
        ['2x minecraft:jungle_planks'],
        '1x minecraft:jungle_trapdoor',
        'kubejs:jungle_planks/from/jungle_trapdoor')

    // jungle_sign
    cuttingMachine(
        ['2x minecraft:jungle_planks'],
        '1x minecraft:jungle_sign',
        'kubejs:jungle_planks/from/jungle_sign')

    // jungle_door
    cuttingMachine(
        ['2x minecraft:jungle_planks'],
        '1x minecraft:jungle_door',
        'kubejs:jungle_planks/from/jungle_door')

    // cherry_hanging_sign
    cuttingMachine(
        ['2x minecraft:cherry_planks'],
        '1x minecraft:cherry_hanging_sign',
        'kubejs:cherry_planks/from/cherry_hanging_sign')

    // cherry_trapdoor
    cuttingMachine(
        ['2x minecraft:cherry_planks'],
        '1x minecraft:cherry_trapdoor',
        'kubejs:cherry_planks/from/cherry_trapdoor')

    // cherry_sign
    cuttingMachine(
        ['2x minecraft:cherry_planks'],
        '1x minecraft:cherry_sign',
        'kubejs:cherry_planks/from/cherry_sign')

    // cherry_door
    cuttingMachine(
        ['2x minecraft:cherry_planks'],
        '1x minecraft:cherry_door',
        'kubejs:cherry_planks/from/cherry_door')

    // bamboo_hanging_sign
    cuttingMachine(
        ['2x minecraft:bamboo_planks'],
        '1x minecraft:bamboo_hanging_sign',
        'kubejs:bamboo_planks/from/bamboo_hanging_sign')

    // bamboo_trapdoor
    cuttingMachine(
        ['2x minecraft:bamboo_planks'],
        '1x minecraft:bamboo_trapdoor',
        'kubejs:bamboo_planks/from/bamboo_trapdoor')

    // bamboo_sign
    cuttingMachine(
        ['2x minecraft:bamboo_planks'],
        '1x minecraft:bamboo_sign',
        'kubejs:bamboo_planks/from/bamboo_sign')

    // bamboo_door
    cuttingMachine(
        ['2x minecraft:bamboo_planks'],
        '1x minecraft:bamboo_door',
        'kubejs:bamboo_planks/from/bamboo_door')

    // crimson_hanging_sign
    cuttingMachine(
        ['2x minecraft:crimson_planks'],
        '1x minecraft:crimson_hanging_sign',
        'kubejs:crimson_planks/from/crimson_hanging_sign')

    // crimson_trapdoor
    cuttingMachine(
        ['2x minecraft:crimson_planks'],
        '1x minecraft:crimson_trapdoor',
        'kubejs:crimson_planks/from/crimson_trapdoor')

    // crimson_sign
    cuttingMachine(
        ['2x minecraft:crimson_planks'],
        '1x minecraft:crimson_sign',
        'kubejs:crimson_planks/from/crimson_sign')

    // crimson_door
    cuttingMachine(
        ['2x minecraft:crimson_planks'],
        '1x minecraft:crimson_door',
        'kubejs:crimson_planks/from/crimson_door')


    // ***************** //
    // **** PICKAXE **** //
    // ***************** //

    // nether_bricks
    cuttingMachine(
        ['4x minecraft:nether_brick'],
        '1x minecraft:nether_bricks',
        'kubejs:nether_brick/from/nether_bricks')

    // stone
    cuttingMachine(
        ['1x minecraft:cobblestone'],
        '1x minecraft:stone',
        'kubejs:cobblestone/from/stone')

    // quartz_block
    cuttingMachine(
        ['4x minecraft:quartz'],
        '1x minecraft:quartz_block',
        'kubejs:quartz/from/quartz_block')

    // bricks
    cuttingMachine(
        ['4x minecraft:brick'],
        '1x minecraft:bricks',
        'kubejs:brick/from/bricks')

    // deepslate
    cuttingMachine(
        ['1x minecraft:cobbled_deepslate'],
        '1x minecraft:deepslate',
        'kubejs:cobbled_deepslate/from/deepslate')

    // amethyst_block
    cuttingMachine(
        ['4x minecraft:amethyst_shard'],
        '1x minecraft:amethyst_block',
        'kubejs:amethyst_shard/from/amethyst_block')


    // **************** //
    // **** SHEARS **** //
    // **************** //

    // leather_boots
    cuttingMachine(
        ['2x minecraft:leather'],
        '1x minecraft:leather_boots',
        'kubejs:leather/from/leather_boots')

    // leather_chestplate
    cuttingMachine(
        ['2x minecraft:leather'],
        '1x minecraft:leather_chestplate',
        'kubejs:leather/from/leather_chestplate')

    // leather_helmet
    cuttingMachine(
        ['2x minecraft:leather'],
        '1x minecraft:leather_helmet',
        'kubejs:leather/from/leather_helmet')

    // leather_leggings
    cuttingMachine(
        ['2x minecraft:leather'],
        '1x minecraft:leather_leggings',
        'kubejs:leather/from/leather_leggings')

    // leather_horse_armor
    cuttingMachine(
        ['4x minecraft:leather'],
        '1x minecraft:leather_horse_armor',
        'kubejs:leather/from/leather_horse_armor')

    // saddle
    cuttingMachine(
        ['4x minecraft:leather', '2x gtceu:iron_ring'],
        '1x minecraft:saddle',
        'kubejs:leather/from/saddle')


    // **************** //
    // **** SHOVEL **** //
    // **************** //

    // gravel
    cuttingMachine(
        ['2x minecraft:flint'],
        '1x minecraft:gravel',
        'kubejs:flint/from/gravel')

    // clay
    cuttingMachine(
        ['4x minecraft:clay_ball'],
        '1x minecraft:clay',
        'kubejs:clay_ball/from/clay')


    // fin //

})