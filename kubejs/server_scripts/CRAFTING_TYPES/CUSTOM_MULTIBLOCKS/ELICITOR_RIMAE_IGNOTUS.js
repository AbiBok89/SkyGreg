// priority: 0


ServerEvents.recipes(event => {

    // greg_g
    event.recipes.gtceu.elicitor_rimae_ignotus('kubejs:kubejs/greg_g')
        .itemInputs('1x kubejs:greg_g_base')
        .inputFluids(Fluid.of('gtceu:materia_ignota', 1920))
        .inputFluids(Fluid.of('gtceu:hyperconcentrated_helium', 640))
        .itemOutputs('1x kubejs:greg_g')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])


    // fin //

})