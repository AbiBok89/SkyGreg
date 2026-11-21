// priority: 1000


// solar_panel_casing
StartupEvents.registry('block', event => {
    event.create('solar_panel_casing')
        .displayName('Solar Panel Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})