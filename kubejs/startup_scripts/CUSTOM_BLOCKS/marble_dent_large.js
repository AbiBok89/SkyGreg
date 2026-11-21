// priority: 1000


// marble_dent_large
StartupEvents.registry('block', event => {
    event.create('marble_dent_large')
        .displayName('Marble (Large Dent)')
        .soundType('stone')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})