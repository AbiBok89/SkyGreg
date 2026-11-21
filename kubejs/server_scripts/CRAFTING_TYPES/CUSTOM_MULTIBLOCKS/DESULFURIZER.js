// priority: 0


ServerEvents.recipes(event => {

    // light_fuel
    event.recipes.gtceu.desulfurizer('kubejs:gtceu/light_fuel')
        .itemInputs('1x #forge:dusts/zeolite')
        .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel', 96000))
        .outputFluids(Fluid.of('gtceu:light_fuel', 96000))
        .itemOutputs('32x gtceu:sulfur_dust')
        .duration(128)
        .EUt(2048)

    // heavy_fuel
    event.recipes.gtceu.desulfurizer('kubejs:gtceu/heavy_fuel')
        .itemInputs('1x #forge:dusts/zeolite')
        .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel', 96000))
        .outputFluids(Fluid.of('gtceu:heavy_fuel', 96000))
        .itemOutputs('32x gtceu:sulfur_dust')
        .duration(128)
        .EUt(2048)

    // naphtha
    event.recipes.gtceu.desulfurizer('kubejs:gtceu/naphtha')
        .itemInputs('1x #forge:dusts/zeolite')
        .inputFluids(Fluid.of('gtceu:sulfuric_naphtha', 96000))
        .outputFluids(Fluid.of('gtceu:naphtha', 96000))
        .itemOutputs('32x gtceu:sulfur_dust')
        .duration(128)
        .EUt(2048)

    // gas
    event.recipes.gtceu.desulfurizer('kubejs:gtceu/gas')
        .itemInputs('1x #forge:dusts/zeolite')
        .inputFluids(Fluid.of('gtceu:sulfuric_gas', 96000))
        .outputFluids(Fluid.of('gtceu:refinery_gas', 96000))
        .itemOutputs('32x gtceu:sulfur_dust')
        .duration(128)
        .EUt(2048)


    // fin //

})