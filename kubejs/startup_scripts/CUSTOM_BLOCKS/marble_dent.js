// priority: 1000


// marble_dent
StartupEvents.registry('block', event => {
    event.create('marble_dent')
        .displayName('Marble (Dent)')
        .soundType('stone')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})