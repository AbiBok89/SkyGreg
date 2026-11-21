// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // soul_sand
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/soul_sand')
    .itemInputs('#forge:sand')
    .itemInputs('wstweaks:fragment')
    .inputFluids(Fluid.of('gtceu:nitric_acid', 250))
    .itemOutputs('minecraft:soul_sand')
    .duration(100)
    .EUt(MV)

  // soul_soil
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/soul_soil')
    .itemInputs('#minecraft:dirt')
    .itemInputs('wstweaks:fragment')
    .inputFluids(Fluid.of('gtceu:nitric_acid', 250))
    .itemOutputs('minecraft:soul_soil')
    .duration(100)
    .EUt(MV)

  // flawless_budding_quartz
  event.recipes.gtceu.chemical_reactor('kubejs:ae2/flawless_budding_quartz')
    .itemInputs('#forge:storage_blocks/certus_quartz')
    .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
    .itemOutputs('ae2:flawless_budding_quartz')
    .duration(100)
    .EUt(MV)

  // bedrock
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/bedrock')
    .itemInputs('8x gtceu:black_steel_dust')
    .inputFluids(Fluid.of('gtceu:kanthal', 1296))
    .itemOutputs('minecraft:bedrock')
    .duration(100)
    .EUt(MV)

  // reinforced_deepslate
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/reinforced_deepslate')
    .itemInputs('8x gtceu:deepslate_dust')
    .inputFluids(Fluid.of('gtceu:kanthal', 576))
    .itemOutputs('minecraft:reinforced_deepslate')
    .duration(100)
    .EUt(MV)

  // warp_stone
  event.remove({ id: 'waystones:warp_stone' })
  event.recipes.gtceu.chemical_reactor('kubejs:waystones/warp_stone/from/polyethylene')
    .itemInputs('gtceu:ender_pearl_dust')
    .itemInputs('2x gtceu:amethyst_dust')
    .inputFluids('gtceu:polyethylene 144')
    .itemOutputs(Item.of('waystones:warp_stone', '{Damage:0}'))
    .duration(20)
    .EUt(LV)

  event.recipes.gtceu.chemical_reactor('kubejs:waystones/warp_stone/from/rubber')
    .itemInputs('gtceu:ender_pearl_dust')
    .itemInputs('2x gtceu:amethyst_dust')
    .inputFluids('gtceu:rubber 576')
    .itemOutputs(Item.of('waystones:warp_stone', '{Damage:0}'))
    .duration(20)
    .EUt(LV)

  // sculk
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/sculk')
    .itemInputs('ex_hammers:dust')
    .itemInputs('gtceu:carbon_dust')
    .inputFluids('mob_grinding_utils:fluid_xp 125')
    .itemOutputs('minecraft:sculk')
    .duration(20)
    .EUt(LV)

  // sculk_catalyst
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/sculk_catalyst')
    .itemInputs('minecraft:sculk')
    .itemInputs('gtceu:ender_pearl_dust')
    .inputFluids(Fluid.of('gtceu:carbon', 125))
    .itemOutputs('minecraft:sculk_catalyst')
    .duration(20)
    .EUt(LV)

  // sculk_sensor
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/sculk_sensor')
    .itemInputs('minecraft:sculk')
    .itemInputs('minecraft:redstone')
    .inputFluids(Fluid.of('gtceu:antimony', 125))
    .itemOutputs('minecraft:sculk_sensor')
    .duration(20)
    .EUt(LV)

  // sculk_shrieker
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/sculk_shrieker')
    .itemInputs('minecraft:sculk')
    .itemInputs('gtceu:ender_eye_dust')
    .inputFluids(Fluid.of('gtceu:antimony', 125))
    .itemOutputs('minecraft:sculk_shrieker')
    .duration(20)
    .EUt(LV)

  // crying_obsidian
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/crying_obsidian')
    .itemInputs('minecraft:obsidian')
    .inputFluids(Fluid.of('gtceu:lead', 288))
    .itemOutputs('minecraft:crying_obsidian')
    .duration(20)
    .EUt(MV)

  // leather
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/leather')
    .itemInputs('2x gtceu:bio_chaff')
    .itemInputs('1x enderio:conduit_binder_composite')
    .inputFluids(Fluid.of('gtceu:distilled_water', 250))
    .itemOutputs('minecraft:leather')
    .duration(100)
    .EUt(LV)

  // moss_block
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/moss_block')
    .itemInputs('4x gtceu:bio_chaff')
    .itemInputs('1x minecraft:dirt')
    .inputFluids(Fluid.of('gtceu:distilled_water', 500))
    .itemOutputs('2x minecraft:moss_block')
    .duration(100)
    .EUt(LV)

  // lily_pad
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/lily_pad')
    .itemInputs('4x gtceu:bio_chaff')
    .itemInputs('1x #minecraft:leaves')
    .inputFluids(Fluid.of('gtceu:distilled_water', 500))
    .itemOutputs('2x minecraft:lily_pad')
    .duration(100)
    .EUt(LV)

  // cobweb
  event.remove({ id: 'apotheosis:cobweb' })
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/cobweb')
    .itemInputs('4x gtceu:bio_chaff')
    .itemInputs('5x #forge:string')
    .inputFluids(Fluid.of('gtceu:glue', 250))
    .itemOutputs('1x minecraft:cobweb')
    .duration(100)
    .EUt(LV)

  // nether_star_dust
  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/nether_star_dust')
    .itemInputs('1x gtceu:rarest_metal_mixture_dust')
    .itemInputs('3x gtceu:calcium_chloride_dust')
    .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
    .itemOutputs('1x gtceu:nether_star_dust')
    .duration(200)
    .EUt(EV)

  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/nether_star_dust/lithium_chloride')
    .itemInputs('1x gtceu:rarest_metal_mixture_dust')
    .itemInputs('4x gtceu:lithium_chloride_dust')
    .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
    .itemOutputs('1x gtceu:nether_star_dust')
    .duration(200)
    .EUt(EV)

  // elytra
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/elytra')
    .itemInputs('8x #forge:bolts/stainless_steel')
    .itemInputs('4x #forge:rods/long/stainless_steel')
    .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1296))
    .inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 576))
    .itemOutputs('1x minecraft:elytra')
    .duration(200)
    .EUt(HV)

  // uncommon_material
  event.recipes.gtceu.chemical_reactor('kubejs:apotheosis/uncommon_material')
    .itemInputs('4x gtceu:carbon_fibers')
    .itemInputs('4x #forge:dusts/green_sapphire')
    .inputFluids(Fluid.of('gtceu:beryllium', 144))
    .itemOutputs('4x apotheosis:uncommon_material')
    .duration(200)
    .EUt(MV)

  // rare_material
  event.recipes.gtceu.chemical_reactor('kubejs:apotheosis/rare_material')
    .itemInputs('2x #forge:ingots/blue_steel')
    .itemInputs('1x #forge:exquisite_gems')
    .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 144))
    .itemOutputs('3x apotheosis:rare_material')
    .duration(200)
    .EUt(HV)

  // epic_material
  event.recipes.gtceu.chemical_reactor('kubejs:apotheosis/epic_material')
    .itemInputs('3x #forge:dusts/amethyst')
    .itemInputs('3x #forge:dusts/ender_eye')
    .inputFluids(Fluid.of('gtceu:nitric_acid', 250))
    .itemOutputs('6x apotheosis:epic_material')
    .duration(200)
    .EUt(HV)

  // heart_of_the_sea
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/heart_of_the_sea')
    .itemInputs('1x minecraft:nautilus_shell')
    .itemInputs('1x gtceu:quantum_eye')
    .inputFluids(Fluid.of('gtceu:radon', 1000))
    .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
    .itemOutputs('1x minecraft:heart_of_the_sea')
    .duration(200)
    .EUt(HV)

  // nautilus_shell
  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/nautilus_shell')
    .itemInputs('3x #forge:gems/quartzite')
    .inputFluids(Fluid.of('gtceu:acetic_acid', 500))
    .inputFluids(Fluid.of('gtceu:salt_water', 500))
    .inputFluids(Fluid.of('gtceu:distilled_water', 500))
    .itemOutputs('1x minecraft:nautilus_shell')
    .duration(200)
    .EUt(MV)

  // advanced_pressure_valve
  event.remove({ output: 'advgenerators:advanced_pressure_valve' })
  event.recipes.gtceu.chemical_reactor('kubejs:advgenerators/advanced_pressure_valve')
    .itemInputs('1x advgenerators:pressure_valve')
    .itemInputs('4x #forge:dusts/lithium_chloride')
    .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
    .itemOutputs('1x advgenerators:advanced_pressure_valve')
    .duration(200)
    .EUt(IV)

  // rich_soil
  event.recipes.gtceu.chemical_reactor('kubejs:farmersdelight/rich_soil')
    .itemInputs('1x farmersdelight:organic_compost')
    .inputFluids(Fluid.of('gtceu:biomass', 750))
    .itemOutputs('2x farmersdelight:rich_soil')
    .duration(128)
    .EUt(8)

  // organic_compost
  event.recipes.gtceu.chemical_reactor('kubejs:farmersdelight/organic_compost')
    .itemInputs('3x #forge:dusts/calcium')
    .itemInputs('4x #forge:dusts/wood')
    .inputFluids(Fluid.of('gtceu:distilled_water', 125))
    .itemOutputs('1x farmersdelight:organic_compost')
    .duration(128)
    .EUt(8)

  // fluid_xp
  event.recipes.gtceu.chemical_reactor('kubejs:mob_grinding_utils/fluid_xp')
    .itemInputs('1x vinery:bottle_mojang_noir')
    .itemInputs('1x #forge:dusts/amethyst')
    .inputFluids(Fluid.of('gtceu:beryllium', 144))
    .itemOutputs('1x vinery:wine_bottle')
    .outputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 250))
    .duration(50)
    .EUt(30)

  // fluid_xp (conversion)
  event.recipes.gtceu.chemical_reactor('kubejs:mob_grinding_utils/fluid_xp/from/xp_juice')
    .notConsumable('1x #forge:dusts/granite_red')
    .inputFluids(Fluid.of('enderio:xp_juice', 25))
    .outputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 14))
    .duration(50)
    .EUt(8)
    .circuit(8)

  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/fluid_xp/from/materialized_experience')
    .notConsumable('1x #forge:dusts/granite_red')
    .inputFluids(Fluid.of('gtceu:materialized_experience', 14))
    .outputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 14))
    .duration(50)
    .EUt(8)
    .circuit(9)

  // xp_juice (conversion)
  event.recipes.gtceu.chemical_reactor('kubejs:enderio/xp_juice/from/fluid_xp')
    .notConsumable('1x #forge:dusts/marble')
    .inputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 14))
    .outputFluids(Fluid.of('enderio:xp_juice', 25))
    .duration(50)
    .EUt(8)
    .circuit(8)

  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/xp_juice/from/materialized_experience')
    .notConsumable('1x #forge:dusts/marble')
    .inputFluids(Fluid.of('gtceu:materialized_experience', 14))
    .outputFluids(Fluid.of('enderio:xp_juice', 25))
    .duration(50)
    .EUt(8)
    .circuit(9)

  // materialized_experience_dust
  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/materialized_experience_dust')
    .itemInputs('1x #forge:dusts/biotite')
    .itemInputs('1x #forge:gems/salt')
    .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 125))
    .inputFluids(Fluid.of('gtceu:hypochlorous_acid', 125))
    .itemOutputs('1x gtceu:materialized_experience_dust')
    .itemOutputs('2x gtceu:small_potassium_dust')
    .outputFluids(Fluid.of('gtceu:iron_iii_chloride', 75))
    .duration(200)
    .EUt(90)

  // crystalized_water
  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/crystalized_water')
    .itemInputs('2x #forge:dusts/certus_quartz')
    // .itemInputs('1x #forge:dusts/glowstone')
    .inputFluids(Fluid.of('minecraft:water', 5000))
    .outputFluids(Fluid.of('gtceu:crystalized_water', 5000))
    .duration(100)
    .EUt(30)

  // activated_lava
  event.recipes.gtceu.chemical_reactor('kubejs:gtceu/activated_lava')
    // .itemInputs('1x #forge:dusts/activated_carbon')
    .itemInputs('1x #forge:dusts/redstone')
    .inputFluids(Fluid.of('minecraft:lava', 400))
    .inputFluids(Fluid.of('gtceu:nitrogen', 400))
    .outputFluids(Fluid.of('gtceu:activated_lava', 800))
    .duration(40)
    .EUt(30)

  // glow_ink_sac
  // event.recipes.gtceu.chemical_reactor('kubejs:minecraft/glow_ink_sac')
  //   .itemInputs('1x #forge:dyes/black')
  //   .itemInputs('1x #forge:dusts/glowstone')
  //   .itemInputs('1x #forge:foils/polyethylene')
  //   .inputFluids(Fluid.of('minecraft:water', 250))
  //   .itemOutputs('2x minecraft:glow_ink_sac')
  //   .duration(40)
  //   .EUt(24)

  event.recipes.gtceu.chemical_reactor('kubejs:minecraft/glow_ink_sac/fluid')
    .itemInputs('1x #forge:dyes/black')
    .itemInputs('1x #forge:foils/polyethylene')
    .inputFluids(Fluid.of('gtceu:glowstone', 144))
    .itemOutputs('4x minecraft:glow_ink_sac')
    .duration(40)
    .EUt(24)


  // fin //

})



