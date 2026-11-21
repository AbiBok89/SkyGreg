// priority: 900


ServerEvents.recipes(event => {

    // quartz_alloy_machine_casing
    event.shaped('kubejs:quartz_alloy_machine_casing', [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#forge:plates/quartz_alloy',
        B: '#gtceu:tools/crafting_wrenches',
    })
        .id('kubejs:crafting/kubejs/quartz_alloy_machine_casing')

    // quartz_alloy_machine_hull
    event.shaped('kubejs:quartz_alloy_machine_hull', [
        'ABA',
        'CDC',
        '   ',
    ], {
        A: '#forge:plates/potin',
        B: '#forge:plates/quartz_alloy',
        C: 'gtceu:nickel_single_cable',
        D: 'kubejs:quartz_alloy_machine_casing',
    })
        .id('kubejs:crafting/kubejs/quartz_alloy_machine_hull')

    // solid_aluminium_casing
    event.shaped('2x kubejs:solid_aluminium_casing', [
        'BDB',
        'BAB',
        'BCB',
    ], {
        A: '#forge:frames/aluminium',
        B: '#forge:plates/aluminium',
        C: '#forge:tools/hammers',
        D: '#gtceu:tools/crafting_wrenches',
    })
        .id('kubejs:crafting/kubejs/solid_aluminium_casing')

    // solar_panel_casing
    event.shaped('2x kubejs:solar_panel_casing', [
        'BCB',
        'EAE',
        'BDB',
    ], {
        A: '#forge:frames/steel',
        B: '#forge:plates/lead',
        E: '#forge:plates/silver',
        C: '#forge:tools/hammers',
        D: '#gtceu:tools/crafting_wrenches',
    })
        .id('kubejs:crafting/kubejs/solar_panel_casing')

    // ulv_credit
    event.shapeless('4x kubejs:ulv_credit',
        [
            '1x kubejs:lv_credit',
        ])
        .id('kubejs:crafting/kubejs/ulv_credit/down')

    // lv_credit
    event.shapeless('4x kubejs:lv_credit',
        [
            '1x kubejs:mv_credit',
        ])
        .id('kubejs:crafting/kubejs/lv_credit/down')

    event.shapeless('1x kubejs:lv_credit',
        [
            '4x kubejs:ulv_credit',
        ])
        .id('kubejs:crafting/kubejs/lv_credit/up')

    // mv_credit
    event.shapeless('4x kubejs:mv_credit',
        [
            '1x kubejs:hv_credit',
        ])
        .id('kubejs:crafting/kubejs/mv_credit/down')

    event.shapeless('1x kubejs:mv_credit',
        [
            '4x kubejs:lv_credit',
        ])
        .id('kubejs:crafting/kubejs/mv_credit/up')

    // hv_credit
    event.shapeless('4x kubejs:hv_credit',
        [
            '1x kubejs:ev_credit',
        ])
        .id('kubejs:crafting/kubejs/hv_credit/down')

    event.shapeless('1x kubejs:hv_credit',
        [
            '4x kubejs:mv_credit',
        ])
        .id('kubejs:crafting/kubejs/hv_credit/up')

    // ev_credit
    event.shapeless('4x kubejs:ev_credit',
        [
            '1x kubejs:iv_credit',
        ])
        .id('kubejs:crafting/kubejs/ev_credit/down')

    event.shapeless('1x kubejs:ev_credit',
        [
            '4x kubejs:hv_credit',
        ])
        .id('kubejs:crafting/kubejs/ev_credit/up')

    // iv_credit
    event.shapeless('4x kubejs:iv_credit',
        [
            '1x kubejs:luv_credit',
        ])
        .id('kubejs:crafting/kubejs/iv_credit/down')

    event.shapeless('1x kubejs:iv_credit',
        [
            '4x kubejs:ev_credit',
        ])
        .id('kubejs:crafting/kubejs/iv_credit/up')

    // luv_credit
    event.shapeless('4x kubejs:luv_credit',
        [
            '1x kubejs:zpm_credit',
        ])
        .id('kubejs:crafting/kubejs/luv_credit/down')

    event.shapeless('1x kubejs:luv_credit',
        [
            '4x kubejs:iv_credit',
        ])
        .id('kubejs:crafting/kubejs/luv_credit/up')

    // zpm_credit
    event.shapeless('4x kubejs:zpm_credit',
        [
            '1x kubejs:uv_credit',
        ])
        .id('kubejs:crafting/kubejs/zpm_credit/down')

    event.shapeless('1x kubejs:zpm_credit',
        [
            '4x kubejs:luv_credit',
        ])
        .id('kubejs:crafting/kubejs/zpm_credit/up')

    // uv_credit
    event.shapeless('4x kubejs:uv_credit',
        [
            '1x kubejs:uhv_credit',
        ])
        .id('kubejs:crafting/kubejs/uv_credit/down')

    event.shapeless('1x kubejs:uv_credit',
        [
            '4x kubejs:zpm_credit',
        ])
        .id('kubejs:crafting/kubejs/uv_credit/up')

    // uhv_credit
    event.shapeless('1x kubejs:uhv_credit',
        [
            '4x kubejs:uv_credit',
        ])
        .id('kubejs:crafting/kubejs/uhv_credit/up')

    // fin //

})