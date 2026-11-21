// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920

  let fluidX1 = 144
  let fluidX2 = fluidX1 * 2
  let fluidX3 = fluidX1 * 3
  let fluidX4 = fluidX1 * 4
  let fluidX5 = fluidX1 * 5
  let fluidX6 = fluidX1 * 6
  let fluidX7 = fluidX1 * 7
  let fluidX8 = fluidX1 * 8
  let fluidX9 = fluidX1 * 9


  // atomic_casing
  event.recipes.gtceu.assembly_line('kubejs:atomic_casing')
    .itemInputs('1x #forge:frames/neutronium')
    .itemInputs('1x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire')
    .itemInputs('1x gtceu:gravi_star')
    .itemInputs('8x gtceu:highly_advanced_soc')
    .itemInputs('6x #forge:plates/tungsten_carbide')
    .itemInputs('16x #forge:bolts/tungsten_carbide')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', fluidX4))
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', fluidX2))
    .inputFluids(Fluid.of('gtceu:naquadria', fluidX2))
    .inputFluids(Fluid.of('gtceu:argon_plasma', 125))
    .itemOutputs('2x gtceu:atomic_casing')
    .duration(400)
    .EUt(GTValues.VA[GTValues.UV])
    .stationResearch(b => b
      .researchStack(Item.of('gtceu:fusion_casing_mk3'))
      .EUt(GTValues.VA[GTValues.UV])
      .CWUt(48)
    )

  // fusion_assembler
  event.recipes.gtceu.assembly_line('kubejs:fusion_assembler')
    .itemInputs('1x gtceu:atomic_casing')
    .itemInputs('4x gtceu:ruthenium_trinium_americium_neutronate_hex_wire')
    .itemInputs('12x #gtceu:circuits/uhv')
    .itemInputs('8x gtceu:uv_sensor')
    .itemInputs('8x gtceu:uv_emitter')
    .itemInputs('8x gtceu:uv_field_generator')
    .itemInputs('8x gtceu:uv_robot_arm')
    .itemInputs('64x gtceu:highly_advanced_soc')
    .itemInputs('12x #forge:double_plates/neutronium')
    .itemInputs('64x #forge:bolts/neutronium')
    .itemInputs('64x #forge:bolts/neutronium')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', fluidX8))
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', fluidX9))
    .inputFluids(Fluid.of('gtceu:americium_plasma', 1000))
    .itemOutputs('gtceu:fusion_assembler')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.UHV])
    .stationResearch(b => b
      .researchStack(Item.of('gtceu:uv_fusion_reactor'))
      .EUt(GTValues.VA[GTValues.UHV])
      .CWUt(96)
    )

  // harvester_tier_4
  event.recipes.gtceu.assembly_line('kubejs:harvester_tier_4')
    .itemInputs('5x #forge:dense_plates/naquadah_alloy')
    .itemInputs('4x #forge:frames/europium')
    .itemInputs('1x gtceu:zpm_quantum_chest')
    .itemInputs('1x gtceu:zpm_quantum_tank')
    .itemInputs('2x gtceu:zpm_robot_arm')
    .itemInputs('2x gtceu:zpm_electric_pump')
    .itemInputs('4x #gtceu:circuits/zpm')
    .itemInputs('4x gtceu:zpm_voltage_coil')
    .itemInputs('4x gtceu:gravitation_engine_unit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy', fluidX9))
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1728))
    .itemOutputs('kubejs:harvester_tier_4')
    .duration(900)
    .EUt(122880)
    .stationResearch(b => b
      .researchStack(Item.of('kubejs:harvester_tier_3'))
      .EUt(30720)
      .CWUt(8)
    )



  // fin //

})