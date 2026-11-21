// priority: 0


// Extends/overrides food-given effects by adding the same effect again with a longer duration.
// Also stores the same data into `global` so the client tooltip script can reuse it.

ItemEvents.modification(event => {
    // Helper: seconds -> ticks (20 ticks = 1 second)
    const s = (seconds) => seconds * 20;

    // Effects
    const COMFORT = 'farmersdelight:comfort';
    const NOURISHMENT = 'farmersdelight:nourishment';

    // Tweaks
    const tweaks = {
        'farmersdelight:bacon_and_eggs': [{ effect: NOURISHMENT, duration: 10 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:pasta_with_meatballs': [{ effect: NOURISHMENT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:pasta_with_mutton_chop': [{ effect: NOURISHMENT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:mushroom_rice': [{ effect: NOURISHMENT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:roasted_mutton_chops': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:vegetable_noodles': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:steak_and_potatoes': [{ effect: NOURISHMENT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:ratatouille': [{ effect: NOURISHMENT, duration: 10 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:squid_ink_pasta': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:grilled_salmon': [{ effect: NOURISHMENT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:roast_chicken': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:stuffed_pumpkin': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:honey_glazed_ham': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:shepherds_pie': [{ effect: NOURISHMENT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'minecraft:mushroom_stew': [{ effect: COMFORT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'minecraft:beetroot_soup': [{ effect: COMFORT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'minecraft:rabbit_stew': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:cooked_rice': [{ effect: COMFORT, duration: 5 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:bone_broth': [{ effect: COMFORT, duration: 10 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:beef_stew': [{ effect: COMFORT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:chicken_soup': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:vegetable_soup': [{ effect: COMFORT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:fish_stew': [{ effect: COMFORT, duration: 30 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:fried_rice': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:pumpkin_soup': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:baked_cod_stew': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
        'farmersdelight:noodle_soup': [{ effect: COMFORT, duration: 50 * 60, amplifier: 0, chance: 1.0 }],
    };

    // Save for client tooltip script to read
    global.mb_foodEffectDurationTweaks = tweaks;

    // Apply the longer duration effect(s)
    Object.entries(tweaks).forEach(([itemId, effects]) => {
        event.modify(itemId, item => {
            item.foodProperties = food => {
                effects.forEach(e => {
                    food.effect(e.effect, s(e.duration), e.amplifier ?? 0, e.chance ?? 1.0);
                });
            };
        });
    });
});


// fin //