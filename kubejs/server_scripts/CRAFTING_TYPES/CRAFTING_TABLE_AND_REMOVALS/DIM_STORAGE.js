// priority: 900


ServerEvents.recipes(event => {

    // dimensional_tank (nbt)
    event.shapeless('dimstorage:dimensional_tank', 'dimstorage:dimensional_tank')
        .id('kubejs:crafting/dimstorage/dimensional_tank/nbt')

    // dimensional_chest (nbt)
    event.shapeless('dimstorage:dimensional_chest', 'dimstorage:dimensional_chest')
        .id('kubejs:crafting/dimstorage/dimensional_chest/nbt')

    // dimensional_tablet
    event.remove({ output: 'dimstorage:dimensional_tablet' })
    event.shaped('dimstorage:dimensional_tablet', [
        'AEA',
        'ABA',
        'CDC',
    ], {
        A: '#forge:rods/quartz_alloy',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:rubber_plate',
        D: '#forge:ender_pearl_ingredients',
        E: 'gtceu:lv_emitter',
    })
        .id('kubejs:crafting/dimstorage/dimensional_tablet')


    // fin //

})