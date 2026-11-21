// priority: 0


ServerEvents.recipes(event => {

    // dusts/ev
    event.recipes.gtceu.celestial_harvester('kubejs:dusts/ev')
        .itemInputs('kubejs:harvester_tier_1')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 2000))
        .itemOutputs('1x kubejs:harvester_tier_1')
        .chancedOutput('16x gtceu:uranium_dust', 5000, 0)
        .chancedOutput('16x gtceu:gallium_dust', 5000, 0)
        .chancedOutput('16x gtceu:tantalum_dust', 5000, 0)
        .chancedOutput('16x gtceu:boron_dust', 5000, 0)
        .chancedOutput('16x gtceu:arsenic_dust', 5000, 0)
        .duration(2400)
        .inputEU(250000)
        .circuit(1)

    // fluids/ev
    event.recipes.gtceu.celestial_harvester('kubejs:fluids/ev')
        .itemInputs('kubejs:harvester_tier_1')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 2000))
        .itemOutputs('1x kubejs:harvester_tier_1')
        .chancedFluidOutput(Fluid.of('gtceu:fluorine', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:methane', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:nitrogen', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:sulfuric_acid', 10000), 5000, 0)
        .duration(2400)
        .inputEU(250000)
        .circuit(2)

    // dusts/iv
    event.recipes.gtceu.celestial_harvester('kubejs:dusts/iv')
        .itemInputs('kubejs:harvester_tier_2')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 4000))
        .itemOutputs('1x kubejs:harvester_tier_2')
        .chancedOutput('16x gtceu:rarest_metal_mixture_dust', 5000, 0)
        .chancedOutput('16x gtceu:cadmium_dust', 5000, 0)
        .chancedOutput('16x gtceu:neodymium_dust', 5000, 0)
        .chancedOutput('16x gtceu:cerium_dust', 5000, 0)
        .chancedOutput('16x gtceu:yttrium_dust', 5000, 0)
        .chancedOutput('16x gtceu:lanthanum_dust', 5000, 0)
        .chancedOutput('16x gtceu:borax_dust', 5000, 0)
        .chancedOutput('16x gtceu:rutile_dust', 5000, 0)
        .duration(4800)
        .inputEU(1000000)
        .circuit(1)

    // fluids/iv
    event.recipes.gtceu.celestial_harvester('kubejs:fluids/iv')
        .itemInputs('kubejs:harvester_tier_2')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 4000))
        .itemOutputs('1x kubejs:harvester_tier_2')
        .chancedFluidOutput(Fluid.of('gtceu:mercury', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:chlorine', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:helium', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:hydrochloric_acid', 10000), 5000, 0)
        .duration(4800)
        .inputEU(1000000)
        .circuit(2)

    // dusts/luv
    event.recipes.gtceu.celestial_harvester('kubejs:dusts/luv')
        .itemInputs('kubejs:harvester_tier_3')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 8000))
        .itemOutputs('1x kubejs:harvester_tier_3')
        .chancedOutput('16x gtceu:platinum_dust', 5000, 0)
        .chancedOutput('16x gtceu:palladium_dust', 5000, 0)
        .chancedOutput('16x gtceu:ruthenium_dust', 5000, 0)
        .chancedOutput('16x gtceu:indium_dust', 5000, 0)
        .chancedOutput('16x gtceu:samarium_dust', 5000, 0)
        .chancedOutput('16x gtceu:niobium_dust', 5000, 0)
        .duration(9600)
        .inputEU(4000000)
        .circuit(1)

    // fluids/luv
    event.recipes.gtceu.celestial_harvester('kubejs:fluids/luv')
        .itemInputs('kubejs:harvester_tier_3')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 8000))
        .itemOutputs('1x kubejs:harvester_tier_3')
        .chancedFluidOutput(Fluid.of('gtceu:radon', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:argon', 10000), 5000, 0)
        .chancedFluidOutput(Fluid.of('gtceu:hydrofluoric_acid', 10000), 5000, 0)
        .duration(9600)
        .inputEU(4000000)
        .circuit(2)

    // dusts/zpm
    event.recipes.gtceu.celestial_harvester('kubejs:dusts/zpm')
        .itemInputs('kubejs:harvester_tier_4')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 16000))
        .itemOutputs('1x kubejs:harvester_tier_4')
        .chancedOutput('16x gtceu:naquadah_dust', 5000, 0)
        .chancedOutput('16x gtceu:plutonium_dust', 5000, 0)
        .chancedOutput('16x gtceu:nether_star_dust', 5000, 0)
        .chancedOutput('16x gtceu:rhodium_dust', 5000, 0)
        .chancedOutput('16x gtceu:osmium_dust', 5000, 0)
        .chancedOutput('16x gtceu:iridium_dust', 5000, 0)
        .duration(9600)
        .inputEU(16000000)
        .circuit(1)

    // fluids/zpm
    event.recipes.gtceu.celestial_harvester('kubejs:fluids/zpm')
        .itemInputs('kubejs:harvester_tier_4')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 16000))
        .itemOutputs('1x kubejs:harvester_tier_4')
        .chancedFluidOutput(Fluid.of('gtceu:nitric_acid', 10000), 5000, 0)
        .duration(9600)
        .inputEU(16000000)
        .circuit(2)


    // fin //

})