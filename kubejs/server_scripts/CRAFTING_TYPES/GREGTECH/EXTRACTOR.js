// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // fluid_xp
  event.recipes.gtceu.extractor('kubejs:mob_grinding_utils/fluid_xp/from/baby')
    .itemInputs('1x mob_grinding_utils:solid_xp_baby')
    .outputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 1000))
    .duration(50)
    .EUt(24)

  // fluid_xp
  event.recipes.gtceu.extractor('kubejs:mob_grinding_utils/fluid_xp/from/block')
    .itemInputs('1x mob_grinding_utils:solid_xp_block')
    .outputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 9000))
    .duration(450)
    .EUt(24)

  // raw_rubber_pulp
  event.recipes.gtceu.extractor('kubejs:gtceu/raw_rubber_pulp/from/slime_block')
    .itemInputs('1x minecraft:slime_block')
    .itemOutputs('18x gtceu:raw_rubber_dust')
    .duration(675)
    .EUt(4)

  // black_dye
  // event.recipes.gtceu.extractor('kubejs:minecraft/black_dye/from/dusts')
  //   .itemInputs('#forge:dusts/coal')
  //   .itemOutputs('2x minecraft:black_dye')
  //   .duration(40)
  //   .EUt(4)

  // red_dye
  // event.recipes.gtceu.extractor('kubejs:minecraft/red_dye/from/dusts')
  //   .itemInputs('#forge:dusts/redstone')
  //   .itemOutputs('2x minecraft:red_dye')
  //   .duration(40)
  //   .EUt(4)


  // fin //

})