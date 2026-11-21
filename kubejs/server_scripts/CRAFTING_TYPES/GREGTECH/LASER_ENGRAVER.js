// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920


  // simulation_wafer
  event.recipes.gtceu.laser_engraver('kubejs:kubejs/simulation_wafer/phosphorus')
    .itemInputs('gtceu:phosphorus_wafer')
    .notConsumable('gtceu:magenta_glass_lens')
    .itemOutputs('1x kubejs:simulation_wafer')
    .duration(900)
    .EUt(480)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu.laser_engraver('kubejs:kubejs/simulation_wafer/naquadah')
    .itemInputs('gtceu:naquadah_wafer')
    .notConsumable('gtceu:magenta_glass_lens')
    .itemOutputs('4x kubejs:simulation_wafer')
    .duration(500)
    .EUt(1920)
    .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu.laser_engraver('kubejs:kubejs/simulation_wafer/neutronium')
    .itemInputs('gtceu:neutronium_wafer')
    .notConsumable('gtceu:magenta_glass_lens')
    .itemOutputs('8x kubejs:simulation_wafer')
    .duration(200)
    .EUt(7680)
    .cleanroom(CleanroomType.CLEANROOM)


  // fin //

})