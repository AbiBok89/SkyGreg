// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // dust
  event.recipes.gtceu.forge_hammer('kubejs:ex_hammers/dust/from/sand')
    .itemInputs('#forge:sand')
    .itemOutputs('ex_hammers:dust')
    .duration(10)
    .EUt(16)

  // paper_dust
  event.recipes.gtceu.forge_hammer('kubejs:gtceu/paper_dust')
    .itemInputs('3x minecraft:sugar_cane')
    .itemOutputs('2x gtceu:paper_dust')
    .duration(20)
    .EUt(ULV)

  // slime_ball
  event.recipes.gtceu.forge_hammer('kubejs:slime_ball/from/slime_block')
    .itemInputs('1x minecraft:slime_block')
    .itemOutputs('9x minecraft:slime_ball')
    .duration(300)
    .EUt(2)


  // fin //

})