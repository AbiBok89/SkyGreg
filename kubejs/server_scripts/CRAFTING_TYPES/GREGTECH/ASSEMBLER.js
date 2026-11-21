// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680
  let LUV = 30720
  let ZPM = 122880
  let UV = 491520

  const seconds = 20

  const ingF1 = 144
  const ingF2 = ingF1 * 2
  const ingF3 = ingF1 * 3
  const ingF4 = ingF1 * 4
  const ingF5 = ingF1 * 5
  const ingF6 = ingF1 * 6
  const ingF7 = ingF1 * 7
  const ingF8 = ingF1 * 8
  const ingF9 = ingF1 * 9
  const ingF10 = ingF1 * 10
  const ingF11 = ingF1 * 11
  const ingF12 = ingF1 * 12

  const plateCast = 'gtceu:plate_casting_mold'

  const rubber1 = 'gtceu:rubber'
  const rubber2 = 'gtceu:silicone_rubber'
  const rubber3 = 'gtceu:styrene_butadiene_rubber'

  const plastic1 = 'gtceu:polyethylene'
  const plastic2 = 'gtceu:polytetrafluoroethylene'
  const plastic3 = 'gtceu:polybenzimidazole'


  // smithing templates
  const templatesIF = 'gtceu:hydrochloric_acid 288'
  const templateAssembling = [
    { out: 'minecraft:netherite_upgrade_smithing_template', in1: '#forge:dusts/netherrack', in2: '8x #forge:gems/diamond', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:sentry_armor_trim_smithing_template', in1: '#forge:dusts/stone', in2: '8x #forge:gems/lapis', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:vex_armor_trim_smithing_template', in1: '#forge:dusts/stone', in2: '8x #forge:gems/nether_quartz', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:wild_armor_trim_smithing_template', in1: 'gtceu:plant_ball', in2: '8x #forge:gems/apatite', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:coast_armor_trim_smithing_template', in1: '#forge:dusts/stone', in2: '8x #forge:gems/monazite', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:dune_armor_trim_smithing_template', in1: '#forge:sand/colorless', in2: '8x #forge:gems/blue_topaz', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:wayfinder_armor_trim_smithing_template', in1: '#forge:dusts/clay', in2: '8x #forge:gems/grossular', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:raiser_armor_trim_smithing_template', in1: '#forge:dusts/clay', in2: '8x #forge:gems/spessartine', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:shaper_armor_trim_smithing_template', in1: '#forge:dusts/clay', in2: '8x #forge:gems/yellow_garnet', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:host_armor_trim_smithing_template', in1: '#forge:dusts/clay', in2: '8x #forge:gems/topaz', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:ward_armor_trim_smithing_template', in1: '#forge:dusts/deepslate', in2: '8x #forge:gems/sapphire', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:silence_armor_trim_smithing_template', in1: '#forge:dusts/deepslate', in2: '8x #forge:gems/lazurite', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:tide_armor_trim_smithing_template', in1: '#forge:dusts/prismarine', in2: '8x #forge:gems/sodalite', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:snout_armor_trim_smithing_template', in1: '#forge:dusts/blackstone', in2: '8x #forge:gems/flint', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:rib_armor_trim_smithing_template', in1: '#forge:dusts/netherrack', in2: '8x #forge:gems/red_garnet', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:eye_armor_trim_smithing_template', in1: '#forge:dusts/endstone', in2: '8x #forge:gems/certus_quartz', inF: templatesIF, nonC: plateCast },
    { out: 'minecraft:spire_armor_trim_smithing_template', in1: 'minecraft:chorus_fruit', in2: '8x #forge:gems/fluix', inF: templatesIF, nonC: plateCast },
  ]

  const assembleTemplates = (output, input1, input2, inputF, nonCon, id) => {
    event.recipes.gtceu.assembler(id)
      .itemInputs(input1)
      .itemInputs(input2)
      .notConsumable(nonCon)
      .inputFluids(inputF)
      .itemOutputs(output)
      .duration(200)
      .EUt(LV)
  }

  templateAssembling.forEach(template => {
    const outId = (template.out.id ?? Item.of(template.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    assembleTemplates(template.out, template.in1, template.in2, template.inF, template.nonC, `kubejs:${outMod}/${outItem}`)
  })

  // darkutils plates
  const darkPlate = '3x darkutils:blank_plate'
  const effectPlatesOQ = 3
  const effectPlatesIF = 'gtceu:rubber 144'
  const vectorPlatesOQ = 6
  const vectorPlatesIF = 'gtceu:rubber 288'
  const darkPlateAssembling = [
    { out: `${effectPlatesOQ}x darkutils:damage_plate`, in1: 'gtceu:steel_drill_head', in2: '2x minecraft:crimson_fungus', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:damage_plate_maim`, in1: 'gtceu:steel_buzz_saw_blade', in2: '2x minecraft:shroomlight', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:damage_plate_player`, in1: 'gtceu:diamond_drill_head', in2: '2x minecraft:phantom_membrane', in3: darkPlate, inF: effectPlatesIF, suffix1: 'from_phantom', suffix2: 'from_player' },
    { out: `${effectPlatesOQ}x darkutils:flame_plate`, in1: 'minecraft:flint_and_steel', in2: '2x #forge:dusts/blaze', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:slowness_plate`, in1: 'minecraft:snow_block', in2: '2x minecraft:soul_sand', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:fatigue_plate`, in1: '#forge:gems/prismarine', in2: '2x #forge:dusts/prismarine', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:darkness_plate`, in1: 'minecraft:phantom_membrane', in2: '2x minecraft:ink_sac', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:hunger_plate`, in1: 'minecraft:nether_wart', in2: '2x minecraft:rotten_flesh', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:weakness_plate`, in1: 'minecraft:fermented_spider_eye', in2: '2x minecraft:brown_mushroom', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:poison_plate`, in1: 'minecraft:spider_eye', in2: '2x minecraft:poisonous_potato', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:wither_plate`, in1: 'minecraft:wither_rose', in2: '2x #forge:gems/flint', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:alert_plate`, in1: 'minecraft:glow_ink_sac', in2: '2x #forge:dusts/glowstone', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:levitation_plate`, in1: 'minecraft:popped_chorus_fruit', in2: '2x #forge:feathers', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:misfortune_plate`, in1: '#forge:ingots/gold', in2: '2x minecraft:phantom_membrane', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:slowfall_plate`, in1: 'minecraft:phantom_membrane', in2: '2x #forge:feathers', in3: darkPlate, inF: effectPlatesIF },
    { out: `${effectPlatesOQ}x darkutils:omen_plate`, in1: 'minecraft:totem_of_undying', in2: '2x minecraft:nether_wart', in3: darkPlate, inF: effectPlatesIF, altID: 'ominous_plate' },
    { out: `${effectPlatesOQ}x darkutils:frost_plate`, in1: 'minecraft:snow_block', in2: '2x minecraft:snowball', in3: darkPlate, inF: effectPlatesIF },
    { out: `${vectorPlatesOQ}x darkutils:vector_plate`, in1: '6x darkutils:blank_plate', in2: '2x #forge:plates/emerald', in3: '#forge:dusts/sugar', inF: vectorPlatesIF },
    { out: `${vectorPlatesOQ}x darkutils:vector_plate_fast`, in1: '6x darkutils:vector_plate', in2: '2x #forge:plates/topaz', in3: '#forge:dusts/sugar', inF: vectorPlatesIF },
    { out: `${vectorPlatesOQ}x darkutils:vector_plate_extreme`, in1: '6x darkutils:vector_plate_fast', in2: '2x #forge:plates/ruby', in3: '#forge:dusts/sugar', inF: vectorPlatesIF },
    { out: '1x darkutils:vector_plate_ultra', in1: '6x darkutils:vector_plate_extreme', in2: '2x #forge:plates/sapphire', in3: '6x waystones:warp_dust', inF: vectorPlatesIF },
  ]

  const assembleDarkPlates = (output, input1, input2, input3, inputF, id) => {
    event.recipes.gtceu.assembler(id)
      .itemInputs(input1)
      .itemInputs(input2)
      .itemInputs(input3)
      .inputFluids(inputF)
      .itemOutputs(output)
      .duration(200)
      .EUt(24)
      .addMaterialInfo(true)
  }

  darkPlateAssembling.forEach(plate => {
    const outId = (plate.out.id ?? Item.of(plate.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    event.remove({ id: `darkutils:crafting/${outItem}` })
    if (plate.suffix1) event.remove({ id: `darkutils:crafting/${outItem}_${plate.suffix1}` })
    if (plate.suffix2) event.remove({ id: `darkutils:crafting/${outItem}_${plate.suffix2}` })
    if (plate.altID) event.remove({ id: `darkutils:crafting/${plate.altID}` })
    assembleDarkPlates(plate.out, plate.in1, plate.in2, plate.in3, plate.inF, `kubejs:${outMod}/${outItem}`)
  })

  // enderio conduits
  const conduitsI = { rubber: 'gtceu:rubber 144', poly: 'gtceu:polyethylene 144', ptfe: 'gtceu:polytetrafluoroethylene 144', glass: '#forge:glass', binder: '2x enderio:conduit_binder' }
  const conduitsOQ = { rubber: 3, poly: 6, ptfe: 12 }
  const conduitAssembling = [
    { out: `${conduitsOQ.rubber}x enderio:bronze_energy_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/bronze', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:bronze_energy_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/bronze', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:bronze_energy_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/bronze', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:steel_energy_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:steel_energy_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:steel_energy_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:aluminium_energy_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/aluminium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:aluminium_energy_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/aluminium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:aluminium_energy_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/aluminium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:stainless_steel_energy_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/stainless_steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:stainless_steel_energy_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/stainless_steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:stainless_steel_energy_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/stainless_steel', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:fluid_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/wrought_iron', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:fluid_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/wrought_iron', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:fluid_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/wrought_iron', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:pressurized_fluid_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/blue_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:pressurized_fluid_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/blue_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:pressurized_fluid_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/blue_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:ender_fluid_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/emerald', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:ender_fluid_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/emerald', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:ender_fluid_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/emerald', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:redstone_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/red_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:redstone_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/red_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:redstone_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/red_alloy', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:item_conduit`, inF: conduitsI.rubber, in1: '2x #forge:plates/thorium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:item_conduit`, inF: conduitsI.poly, in1: '2x #forge:plates/thorium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:item_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:plates/thorium', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:me_conduit`, inF: conduitsI.rubber, in1: '2x #forge:gems/fluix', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:me_conduit`, inF: conduitsI.poly, in1: '2x #forge:gems/fluix', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:me_conduit`, inF: conduitsI.ptfe, in1: '2x #forge:gems/fluix', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.rubber}x enderio:dense_me_conduit`, inF: conduitsI.rubber, in1: '2x ae2:fluix_block', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.poly}x enderio:dense_me_conduit`, inF: conduitsI.poly, in1: '2x ae2:fluix_block', in2: conduitsI.glass, in3: conduitsI.binder },
    { out: `${conduitsOQ.ptfe}x enderio:dense_me_conduit`, inF: conduitsI.ptfe, in1: '2x ae2:fluix_block', in2: conduitsI.glass, in3: conduitsI.binder },
  ]

  const assembleConduits = (output, input1, input2, input3, inputF, id) => {
    event.recipes.gtceu.assembler(id)
      .itemInputs(input1)
      .itemInputs(input2)
      .itemInputs(input3)
      .inputFluids(inputF)
      .itemOutputs(output)
      .duration(100)
      .EUt(LV)
      .addMaterialInfo(true)
  }

  conduitAssembling.forEach(conduit => {
    const outId = (conduit.out.id ?? Item.of(conduit.out).id)
    const inFluidId = (conduit.inF.id ?? Fluid.of(conduit.inF).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inFluid = inFluidId.split(':')[1]
    assembleConduits(conduit.out, conduit.in1, conduit.in2, conduit.in3, conduit.inF, `kubejs:${outMod}/${outItem}/${inFluid}`)
  })

  // wither_skeleton_skull
  event.recipes.gtceu.assembler('kubejs:wither_skeleton_skull')
    .itemInputs('4x wstweaks:fragment')
    .itemInputs('#forge:storage_blocks/bone')
    .inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
    .itemOutputs('minecraft:wither_skeleton_skull')
    .duration(200)
    .EUt(HV)

  // entity_conveyor
  event.remove({ output: 'mob_grinding_utils:entity_conveyor' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/entity_conveyor')
    .itemInputs('4x #forge:plates/thorium')
    .itemInputs('4x #forge:rods/thorium')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x gtceu:sticky_resin')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('4x mob_grinding_utils:entity_conveyor')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // tank
  event.remove({ output: 'mob_grinding_utils:tank' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/tank')
    .itemInputs('4x #forge:plates/rubber')
    .itemInputs('4x #forge:plates/thorium')
    .inputFluids(Fluid.of('gtceu:glass', 576))
    .itemOutputs('mob_grinding_utils:tank')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // tank_sink
  event.remove({ id: 'mob_grinding_utils:recipe_tank_sink' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/tank_sink')
    .itemInputs('1x minecraft:iron_bars')
    .itemInputs('1x flopper:flopper')
    .itemInputs('1x mob_grinding_utils:tank')
    .itemInputs('2x #forge:gems/ender_pearl')
    .itemOutputs('mob_grinding_utils:tank_sink')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // jumbo_tank
  event.remove({ output: 'mob_grinding_utils:jumbo_tank' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/jumbo_tank')
    .itemInputs('4x mob_grinding_utils:tank')
    .itemInputs('2x #gtceu:circuits/mv')
    .itemInputs('2x #forge:gears/aluminium')
    .itemInputs('4x #forge:plates/steel')
    .inputFluids(Fluid.of('gtceu:thorium', 2592))
    .itemOutputs('mob_grinding_utils:jumbo_tank')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // entity_spawner
  event.remove({ id: 'mob_grinding_utils:recipe_entity_spawner' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/entity_spawner')
    .itemInputs('3x #forge:gems/ender_pearl')
    .itemInputs('1x #forge:storage_blocks/redstone')
    .itemInputs('2x #forge:storage_blocks/iron')
    .itemInputs('1x minecraft:piston')
    .inputFluids(Fluid.of('gtceu:thorium', 2592))
    .itemOutputs('mob_grinding_utils:entity_spawner')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // absorption_hopper
  event.remove({ output: 'mob_grinding_utils:absorption_hopper' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/absorption_hopper')
    .itemInputs('minecraft:hopper')
    .itemInputs('gtceu:lv_field_generator')
    .itemInputs('2x #forge:small_gears/steel')
    .itemInputs('4x #forge:plates/thorium')
    .inputFluids(Fluid.of('gtceu:thorium', 1296))
    .itemOutputs('mob_grinding_utils:absorption_hopper')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // ender_inhibitor_on
  event.remove({ output: 'mob_grinding_utils:ender_inhibitor_on' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/ender_inhibitor_on')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('#forge:gems/ender_pearl')
    .itemInputs('2x #forge:plates/thorium')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:ender_inhibitor_on')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // tinted_glass
  event.remove({ output: 'mob_grinding_utils:tinted_glass' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/tinted_glass')
    .itemInputs('#forge:glass/colorless')
    .itemInputs('2x gtceu:obsidian_dust')
    .inputFluids(Fluid.of('gtceu:thorium', 288))
    .itemOutputs('mob_grinding_utils:tinted_glass')
    .duration(60)
    .EUt(LV)
    .addMaterialInfo(true)

  // fan_upgrade_width
  event.remove({ output: 'mob_grinding_utils:fan_upgrade_width' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/fan_upgrade_width')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:springs/gold')
    .itemInputs('#forge:rotors/steel')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:fan_upgrade_width')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // fan_upgrade_speed
  event.remove({ output: 'mob_grinding_utils:fan_upgrade_speed' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/fan_upgrade_speed')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:gears/bronze')
    .itemInputs('#forge:rotors/steel')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:fan_upgrade_speed')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // fan_upgrade_height
  event.remove({ output: 'mob_grinding_utils:fan_upgrade_height' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/fan_upgrade_height')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/bronze')
    .itemInputs('#forge:rotors/steel')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:fan_upgrade_height')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // absorption_upgrade
  event.remove({ output: 'mob_grinding_utils:absorption_upgrade' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/absorption_upgrade')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:ender_pearls')
    .itemInputs('minecraft:hopper')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:absorption_upgrade')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_arthropod
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_arthropod' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_arthropod')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x minecraft:spider_eye')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_arthropod')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_beheading
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_beheading' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_beheading')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x gtceu:bronze_buzz_saw_blade')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_beheading')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_fire
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_fire' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_fire')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x gtceu:firebrick')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_fire')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_looting
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_looting' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_looting')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x #forge:flawless_gems/lapis')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_looting')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_sharpness
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_sharpness' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_sharpness')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x gtceu:bronze_turbine_blade')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_sharpness')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw_upgrade_smite
  event.remove({ output: 'mob_grinding_utils:saw_upgrade_smite' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw_upgrade_smite')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x #forge:rods/long/silver')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:saw_upgrade_smite')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // xp_solidifier_upgrade
  event.remove({ output: 'mob_grinding_utils:xp_solidifier_upgrade' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/xp_solidifier_upgrade')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x mob_grinding_utils:solid_xp_baby')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:xp_solidifier_upgrade')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // spawner_upgrade_width
  event.remove({ output: 'mob_grinding_utils:spawner_upgrade_width' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/spawner_upgrade_width')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:springs/gold')
    .itemInputs('4x #forge:dusts/blaze')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:spawner_upgrade_width')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // spawner_upgrade_height
  event.remove({ output: 'mob_grinding_utils:spawner_upgrade_height' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/spawner_upgrade_height')
    .itemInputs('#forge:plates/red_alloy')
    .itemInputs('2x #forge:foils/gold')
    .itemInputs('4x #forge:dusts/blaze')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:spawner_upgrade_height')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // fan
  event.remove({ output: 'mob_grinding_utils:fan' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/fan')
    .itemInputs('4x #forge:plates/thorium')
    .itemInputs('1x #forge:rotors/steel')
    .itemInputs('1x gtceu:steel_gearbox')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 144))
    .itemOutputs('mob_grinding_utils:fan')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // saw
  event.remove({ output: 'mob_grinding_utils:saw' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/saw')
    .itemInputs('3x gtceu:diamond_buzz_saw_blade')
    .itemInputs('2x mob_grinding_utils:spikes')
    .itemInputs('1x #forge:storage_blocks/red_alloy')
    .itemInputs('1x gtceu:steel_gearbox')
    .itemInputs('2x #gtceu:circuits/lv')
    .itemOutputs('mob_grinding_utils:saw')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // spikes
  event.remove({ output: 'mob_grinding_utils:spikes' })
  event.recipes.gtceu.assembler('kubejs:mob_grinding_utils/spikes')
    .itemInputs('3x gtceu:iron_drill_head')
    .itemInputs('1x #forge:storage_blocks/thorium')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('mob_grinding_utils:spikes')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // basic_water_generator
  event.remove({ output: 'simplefluidgenerators:basic_water_generator' })
  event.recipes.gtceu.assembler('kubejs:basic_water_generator/rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/clay')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('simplefluidgenerators:basic_water_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:basic_water_generator/silicone_rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/clay')
    .inputFluids(Fluid.of(rubber2, 288))
    .itemOutputs('simplefluidgenerators:basic_water_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)

  event.recipes.gtceu.assembler('kubejs:basic_water_generator/styrene_butadiene_rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/clay')
    .inputFluids(Fluid.of(rubber3, 144))
    .itemOutputs('simplefluidgenerators:basic_water_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)

  // basic_lava_generator
  event.remove({ output: 'simplefluidgenerators:basic_lava_generator' })
  event.recipes.gtceu.assembler('kubejs:basic_lava_generator/rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/netherrack')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('simplefluidgenerators:basic_lava_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:basic_lava_generator/silicone_rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/netherrack')
    .inputFluids(Fluid.of(rubber2, 288))
    .itemOutputs('simplefluidgenerators:basic_lava_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)

  event.recipes.gtceu.assembler('kubejs:basic_lava_generator/styrene_butadiene_rubber')
    .itemInputs('4x #forge:plates/iron')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('4x #forge:dusts/netherrack')
    .inputFluids(Fluid.of(rubber3, 144))
    .itemOutputs('simplefluidgenerators:basic_lava_generator')
    .duration(200)
    .EUt(24)
    .circuit(1)

  // spawner
  event.remove({ output: 'minecraft:spawner' })
  event.recipes.gtceu.assembler('kubejs:spawner')
    .itemInputs('mob_grinding_utils:entity_spawner')
    .itemInputs('8x #forge:rods/steel')
    .itemInputs('mob_grinding_utils:solid_xp_block')
    .itemInputs('gtceu:lv_field_generator')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('minecraft:spawner')
    .duration(100)
    .EUt(LV)
    .addMaterialInfo(true)

  // calculation_processor_press
  event.remove({ output: 'ae2:calculation_processor_press' })
  event.recipes.gtceu.assembler('kubejs:calculation_processor_press')
    .itemInputs('gtceu:empty_mold')
    .itemInputs('#forge:gems/certus_quartz')
    .itemOutputs('ae2:calculation_processor_press')
    .duration(100)
    .EUt(LV)

  // logic_processor_press
  event.remove({ output: 'ae2:logic_processor_press' })
  event.recipes.gtceu.assembler('kubejs:logic_processor_press')
    .itemInputs('gtceu:empty_mold')
    .itemInputs('minecraft:gold_ingot')
    .itemOutputs('ae2:logic_processor_press')
    .duration(100)
    .EUt(LV)

  // engineering_processor_press
  event.remove({ output: 'ae2:engineering_processor_press' })
  event.recipes.gtceu.assembler('kubejs:engineering_processor_press')
    .itemInputs('gtceu:empty_mold')
    .itemInputs('minecraft:diamond')
    .itemOutputs('ae2:engineering_processor_press')
    .duration(100)
    .EUt(LV)

  // silicon_processor_press
  event.remove({ output: 'ae2:silicon_processor_press' })
  event.recipes.gtceu.assembler('kubejs:silicon_processor_press')
    .itemInputs('gtceu:empty_mold')
    .itemInputs('ae2:silicon')
    .itemOutputs('ae2:silicon_press')
    .duration(100)
    .EUt(LV)

  // travel_anchor
  event.recipes.gtceu.assembler('kubejs:travel_anchor')
    .itemInputs('gtceu:lv_machine_hull')
    .itemInputs('minecraft:ender_pearl')
    .itemInputs('4x gtceu:invar_plate')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('travelanchors:travel_anchor')
    .duration(100)
    .EUt(LV)
    .addMaterialInfo(true)

  // fluid_tank
  event.recipes.gtceu.assembler('kubejs:fluid_tank')
    .itemInputs('gtceu:steel_drum')
    .itemInputs('#gtceu:circuits/lv')
    .itemInputs('gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(plastic1, 144))
    .itemOutputs('enderio:fluid_tank')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // pressurized_fluid_tank
  event.recipes.gtceu.assembler('kubejs:pressurized_fluid_tank')
    .itemInputs('gtceu:aluminium_drum')
    .itemInputs('#gtceu:circuits/mv')
    .itemInputs('gtceu:mv_electric_pump')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('enderio:pressurized_fluid_tank')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // energy_core
  event.remove({ output: 'exocraft:energy_core' })
  event.recipes.gtceu.assembler('kubejs:energy_core')
    .itemInputs('4x #forge:fine_wires/electrum')
    .itemInputs('4x #forge:fine_wires/red_alloy')
    .itemInputs('4x enderio:conduit_binder')
    .itemInputs('1x exocraft:redstone_circuit')
    .itemInputs('1x gtceu:energium_dust')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('1x gtceu:red_alloy_plate')
    .inputFluids(Fluid.of('gtceu:redstone', 288))
    .itemOutputs('exocraft:energy_core')
    .duration(100)
    .EUt(MV)
    .addMaterialInfo(true)

  // redstone_circuit
  event.remove({ output: 'exocraft:redstone_circuit' })
  event.recipes.gtceu.assembler('kubejs:redstone_circuit')
    .itemInputs('2x #forge:fine_wires/annealed_copper')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x laserio:logic_chip')
    .itemInputs('4x gtceu:nand_chip')
    .itemInputs('1x gtceu:iron_plate')
    .inputFluids(Fluid.of('gtceu:redstone', 288))
    .itemOutputs('exocraft:redstone_circuit')
    .duration(100)
    .EUt(MV)
    .addMaterialInfo(true)

  // unit_atlas
  event.recipes.gtceu.assembler('kubejs:unit_atlas')
    .itemInputs('2x #forge:gems/lazurite')
    .itemInputs('1x #gtceu:circuits/mv')
    .itemInputs('1x gtceu:plastic_circuit_board')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('exocraft:unit_atlas')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // unit_ogre
  event.recipes.gtceu.assembler('kubejs:unit_ogre')
    .itemInputs('2x #forge:gems/red_garnet')
    .itemInputs('1x #gtceu:circuits/mv')
    .itemInputs('1x gtceu:plastic_circuit_board')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('exocraft:unit_ogre')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // unit_legion
  event.recipes.gtceu.assembler('kubejs:unit_legion')
    .itemInputs('2x #forge:gems/amethyst')
    .itemInputs('1x #gtceu:circuits/mv')
    .itemInputs('1x gtceu:plastic_circuit_board')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('exocraft:unit_legion')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // unit_stryder
  event.recipes.gtceu.assembler('kubejs:unit_stryder')
    .itemInputs('2x #forge:gems/yellow_garnet')
    .itemInputs('1x #gtceu:circuits/mv')
    .itemInputs('1x gtceu:plastic_circuit_board')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('exocraft:unit_stryder')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // unit_ion
  event.recipes.gtceu.assembler('kubejs:unit_ion')
    .itemInputs('2x #forge:gems/olivine')
    .itemInputs('1x #gtceu:circuits/mv')
    .itemInputs('1x gtceu:plastic_circuit_board')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('exocraft:unit_ion')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // creative_energy_cell
  event.recipes.gtceu.assembler('kubejs:creative_energy_cell')
    .itemInputs('8x ae2:dense_energy_cell')
    .itemInputs('4x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('ae2:creative_energy_cell')
    .duration(2000)
    .EUt(LV)

  // basic_travel_boots_boots
  event.remove({ output: 'travelboots:basic_travel_boots_boots' })
  event.recipes.gtceu.assembler('kubejs:basic_travel_boots_boots')
    .itemInputs('1x minecraft:iron_boots')
    .itemInputs('2x gtceu:lv_electric_piston')
    .itemInputs('2x gtceu:gold_plate')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('travelboots:basic_travel_boots_boots')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // enchanter
  event.recipes.gtceu.assembler('kubejs:enchanter')
    .itemInputs('1x minecraft:enchanting_table')
    .itemInputs('2x #gtceu:circuits/lv')
    .itemInputs('4x #forge:double_plates/steel')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('enderio:enchanter')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // vacuum_chest
  event.recipes.gtceu.assembler('kubejs:vacuum_chest')
    .itemInputs('1x minecraft:chest')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('4x #forge:double_plates/black_steel')
    .itemInputs('1x gtceu:black_steel_frame')
    .inputFluids(Fluid.of(plastic1, 1296))
    .itemOutputs('enderio:vacuum_chest')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // xp_vacuum
  event.recipes.gtceu.assembler('kubejs:xp_vacuum')
    .itemInputs('1x minecraft:chest')
    .itemInputs('1x gtceu:mv_emitter')
    .itemInputs('4x #forge:double_plates/black_steel')
    .itemInputs('1x gtceu:black_steel_frame')
    .inputFluids(Fluid.of(plastic1, 1296))
    .itemOutputs('enderio:xp_vacuum')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // xp_obelisk
  event.recipes.gtceu.assembler('kubejs:xp_obelisk')
    .itemInputs('1x enderio:xp_vacuum')
    .itemInputs('1x enderio:experience_rod')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('4x #forge:plates/polyethylene')
    .inputFluids(Fluid.of('gtceu:black_steel', 576))
    .itemOutputs('enderio:xp_obelisk')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // aversion_obelisk
  event.recipes.gtceu.assembler('kubejs:aversion_obelisk')
    .itemInputs('1x enderio:vacuum_chest')
    .itemInputs('1x enderio:empty_soul_vial')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('4x #forge:plates/polyethylene')
    .inputFluids(Fluid.of('gtceu:black_steel', 576))
    .itemOutputs('enderio:aversion_obelisk')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // experience_rod
  event.recipes.gtceu.assembler('kubejs:experience_rod')
    .itemInputs('1x travelanchors:travel_staff')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('1x gtceu:mv_emitter')
    .itemInputs('4x #forge:rods/aluminium')
    .inputFluids(Fluid.of(plastic1, 576))
    .itemOutputs('enderio:experience_rod')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // basic_capacitor
  event.recipes.gtceu.assembler('kubejs:basic_capacitor')
    .itemInputs('1x #forge:foils/tin')
    .itemInputs('2x #forge:bolts/tin')
    .itemInputs('2x #forge:dusts/carbon')
    .inputFluids(Fluid.of(plastic1, 576))
    .itemOutputs('2x enderio:basic_capacitor')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // conduit_probe
  event.recipes.gtceu.assembler('kubejs:conduit_probe')
    .itemInputs('4x #forge:screws/invar')
    .itemInputs('2x #forge:bolts/invar')
    .itemInputs('4x #forge:fine_wires/tin')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x enderio:conduit_probe')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // shrinking_device
  event.remove({ output: 'shrink:shrinking_device' })
  event.recipes.gtceu.assembler('kubejs:shrinking_device')
    .itemInputs('2x #forge:plates/steel')
    .itemInputs('2x #forge:foils/steel')
    .itemInputs('2x #forge:screws/steel')
    .itemInputs('4x #forge:fine_wires/copper')
    .itemInputs('1x gtceu:lv_emitter')
    .itemInputs('1x #minecraft:stone_buttons')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('1x shrink:shrinking_device')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  // tesseract
  event.remove({ output: 'tesseract:tesseract' })
  event.recipes.gtceu.assembler('kubejs:tesseract')
    .itemInputs('1x #forge:storage_blocks/ender_pearl')
    .itemInputs('1x gtceu:mv_emitter')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('1x gtceu:aluminium_frame')
    .inputFluids(Fluid.of(plastic1, 1296))
    .itemOutputs('1x tesseract:tesseract')
    .duration(200)
    .EUt(MV)
    .addMaterialInfo(true)

  // block
  event.remove({ output: 'entangled:block' })
  event.recipes.gtceu.assembler('kubejs:entangled/block/rubber')
    .itemInputs('1x #forge:storage_blocks/ender_pearl')
    .itemInputs('1x gtceu:lv_emitter')
    .itemInputs('1x gtceu:lv_sensor')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('1x entangled:block')
    .duration(200)
    .EUt(LV)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:entangled/block/silicone_rubber')
    .itemInputs('1x #forge:storage_blocks/ender_pearl')
    .itemInputs('1x gtceu:lv_emitter')
    .itemInputs('1x gtceu:lv_sensor')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of(rubber2, 648))
    .itemOutputs('1x entangled:block')
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu.assembler('kubejs:entangled/block/styrene_butadiene_rubber')
    .itemInputs('1x #forge:storage_blocks/ender_pearl')
    .itemInputs('1x gtceu:lv_emitter')
    .itemInputs('1x gtceu:lv_sensor')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of(rubber3, 324))
    .itemOutputs('1x entangled:block')
    .duration(200)
    .EUt(LV)

  // waystone
  event.remove({ output: 'waystones:waystone' })
  event.recipes.gtceu.assembler('kubejs:waystone')
    .itemInputs('4x minecraft:stone_bricks')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // mossy_waystone
  event.remove({ output: 'waystones:mossy_waystone' })
  event.recipes.gtceu.assembler('kubejs:mossy_waystone')
    .itemInputs('4x minecraft:mossy_stone_bricks')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:mossy_waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // sandy_waystone
  event.remove({ output: 'waystones:sandy_waystone' })
  event.recipes.gtceu.assembler('kubejs:sandy_waystone')
    .itemInputs('4x minecraft:chiseled_sandstone')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:sandy_waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // deepslate_waystone
  event.remove({ output: 'waystones:deepslate_waystone' })
  event.recipes.gtceu.assembler('kubejs:deepslate_waystone')
    .itemInputs('4x minecraft:deepslate')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:deepslate_waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // blackstone_waystone
  event.remove({ output: 'waystones:blackstone_waystone' })
  event.recipes.gtceu.assembler('kubejs:blackstone_waystone')
    .itemInputs('4x minecraft:blackstone')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:blackstone_waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // end_stone_waystone
  event.remove({ output: 'waystones:end_stone_waystone' })
  event.recipes.gtceu.assembler('kubejs:end_stone_waystone')
    .itemInputs('4x minecraft:end_stone_bricks')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:end_stone_waystone')
    .duration(200)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // sharestone
  event.remove({ output: 'waystones:sharestone' })
  event.recipes.gtceu.assembler('kubejs:sharestone')
    .itemInputs('3x minecraft:stone_bricks')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:sharestone')
    .duration(200)
    .EUt(LV)
    .circuit(2)
    .addMaterialInfo(true)

  // portstone
  event.remove({ output: 'waystones:portstone' })
  event.recipes.gtceu.assembler('kubejs:portstone')
    .itemInputs('3x minecraft:stone_bricks')
    .itemInputs('3x minecraft:polished_andesite')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('2x gtceu:steel_frame')
    .inputFluids(Fluid.of('gtceu:concrete', 1152))
    .itemOutputs('1x waystones:portstone')
    .duration(200)
    .EUt(LV)
    .circuit(2)
    .addMaterialInfo(true)

  // warp_plate
  event.remove({ output: 'waystones:warp_plate' })
  event.recipes.gtceu.assembler('kubejs:warp_plate')
    .itemInputs('1x minecraft:stone_pressure_plate')
    .itemInputs('4x waystones:warp_dust')
    .itemInputs('1x minecraft:flint')
    .inputFluids(Fluid.of('gtceu:concrete', 288))
    .itemOutputs('1x waystones:warp_plate')
    .duration(100)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // matter_receiver
  event.remove({ output: 'rftoolsutility:matter_receiver' })
  event.recipes.gtceu.assembler('kubejs:matter_receiver')
    .itemInputs('1x gtceu:lv_sensor')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x rftoolsbase:machine_frame')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('1x rftoolsutility:matter_receiver')
    .duration(100)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // matter_transmitter
  event.remove({ output: 'rftoolsutility:matter_transmitter' })
  event.recipes.gtceu.assembler('kubejs:matter_transmitter')
    .itemInputs('1x gtceu:lv_emitter')
    .itemInputs('1x waystones:warp_stone')
    .itemInputs('1x rftoolsbase:machine_frame')
    .inputFluids(Fluid.of(rubber1, 1296))
    .itemOutputs('1x rftoolsutility:matter_transmitter')
    .duration(100)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // basic_collector
  event.remove({ output: 'itemcollectors:basic_collector' })
  event.recipes.gtceu.assembler('kubejs:basic_collector')
    .itemInputs('1x #forge:ender_pearls')
    .itemInputs('1x gtceu:lv_sensor')
    .itemInputs('1x #forge:rods/steel')
    .itemInputs('1x #forge:plates/obsidian')
    .inputFluids(Fluid.of('gtceu:thorium', 576))
    .itemOutputs('1x itemcollectors:basic_collector')
    .duration(100)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // advanced_collector
  event.remove({ output: 'itemcollectors:advanced_collector' })
  event.recipes.gtceu.assembler('kubejs:advanced_collector')
    .itemInputs('1x #forge:gems/ender_pearl')
    .itemInputs('1x gtceu:mv_sensor')
    .itemInputs('1x itemcollectors:basic_collector')
    .inputFluids(Fluid.of('gtceu:thorium', 576))
    .itemOutputs('1x itemcollectors:advanced_collector')
    .duration(100)
    .EUt(LV)
    .circuit(1)
    .addMaterialInfo(true)

  // iron_frame
  event.remove({ output: 'advgenerators:iron_frame' })
  event.recipes.gtceu.assembler('kubejs:iron_frame')
    .itemInputs('4x #forge:rods/long/iron')
    .itemOutputs('1x advgenerators:iron_frame')
    .duration(50)
    .EUt(IV)
    .circuit(4)
    .addMaterialInfo(true)

  // power_io
  event.remove({ output: 'advgenerators:power_io' })
  event.recipes.gtceu.assembler('kubejs:power_io')
    .itemInputs('1x gtceu:iv_voltage_coil')
    .itemInputs('1x #forge:foils/red_alloy')
    .itemInputs('2x #forge:plates/polytetrafluoroethylene')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x advgenerators:power_io')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // iron_tubing
  event.remove({ output: 'advgenerators:iron_tubing' })
  event.recipes.gtceu.assembler('kubejs:iron_tubing')
    .itemInputs('1x #forge:rods/long/black_bronze')
    .itemInputs('4x #forge:springs/iron')
    .inputFluids(Fluid.of(plastic2, 144))
    .itemOutputs('1x advgenerators:iron_tubing')
    .duration(50)
    .EUt(IV)
    .addMaterialInfo(true)

  // iron_wiring
  event.remove({ output: 'advgenerators:iron_wiring' })
  event.recipes.gtceu.assembler('kubejs:iron_wiring')
    .itemInputs('1x #forge:rods/long/black_bronze')
    .itemInputs('16x #forge:fine_wires/red_alloy')
    .inputFluids(Fluid.of(plastic2, 144))
    .itemOutputs('1x advgenerators:iron_wiring')
    .duration(50)
    .EUt(IV)
    .addMaterialInfo(true)

  // controller
  event.remove({ output: 'advgenerators:controller' })
  event.recipes.gtceu.assembler('kubejs:controller')
    .itemInputs('1x #gtceu:circuits/iv')
    .itemInputs('8x #forge:fine_wires/silver')
    .itemInputs('8x #forge:bolts/sterling_silver')
    .itemInputs('1x gtceu:epoxy_circuit_board')
    .inputFluids(Fluid.of(plastic2, 144))
    .itemOutputs('1x advgenerators:controller')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_rotor_tier1
  event.remove({ output: 'advgenerators:turbine_rotor_tier1' })
  event.recipes.gtceu.assembler('kubejs:turbine_rotor_tier1')
    .itemInputs('8x gtceu:stainless_steel_turbine_blade')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemOutputs('1x advgenerators:turbine_rotor_tier1')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_rotor_tier2
  event.remove({ output: 'advgenerators:turbine_rotor_tier2' })
  event.recipes.gtceu.assembler('kubejs:turbine_rotor_tier2')
    .itemInputs('8x gtceu:titanium_turbine_blade')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemOutputs('1x advgenerators:turbine_rotor_tier2')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_rotor_tier3
  event.remove({ output: 'advgenerators:turbine_rotor_tier3' })
  event.recipes.gtceu.assembler('kubejs:turbine_rotor_tier3')
    .itemInputs('8x gtceu:tungsten_steel_turbine_blade')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemOutputs('1x advgenerators:turbine_rotor_tier3')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_rotor_tier4
  event.remove({ output: 'advgenerators:turbine_rotor_tier4' })
  event.recipes.gtceu.assembler('kubejs:turbine_rotor_tier4')
    .itemInputs('8x gtceu:rhodium_plated_palladium_turbine_blade')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemOutputs('1x advgenerators:turbine_rotor_tier4')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_rotor_tier5
  event.remove({ output: 'advgenerators:turbine_rotor_tier5' })
  event.recipes.gtceu.assembler('kubejs:turbine_rotor_tier5')
    .itemInputs('8x gtceu:naquadah_alloy_turbine_blade')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemOutputs('1x advgenerators:turbine_rotor_tier5')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // turbine_kit_tier2
  event.remove({ output: 'advgenerators:turbine_kit_tier2' })
  event.recipes.gtceu.assembler('kubejs:advgenerators/turbine_kit/2')
    .itemInputs('8x gtceu:titanium_turbine_blade')
    .itemInputs('8x gtceu:tungsten_steel_bolt')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:turbine_kit_tier2')
    .duration(100)
    .EUt(IV)
    .circuit(2)
    .addMaterialInfo(true)

  // turbine_kit_tier3
  event.remove({ output: 'advgenerators:turbine_kit_tier3' })
  event.recipes.gtceu.assembler('kubejs:advgenerators/turbine_kit/3')
    .itemInputs('8x gtceu:tungsten_steel_turbine_blade')
    .itemInputs('8x gtceu:tungsten_steel_bolt')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:turbine_kit_tier3')
    .duration(100)
    .EUt(IV)
    .circuit(2)
    .addMaterialInfo(true)

  // turbine_kit_tier4
  event.remove({ output: 'advgenerators:turbine_kit_tier4' })
  event.recipes.gtceu.assembler('kubejs:advgenerators/turbine_kit/4')
    .itemInputs('8x gtceu:rhodium_plated_palladium_turbine_blade')
    .itemInputs('8x gtceu:tungsten_steel_bolt')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:turbine_kit_tier4')
    .duration(100)
    .EUt(IV)
    .circuit(2)
    .addMaterialInfo(true)

  // turbine_kit_tier5
  event.remove({ output: 'advgenerators:turbine_kit_tier5' })
  event.recipes.gtceu.assembler('kubejs:advgenerators/turbine_kit/5')
    .itemInputs('8x gtceu:naquadah_alloy_turbine_blade')
    .itemInputs('8x gtceu:tungsten_steel_bolt')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:turbine_kit_tier5')
    .duration(100)
    .EUt(IV)
    .circuit(2)
    .addMaterialInfo(true)

  // capacitor_kit_tier2
  event.remove({ output: 'advgenerators:capacitor_kit_tier2' })
  event.recipes.gtceu.assembler('kubejs:capacitor_kit_tier2')
    .itemInputs('1x gtceu:iv_lapotronic_battery')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:capacitor_kit_tier2')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // capacitor_kit_tier3
  event.remove({ output: 'advgenerators:capacitor_kit_tier3' })
  event.recipes.gtceu.assembler('kubejs:capacitor_kit_tier3')
    .itemInputs('1x gtceu:luv_lapotronic_battery')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemInputs('1x advgenerators:upgrade_kit')
    .itemOutputs('1x advgenerators:capacitor_kit_tier3')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // fuel_turbine_controller
  event.remove({ output: 'advgenerators:fuel_turbine_controller' })
  event.recipes.gtceu.assembler('kubejs:fuel_turbine_controller')
    .itemInputs('1x gtceu:iv_machine_hull')
    .itemInputs('1x advgenerators:controller')
    .itemInputs('4x advgenerators:iron_tubing')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .inputFluids(Fluid.of('gtceu:vanadium_gallium', 1296))
    .itemOutputs('1x advgenerators:fuel_turbine_controller')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // steam_turbine_controller
  event.remove({ output: 'advgenerators:steam_turbine_controller' })
  event.recipes.gtceu.assembler('kubejs:steam_turbine_controller')
    .itemInputs('1x gtceu:iv_machine_hull')
    .itemInputs('1x advgenerators:controller')
    .itemInputs('4x advgenerators:iron_tubing')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .inputFluids(Fluid.of(plastic2, 1296))
    .itemOutputs('1x advgenerators:steam_turbine_controller')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // syngas_controller
  event.remove({ output: 'advgenerators:syngas_controller' })
  event.recipes.gtceu.assembler('kubejs:syngas_controller')
    .itemInputs('1x gtceu:iv_machine_hull')
    .itemInputs('1x advgenerators:controller')
    .itemInputs('1x advgenerators:pressure_valve')
    .itemInputs('4x advgenerators:iron_tubing')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .inputFluids(Fluid.of('gtceu:polyvinyl_butyral', 1296))
    .itemOutputs('1x advgenerators:syngas_controller')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // exchanger_controller
  event.remove({ output: 'advgenerators:exchanger_controller' })
  event.recipes.gtceu.assembler('kubejs:exchanger_controller')
    .itemInputs('1x gtceu:iv_machine_hull')
    .itemInputs('1x advgenerators:controller')
    .itemInputs('4x advgenerators:iron_tubing')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .inputFluids(Fluid.of('gtceu:cerium', 1296))
    .itemOutputs('1x advgenerators:exchanger_controller')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // power_capacitor_tier1
  event.remove({ output: 'advgenerators:power_capacitor_tier1' })
  event.recipes.gtceu.assembler('kubejs:power_capacitor_tier1')
    .itemInputs('1x gtceu:ev_lapotronic_battery')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .itemOutputs('1x advgenerators:power_capacitor_tier1')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // power_capacitor_tier2
  event.remove({ output: 'advgenerators:power_capacitor_tier2' })
  event.recipes.gtceu.assembler('kubejs:power_capacitor_tier2')
    .itemInputs('1x gtceu:iv_lapotronic_battery')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .itemOutputs('1x advgenerators:power_capacitor_tier2')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // power_capacitor_tier3
  event.remove({ output: 'advgenerators:power_capacitor_tier3' })
  event.recipes.gtceu.assembler('kubejs:power_capacitor_tier3')
    .itemInputs('1x gtceu:luv_lapotronic_battery')
    .itemInputs('8x #forge:bolts/tungsten_steel')
    .itemInputs('4x advgenerators:iron_wiring')
    .itemInputs('4x advgenerators:iron_frame')
    .itemOutputs('1x advgenerators:power_capacitor_tier3')
    .duration(100)
    .EUt(IV)
    .addMaterialInfo(true)

  // steel_machine_casing
  // event.recipes.gtceu.assembler('kubejs:steel_machine_casing')
  //   .itemInputs('8x #forge:plates/steel')
  //   .itemOutputs('1x gtceu:steel_machine_casing')
  //   .duration(25)
  //   .EUt(16)
  //   .circuit(8)

  // bronze_machine_casing
  event.recipes.gtceu.assembler('kubejs:bronze_machine_casing')
    .itemInputs('8x #forge:plates/bronze')
    .itemOutputs('1x gtceu:bronze_machine_casing')
    .duration(25)
    .EUt(16)
    .circuit(8)

  // extraction_speed_upgrade_1
  event.recipes.gtceu.assembler('kubejs:extraction_speed_upgrade_1')
    .itemInputs('4x #forge:foils/copper')
    .itemInputs('1x #forge:rods/copper')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:extraction_speed_upgrade_1')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // extraction_speed_upgrade_2
  event.recipes.gtceu.assembler('kubejs:extraction_speed_upgrade_2')
    .itemInputs('4x #forge:foils/annealed_copper')
    .itemInputs('1x #forge:rods/annealed_copper')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:extraction_speed_upgrade_2')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // extraction_speed_upgrade_3
  event.recipes.gtceu.assembler('kubejs:extraction_speed_upgrade_3')
    .itemInputs('4x #forge:foils/steel')
    .itemInputs('1x #forge:rods/steel')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:extraction_speed_upgrade_3')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // extraction_speed_upgrade_4
  event.recipes.gtceu.assembler('kubejs:extraction_speed_upgrade_4')
    .itemInputs('4x #forge:foils/black_steel')
    .itemInputs('1x #forge:rods/black_steel')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:extraction_speed_upgrade_4')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // basic_item_filter
  event.recipes.gtceu.assembler('kubejs:basic_item_filter')
    .itemInputs('1x gtceu:item_filter')
    .itemInputs('2x #forge:plates/steel')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:basic_item_filter')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // advanced_item_filter
  event.recipes.gtceu.assembler('kubejs:advanced_item_filter')
    .itemInputs('1x gtceu:item_filter')
    .itemInputs('2x #forge:plates/aluminium')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:advanced_item_filter')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // basic_fluid_filter
  event.recipes.gtceu.assembler('kubejs:basic_fluid_filter')
    .itemInputs('1x gtceu:fluid_filter')
    .itemInputs('2x #forge:plates/steel')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderio:basic_fluid_filter')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // ender_tank
  event.recipes.gtceu.assembler('kubejs:endertanks/ender_tank/conduit_binder')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x endertanks:ender_tank')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:endertanks/ender_tank/rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x endertanks:ender_tank')
    .duration(100)
    .EUt(16)
    .circuit(2)

  event.recipes.gtceu.assembler('kubejs:endertanks/ender_tank/silicone_rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x endertanks:ender_tank')
    .duration(100)
    .EUt(16)
    .circuit(3)

  event.recipes.gtceu.assembler('kubejs:endertanks/ender_tank/styrene_butadiene_rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x endertanks:ender_tank')
    .duration(100)
    .EUt(16)
    .circuit(4)

  // ender_chest
  event.recipes.gtceu.assembler('kubejs:enderchests/ender_chest/conduit_binder')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x enderchests:ender_chest')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:enderchests/ender_chest/rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x enderchests:ender_chest')
    .duration(100)
    .EUt(16)
    .circuit(2)

  event.recipes.gtceu.assembler('kubejs:enderchests/ender_chest/silicone_rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x enderchests:ender_chest')
    .duration(100)
    .EUt(16)
    .circuit(3)

  event.recipes.gtceu.assembler('kubejs:enderchests/ender_chest/styrene_butadiene_rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x enderchests:ender_chest')
    .duration(100)
    .EUt(16)
    .circuit(4)

  // dimensional_tank
  event.remove({ id: 'dimstorage:dimensional_tank' })
  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_tank/conduit_binder')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x dimstorage:dimensional_tank')
    .duration(100)
    .EUt(16)
    .circuit(4)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_tank/rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x dimstorage:dimensional_tank')
    .duration(100)
    .EUt(16)
    .circuit(5)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_tank/silicone_rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x dimstorage:dimensional_tank')
    .duration(100)
    .EUt(16)
    .circuit(6)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_tank/styrene_butadiene_rubber')
    .itemInputs('2x #forge:glass/colorless')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_electric_pump')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x dimstorage:dimensional_tank')
    .duration(100)
    .EUt(16)
    .circuit(7)

  // dimensional_chest
  event.remove({ id: 'dimstorage:dimensional_chest' })
  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_chest/conduit_binder')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .itemInputs('2x enderio:conduit_binder')
    .itemOutputs('1x dimstorage:dimensional_chest')
    .duration(100)
    .EUt(16)
    .circuit(4)
    .addMaterialInfo(true)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_chest/rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x dimstorage:dimensional_chest')
    .duration(100)
    .EUt(16)
    .circuit(5)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_chest/silicone_rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x dimstorage:dimensional_chest')
    .duration(100)
    .EUt(16)
    .circuit(6)

  event.recipes.gtceu.assembler('kubejs:dimstorage/dimensional_chest/styrene_butadiene_rubber')
    .itemInputs('1x #forge:chests/wooden')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('1x #forge:small_gears/quartz_alloy')
    .itemInputs('1x #forge:ender_pearl_ingredients')
    .itemInputs('1x gtceu:lv_conveyor_module')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x dimstorage:dimensional_chest')
    .duration(100)
    .EUt(16)
    .circuit(7)

  // simple_ore_generator
  event.recipes.gtceu.assembler('kubejs:simple_ore_generator/rubber')
    .itemInputs('1x gtceu:lv_machine_casing')
    .itemInputs('1x #forge:rotors/iron')
    .itemInputs('1x #forge:springs/iron')
    .itemInputs('1x gtceu:nickel_small_item_pipe')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x simple_resource_generators:simple_ore_generator')
    .duration(100)
    .EUt(16)
    .circuit(1)

  event.recipes.gtceu.assembler('kubejs:simple_ore_generator/silicone_rubber')
    .itemInputs('1x gtceu:lv_machine_casing')
    .itemInputs('1x #forge:rotors/iron')
    .itemInputs('1x #forge:springs/iron')
    .itemInputs('1x gtceu:nickel_small_item_pipe')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x simple_resource_generators:simple_ore_generator')
    .duration(100)
    .EUt(16)
    .circuit(1)

  event.recipes.gtceu.assembler('kubejs:simple_ore_generator/styrene_butadiene_rubber')
    .itemInputs('1x gtceu:lv_machine_casing')
    .itemInputs('1x #forge:rotors/iron')
    .itemInputs('1x #forge:springs/iron')
    .itemInputs('1x gtceu:nickel_small_item_pipe')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x simple_resource_generators:simple_ore_generator')
    .duration(100)
    .EUt(16)
    .circuit(1)

  // quartz_alloy_machine_casing
  event.recipes.gtceu.assembler('kubejs:quartz_alloy_machine_casing')
    .itemInputs('8x gtceu:quartz_alloy_plate')
    .itemOutputs('1x kubejs:quartz_alloy_machine_casing')
    .duration(50)
    .EUt(16)
    .circuit(8)
    .addMaterialInfo(true)

  // quartz_alloy_machine_hull
  event.recipes.gtceu.assembler('kubejs:quartz_alloy_machine_hull')
    .itemInputs('1x kubejs:quartz_alloy_machine_casing')
    .itemInputs('2x gtceu:nickel_single_cable')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('1x kubejs:quartz_alloy_machine_hull')
    .duration(50)
    .EUt(16)
    .addMaterialInfo(true)

  // gadget_building
  event.remove({ output: 'buildinggadgets2:gadget_building' })
  event.recipes.gtceu.assembler('kubejs:gadget_building')
    .itemInputs('2x #forge:double_plates/quartz_alloy')
    .itemInputs('1x #forge:plates/emerald')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x #forge:rods/diamond')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x buildinggadgets2:gadget_building')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // gadget_exchanging
  event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
  event.recipes.gtceu.assembler('kubejs:gadget_exchanging')
    .itemInputs('3x #forge:double_plates/quartz_alloy')
    .itemInputs('1x #forge:plates/emerald')
    .itemInputs('4x #forge:fine_wires/red_alloy')
    .itemInputs('2x #forge:rods/lapis')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x buildinggadgets2:gadget_exchanging')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // gadget_copy_paste
  event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
  event.recipes.gtceu.assembler('kubejs:gadget_copy_paste')
    .itemInputs('2x #forge:double_plates/quartz_alloy')
    .itemInputs('1x #forge:plates/emerald')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x #forge:rods/red_alloy')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x buildinggadgets2:gadget_copy_paste')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // gadget_cut_paste
  event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
  event.recipes.gtceu.assembler('kubejs:gadget_cut_paste')
    .itemInputs('2x #forge:double_plates/quartz_alloy')
    .itemInputs('1x #forge:plates/red_alloy')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x #forge:rods/red_alloy')
    .itemInputs('1x #forge:dyes/yellow')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x buildinggadgets2:gadget_cut_paste')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // gadget_destruction
  event.remove({ output: 'buildinggadgets2:gadget_destruction' })
  event.recipes.gtceu.assembler('kubejs:gadget_destruction')
    .itemInputs('2x #forge:double_plates/quartz_alloy')
    .itemInputs('1x #forge:plates/red_alloy')
    .itemInputs('2x #forge:fine_wires/red_alloy')
    .itemInputs('2x #forge:gems/ender_pearl')
    .itemInputs('2x #forge:rods/red_alloy')
    .itemInputs('1x #forge:dyes/yellow')
    .itemInputs('1x #gtceu:circuits/lv')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x buildinggadgets2:gadget_destruction')
    .duration(100)
    .EUt(16)
    .circuit(1)
    .addMaterialInfo(true)

  // lime_wool
  event.recipes.gtceu.assembler('kubejs:lime_wool')
    .itemInputs('4x ex_hammers:plant_fiber')
    .itemOutputs('1x minecraft:lime_wool')
    .duration(100)
    .EUt(4)
    .circuit(4)

  // framed_cube
  event.recipes.gtceu.assembler('kubejs:framedblocks/framed_cube')
    .itemInputs('8x minecraft:stick')
    .itemOutputs('2x framedblocks:framed_cube')
    .duration(64)
    .EUt(7)
    .circuit(8)

  // hyperbox
  event.remove({ id: 'hyperbox:hyperbox' })
  event.recipes.gtceu.assembler('kubejs:hyperbox/hyperbox')
    .itemInputs('8x #forge:plates/ender_pearl')
    .itemInputs('1x minecraft:respawn_anchor')
    .inputFluids(Fluid.of('gtceu:borosilicate_glass', 1152))
    .itemOutputs('1x hyperbox:hyperbox')
    .duration(200)
    .EUt(60)
    .addMaterialInfo(true)

  // flux_block
  if (Platform.isLoaded('fluxnetworks')) {
    event.remove({ id: 'fluxnetworks:fluxblock' })
    event.recipes.gtceu.assembler('kubejs:fluxnetworks/flux_block')
      .itemInputs('5x fluxnetworks:flux_dust')
      .itemInputs('4x fluxnetworks:flux_core')
      .inputFluids(Fluid.of(plastic1, 576))
      .itemOutputs('1x fluxnetworks:flux_block')
      .duration(200)
      .EUt(480)
      .addMaterialInfo(true)
  }

  // flux_plug
  if (Platform.isLoaded('fluxnetworks')) {
    event.remove({ id: 'fluxnetworks:fluxplug' })
    event.recipes.gtceu.assembler('kubejs:fluxnetworks/flux_plug')
      .itemInputs('1x fluxnetworks:flux_block')
      .itemInputs('4x fluxnetworks:flux_core')
      .itemInputs('4x gtceu:gold_quadruple_cable')
      .itemInputs('1x gtceu:red_alloy_quadruple_cable')
      .itemInputs('1x gtceu:hv_sensor')
      .itemInputs('1x gtceu:hv_emitter')
      .inputFluids(Fluid.of(plastic1, 288))
      .itemOutputs('1x fluxnetworks:flux_plug')
      .duration(200)
      .EUt(480)
      .circuit(1)
      .addMaterialInfo(true)
  }

  // flux_point
  if (Platform.isLoaded('fluxnetworks')) {
    event.remove({ id: 'fluxnetworks:fluxpoint' })
    event.recipes.gtceu.assembler('kubejs:fluxnetworks/flux_point')
      .itemInputs('1x #forge:storage_blocks/red_alloy')
      .itemInputs('4x fluxnetworks:flux_core')
      .itemInputs('1x gtceu:hv_sensor')
      .itemInputs('1x gtceu:hv_emitter')
      .inputFluids(Fluid.of(plastic1, 288))
      .itemOutputs('1x fluxnetworks:flux_point')
      .duration(200)
      .EUt(480)
      .circuit(2)
      .addMaterialInfo(true)
  }

  // flux_controller
  if (Platform.isLoaded('fluxnetworks')) {
    event.remove({ id: 'fluxnetworks:fluxcontroller' })
    event.recipes.gtceu.assembler('kubejs:fluxnetworks/flux_controller')
      .itemInputs('5x fluxnetworks:flux_block')
      .itemInputs('1x fluxnetworks:flux_core')
      .itemInputs('2x fluxnetworks:flux_dust')
      .itemInputs('1x gtceu:hv_4a_energy_converter')
      .itemInputs('1x gtceu:hv_sensor')
      .itemInputs('1x gtceu:hv_emitter')
      .inputFluids(Fluid.of(plastic1, 1296))
      .itemOutputs('1x fluxnetworks:flux_controller')
      .duration(200)
      .EUt(480)
      .addMaterialInfo(true)
  }

  // const server = Utils.server
  // const enableFluxStorage = server.persistentData.enable_flux_storage === 1

  // console.info('[KubeJS Flux Unlock] Recipe reload check - enable_flux_storage raw value = ' + server.persistentData.enable_flux_storage)
  // console.info('[KubeJS Flux Unlock] Recipe reload check - enable_flux_storage usable value = ' + enableFluxStorage)

  // // basic_flux_storage
  event.remove({ id: 'fluxnetworks:basicfluxstorage' })
  // if (enableFluxStorage) {
  //   event.recipes.gtceu.assembler('kubejs:fluxnetworks/basic_flux_storage')
  //     .itemInputs('6x fluxnetworks:flux_block')
  //     .itemInputs('2x #forge:glass_panes')
  //     .itemInputs('1x gtceu:hv_sensor')
  //     .itemInputs('1x gtceu:hv_emitter')
  //     .inputFluids(Fluid.of(plastic1, 1296))
  //     .itemOutputs('1x fluxnetworks:basic_flux_storage')
  //     .duration(200)
  //     .EUt(480)
  // }

  // // herculean_flux_storage
  event.remove({ id: 'fluxnetworks:herculeanfluxstorage' })
  // if (enableFluxStorage) {
  //   event.recipes.gtceu.assembler('kubejs:fluxnetworks/herculean_flux_storage')
  //     .itemInputs('6x fluxnetworks:basic_flux_storage')
  //     .itemInputs('2x #forge:glass_panes')
  //     .inputFluids(Fluid.of(plastic2, 1296))
  //     .itemOutputs('1x fluxnetworks:herculean_flux_storage')
  //     .duration(200)
  //     .EUt(480)
  // }

  // // gargantuan_flux_storage
  event.remove({ id: 'fluxnetworks:gargantuanfluxstorage' })
  // if (enableFluxStorage) {
  //   event.recipes.gtceu.assembler('kubejs:fluxnetworks/gargantuan_flux_storage')
  //     .itemInputs('6x fluxnetworks:herculean_flux_storage')
  //     .itemInputs('2x #forge:glass_panes')
  //     .inputFluids(Fluid.of(plastic3, 1296))
  //     .itemOutputs('1x fluxnetworks:gargantuan_flux_storage')
  //     .duration(200)
  //     .EUt(480)
  // }

  // ignota_casing
  event.recipes.gtceu.assembler('kubejs:kubejs/ignota_casing')
    .itemInputs('6x #forge:plates/materia_ignota')
    .itemInputs('1x #forge:frames/materia_ignota')
    .itemOutputs('2x kubejs:ignota_casing')
    .duration(50)
    .EUt(16)
    .circuit(6)
    .addMaterialInfo(true)

  // medium_temperature_smelting_casing
  event.recipes.gtceu.assembler('kubejs:kubejs/medium_temperature_smelting_casing')
    .itemInputs('4x #forge:plates/red_titanium')
    .itemInputs('2x #forge:plates/hsla_steel')
    .itemInputs('1x #forge:frames/red_titanium')
    .itemOutputs('2x kubejs:medium_temperature_smelting_casing')
    .duration(50)
    .EUt(16)
    .circuit(6)
    .addMaterialInfo(true)

  // pyrolysis_casing
  event.recipes.gtceu.assembler('kubejs:kubejs/pyrolysis_casing')
    .itemInputs('6x #forge:plates/titanosteel_alloy')
    .itemInputs('1x #forge:frames/titanosteel_alloy')
    .itemOutputs('2x kubejs:pyrolysis_casing')
    .duration(50)
    .EUt(16)
    .circuit(6)
    .addMaterialInfo(true)

  // basic_capacitor_bank
  event.recipes.gtceu.assembler('kubejs:enderio/basic_capacitor_bank')
    .itemInputs('1x gtceu:lv_machine_hull')
    .itemInputs('1x gtceu:lv_voltage_coil')
    .itemInputs('4x #forge:rods/steel')
    .itemInputs('2x gtceu:fine_red_alloy_wire')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('1x enderio:basic_capacitor_bank')
    .duration(200)
    .EUt(24)

  // advanced_capacitor_bank
  event.recipes.gtceu.assembler('kubejs:enderio/advanced_capacitor_bank')
    .itemInputs('1x gtceu:mv_machine_hull')
    .itemInputs('1x gtceu:mv_voltage_coil')
    .itemInputs('4x #forge:rods/aluminium')
    .itemInputs('4x gtceu:fine_red_alloy_wire')
    .inputFluids(Fluid.of(rubber1, 576))
    .itemOutputs('1x enderio:advanced_capacitor_bank')
    .duration(200)
    .EUt(96)

  event.recipes.gtceu.assembler('kubejs:enderio/advanced_capacitor_bank/upgrade')
    .itemInputs('1x enderio:basic_capacitor_bank')
    .itemInputs('1x gtceu:mv_voltage_coil')
    .itemInputs('2x #forge:rods/aluminium')
    .itemInputs('2x gtceu:fine_red_alloy_wire')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x enderio:advanced_capacitor_bank')
    .duration(100)
    .EUt(96)

  // vibrant_capacitor_bank
  event.recipes.gtceu.assembler('kubejs:enderio/vibrant_capacitor_bank')
    .itemInputs('1x gtceu:hv_machine_hull')
    .itemInputs('1x gtceu:hv_voltage_coil')
    .itemInputs('4x #forge:rods/stainless_steel')
    .itemInputs('8x gtceu:fine_red_alloy_wire')
    .inputFluids(Fluid.of(plastic1, 576))
    .itemOutputs('1x enderio:vibrant_capacitor_bank')
    .duration(200)
    .EUt(384)

  event.recipes.gtceu.assembler('kubejs:enderio/vibrant_capacitor_bank/upgrade')
    .itemInputs('1x enderio:advanced_capacitor_bank')
    .itemInputs('1x gtceu:hv_voltage_coil')
    .itemInputs('2x #forge:rods/stainless_steel')
    .itemInputs('4x gtceu:fine_red_alloy_wire')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('1x enderio:vibrant_capacitor_bank')
    .duration(100)
    .EUt(384)

  // ulv_machine_hull
  event.remove({ id: 'gtceu:assembler/hull_ulv' })
  event.recipes.gtceu.assembler('kubejs:gtceu/ulv_machine_hull')
    .itemInputs('1x gtceu:ulv_machine_casing')
    .itemInputs('1x gtceu:copper_double_cable')
    .inputFluids(Fluid.of(plastic1, 288))
    .itemOutputs('1x gtceu:ulv_machine_hull')
    .duration(50)
    .EUt(16)
    .addMaterialInfo(true)

  // solid_aluminium_casing
  event.recipes.gtceu.assembler('kubejs:kubejs/solid_aluminium_casing')
    .itemInputs('6x #forge:plates/aluminium')
    .itemInputs('1x #forge:frames/aluminium')
    .itemOutputs('2x kubejs:solid_aluminium_casing')
    .duration(50)
    .EUt(16)
    .circuit(12)
    .addMaterialInfo(true)

  // railed_bricks
  event.recipes.gtceu.assembler('kubejs:kubejs/railed_bricks')
    .itemInputs('1x minecraft:bricks')
    .itemInputs('1x minecraft:rail')
    .itemOutputs('1x kubejs:railed_bricks')
    .duration(60)
    .EUt(7)
    .addMaterialInfo(true)

  // solar_panel_casing
  event.recipes.gtceu.assembler('kubejs:kubejs/solar_panel_casing')
    .itemInputs('4x #forge:plates/lead')
    .itemInputs('2x #forge:plates/silver')
    .itemInputs('1x #forge:frames/steel')
    .itemOutputs('2x kubejs:solar_panel_casing')
    .duration(50)
    .EUt(16)
    .circuit(6)
    .addMaterialInfo(true)


  // ********************** //
  // ***** P2P TUNNELS **** //
  // ********************** //

  const p2pTunnels = [
    { out: 'ae2:me_p2p_tunnel', circuit: 1 },
    { out: 'ae2:redstone_p2p_tunnel', circuit: 2 },
    { out: 'mae2:redstone_multi_p2p_tunnel', circuit: 12 },
    { out: 'ae2:item_p2p_tunnel', circuit: 3 },
    { out: 'mae2:item_multi_p2p_tunnel', circuit: 13 },
    { out: 'ae2:fluid_p2p_tunnel', circuit: 4 },
    { out: 'mae2:fluid_multi_p2p_tunnel', circuit: 14 },
    { out: 'ae2:fe_p2p_tunnel', circuit: 5 },
    { out: 'mae2:fe_multi_p2p_tunnel', circuit: 15 },
    { out: 'ae2:light_p2p_tunnel', circuit: 6 },
    { out: 'mae2:pattern_p2p_tunnel', circuit: 7 },
    { out: 'mae2:pattern_multi_p2p_tunnel', circuit: 17 },
    { out: 'mae2:eu_p2p_tunnel', circuit: 8 },
    { out: 'mae2:eu_multi_p2p_tunnel', circuit: 18 },
  ]

  const assembleTunnels = (output, circuit, id) => {
    event.recipes.gtceu.assembler(id)
      .itemInputs(`#ae2:p2p_tunnels`)
      .itemOutputs(output)
      .duration(20)
      .EUt(ULV)
      .circuit(circuit)
  }

  p2pTunnels.forEach(tunnel => {
    const outId = (tunnel.out.id ?? Item.of(tunnel.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]

    assembleTunnels(tunnel.out, tunnel.circuit, `kubejs:${outMod}/${outItem}`)
  })


  // ****************************************** //
  // ***** SOPHISTICATED BACKPACK UPGRADES **** //
  // ****************************************** //

  // removals
  event.remove({ id: 'sophisticatedbackpacks:tank_upgrade' })
  event.remove({ id: 'sophisticatedbackpacks:battery_upgrade' })
  event.remove({ id: 'sophisticatedbackpacks:pump_upgrade' })
  event.remove({ id: 'sophisticatedbackpacks:advanced_pump_upgrade' })
  event.remove({ id: 'sophisticatedbackpacks:xp_pump_upgrade' })

  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })

  // upgrade_base
  event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
  event.recipes.gtceu.assembler('kubejs:sophisticatedbackpacks/upgrade_base/rubber')
    .itemInputs('1x #forge:leather')
    .itemInputs('4x #forge:rods/tin_alloy')
    .itemInputs('4x #forge:screws/tin_alloy')
    .inputFluids(Fluid.of(rubber1, 288))
    .itemOutputs('1x sophisticatedbackpacks:upgrade_base')
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu.assembler('kubejs:sophisticatedbackpacks/upgrade_base/silicone_rubber')
    .itemInputs('1x #forge:leather')
    .itemInputs('4x #forge:rods/tin_alloy')
    .itemInputs('4x #forge:screws/tin_alloy')
    .inputFluids(Fluid.of(rubber2, 144))
    .itemOutputs('1x sophisticatedbackpacks:upgrade_base')
    .duration(200)
    .EUt(LV)

  event.recipes.gtceu.assembler('kubejs:sophisticatedbackpacks/upgrade_base/styrene_butadiene_rubber')
    .itemInputs('1x #forge:leather')
    .itemInputs('4x #forge:rods/tin_alloy')
    .itemInputs('4x #forge:screws/tin_alloy')
    .inputFluids(Fluid.of(rubber3, 72))
    .itemOutputs('1x sophisticatedbackpacks:upgrade_base')
    .duration(200)
    .EUt(LV)

  // RECIPES
  const backpackAssembling = [
    { out: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in1: 'sophisticatedbackpacks:upgrade_base', in2: '8x #forge:storage_blocks/bronze', inF: `${rubber1} 576` },
    { out: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in1: 'sophisticatedbackpacks:upgrade_base', in2: '8x #forge:storage_blocks/bronze', inF: `${rubber2} 288` },
    { out: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in1: 'sophisticatedbackpacks:upgrade_base', in2: '8x #forge:storage_blocks/bronze', inF: `${rubber3} 144` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_1', in1: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in2: '8x #forge:storage_blocks/steel', inF: `${rubber1} 576` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_1', in1: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in2: '8x #forge:storage_blocks/steel', inF: `${rubber2} 288` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_1', in1: 'sophisticatedbackpacks:stack_upgrade_starter_tier', in2: '8x #forge:storage_blocks/steel', inF: `${rubber3} 144` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_2', in1: 'sophisticatedbackpacks:stack_upgrade_tier_1', in2: '8x #forge:storage_blocks/aluminium', inF: `${rubber1} 576` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_2', in1: 'sophisticatedbackpacks:stack_upgrade_tier_1', in2: '8x #forge:storage_blocks/aluminium', inF: `${rubber2} 288` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_2', in1: 'sophisticatedbackpacks:stack_upgrade_tier_1', in2: '8x #forge:storage_blocks/aluminium', inF: `${rubber3} 144` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_3', in1: 'sophisticatedbackpacks:stack_upgrade_tier_2', in2: '8x #forge:storage_blocks/stainless_steel', inF: `${rubber1} 576` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_3', in1: 'sophisticatedbackpacks:stack_upgrade_tier_2', in2: '8x #forge:storage_blocks/stainless_steel', inF: `${rubber2} 288` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_3', in1: 'sophisticatedbackpacks:stack_upgrade_tier_2', in2: '8x #forge:storage_blocks/stainless_steel', inF: `${rubber3} 144` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_4', in1: 'sophisticatedbackpacks:stack_upgrade_tier_3', in2: '8x #forge:storage_blocks/titanium', inF: `${rubber1} 576` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_4', in1: 'sophisticatedbackpacks:stack_upgrade_tier_3', in2: '8x #forge:storage_blocks/titanium', inF: `${rubber2} 288` },
    { out: 'sophisticatedbackpacks:stack_upgrade_tier_4', in1: 'sophisticatedbackpacks:stack_upgrade_tier_3', in2: '8x #forge:storage_blocks/titanium', inF: `${rubber3} 144` },
    { out: 'sophisticatedbackpacks:stack_upgrade_omega_tier', in1: '9x sophisticatedbackpacks:stack_upgrade_tier_4', in2: 'gtceu:uv_field_generator', inF: `gtceu:neutronium 2592` },
  ]

  // BUILD
  const assembleBackpacks = (output, input1, input2, inputF, id) => {
    event.recipes.gtceu.assembler(id)
      .itemInputs(input1)
      .itemInputs(input2)
      .inputFluids(inputF)
      .itemOutputs(output)
      .duration(200)
      .EUt(LV)
  }

  // APPLY
  backpackAssembling.forEach(backpack => {
    const outId = (backpack.out.id ?? Item.of(backpack.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]

    const inFluidId = backpack.inF.split(' ')[0]
    const inFluid = inFluidId.split(':')[1]

    assembleBackpacks(backpack.out, backpack.in1, backpack.in2, backpack.inF, `kubejs:${outMod}/${outItem}/${inFluid}`)
  })


  // ********************* //
  // ***** AE2 CABLES **** //
  // ********************* //

  // RECIPES
  const ae2CableAssembling = [
    { out: '8x ae2:quartz_fiber', in1: '2x #forge:dusts/certus_quartz', inF: `gtceu:glass ${ingF3}`, cir: 1, dur: 2.5 },
    { out: '12x ae2:fluix_glass_cable', in1: '2x ae2:quartz_fiber', in2: '4x #forge:gems/fluix', inF: `gtceu:glass ${ingF8}`, cir: 1, dur: 2.5 },

    { out: '12x ae2:fluix_covered_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber1} ${ingF4}`, cir: 2, dur: 4 },
    { out: '12x ae2:fluix_covered_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber2} ${ingF2}`, cir: 2, dur: 3 },
    { out: '12x ae2:fluix_covered_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber3} ${ingF1}`, cir: 2, dur: 2 },
    { out: '3x ae2:fluix_covered_dense_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber1} ${ingF8}`, cir: 3, dur: 4 },
    { out: '3x ae2:fluix_covered_dense_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber2} ${ingF4}`, cir: 3, dur: 3 },
    { out: '3x ae2:fluix_covered_dense_cable', in1: '8x ae2:fluix_glass_cable', inF: `${rubber3} ${ingF2}`, cir: 3, dur: 2 },

    { out: '12x ae2:fluix_smart_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber1} ${ingF4}`, cir: 4, dur: 4 },
    { out: '12x ae2:fluix_smart_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber2} ${ingF2}`, cir: 4, dur: 3 },
    { out: '12x ae2:fluix_smart_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber3} ${ingF1}`, cir: 4, dur: 2 },
    { out: '3x ae2:fluix_smart_dense_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber1} ${ingF8}`, cir: 5, dur: 4 },
    { out: '3x ae2:fluix_smart_dense_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber2} ${ingF4}`, cir: 5, dur: 3 },
    { out: '3x ae2:fluix_smart_dense_cable', in1: '8x ae2:fluix_glass_cable', in2: '2x #forge:dusts/redstone', in3: '2x #forge:dusts/glowstone', inF: `${rubber3} ${ingF2}`, cir: 5, dur: 2 },
  ]

  // BUILDER
  const assembleAE2Cables = (output, input1, input2, input3, inputF, circuit, duration, id) => {
    const recipe = event.recipes.gtceu.assembler(id)
      .itemInputs(input1)

    if (input2) {
      recipe.itemInputs(input2)
    }
    if (input3) {
      recipe.itemInputs(input3)
    }

    recipe
      .inputFluids(inputF)
      .itemOutputs(output)
      .duration(duration * seconds)
      .EUt(LV)
      .circuit(circuit)
  }

  // APPLY
  ae2CableAssembling.forEach(ae2Cable => {
    const outId = (ae2Cable.out.id ?? Item.of(ae2Cable.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]

    const inFluidId = ae2Cable.inF.split(' ')[0]
    const inFluid = inFluidId.split(':')[1]

    assembleAE2Cables(
      ae2Cable.out, ae2Cable.in1, ae2Cable.in2, ae2Cable.in3, ae2Cable.inF, ae2Cable.cir, ae2Cable.dur, `kubejs:${outMod}/${outItem}/${inFluid}`
    )
  })


  // *********************** //
  // ***** FULL BUILDER **** //
  // *********************** //

  /* EXAMPLE
  const massAssembling = [
    {
      outputI: '2x minecraft:netherrack',
      inputsI: [
        '2x #forge:dusts/stone',
        '2x #forge:dusts/netherrack'
      ],
      inputF: `gtceu:naquadria ${ingF3}`,
      duration: 10, eu: LV,
      cir: 1, recycle: true, suff: 'example',
    },
  ]
*/

  // RECIPES
  const massAssembling = [
    // ***** CUSTOM ENERGY/DYNAMO HATCHES ***** //
    { // hv_energy_output_hatch_4a
      outputI: '1x gtceu:hv_energy_output_hatch_4a',
      inputsI: [
        '1x gtceu:hv_energy_output_hatch',
        '2x gtceu:gold_quadruple_wire',
        '2x #forge:plates/stainless_steel',
      ],
      duration: 5, eu: HV, recycle: true,
    },
    { // hv_energy_output_hatch_16a
      outputI: '1x gtceu:hv_energy_output_hatch_16a',
      inputsI: [
        '1x gtceu:hv_transformer_1a',
        '1x gtceu:hv_energy_output_hatch_4a',
        '2x gtceu:gold_octal_wire',
        '4x #forge:plates/stainless_steel',
      ],
      duration: 10, eu: HV, recycle: true,
    },
    { // hv_energy_output_hatch_64a
      outputI: '1x gtceu:hv_energy_output_hatch_64a',
      inputsI: [
        '1x gtceu:hv_transformer_16a',
        '1x gtceu:hv_energy_output_hatch_16a',
        '2x gtceu:gold_hex_wire',
        '6x #forge:plates/stainless_steel',
      ],
      duration: 20, eu: HV, recycle: true,
    },
    { // mv_energy_output_hatch_4a
      outputI: '1x gtceu:mv_energy_output_hatch_4a',
      inputsI: [
        '1x gtceu:mv_energy_output_hatch',
        '2x gtceu:copper_quadruple_wire',
        '2x #forge:plates/aluminium',
      ],
      duration: 5, eu: MV, recycle: true,
    },
    { // mv_energy_output_hatch_16a
      outputI: '1x gtceu:mv_energy_output_hatch_16a',
      inputsI: [
        '1x gtceu:mv_transformer_1a',
        '1x gtceu:mv_energy_output_hatch_4a',
        '2x gtceu:copper_octal_wire',
        '4x #forge:plates/aluminium',
      ],
      duration: 10, eu: MV, recycle: true,
    },
    { // mv_energy_output_hatch_64a
      outputI: '1x gtceu:mv_energy_output_hatch_64a',
      inputsI: [
        '1x gtceu:mv_transformer_16a',
        '1x gtceu:mv_energy_output_hatch_16a',
        '2x gtceu:copper_hex_wire',
        '6x #forge:plates/aluminium',
      ],
      duration: 20, eu: MV, recycle: true,
    },
    { // lv_energy_output_hatch_4a
      outputI: '1x gtceu:lv_energy_output_hatch_4a',
      inputsI: [
        '1x gtceu:lv_energy_output_hatch',
        '2x gtceu:tin_quadruple_wire',
        '2x #forge:plates/steel',
      ],
      duration: 5, eu: LV, recycle: true,
    },
    { // lv_energy_output_hatch_16a
      outputI: '1x gtceu:lv_energy_output_hatch_16a',
      inputsI: [
        '1x gtceu:lv_transformer_1a',
        '1x gtceu:lv_energy_output_hatch_4a',
        '2x gtceu:tin_octal_wire',
        '4x #forge:plates/steel',
      ],
      duration: 10, eu: LV, recycle: true,
    },
    { // lv_energy_output_hatch_64a
      outputI: '1x gtceu:lv_energy_output_hatch_64a',
      inputsI: [
        '1x gtceu:lv_transformer_16a',
        '1x gtceu:lv_energy_output_hatch_16a',
        '2x gtceu:tin_hex_wire',
        '6x #forge:plates/steel',
      ],
      duration: 20, eu: LV, recycle: true,
    },
    // ***** HARVESTERS ***** //
    { // harvester_tier_1
      outputI: '1x kubejs:harvester_tier_1',
      inputsI: [
        '10x #forge:double_plates/titanium',
        '2x #forge:frames/hastelloy_c_276',
        '1x gtceu:titanium_crate',
        '1x gtceu:titanium_drum',
        '2x gtceu:ev_robot_arm',
        '2x gtceu:ev_electric_pump',
        '4x #gtceu:circuits/ev',
        '2x gtceu:ev_voltage_coil',
        '2x gtceu:advanced_power_thruster',
      ],
      inputF: `${plastic2} 576`,
      duration: 30, eu: EV, recycle: true,
    },
    { // harvester_tier_2
      outputI: '1x kubejs:harvester_tier_2',
      inputsI: [
        '10x #forge:double_plates/tungsten_steel',
        '2x #forge:frames/incoloy_ma_956',
        '1x gtceu:tungsten_steel_crate',
        '1x gtceu:tungsten_steel_drum',
        '2x gtceu:iv_robot_arm',
        '2x gtceu:iv_electric_pump',
        '4x #gtceu:circuits/iv',
        '4x gtceu:iv_voltage_coil',
        '4x gtceu:advanced_power_thruster',
      ],
      inputF: `${plastic3} 576`,
      duration: 30, eu: IV, recycle: true,
    },
  ]

  // BUILD
  const assembleMass = (outputI, inputsI, inputF, cir, recycle, duration, eu, id) => {
    const recipe = event.recipes.gtceu.assembler(id)
      .itemInputs(inputsI)

    if (inputF) {
      recipe.inputFluids(inputF)
    }

    if (cir !== undefined && cir !== null) {
      recipe.circuit(cir)
    }

    if (recycle) {
      recipe.addMaterialInfo(recycle)
    }

    recipe
      .itemOutputs(outputI)
      .duration(duration * seconds)
      .EUt(eu)
  }

  // APPLY
  massAssembling.forEach(mass => {
    const outId = (mass.outputI.id ?? Item.of(mass.outputI).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]

    let recipeId = `kubejs:${outMod}/${outItem}`

    if (mass.inputF) {
      const inFluidId = mass.inputF.split(' ')[0]
      const inFluid = inFluidId.split(':')[1]

      recipeId += `/${inFluid}`
    }

    if (mass.suff) {
      recipeId += `/${mass.suff}`
    }

    assembleMass(
      mass.outputI, mass.inputsI, mass.inputF, mass.cir, mass.recycle, mass.duration, mass.eu, recipeId
    )
  })




  // fin //

})