// priority: 1000


// fused_quartz_cryoglass
StartupEvents.registry('block', event => {
    event.create('fused_quartz_cryoglass')
        .displayName('Fused Quartz Cryoglass')
        .soundType('glass')
        .hardness(3.0)
        .resistance(4.0)
        .requiresTool(true)

        // make it render like stained-glass style translucency
        .renderType('translucent')   // <- key line

        // these help it behave like a non-opaque block
        .opaque(false)               // lets light through
        .transparent(true)           // tells MC it’s transparent
        .notSolid()                  // helps with “this isn’t a solid cube” rendering assumptions

        // optional but often helps prevent “treat as full opaque cube” optimizations
        .fullBlock(false)            // stops some full-block face/terrain optimizations
})