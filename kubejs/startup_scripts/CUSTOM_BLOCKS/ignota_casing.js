// priority: 1000


// ignota_casing
StartupEvents.registry('block', event => {
    event.create('ignota_casing')
        .displayName('Ignota Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})