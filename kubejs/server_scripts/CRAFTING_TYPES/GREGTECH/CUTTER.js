// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920


  // DURATION SET IS LOWEST DURATION WITH LUBRICANT

  // sculk_vein
  event.recipes.gtceu.cutter('kubejs:minecraft/sculk_vein')
    .itemInputs('minecraft:sculk')
    .itemOutputs('9x minecraft:sculk_vein')
    .duration(200)
    .EUt(7)

  // dark_cherry_planks
  event.recipes.gtceu.cutter('kubejs:vinery/dark_cherry_planks')
    .itemInputs('#vinery:cherry_logs')
    .itemOutputs('6x vinery:dark_cherry_planks')
    .itemOutputs('2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  // oak_planks (apple_logs)
  event.recipes.gtceu.cutter('kubejs:minecraft/oak_planks/apple_logs')
    .itemInputs('#vinery:apple_logs')
    .itemOutputs('6x minecraft:oak_planks')
    .itemOutputs('2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  // simulation_chip
  event.recipes.gtceu.cutter('kubejs:kubejs/simulation_chip')
    .itemInputs('kubejs:simulation_wafer')
    .itemOutputs('6x kubejs:simulation_chip')
    .duration(900)
    .EUt(192)
    .cleanroom(CleanroomType.CLEANROOM)

  // cable_anchor
  event.recipes.gtceu.cutter('kubejs:ae2/cable_anchor')
    .itemInputs('#ae2:metal_ingots')
    .itemOutputs('8x ae2:cable_anchor')
    .duration(50)
    .EUt(7)

  // fin //

})