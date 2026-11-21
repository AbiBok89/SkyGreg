// priority: 1000


// quartz_alloy_machine_hull
StartupEvents.registry('block', event => {
    event.create('quartz_alloy_machine_hull', 'cardinal')
        .displayName('Quartz Alloy Machine Hull')
        .soundType('metal')
        .hardness(5.0)
        .resistance(6.0)
        .requiresTool(true)
})