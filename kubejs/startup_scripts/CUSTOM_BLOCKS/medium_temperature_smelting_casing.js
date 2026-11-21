// priority: 1000


// medium_temperature_smelting_casing
StartupEvents.registry('block', event => {
    event.create('medium_temperature_smelting_casing')
        .displayName('Medium Temperature Smelting Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})