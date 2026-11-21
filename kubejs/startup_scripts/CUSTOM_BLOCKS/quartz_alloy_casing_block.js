// priority: 1000


// quartz_alloy_machine_casing
StartupEvents.registry('block', event => {
    event.create('quartz_alloy_machine_casing', 'cardinal')
        .displayName('Quartz Alloy Machine Casing')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})