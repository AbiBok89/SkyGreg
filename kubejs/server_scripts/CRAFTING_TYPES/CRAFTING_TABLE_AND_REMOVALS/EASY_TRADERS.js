// priority: 900


ServerEvents.recipes(event => {

    // barterer
    event.remove({ id: 'easy_piglins:barterer' })
    event.shaped('1x easy_piglins:barterer', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: 'minecraft:nether_brick_slab',
    })
        .id('kubejs:crafting/easy_piglins/barterer')

    // trader
    event.remove({ id: 'easy_villagers:trader' })
    event.shaped('1x easy_villagers:trader', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: '#forge:double_plates/iron',
    })
        .id('kubejs:crafting/easy_villagers/trader')

    // auto_trader
    event.remove({ id: 'easy_villagers:auto_trader' })
    event.shaped('1x easy_villagers:auto_trader', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: '#forge:double_plates/forged_netherite',
    })
        .id('kubejs:crafting/easy_villagers/auto_trader')

    // farmer
    event.remove({ id: 'easy_villagers:farmer' })
    event.shaped('1x easy_villagers:farmer', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: 'farmersdelight:rich_soil',
    })
        .id('kubejs:crafting/easy_villagers/farmer')

    // breeder
    event.remove({ id: 'easy_villagers:breeder' })
    event.shaped('1x easy_villagers:breeder', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: 'minecraft:red_bed',
    })
        .id('kubejs:crafting/easy_villagers/breeder')

    // converter
    event.remove({ id: 'easy_villagers:converter' })
    event.shaped('1x easy_villagers:converter', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: 'minecraft:zombie_spawn_egg',
    })
        .id('kubejs:crafting/easy_villagers/converter')

    // iron_farm
    event.remove({ id: 'easy_villagers:iron_farm' })

    // incubator
    event.remove({ id: 'easy_villagers:incubator' })
    event.shaped('1x easy_villagers:incubator', [
        'AAA',
        'ACA',
        'BDB',
    ], {
        A: '#forge:plates/glass',
        B: '#forge:double_plates/quartz_alloy',
        C: 'gtceu:lv_field_generator',
        D: 'minecraft:white_carpet',
    })
        .id('kubejs:crafting/easy_villagers/incubator')


    // fin //

})