// priority: 900


ServerEvents.recipes(event => {

    // fluid_tank (nbt)
    event.shapeless('enderio:fluid_tank', 'enderio:fluid_tank')
        .id('kubejs:crafting/enderio/fluid_tank/nbt')

    // pressurized_fluid_tank (nbt)
    event.shapeless('enderio:pressurized_fluid_tank', 'enderio:pressurized_fluid_tank')
        .id('kubejs:crafting/enderio/pressurized_fluid_tank/nbt')

    // basic_item_filter (nbt)
    event.shapeless('enderio:basic_item_filter', 'enderio:basic_item_filter')
        .id('kubejs:crafting/enderio/basic_item_filter/nbt')

    // advanced_item_filter (nbt)
    event.shapeless('enderio:advanced_item_filter', 'enderio:advanced_item_filter')
        .id('kubejs:crafting/enderio/advanced_item_filter/nbt')

    // basic_fluid_filter (nbt)
    event.shapeless('enderio:basic_fluid_filter', 'enderio:basic_fluid_filter')
        .id('kubejs:crafting/enderio/basic_fluid_filter/nbt')

    // yeta_wrench
    event.shaped('enderio:yeta_wrench', [
        ' A ',
        'CBA',
        'AD ',
    ], {
        A: 'gtceu:invar_rod',
        B: 'gtceu:iron_ring',
        C: '#gtceu:tools/crafting_wrenches',
        D: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/enderio/yeta_wrench')

    // painting_machine
    event.shaped('enderio:painting_machine', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:lv_electric_piston',
        B: 'gtceu:empty_spray_can',
        C: '#forge:dyes/white',
        D: 'kubejs:quartz_alloy_machine_hull',
        E: 'gtceu:lv_electric_motor',
        F: '#gtceu:circuits/lv',
    })
        .id('kubejs:crafting/enderio/painting_machine')

    // item_conduit
    event.shaped('3x enderio:item_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:plates/thorium',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/item_conduit')

    // fluid_conduit
    event.shaped('3x enderio:fluid_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:plates/wrought_iron',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/fluid_conduit')

    // pressurized_fluid_conduit
    event.shaped('3x enderio:pressurized_fluid_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:plates/blue_alloy',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/pressurized_fluid_conduit')

    // ender_fluid_conduit
    event.shaped('3x enderio:ender_fluid_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:plates/emerald',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/ender_fluid_conduit')

    // redstone_conduit
    event.shaped('3x enderio:redstone_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:plates/red_alloy',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/redstone_conduit')

    // me_conduit
    event.shaped('3x enderio:me_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: '#forge:gems/fluix',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/me_conduit')

    // dense_me_conduit
    event.shaped('3x enderio:dense_me_conduit', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'enderio:conduit_binder',
        B: 'ae2:fluix_block',
        C: '#forge:glass',
    })
        .id('kubejs:crafting/enderio/dense_me_conduit')

    // extraction_speed_upgrade_1
    event.shaped('1x enderio:extraction_speed_upgrade_1', [
        'CAC',
        'AAA',
        'BDB',
    ], {
        A: '#forge:foils/copper',
        B: '#forge:rods/copper',
        C: 'enderio:conduit_binder',
        D: 'gtceu:sticky_resin',
    })
        .id('kubejs:crafting/enderio/extraction_speed_upgrade_1')

    // extraction_speed_upgrade_2
    event.shaped('1x enderio:extraction_speed_upgrade_2', [
        'CAC',
        'AAA',
        'BDB',
    ], {
        A: '#forge:foils/annealed_copper',
        B: '#forge:rods/annealed_copper',
        C: 'enderio:conduit_binder',
        D: '#forge:plates/rubber',
    })
        .id('kubejs:crafting/enderio/extraction_speed_upgrade_2')


    // fin //

})