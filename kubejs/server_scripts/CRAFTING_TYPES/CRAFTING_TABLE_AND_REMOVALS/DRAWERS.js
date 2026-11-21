// priority: 900


ServerEvents.recipes(event => {

    // fluid_1
    event.remove({ id: 'functionalstorage:fluid_1' })
    event.shaped('1x functionalstorage:fluid_1', [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#forge:double_plates/quartz_alloy',
        B: 'gtceu:steel_drum',
    })
        .id('kubejs:crafting/functionalstorage/fluid_1')

    // fluid_2
    event.remove({ id: 'functionalstorage:fluid_2' })
    event.shaped('1x functionalstorage:fluid_2', [
        'ABA',
        'AAA',
        'ABA',
    ], {
        A: '#forge:double_plates/quartz_alloy',
        B: 'gtceu:bronze_drum',
    })
        .id('kubejs:crafting/functionalstorage/fluid_2')

    // fluid_4
    event.remove({ id: 'functionalstorage:fluid_4' })
    event.shaped('1x functionalstorage:fluid_4', [
        'BAB',
        'AAA',
        'BAB',
    ], {
        A: '#forge:double_plates/quartz_alloy',
        B: 'gtceu:wood_drum',
    })
        .id('kubejs:crafting/functionalstorage/fluid_4')

    // puller_upgrade
    event.remove({ id: 'functionalstorage:puller_upgrade' })
    event.shaped('1x functionalstorage:puller_upgrade', [
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: '#forge:stone',
        B: 'minecraft:hopper',
        C: '#functionalstorage:drawer',
        D: 'minecraft:redstone',
    })
        .id('kubejs:crafting/functionalstorage/puller_upgrade')

    event.shapeless('functionalstorage:puller_upgrade', 'functionalstorage:pusher_upgrade')
        .id('kubejs:crafting/functionalstorage/puller_upgrade/swap')

    // pusher_upgrade
    event.remove({ id: 'functionalstorage:pusher_upgrade' })
    event.shaped('1x functionalstorage:pusher_upgrade', [
        'ADA',
        'ACA',
        'ABA',
    ], {
        A: '#forge:stone',
        B: 'minecraft:hopper',
        C: '#functionalstorage:drawer',
        D: 'minecraft:redstone',
    })
        .id('kubejs:crafting/functionalstorage/pusher_upgrade')

    event.shapeless('functionalstorage:pusher_upgrade', 'functionalstorage:puller_upgrade')
        .id('kubejs:crafting/functionalstorage/pusher_upgrade/swap')


    // ************************* //
    // **** DRAWER SWAPPING **** //
    // ************************* //

    // drawer swapping for storagedrawers <=> functionalstorage for matching drawer types
    const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'crimson', 'warped',]
    const drawerSizes = [1, 2, 4]

    const swapping = (input, output, id) => {
        event.shapeless(output, input).id(id)
    }

    woodTypes.forEach(type => {
        drawerSizes.forEach(size => {
            const input = `storagedrawers:${type}_full_drawers_${size}`
            const output = `functionalstorage:${type}_${size}`

            swapping(input, output, `kubejs:drawer_swap/${type}_full_drawers_${size}/to/${type}_${size}`)
            swapping(output, input, `kubejs:drawer_swap/${type}_${size}/to/${type}_full_drawers_${size}`)
        })
    })

    // swapping recipes for functionalstorage drawers to avoid conflicts with storagedrawers
    const typeToMaterial = {
        oak: 'minecraft:oak_planks',
        spruce: 'minecraft:spruce_planks',
        birch: 'minecraft:birch_planks',
        jungle: 'minecraft:jungle_planks',
        acacia: 'minecraft:acacia_planks',
        dark_oak: 'minecraft:dark_oak_planks',
        mangrove: 'minecraft:mangrove_planks',
        cherry: 'minecraft:cherry_planks',
        crimson: 'minecraft:crimson_planks',
        warped: 'minecraft:warped_planks',
        rubber: 'gtceu:rubber_planks',
        treated: 'gtceu:treated_wood_planks',
        framed: 'minecraft:iron_nugget'
    }

    const recipeChanges1 = (inputMat, output, id) => {
        event.shaped(output, [
            'A A',
            'ABA',
            'A A',
        ], {
            A: inputMat,
            B: '#forge:chests/wooden',
        })
            .id(id)
    }

    const recipeChanges2 = (inputMat, output, id) => {
        event.shaped(output, [
            'AAA',
            'BAB',
            'AAA',
        ], {
            A: inputMat,
            B: '#forge:chests/wooden',
        })
            .id(id)
    }

    const recipeChanges4 = (inputMat, output, id) => {
        event.shaped(output, [
            'ABA',
            'BAB',
            'ABA',
        ], {
            A: inputMat,
            B: '#forge:chests/wooden',
        })
            .id(id)
    }

    Object.entries(typeToMaterial).forEach(([type, material]) => {
        event.remove({ id: `functionalstorage:${type}_1` })
        event.remove({ id: `functionalstorage:${type}_2` })
        event.remove({ id: `functionalstorage:${type}_4` })
        event.remove({ id: `rubberdrawers:${type}_1` }) // slightly overkill but it works
        event.remove({ id: `rubberdrawers:${type}_2` }) // slightly overkill but it works
        event.remove({ id: `rubberdrawers:${type}_4` }) // slightly overkill but it works

        recipeChanges1(material, `functionalstorage:${type}_1`, `kubejs:crafting/functionalstorage/${type}_1`)
        recipeChanges2(material, `2x functionalstorage:${type}_2`, `kubejs:crafting/functionalstorage/${type}_2`)
        recipeChanges4(material, `4x functionalstorage:${type}_4`, `kubejs:crafting/functionalstorage/${type}_4`)
    })


    // fin //

})