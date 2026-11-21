// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920


  // harvester_tier_3
  event.recipes.gtceu.assembly_line('kubejs:harvester_tier_3')
    .itemInputs('5x #forge:dense_plates/rhodium_plated_palladium')
    .itemInputs('4x #forge:frames/hssg')
    .itemInputs('1x gtceu:luv_quantum_chest')
    .itemInputs('1x gtceu:luv_quantum_tank')
    .itemInputs('2x gtceu:luv_robot_arm')
    .itemInputs('2x gtceu:luv_electric_pump')
    .itemInputs('4x #gtceu:circuits/luv')
    .itemInputs('2x gtceu:luv_voltage_coil')
    .itemInputs('2x gtceu:gravitation_engine_unit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
    .itemOutputs('kubejs:harvester_tier_3')
    .duration(900)
    .EUt(30720)
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b
    .researchStack(Item.of('kubejs:harvester_tier_2'))
    .EUt(GTValues.VA[GTValues.IV])
    .duration(2400))


  // fin //

})