// priority: 1000


// railed_bricks
StartupEvents.registry('block', event => {
    event.create('railed_bricks', 'cardinal')
        .displayName('Railed Bricks')
        .soundType('stone')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})