// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // // mv_retrograde_circuit
  // event.recipes.gtceu.circuit_assembler('kubejs:kubejs/mv_retrograde_circuit/soldering_alloy')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_mv')
  //   .itemInputs('2x #forge:plates/aluminium')
  //   .itemInputs('8x #forge:bolts/aluminium')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
  //   .itemOutputs('1x kubejs:mv_retrograde_circuit')
  //   .duration(300)
  //   .EUt(30)

  //   event.recipes.gtceu.circuit_assembler('kubejs:kubejs/mv_retrograde_circuit/tin')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_mv')
  //   .itemInputs('2x #forge:plates/aluminium')
  //   .itemInputs('8x #forge:bolts/aluminium')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:tin', 288))
  //   .itemOutputs('1x kubejs:mv_retrograde_circuit')
  //   .duration(300)
  //   .EUt(30)

  // // hv_retrograde_circuit
  // event.recipes.gtceu.circuit_assembler('kubejs:kubejs/hv_retrograde_circuit/soldering_alloy')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_hv')
  //   .itemInputs('2x #forge:plates/stainless_steel')
  //   .itemInputs('8x #forge:bolts/stainless_steel')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
  //   .itemOutputs('1x kubejs:hv_retrograde_circuit')
  //   .duration(300)
  //   .EUt(120)

  //   event.recipes.gtceu.circuit_assembler('kubejs:kubejs/hv_retrograde_circuit/tin')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_hv')
  //   .itemInputs('2x #forge:plates/stainless_steel')
  //   .itemInputs('8x #forge:bolts/stainless_steel')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:tin', 288))
  //   .itemOutputs('1x kubejs:hv_retrograde_circuit')
  //   .duration(300)
  //   .EUt(120)

  // // ev_retrograde_circuit
  // event.recipes.gtceu.circuit_assembler('kubejs:kubejs/ev_retrograde_circuit/soldering_alloy')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_ev')
  //   .itemInputs('2x #forge:plates/titanium')
  //   .itemInputs('8x #forge:bolts/titanium')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
  //   .itemOutputs('1x kubejs:ev_retrograde_circuit')
  //   .duration(300)
  //   .EUt(480)

  //   event.recipes.gtceu.circuit_assembler('kubejs:kubejs/ev_retrograde_circuit/tin')
  //   .itemInputs('1x #gtceu:circuits/retrograde_compat_ev')
  //   .itemInputs('2x #forge:plates/titanium')
  //   .itemInputs('8x #forge:bolts/titanium')
  //   .itemInputs('2x #forge:foils/polyethylene')
  //   .itemInputs('4x gtceu:red_alloy_single_wire')
  //   .itemInputs('4x #forge:fine_wires/annealed_copper')
  //   .inputFluids(Fluid.of('gtceu:tin', 288))
  //   .itemOutputs('1x kubejs:ev_retrograde_circuit')
  //   .duration(300)
  //   .EUt(480)




  // fin //

})