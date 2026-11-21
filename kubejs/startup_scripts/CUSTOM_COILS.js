// priority: 0


StartupEvents.registry('block', event => {

    // custom_a
    event.create('custom_a_coil_block', 'gtceu:coil')
        .temperature(12600)
        .level(16)
        .energyDiscount(8) // (1)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('neutronium'))
        .texture('kubejs:block/custom_coils/machine_coil_custom_a/machine_coil_custom_a')
        .soundType('metal')
        .displayName('Custom A Coil Block')
        .hardness(5)
        .requiresTool(true)
        // .material('metal')


    // event.create('infinity_coil_block', 'gttruesteam:coil')
    //     .coolingCapacity(100000)
    //     .level(5)
    //     .coolingRate(100)
    //     .activeCoolingReduction(0.5)
    //     .coilMaterial(() => GTMaterials.get('neutronium'))
    //     .texture('kubejs:block/custom_coils/machine_coil_custom_a/machine_coil_custom_a')
    //     .hardness(5)
    //     .requiresTool(true)
    //     .material('metal')



    // fin //

})