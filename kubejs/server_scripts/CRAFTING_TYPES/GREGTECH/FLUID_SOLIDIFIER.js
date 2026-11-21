// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // slime_ball
  event.recipes.gtceu.fluid_solidifier('kubejs:minecraft/slime_ball')
    .notConsumable('gtceu:ball_casting_mold')
    .inputFluids(Fluid.of('gtceu:glue', 144))
    .itemOutputs('1x minecraft:slime_ball')
    .duration(20)
    .EUt(LV)

  // empty_soul_vial
  event.recipes.gtceu.fluid_solidifier('kubejs:enderio/empty_soul_vial')
    .itemInputs('gtceu:glass_tube')
    .inputFluids(Fluid.of('gtceu:polyethylene', 144))
    .itemOutputs('1x enderio:empty_soul_vial')
    .duration(100)
    .EUt(LV)

  // solid_xp_baby
  event.recipes.gtceu.fluid_solidifier('kubejs:mob_grinding_utils/solid_xp_baby')
    .notConsumable('mob_grinding_utils:solid_xp_mould_baby')
    .inputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 1000))
    .itemOutputs('1x mob_grinding_utils:solid_xp_baby')
    .duration(30)
    .EUt(LV)

  // solid_xp_baby
  event.recipes.gtceu.fluid_solidifier('kubejs:mob_grinding_utils/solid_xp_block')
    .notConsumable('gtceu:block_casting_mold')
    .inputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 9000))
    .itemOutputs('1x mob_grinding_utils:solid_xp_block')
    .duration(100)
    .EUt(LV)


  // fin //

})