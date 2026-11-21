// priority: 900


ServerEvents.recipes(event => {

    // golden_egg
    event.shaped('mob_grinding_utils:golden_egg', [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:rings/gold',
        B: '#forge:storage_blocks/gold',
    })

    // rotten_egg
    event.shaped('mob_grinding_utils:rotten_egg', [
        ' A ',
        'ABA',
        ' A ',
    ], {
        A: '#forge:rings/steel',
        B: '#forge:storage_blocks/steel',
    })

    // solid_xp_mould_blank
    event.remove({ output: 'mob_grinding_utils:solid_xp_mould_blank' })
    event.shaped('mob_grinding_utils:solid_xp_mould_blank', [
        'AB ',
        'CC ',
        'CC ',
    ], {
        A: '#forge:tools/hammers',
        B: '#forge:tools/files',
        C: '#forge:plates/bronze',
    })

    // solid_xp_mould_baby
    event.remove({ output: 'mob_grinding_utils:solid_xp_mould_baby' })
    event.shaped('mob_grinding_utils:solid_xp_mould_baby', [
        ' A ',
        ' B ',
        '   ',
    ], {
        A: '#forge:tools/hammers',
        B: 'mob_grinding_utils:solid_xp_mould_blank',
    })

    // saw
    event.remove({ output: 'mob_grinding_utils:saw' })
    event.shaped('mob_grinding_utils:saw', [
        'CBC',
        'BDB',
        'FEF',
    ], {
        B: 'gtceu:diamond_buzz_saw_blade',
        C: 'mob_grinding_utils:spikes',
        D: '#forge:storage_blocks/red_alloy',
        E: 'gtceu:steel_gearbox',
        F: '#gtceu:circuits/lv',
    })

    // fan
    event.remove({ output: 'mob_grinding_utils:fan' })
    event.shaped('mob_grinding_utils:fan', [
        'CEC',
        'DBD',
        'CAC',
    ], {
        A: 'gtceu:steel_gearbox',
        B: '#forge:rotors/steel',
        C: '#forge:plates/thorium',
        D: '#forge:plates/rubber',
        E: '#gtceu:circuits/lv',
    })

    // spikes
    event.remove({ output: 'mob_grinding_utils:spikes' })
    event.shaped('mob_grinding_utils:spikes', [
        ' D ',
        'DCD',
        'CBC',
    ], {
        B: '#forge:storage_blocks/thorium',
        C: '#forge:plates/rubber',
        D: 'gtceu:iron_drill_head',
    })


    // fin //

})