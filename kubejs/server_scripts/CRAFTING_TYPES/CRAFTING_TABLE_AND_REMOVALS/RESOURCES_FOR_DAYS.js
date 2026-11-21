// priority: 900



ServerEvents.recipes(event => {

    // netherrack_gen_tier_1
    event.shaped('rfd:netherrack_gen_tier_1', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#minecraft:logs',
        C: 'minecraft:lava_bucket',
        D: 'gtceu:netherrack_dust',
        E: 'minecraft:glass',
    })

    // netherrack_gen_tier_4
    event.remove({ id: 'rfd:netherrack_gen_tier_4' })
    event.shaped('rfd:netherrack_gen_tier_4', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/gold',
        C: 'minecraft:lava_bucket',
        D: 'rfd:netherrack_gen_tier_3',
        E: 'minecraft:glass',
    })

    // netherrack_gen_tier_5
    event.remove({ id: 'rfd:netherrack_gen_tier_5' })
    event.shaped('rfd:netherrack_gen_tier_5', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/diamond',
        C: 'minecraft:lava_bucket',
        D: 'rfd:netherrack_gen_tier_4',
        E: 'minecraft:glass',
    })

    // end_gen_tier_1
    event.shaped('rfd:end_gen_tier_1', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#minecraft:logs',
        C: 'minecraft:lava_bucket',
        D: 'gtceu:endstone_dust',
        E: 'minecraft:glass',
    })

    // end_gen_tier_4
    event.remove({ id: 'rfd:end_gen_tier_4' })
    event.shaped('rfd:end_gen_tier_4', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/gold',
        C: 'minecraft:lava_bucket',
        D: 'rfd:end_gen_tier_3',
        E: 'minecraft:glass',
    })

    // end_gen_tier_5
    event.remove({ id: 'rfd:end_gen_tier_5' })
    event.shaped('rfd:end_gen_tier_5', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/diamond',
        C: 'minecraft:lava_bucket',
        D: 'rfd:end_gen_tier_4',
        E: 'minecraft:glass',
    })

    // dirt_gen_tier_4
    event.remove({ id: 'rfd:dirt_gen_tier_4' })
    event.shaped('rfd:dirt_gen_tier_4', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/gold',
        C: 'minecraft:water_bucket',
        D: 'rfd:dirt_gen_tier_3',
        E: 'minecraft:glass',
    })

    // dirt_gen_tier_5
    event.remove({ id: 'rfd:dirt_gen_tier_5' })
    event.shaped('rfd:dirt_gen_tier_5', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#forge:storage_blocks/diamond',
        C: 'minecraft:water_bucket',
        D: 'rfd:dirt_gen_tier_4',
        E: 'minecraft:glass',
    })


    // fin //

})