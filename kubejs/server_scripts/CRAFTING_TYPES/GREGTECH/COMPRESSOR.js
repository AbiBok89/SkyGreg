// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // solid_xp_block
  event.remove({ output: 'mob_grinding_utils:solid_xp_block' })
  event.recipes.gtceu.compressor('kubejs:mob_grinding_utils/solid_xp_block')
    .itemInputs('9x mob_grinding_utils:solid_xp_baby')
    .itemOutputs('1x mob_grinding_utils:solid_xp_block')
    .duration(300)
    .EUt(2)

  // sky_steel_block
  event.recipes.gtceu.compressor('kubejs:megacells/sky_steel_block')
    .itemInputs('9x #forge:ingots/sky_steel')
    .itemOutputs('1x megacells:sky_steel_block')
    .duration(300)
    .EUt(2)

  // rusty_iron_block
  event.recipes.gtceu.compressor('kubejs:dustrial_decor/rusty_iron_block')
    .itemInputs('9x dustrial_decor:rusty_iron_ingot')
    .itemOutputs('1x dustrial_decor:rusty_iron_block')
    .duration(300)
    .EUt(2)

  // rusty_iron_ingot
  event.recipes.gtceu.compressor('kubejs:dustrial_decor/rusty_iron_ingot')
    .itemInputs('9x dustrial_decor:rusty_iron_nugget')
    .itemOutputs('1x dustrial_decor:rusty_iron_ingot')
    .duration(300)
    .EUt(2)

  // blank_plate
  event.remove({ id: 'darkutils:stonecutting/dark_stones_to_blank_plate' })
  event.recipes.gtceu.compressor('kubejs:darkutils/blank_plate')
    .itemInputs('2x #forge:dusts/deepslate')
    .itemOutputs('1x darkutils:blank_plate')
    .duration(200)
    .EUt(2)


  // fin //

})