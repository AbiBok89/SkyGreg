// priority: 900


ServerEvents.recipes(event => {

    // laser_wrench
    event.remove({ output: 'laserio:laser_wrench' })
    event.shaped('laserio:laser_wrench', [
        'CDC',
        'EBF',
        ' A ',
    ], {
        A: '#forge:rods/tin',
        B: 'laserio:logic_chip',
        C: '#forge:bolts/red_alloy',
        D: '#forge:screws/tin',
        E: '#gtceu:tools/crafting_wrenches',
        F: '#forge:tools/screwdrivers',
    })
        .id('kubejs:crafting/laserio/laser_wrench')

    // laser_node
    event.remove({ output: 'laserio:laser_node' })
    event.shaped('laserio:laser_node', [
        'ABA',
        'BCB',
        'ABA',
    ], {
        A: '#forge:rods/tin',
        B: '#forge:glass_panes/colorless',
        C: 'laserio:laser_connector',
    })
        .id('kubejs:crafting/laserio/laser_node')

    // laser_connector
    event.remove({ output: 'laserio:laser_connector' })
    event.shaped('laserio:laser_connector', [
        ' A ',
        'BCB',
        'DDD',
    ], {
        A: '#forge:rods/red_alloy',
        B: '#forge:foils/red_alloy',
        C: 'laserio:logic_chip',
        D: '#forge:plates/tin',
    })
        .id('kubejs:crafting/laserio/laser_connector')

    // laser_connector_advanced
    event.remove({ output: 'laserio:laser_connector_advanced' })
    event.shaped('laserio:laser_connector_advanced', [
        'EAE',
        'BCB',
        'DDD',
    ], {
        A: 'gtceu:red_alloy_rod',
        B: 'gtceu:rubber_plate',
        C: 'laserio:logic_chip',
        D: 'gtceu:electrum_plate',
        E: 'minecraft:ender_pearl',
    })
        .id('kubejs:crafting/laserio/laser_connector_advanced')

    event.shaped('laserio:laser_connector_advanced', [
        'EAE',
        'BCB',
        'DDD',
    ], {
        A: '#forge:rods/red_alloy',
        B: '#forge:plates/rubber',
        C: 'laserio:laser_connector',
        D: '#forge:plates/electrum',
        E: '#forge:ender_pearls',
    })
        .id('kubejs:crafting/laserio/laser_connector_advanced/upgrade')


    // fin //

})