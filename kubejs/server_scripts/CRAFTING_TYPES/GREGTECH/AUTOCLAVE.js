// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // certus_quartz_crystal
  event.recipes.gtceu.autoclave('kubejs:autoclave/certus_quartz_crystal')
    .itemInputs('gtceu:certus_quartz_gem')
    .inputFluids(Fluid.of('minecraft:water', 50))
    .itemOutputs('ae2:certus_quartz_crystal')
    .duration(20)
    .EUt(ULV)

  // clay
  event.recipes.gtceu.autoclave('kubejs:autoclave/dust')
    .itemInputs('ex_hammers:dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:clay')
    .duration(20)
    .EUt(LV)

  // endstone
  event.recipes.gtceu.autoclave('kubejs:autoclave/endstone')
    .itemInputs('4x gtceu:endstone_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:end_stone')
    .duration(20)
    .EUt(LV)

  // netherrack
  event.recipes.gtceu.autoclave('kubejs:autoclave/netherrack')
    .itemInputs('4x gtceu:netherrack_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:netherrack')
    .duration(20)
    .EUt(LV)

  // granite
  event.recipes.gtceu.autoclave('kubejs:autoclave/granite')
    .itemInputs('4x gtceu:granite_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:granite')
    .duration(20)
    .EUt(LV)

  // andesite
  event.recipes.gtceu.autoclave('kubejs:autoclave/andesite')
    .itemInputs('4x gtceu:andesite_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:andesite')
    .duration(20)
    .EUt(LV)

  // diorite
  event.recipes.gtceu.autoclave('kubejs:autoclave/diorite')
    .itemInputs('4x gtceu:diorite_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:diorite')
    .duration(20)
    .EUt(LV)

  // deepslate
  event.recipes.gtceu.autoclave('kubejs:autoclave/deepslate')
    .itemInputs('4x gtceu:deepslate_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:deepslate')
    .duration(20)
    .EUt(LV)

  // basalt
  event.recipes.gtceu.autoclave('kubejs:autoclave/basalt')
    .itemInputs('4x gtceu:basalt_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:basalt')
    .duration(20)
    .EUt(LV)

  // stone
  event.recipes.gtceu.autoclave('kubejs:autoclave/stone')
    .itemInputs('4x gtceu:stone_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('minecraft:stone')
    .duration(20)
    .EUt(LV)

  // marble
  event.recipes.gtceu.autoclave('kubejs:autoclave/marble')
    .itemInputs('4x gtceu:marble_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('gtceu:marble')
    .duration(20)
    .EUt(LV)

  // red_granite
  event.recipes.gtceu.autoclave('kubejs:autoclave/granite_red')
    .itemInputs('4x gtceu:granite_red_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('gtceu:red_granite')
    .duration(20)
    .EUt(LV)

  // silicon
  event.recipes.gtceu.autoclave('kubejs:autoclave/silicon')
    .itemInputs('gtceu:silicon_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    .itemOutputs('ae2:silicon')
    .duration(20)
    .EUt(LV)

  // ender_pearl
  event.recipes.gtceu.autoclave('kubejs:autoclave/ender_pearl/from/water')
    .itemInputs('2x gtceu:ender_pearl_dust')
    .inputFluids(Fluid.of('minecraft:water', 250))
    // .itemOutputs('minecraft:ender_pearl')
    .chancedOutput('1x minecraft:ender_pearl', 4000, 0)
    .duration(20)
    .EUt(LV)

  event.recipes.gtceu.autoclave('kubejs:autoclave/ender_pearl/from/nitrogen')
    .itemInputs('2x gtceu:ender_pearl_dust')
    .inputFluids(Fluid.of('gtceu:nitrogen', 500))
    // .itemOutputs('minecraft:ender_pearl')
    .chancedOutput('1x minecraft:ender_pearl', 8000, 0)
    .duration(20)
    .EUt(LV)

  // conduit_binder
  event.recipes.gtceu.autoclave('kubejs:autoclave/conduit_binder')
    .itemInputs('enderio:conduit_binder_composite')
    .inputFluids(Fluid.of('minecraft:water', 125))
    .itemOutputs('2x enderio:conduit_binder')
    .duration(20)
    .EUt(ULV)

  // reinforced_iron_plate
  event.remove({ output: 'exocraft:reinforced_iron_plate' })
  event.recipes.gtceu.autoclave('kubejs:autoclave/reinforced_iron_plate')
    .itemInputs('gtceu:wrought_iron_plate')
    .inputFluids(Fluid.of('gtceu:aluminium', 288))
    .itemOutputs('1x exocraft:reinforced_iron_plate')
    .duration(200)
    .EUt(LV)

  // mythic_material
  event.recipes.gtceu.autoclave('kubejs:autoclave/mythic_material')
    .itemInputs('gtceu:ev_field_generator')
    .inputFluids(Fluid.of('gtceu:rhodium_sulfate', 1000))
    .itemOutputs('1x apotheosis:mythic_material')
    .duration(500)
    .EUt(EV)

  // prismarine_crystals
  event.recipes.gtceu.autoclave('kubejs:autoclave/minecraft/prismarine_crystals')
    .itemInputs('3x #forge:dusts/prismarine')
    .inputFluids(Fluid.of('minecraft:water', 325))
    .itemOutputs('2x minecraft:prismarine_crystals')
    .duration(60)
    .EUt(ULV)

  // materialized_experience_gem
  event.recipes.gtceu.autoclave('kubejs:autoclave/materialized_experience_gem/from/nitrogen')
    .itemInputs('1x gtceu:materialized_experience_dust')
    .inputFluids(Fluid.of('gtceu:nitrogen', 250))
    .chancedOutput('1x gtceu:materialized_experience_gem', 5500, 0)
    .duration(60)
    .EUt(LV)

  event.recipes.gtceu.autoclave('kubejs:autoclave/materialized_experience_gem/from/nitrogen_dioxide')
    .itemInputs('1x gtceu:materialized_experience_dust')
    .inputFluids(Fluid.of('gtceu:nitrogen_dioxide', 125))
    .chancedOutput('1x gtceu:materialized_experience_gem', 8500, 0)
    .duration(40)
    .EUt(LV)

  event.recipes.gtceu.autoclave('kubejs:autoclave/materialized_experience_gem/from/nitrogen_plasma')
    .itemInputs('1x gtceu:materialized_experience_dust')
    .inputFluids(Fluid.of('gtceu:nitrogen_plasma', 5))
    .chancedOutput('1x gtceu:materialized_experience_gem', 10000, 0)
    .duration(10)
    .EUt(LV)


  // fin //

})