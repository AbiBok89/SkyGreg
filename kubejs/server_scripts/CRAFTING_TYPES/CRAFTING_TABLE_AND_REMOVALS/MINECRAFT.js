// priority: 900


ServerEvents.recipes(event => {

    // ${color}_carpet loop
    Color.DYE.forEach(color => {
        event.shaped(`2x minecraft:${color}_carpet`, [
            'B ',
            ' A',
        ], {
            A: `#forge:wools/${color}`,
            B: '#forge:tools/saws',
        })
            .id(`kubejs:crafting/minecraft/${color}_carpet/saw`)
    })

    // white_wool
    event.shaped('minecraft:white_wool', [
        'AAA',
        'AAA',
        'AAA',
    ], {
        A: 'minecraft:string',
    })
        .id('kubejs:crafting/minecraft/white_wool')

    // lime_wool
    event.shaped('minecraft:lime_wool', [
        'AAA',
        'AAA',
        'AAA',
    ], {
        A: 'ex_hammers:plant_fiber',
    })
        .id('kubejs:crafting/minecraft/lime_wool')

    // string
    event.shaped('2x minecraft:string', [
        'A ',
        'B ',
    ], {
        A: 'ex_hammers:plant_fiber',
        B: '#gtceu:tools/crafting_knives',
    })
        .id('kubejs:crafting/minecraft/string/knife')

    // brown_dye
    event.remove({ id: 'gtceu:shapeless/brown_dye_from_metal_mixture' })
    event.shaped('minecraft:brown_dye', [
        'A ',
        'B ',
    ], {
        A: '#forge:dusts/metal_mixture',
        B: '#forge:tools/mortars',
    })
        .id('kubejs:crafting/minecraft/brown_dye/metal_mixture_dust/mortar')

    // red_dye
    event.shaped('minecraft:red_dye', [
        'A ',
        'B ',
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:tools/mortars',
    })
        .id('kubejs:crafting/minecraft/red_dye/redstone/mortar')

    // black_dye
    const blackDyeDusts = ['coal', 'charcoal', 'carbon']

    blackDyeDusts.forEach(dusts => {
        event.shaped('minecraft:black_dye', [
            'A ',
            'B ',
        ], {
            A: `#forge:dusts/${dusts}`,
            B: '#forge:tools/mortars',
        })
            .id(`kubejs:crafting/minecraft/black_dye/${dusts}/mortar`)
    })

    // oak_planks (apple_logs)
    event.remove({ id: 'vinery:oak_planks' })
    event.remove({ id: 'vinery:oak_planks_from_wood' })
    event.shaped('2x minecraft:oak_planks', [
        '   ',
        ' A ',
        '   ',
    ], {
        A: '#vinery:apple_logs',
    })
        .id('kubejs:crafting/minecraft/oak_planks/apple_logs')

    event.shaped('4x minecraft:oak_planks', [
        'B ',
        'A ',
    ], {
        A: '#vinery:apple_logs',
        B: '#forge:tools/saws',
    })
        .id('kubejs:crafting/minecraft/oak_planks/apple_logs/saw')

    // clay_ball
    event.shaped('3x minecraft:clay_ball', [
        'A ',
        'B ',
    ], {
        A: '#forge:tools/hammers',
        B: 'minecraft:clay',
    })
        .id('kubejs:crafting/minecraft/clay_ball/hammer')

    // trident
    event.remove({ id: 'apotheosis:inert_trident' })
    event.remove({ id: 'apotheosis:enchanting/trident' })
    event.shaped('minecraft:trident', [
        ' BB',
        'CAB',
        'AD ',
    ], {
        A: '#forge:rods/long/invar',
        B: '#forge:rods/steel',
        C: '#forge:tools/files',
        D: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/minecraft/trident')

    // glass_pane
    event.remove({ id: 'gtceu:shaped/glass_pane' })
    event.shaped('2x minecraft:glass_pane', [
        '  ',
        'AB',
    ], {
        A: 'minecraft:glass',
        B: '#forge:tools/saws',
    })
        .id('kubejs:crafting/minecraft/glass_pane/saw')

    // writable_book
    event.shapeless('1x minecraft:writable_book',
        [
            '1x #forge:books',
            '1x #forge:dyes/black',
            '1x #forge:feathers',
        ])
        .id('kubejs:crafting/minecraft/writable_book/feather')

    event.shapeless('1x minecraft:writable_book',
        [
            '1x #forge:books',
            '1x #forge:dyes/black',
            '1x #forge:rods/wooden',
            '1x #forge:string',
        ])
        .id('kubejs:crafting/minecraft/writable_book/string')

    // lever
    event.shaped('1x minecraft:lever', [
        ' BC',
        'EFE',
        'DA ',
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:stone',
        C: '#gtceu:tools/crafting_saws',
        D: '#gtceu:tools/crafting_screwdrivers',
        E: '#forge:screws/iron',
        F: '#forge:springs/iron',
    })
        .id('kubejs:crafting/minecraft/lever')

    // fin //

})