// priority: 1000


// solid_aluminium_casing
StartupEvents.registry('block', event => {
    event.create('solid_aluminium_casing')
        .displayName('Solid Aluminium Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})