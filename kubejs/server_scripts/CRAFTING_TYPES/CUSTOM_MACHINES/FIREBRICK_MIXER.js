// priority: 0


ServerEvents.recipes(event => {

    // firebricks
    event.recipes.gtceu.firebrick_mixer('kubejs:gtceu/firebricks')
        .itemInputs('1x #forge:dusts/rough_concrete')
        .itemInputs('2x #forge:dusts/gypsum')
        .itemInputs('6x gtceu:firebrick')
        .itemOutputs('gtceu:firebricks')
        .duration(100)
        .EUt(8)

    // fin //

})