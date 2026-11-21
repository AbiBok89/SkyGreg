// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // fluix_crystal
  event.recipes.gtceu.mixer('kubejs:ae2/fluix_crystal')
    .itemInputs('ae2:charged_certus_quartz_crystal')
    .itemInputs('minecraft:redstone')
    .itemInputs('minecraft:quartz')
    .inputFluids(Fluid.of('minecraft:water', 50))
    .itemOutputs('2x ae2:fluix_crystal')
    .duration(20)
    .EUt(ULV)

  // sky_steel_ingot
  event.recipes.gtceu.mixer('kubejs:megacells/sky_steel_ingot')
    .itemInputs('ae2:charged_certus_quartz_crystal')
    .itemInputs('minecraft:iron_ingot')
    .itemInputs('ae2:sky_stone_block')
    .inputFluids(Fluid.of('minecraft:lava', 50))
    .itemOutputs('2x megacells:sky_steel_ingot')
    .duration(20)
    .EUt(ULV)

  // glowstone_dust
  event.recipes.gtceu.mixer('kubejs:minecraft/glowstone_dust')
    // .itemInputs('#forge:dusts/certus_quartz')
    .itemInputs('minecraft:redstone')
    .itemInputs('gtceu:gold_dust')
    .inputFluids(Fluid.of('minecraft:water', 50))
    .itemOutputs('2x minecraft:glowstone_dust')
    .duration(50)
    .EUt(7)

  // skystone_dust
  event.recipes.gtceu.mixer('kubejs:ae2/skystone_dust')
    .itemInputs('#forge:dusts/certus_quartz')
    .itemInputs('gtceu:nether_quartz_dust')
    .itemInputs('gtceu:silver_dust')
    .inputFluids(Fluid.of('gtceu:oxygen', 150))
    .itemOutputs('3x ae2:sky_dust')
    .duration(50)
    .EUt(7)

  // pointed_dripstone
  event.recipes.gtceu.mixer('kubejs:minecraft/pointed_dripstone')
    .itemInputs('gtceu:clay_dust')
    .itemInputs('gtceu:calcite_dust')
    .itemInputs('gtceu:quartz_sand_dust')
    .inputFluids(Fluid.of('minecraft:water', 1000))
    .itemOutputs('minecraft:pointed_dripstone')
    .duration(200)
    .EUt(MV)

  // grains_of_infinity
  event.recipes.gtceu.mixer('kubejs:enderio/grains_of_infinity')
    .itemInputs('gtceu:netherrack_dust')
    .itemInputs('gtceu:endstone_dust')
    .itemOutputs('enderio:grains_of_infinity')
    .duration(200)
    .EUt(LV)
    .circuit(2)

  // conduit_binder_composite
  event.recipes.gtceu.mixer('kubejs:enderio/conduit_binder_composite')
    .itemInputs('gtceu:flint_dust')
    .itemInputs('gtceu:clay_dust')
    .inputFluids(Fluid.of('minecraft:water', 50))
    .itemOutputs('2x enderio:conduit_binder_composite')
    .duration(20)
    .EUt(LV)

  // warp_dust
  event.recipes.gtceu.mixer('kubejs:waystones/warp_dust')
    .itemInputs('1x #forge:dusts/ender_pearl')
    .itemInputs('3x #forge:dusts/amethyst')
    .itemOutputs('4x waystones:warp_dust')
    .duration(100)
    .EUt(MV)
    .circuit(1)

  // gem_dust
  event.recipes.gtceu.mixer('kubejs:apotheosis/gem_dust')
    .itemInputs('1x #forge:dusts/diamond')
    .itemInputs('1x #forge:dusts/emerald')
    .itemInputs('1x #forge:dusts/amethyst')
    .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 250))
    .itemOutputs('3x apotheosis:gem_dust')
    .duration(60)
    .EUt(HV)

  // dragon_breath
  event.recipes.gtceu.mixer('kubejs:minecraft/dragon_breath')
    .itemInputs('1x minecraft:glass_bottle')
    .itemInputs('4x #forge:dusts/endstone')
    .itemInputs('4x #forge:dusts/amethyst')
    .itemInputs('4x #forge:dusts/ender_eye')
    .inputFluids(Fluid.of('gtceu:blaze', 576))
    .itemOutputs('1x minecraft:dragon_breath')
    .duration(60)
    .EUt(HV)

  // dimensionalshard
  event.remove({ output: 'rftoolsbase:dimensionalshard' })
  event.recipes.gtceu.mixer('kubejs:rftoolsbase/dimensionalshard')
    .itemInputs('1x #forge:dusts/stone')
    .itemInputs('1x #forge:dusts/netherrack')
    .itemInputs('1x #forge:dusts/endstone')
    .itemInputs('3x #forge:gems/quartzite')
    .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
    .itemOutputs('6x rftoolsbase:dimensionalshard')
    .duration(200)
    .EUt(LV)
    .circuit(4)

  // mud
  event.remove({ id: 'gtceu:mixer/mud' })
  event.recipes.gtceu.mixer('kubejs:minecraft/mud')
    .itemInputs('1x minecraft:dirt')
    .inputFluids(Fluid.of('minecraft:water', 144))
    .itemOutputs('2x minecraft:mud')
    .duration(100)
    .EUt(4)
    .circuit(1)

  // quartz_alloy_dust
  event.recipes.gtceu.mixer('kubejs:kubejs/quartz_alloy_dust/from/iron')
    .itemInputs('1x gtceu:iron_dust')
    .itemInputs('2x gtceu:nether_quartz_dust')
    .itemOutputs('3x gtceu:quartz_alloy_dust')
    .duration(200)
    .EUt(24)
    .circuit(1)

  event.recipes.gtceu.mixer('kubejs:kubejs/quartz_alloy_dust/from/wrought')
    .itemInputs('1x gtceu:wrought_iron_dust')
    .itemInputs('2x gtceu:nether_quartz_dust')
    .itemOutputs('3x gtceu:quartz_alloy_dust')
    .duration(100)
    .EUt(24)
    .circuit(1)

  // forged_netherite_dust
  event.recipes.gtceu.mixer('kubejs:gtceu/forged_netherite_dust')
    .itemInputs('1x #forge:dusts/gold')
    .itemInputs('4x #forge:dusts/steel')
    .inputFluids(Fluid.of('gtceu:blaze', 576))
    .itemOutputs('5x gtceu:forged_netherite_dust')
    .duration(500)
    .EUt(480)
    .circuit(1)

  // prismarine_shard
  event.recipes.gtceu.mixer('kubejs:minecraft/prismarine_shard')
    .itemInputs('1x #forge:dusts/nether_quartz')
    .itemInputs('1x #forge:dusts/quartzite')
    .itemInputs('1x #forge:dusts/certus_quartz')
    .itemInputs('3x #forge:dusts/quartz_sand')
    .inputFluids(Fluid.of('gtceu:distilled_water', 125))
    .itemOutputs('6x minecraft:prismarine_shard')
    .duration(100)
    .EUt(24)
    .circuit(6)

  // echo_shard_dust
  event.recipes.gtceu.mixer('kubejs:gtceu/echo_shard_dust')
    .itemInputs('3x #forge:dusts/silicon_dioxide')
    .itemInputs('2x #forge:dusts/sculk')
    .itemOutputs('5x gtceu:echo_shard_dust')
    .duration(500)
    .EUt(120)
    .circuit(5)

  // flux_dust
  if (Platform.isLoaded('fluxnetworks')) {
    event.recipes.gtceu.mixer('kubejs:fluxnetworks/flux_dust')
      .itemInputs('1x #forge:dusts/redstone')
      .itemInputs('1x #forge:dusts/biotite')
      .itemOutputs('2x fluxnetworks:flux_dust')
      .duration(60)
      .EUt(LV)
  }

  // flux_core
  if (Platform.isLoaded('fluxnetworks')) {
    event.remove({ id: 'fluxnetworks:fluxcore' })
    event.recipes.gtceu.mixer('kubejs:fluxnetworks/flux_core')
      .itemInputs('4x fluxnetworks:flux_dust')
      .itemInputs('1x #forge:dusts/ender_pearl')
      .itemInputs('1x #forge:dusts/obsidian')
      .inputFluids(Fluid.of('gtceu:blaze', 144))
      .itemOutputs('4x fluxnetworks:flux_core')
      .duration(60)
      .EUt(LV)
  }

  // silky_quartz_dust
  event.recipes.gtceu.mixer('kubejs:gtceu/silky_quartz_dust')
    .itemInputs('1x #forge:dusts/nether_quartz')
    .itemInputs('1x #forge:dusts/bronze')
    .itemOutputs('2x gtceu:silky_quartz_dust')
    .duration(100)
    .EUt(24)

  // peripheralium_dust
  event.recipes.gtceu.mixer('kubejs:peripheralium/peripheralium_dust')
    .itemInputs('1x #forge:dusts/redstone')
    .itemInputs('1x #forge:dusts/glowstone')
    .itemOutputs('2x peripheralium:peripheralium_dust')
    .duration(100)
    .EUt(7)


  // fin //

})