// priority: 1000


// cryo_stable_casing
StartupEvents.registry('block', event => {
    event.create('cryo_stable_casing')
        .displayName('Cryo Stable Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})