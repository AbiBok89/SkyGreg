// priority: 1000


// dark_steel_casing
StartupEvents.registry('block', event => {
    event.create('dark_steel_casing')
        .displayName('Dark Steel Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})