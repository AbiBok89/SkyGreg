// priority: 900


ServerEvents.recipes(event => {

    // flint_knife
    event.remove({ id: 'farmersdelight:flint_knife' })
    event.shaped('farmersdelight:flint_knife', [
        '  A',
        ' B ',
        '   ',
    ], {
        A: '#forge:gems/flint',
        B: 'minecraft:stick',
    })
        .id('kubejs:crafting/farmersdelight/flint_knife')

    // iron_knife
    event.remove({ id: 'farmersdelight:iron_knife' })
    event.shaped('farmersdelight:iron_knife', [
        '  A',
        ' B ',
        '   ',
    ], {
        A: '#forge:ingots/iron',
        B: 'minecraft:stick',
    })
        .id('kubejs:crafting/farmersdelight/iron_knife')

    // golden_knife
    event.remove({ id: 'farmersdelight:golden_knife' })
    event.shaped('farmersdelight:golden_knife', [
        '  A',
        ' B ',
        '   ',
    ], {
        A: '#forge:ingots/gold',
        B: 'minecraft:stick',
    })
        .id('kubejs:crafting/farmersdelight/golden_knife')

    // diamond_knife
    event.remove({ id: 'farmersdelight:diamond_knife' })
    event.shaped('farmersdelight:diamond_knife', [
        '  A',
        ' B ',
        '   ',
    ], {
        A: '#forge:gems/diamond',
        B: 'minecraft:stick',
    })
        .id('kubejs:crafting/farmersdelight/diamond_knife')


    // fin //

})