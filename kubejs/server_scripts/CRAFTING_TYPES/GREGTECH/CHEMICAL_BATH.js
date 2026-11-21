// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // magnesium_diboride_ingot
  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/gtceu/magnesium_diboride_ingot/from/water')
    .itemInputs('#forge:hot_ingots/magnesium_diboride')
    .inputFluids(Fluid.of('minecraft:water', 100))
    .itemOutputs('gtceu:magnesium_diboride_ingot')
    .duration(400)
    .EUt(MV)

  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/gtceu/magnesium_diboride_ingot/from/distilled_water')
    .itemInputs('#forge:hot_ingots/magnesium_diboride')
    .inputFluids(Fluid.of('gtceu:distilled_water', 100))
    .itemOutputs('gtceu:magnesium_diboride_ingot')
    .duration(250)
    .EUt(MV)

  // netherite_block
  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/minecraft/netherite_block')
    .itemInputs('#forge:storage_blocks/forged_netherite')
    .inputFluids(Fluid.of('minecraft:lava', 250))
    .itemOutputs('minecraft:netherite_block')
    .duration(120)
    .EUt(LV)

  // rusty_iron_block
  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/dustrial_decor/rusty_iron_block')
    .itemInputs('#forge:storage_blocks/iron')
    .inputFluids(Fluid.of('minecraft:water', 1125))
    .itemOutputs('dustrial_decor:rusty_iron_block')
    .duration(225)
    .EUt(7)

  // rusty_iron_ingot
  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/dustrial_decor/rusty_iron_ingot')
    .itemInputs('#forge:ingots/iron')
    .inputFluids(Fluid.of('minecraft:water', 125))
    .itemOutputs('dustrial_decor:rusty_iron_ingot')
    .duration(50)
    .EUt(7)

  // rusty_iron_nugget
  event.recipes.gtceu.chemical_bath('kubejs:chemical_bath/dustrial_decor/rusty_iron_nugget')
    .itemInputs('#forge:nuggets/iron')
    .inputFluids(Fluid.of('minecraft:water', 14))
    .itemOutputs('dustrial_decor:rusty_iron_nugget')
    .duration(11)
    .EUt(7)

  // darker concrete variants
  const conversions = [
    { input: 'gtceu:chiseled_dark_concrete', output: 'kubejs:chiseled_darker_concrete' },
    { input: 'gtceu:cracked_dark_concrete_bricks', output: 'kubejs:cracked_darker_concrete_bricks' },
    { input: 'gtceu:dark_concrete_bricks', output: 'kubejs:darker_concrete_bricks' },
    { input: 'gtceu:dark_concrete_cobblestone', output: 'kubejs:darker_concrete_cobblestone' },
    { input: 'gtceu:dark_concrete_small_tile', output: 'kubejs:darker_concrete_small_tile' },
    { input: 'gtceu:dark_concrete_tile', output: 'kubejs:darker_concrete_tile' },
    { input: 'gtceu:dark_concrete_windmill_a', output: 'kubejs:darker_concrete_windmill_a' },
    { input: 'gtceu:dark_concrete_windmill_b', output: 'kubejs:darker_concrete_windmill_b' },
    { input: 'gtceu:dark_concrete', output: 'kubejs:darker_concrete' },
    { input: 'gtceu:mossy_dark_concrete_bricks', output: 'kubejs:mossy_darker_concrete_bricks' },
    { input: 'gtceu:mossy_dark_concrete_cobblestone', output: 'kubejs:mossy_darker_concrete_cobblestone' },
    { input: 'gtceu:polished_dark_concrete', output: 'kubejs:polished_darker_concrete' },
    { input: 'gtceu:small_dark_concrete_bricks', output: 'kubejs:small_darker_concrete_bricks' },
    { input: 'gtceu:square_dark_concrete_bricks', output: 'kubejs:square_darker_concrete_bricks' },
  ]

  const darkening = (input, output, id) => {
    event.recipes.gtceu.chemical_bath(id)
      .itemInputs(input)
      .inputFluids('minecraft:water 100')
      .itemOutputs(output)
      .duration(100)
      .EUt(7)
  }

  conversions.forEach(convert => {
    darkening(convert.input, convert.output, `kubejs:${convert.output.split(':')[1]}`)
  })

  // universal circuits
  const universals = [
    { input: 'gtceu:basic_electronic_circuit', output: 'kubejs:lv_universal_circuit'},
    { input: 'gtceu:basic_integrated_circuit', output: 'kubejs:lv_universal_circuit'},
    { input: 'gtceu:microchip_processor', output: 'kubejs:lv_universal_circuit'},

    { input: 'gtceu:good_electronic_circuit', output: 'kubejs:mv_universal_circuit'},
    { input: 'gtceu:good_integrated_circuit', output: 'kubejs:mv_universal_circuit'},
    { input: 'gtceu:micro_processor', output: 'kubejs:mv_universal_circuit'},

    { input: 'gtceu:advanced_integrated_circuit', output: 'kubejs:hv_universal_circuit'},
    { input: 'gtceu:micro_processor_assembly', output: 'kubejs:hv_universal_circuit'},
    { input: 'gtceu:nano_processor', output: 'kubejs:hv_universal_circuit'},

    { input: 'gtceu:micro_processor_computer', output: 'kubejs:ev_universal_circuit'},
    { input: 'gtceu:nano_processor_assembly', output: 'kubejs:ev_universal_circuit'},
    { input: 'gtceu:quantum_processor', output: 'kubejs:ev_universal_circuit'},

    { input: 'gtceu:micro_processor_mainframe', output: 'kubejs:iv_universal_circuit'},
    { input: 'gtceu:nano_processor_computer', output: 'kubejs:iv_universal_circuit'},
    { input: 'gtceu:quantum_processor_assembly', output: 'kubejs:iv_universal_circuit'},
    { input: 'gtceu:crystal_processor', output: 'kubejs:iv_universal_circuit'},

    { input: 'gtceu:nano_processor_mainframe', output: 'kubejs:luv_universal_circuit'},
    { input: 'gtceu:quantum_processor_computer', output: 'kubejs:luv_universal_circuit'},
    { input: 'gtceu:crystal_processor_assembly', output: 'kubejs:luv_universal_circuit'},
    { input: 'gtceu:wetware_processor', output: 'kubejs:luv_universal_circuit'},

    { input: 'gtceu:quantum_processor_mainframe', output: 'kubejs:zpm_universal_circuit'},
    { input: 'gtceu:crystal_processor_computer', output: 'kubejs:zpm_universal_circuit'},
    { input: 'gtceu:wetware_processor_assembly', output: 'kubejs:zpm_universal_circuit'},

    { input: 'gtceu:crystal_processor_mainframe', output: 'kubejs:uv_universal_circuit'},
    { input: 'gtceu:wetware_processor_computer', output: 'kubejs:uv_universal_circuit'},

    { input: 'gtceu:wetware_processor_mainframe', output: 'kubejs:uhv_universal_circuit'},
  ]

  const universal = (input, output, id) => {
    event.shapeless(`1x ${output}`,
        [
            `${input}`,
            '#forge:plates/steel',
        ])
        .id(id)
    }

  universals.forEach(craft => {
    universal(craft.input, craft.output, `kubejs:crafting/kubejs/${craft.output.split(':')[1]}/from/${craft.input.split(':')[1]}`)
  })


  // fin //

})