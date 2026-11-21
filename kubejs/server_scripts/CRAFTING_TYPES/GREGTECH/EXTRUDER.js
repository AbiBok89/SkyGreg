// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // pressure_valve
  event.remove({ output: 'advgenerators:pressure_valve' })
  event.recipes.gtceu.extruder('kubejs:extruder/advgenerators/pressure_valve')
    .itemInputs('4x advgenerators:iron_tubing')
    .notConsumable('1x gtceu:ingot_extruder_mold')
    .itemOutputs('1x advgenerators:pressure_valve')
    .duration(100)
    .EUt(IV)

  // sky_steel_block
  event.remove({ id: 'megacells:crafting/sky_steel_block' })
  event.recipes.gtceu.extruder('kubejs:extruder/megacells/sky_steel_block')
    .itemInputs('9x #forge:ingots/sky_steel')
    .notConsumable('1x gtceu:block_extruder_mold')
    .itemOutputs('1x megacells:sky_steel_block')
    .duration(10)
    .EUt(56)

  // rusty_iron_block
  event.remove({ id: 'dustrial_decor:rusty_iron_block' })
  event.recipes.gtceu.extruder('kubejs:extruder/dustrial_decor/rusty_iron_block')
    .itemInputs('9x dustrial_decor:rusty_iron_ingot')
    .notConsumable('1x gtceu:block_extruder_mold')
    .itemOutputs('1x dustrial_decor:rusty_iron_block')
    .duration(10)
    .EUt(56)


  // fin //

})