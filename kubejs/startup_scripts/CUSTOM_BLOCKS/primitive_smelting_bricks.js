// priority: 1000


// primitive_smelting_bricks
StartupEvents.registry('block', event => {
    event.create('primitive_smelting_bricks')
        .displayName('Primitive Smelting Bricks')
        .soundType('stone')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})