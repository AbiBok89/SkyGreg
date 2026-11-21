// priority: 0


ServerEvents.recipes(event => {

    // charged_certus_quartz_crystal
    event.recipes.gtceu.certus_quartz_charger('kubejs:ae2/charged_certus_quartz_crystal/base')
        .itemInputs('4x #forge:gems/certus_quartz')
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(16)
        .EUt(60)
        .circuit(1)

    event.recipes.gtceu.certus_quartz_charger('kubejs:ae2/charged_certus_quartz_crystal/nitrogen')
        .itemInputs('4x #forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:nitrogen', 100))
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(8)
        .EUt(60)
        .circuit(2)


    // fin //

})