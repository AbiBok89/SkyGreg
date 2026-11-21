// priority: 900


ServerEvents.recipes(event => {

    // redstone_transmitter (nbt)
    event.shapeless('rftoolsutility:redstone_transmitter', 'rftoolsutility:redstone_transmitter')
        .id('kubejs:crafting/rftoolsutility/redstone_transmitter/nbt')

    // redstone_receiver (nbt)
    event.shapeless('rftoolsutility:redstone_receiver', 'rftoolsutility:redstone_receiver')
        .id('kubejs:crafting/rftoolsutility/redstone_receiver/nbt')

    // smart_wrench
    event.remove({ id: 'rftoolsbase:smartwrench' })
    event.shaped('rftoolsbase:smartwrench', [
        ' DA',
        ' BE',
        'C  ',
    ], {
        A: '#forge:rings/iron',
        B: '#forge:dyes/blue',
        C: '#forge:rods/iron',
        D: '#forge:tools/hammers',
        E: '#gtceu:tools/crafting_wrenches',
    })

    // machine_frame
    event.remove({ id: 'rftoolsbase:machine_frame' })
    event.shaped('rftoolsbase:machine_frame', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: '#forge:plates/steel',
        B: '#forge:foils/steel',
        C: '#forge:screws/steel',
        D: 'kubejs:quartz_alloy_machine_hull',
    })

    // machine_base
    event.remove({ id: 'rftoolsbase:machine_base' })
    event.shaped('2x rftoolsbase:machine_base', [
        '   ',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:foils/wrought_iron',
        C: '#forge:screws/wrought_iron',
        D: 'kubejs:quartz_alloy_machine_hull',
    })

    // charged_porter
    event.remove({ id: 'rftoolsutility:charged_porter' })
    event.shaped('rftoolsutility:charged_porter', [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:ender_pearls',
        B: 'waystones:warp_stone',
    })

    // syringe
    event.remove({ id: 'rftoolsutility:syringe' })
    event.shaped('rftoolsutility:syringe', [
        '  A',
        ' BD',
        'CE ',
    ], {
        A: '#forge:rods/iron',
        B: 'gtceu:glass_vial',
        C: 'gtceu:glass_tube',
        D: '#forge:tools/mallets',
        E: '#forge:rings/rubber',
    })


    // fin //

})