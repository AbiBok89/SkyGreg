// priority: 900


ServerEvents.recipes(event => {

    // ender_tank (nbt)
    event.shapeless('endertanks:ender_tank', 'endertanks:ender_tank')
        .id('kubejs:crafting/endertanks/ender_tank/nbt')

    // ender_chest (nbt)
    event.shapeless('enderchests:ender_chest', 'enderchests:ender_chest')
        .id('kubejs:crafting/enderchests/ender_chest/nbt')

    // ender_bucket
    event.remove({ output: 'endertanks:ender_bucket' })
    event.shaped('endertanks:ender_bucket', [
        'ABA',
        'BCB',
        'ADA',
    ], {
        A: '#forge:rings/rubber',
        B: '#forge:plates/steel',
        C: '#forge:ender_pearls',
        D: '#minecraft:wool',
    })
        .id('kubejs:crafting/endertanks/ender_bucket')

    // ender_bag
    event.remove({ output: 'enderchests:ender_bag' })
    event.shaped('enderchests:ender_bag', [
        'ABA',
        'ECE',
        'ADA',
    ], {
        A: '#forge:plates/rubber',
        B: '#forge:rings/steel',
        C: 'enderchests:ender_pouch',
        D: '#minecraft:wool',
        E: '#forge:string',
    })
        .id('kubejs:crafting/enderchests/ender_bag')


    // fin //

})