// priority: 0


ServerEvents.recipes(event => {

    // materia_ignota
    event.recipes.gtceu.fusion_reactor('kubejs:materia_ignota')
        .inputFluids(Fluid.of('gtceu:europium', 128))
        .inputFluids(Fluid.of('gtceu:neutronium', 64))
        .outputFluids(Fluid.of('gtceu:materia_ignota', 96))
        .duration(200)
        .EUt(98304)
        .fusionStartEU(600000000)

    // hyperconcentrated_helium
    event.recipes.gtceu.fusion_reactor('kubejs:hyperconcentrated_helium')
        .inputFluids(Fluid.of('gtceu:liquid_helium', 64))
        .inputFluids(Fluid.of('gtceu:helium_plasma', 64))
        .outputFluids(Fluid.of('gtceu:hyperconcentrated_helium', 32))
        .duration(200)
        .EUt(98304)
        .fusionStartEU(600000000)


    // fin //

})