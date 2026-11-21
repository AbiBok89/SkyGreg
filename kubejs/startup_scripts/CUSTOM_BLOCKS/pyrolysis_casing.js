// priority: 1000


// pyrolysis_casing
StartupEvents.registry('block', event => {
    event.create('pyrolysis_casing')
        .displayName('Pyrolysis Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})