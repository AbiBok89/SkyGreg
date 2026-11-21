// priority: 900


ServerEvents.recipes(event => {

    // basic_wireless_block_charger
    event.remove({ output: 'wirelesschargers:basic_wireless_block_charger' })
    event.shaped('wirelesschargers:basic_wireless_block_charger', [
        'DED',
        'ACA',
        'ABA',
    ], {
        A: 'gtceu:steel_plate',
        B: '#gtceu:circuits/lv',
        C: 'ae2:fluix_pearl',
        D: 'gtceu:steel_rod',
        E: 'gtceu:cupronickel_spring',
    })

    // advanced_wireless_block_charger
    event.remove({ output: 'wirelesschargers:advanced_wireless_block_charger' })
    event.shaped('wirelesschargers:advanced_wireless_block_charger', [
        'DED',
        'ACA',
        'ABA',
    ], {
        A: 'gtceu:rubber_plate',
        B: '#gtceu:circuits/mv',
        C: 'wirelesschargers:basic_wireless_block_charger',
        D: 'minecraft:blaze_powder',
        E: 'gtceu:mv_emitter',
    })

    // basic_wireless_player_charger
    event.remove({ output: 'wirelesschargers:basic_wireless_player_charger' })
    event.shaped('wirelesschargers:basic_wireless_player_charger', [
        'DED',
        'ACA',
        'ABA',
    ], {
        A: 'gtceu:steel_plate',
        B: '#gtceu:circuits/lv',
        C: 'ae2:fluix_pearl',
        D: 'gtceu:steel_rod',
        E: 'gtceu:gold_spring',
    })

    // advanced_wireless_player_charger
    event.remove({ output: 'wirelesschargers:advanced_wireless_player_charger' })
    event.shaped('wirelesschargers:advanced_wireless_player_charger', [
        'DED',
        'ACA',
        'ABA',
    ], {
        A: 'gtceu:rubber_plate',
        B: '#gtceu:circuits/mv',
        C: 'wirelesschargers:basic_wireless_player_charger',
        D: 'minecraft:blaze_powder',
        E: 'gtceu:mv_emitter',
    })


    // fin //

})