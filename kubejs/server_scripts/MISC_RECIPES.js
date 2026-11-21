// priority: 900


ServerEvents.recipes(event => {

  // dark_cherry_planks
  event.remove({ id: 'vinery:dark_cherry_planks_from_stripped_logs' })
  event.remove({ id: 'vinery:dark_cherry_planks_from_stripped_wood' })
  event.remove({ id: 'vinery:dark_cherry_planks' })
  event.remove({ id: 'vinery:dark_cherry_planks_from_wood' })
  event.shaped('2x vinery:dark_cherry_planks', [
    '   ',
    ' A ',
    '   ',
  ], {
    A: '#vinery:cherry_logs',
  })
    .id('kubejs:crafting/vinery/dark_cherry_planks')

  event.shaped('4x vinery:dark_cherry_planks', [
    ' B ',
    ' A ',
    '   ',
  ], {
    A: '#vinery:cherry_logs',
    B: '#forge:tools/saws',
  })
    .id('kubejs:crafting/vinery/dark_cherry_planks/saw')

  // glowstone_particles
  event.remove({ output: 'laboratoryblocks:glowstone_particles' })
  event.shaped('8x laboratoryblocks:glowstone_particles', [
    'B  ',
    'A  ',
    '   ',
  ], {
    A: '#forge:dusts/glowstone',
    B: '#forge:tools/mortars',
  })
    .id('kubejs:crafting/laboratoryblocks/glowstone_particles')

  // redstone_particles
  event.remove({ output: 'laboratoryblocks:redstone_particles' })
  event.remove({ id: 'minecraft:from_redstone_particles' })
  event.shaped('8x laboratoryblocks:redstone_particles', [
    'B  ',
    'A  ',
    '   ',
  ], {
    A: '#forge:dusts/redstone',
    B: '#forge:tools/mortars',
  })
    .id('kubejs:crafting/laboratoryblocks/redstone_particles')

  // grass_seed
  event.shaped('ex_hammers:grass_seed', [
    'A ',
    'B ',
  ], {
    A: 'minecraft:wheat_seeds',
    B: '#forge:tools/knives',
  })
    .id('kubejs:crafting/ex_hammers/grass_seed')

  // angel_ring
  event.remove({ id: 'angelring:angel_ring' })
  event.shaped('angelring:angel_ring', [
    ' A ',
    'ABA',
    ' A ',
  ], {
    A: 'angelblockrenewed:angel_block',
    B: '#forge:rings/gold',
  })
    .id('kubejs:crafting/angelring/angel_ring')

  // angel_block
  event.remove({ id: 'angelblockrenewed:angel_block' })
  event.shaped('angelblockrenewed:angel_block', [
    ' A ',
    'A A',
    ' A ',
  ], {
    A: '#forge:rods/tin',
  })
    .id('kubejs:crafting/angelblockrenewed/angel_block')

  // rain_shield
  event.remove({ output: 'rainshield:rain_shield' })
  event.shaped('rainshield:rain_shield', [
    ' C ',
    ' A ',
    'BAB',
  ], {
    A: '#forge:rods/long/electrum',
    B: '#forge:plates/red_alloy',
    C: 'gtceu:lv_sensor',
  })
    .id('kubejs:crafting/rainshield/rain_shield')

  // staff_of_travelling
  event.remove({ output: 'travelanchors:travel_staff' })
  event.shaped('travelanchors:travel_staff', [
    ' EA',
    'DBE',
    'FC ',
  ], {
    A: '#forge:ender_pearls',
    B: 'gtceu:lv_emitter',
    C: '#gtceu:tools/crafting_wrenches',
    D: '#forge:tools/screwdrivers',
    E: '#forge:screws/steel',
    F: '#forge:rods/long/steel',
  })
    .id('kubejs:crafting/travelanchors/travel_staff')

  // travel_anchor
  event.remove({ output: 'travelanchors:travel_anchor' })
  event.shaped('travelanchors:travel_anchor', [
    'ABA',
    'CDC',
    'ABA',
  ], {
    A: '#forge:plates/invar',
    B: '#forge:plates/rubber',
    C: '#forge:ender_pearls',
    D: 'gtceu:lv_machine_hull',
  })
    .id('kubejs:crafting/travelanchors/travel_anchor')

  // flopper
  event.remove({ output: 'flopper:flopper' })
  event.shaped('flopper:flopper', [
    'ABA',
    'ACA',
    'DAE',
  ], {
    A: '#forge:plates/quartz_alloy',
    B: '#forge:chests/wooden',
    C: '#forge:glass/colorless',
    D: '#gtceu:tools/crafting_wrenches',
    E: '#forge:tools/mallets',
  })
    .id('kubejs:crafting/flopper/flopper')

  // saturating_item
  event.remove({ output: 'saturatingitem:saturating_item' })
  event.shaped('saturatingitem:saturating_item', [
    'ABC',
    'DIF',
    'GEH',
  ], {
    A: '#forge:tools/screwdrivers',
    B: '#forge:rings/stainless_steel',
    C: '#forge:tools/hammers',
    D: '#gtceu:tools/crafting_wrenches',
    E: '#forge:rods/stainless_steel',
    F: '#forge:tools/mallets',
    G: '#forge:tools/saws',
    H: '#forge:tools/wire_cutters',
    I: 'minecraft:baked_potato',
  })
    .id('kubejs:crafting/saturatingitem/saturating_item')

  // 5_to_6
  event.remove({ output: 'dankstorage:5_to_6' })
  event.shaped('dankstorage:5_to_6', [
    'BAB',
    'A A',
    'BAB',
  ], {
    A: 'minecraft:crying_obsidian',
    B: 'minecraft:amethyst_block',
  })
    .id('kubejs:crafting/dankstorage/5_to_6')

  // draconic_endshelf
  event.remove({ id: 'apotheosis:draconic_endshelf' })
  event.shaped('apotheosis:draconic_endshelf', [
    ' A ',
    'BCB',
    'BBB',
  ], {
    A: 'minecraft:dragon_breath',
    B: 'minecraft:ender_pearl',
    C: 'apotheosis:endshelf',
  })
    .id('kubejs:crafting/apotheosis/draconic_endshelf')

  // cardboard
  event.remove({ output: 'dustrial_decor:cardboard' })
  event.shapeless('dustrial_decor:cardboard',
    [
      '2x minecraft:paper'
    ])
    .id('kubejs:crafting/dustrial_decor/cardboard')

  // warp_dust
  event.remove({ id: 'waystones:warp_dust' })
  event.shapeless('2x waystones:warp_dust',
    [
      '#forge:dusts/ender_pearl',
      '3x #forge:dusts/amethyst'
    ])
    .id('kubejs:crafting/waystones/warp_dust')

  // upgrade_kit
  event.remove({ output: 'advgenerators:upgrade_kit' })
  event.shaped('advgenerators:upgrade_kit', [
    '   ',
    'AB ',
    '   ',
  ], {
    A: '#forge:tools/hammers',
    B: 'advgenerators:iron_frame',
  })
    .id('kubejs:crafting/advgenerators/upgrade_kit')

  // warning_stripes_1
  event.shaped('2x architectschisel:warning_stripes_1', [
    'AB ',
    'BC ',
    '   ',
  ], {
    A: '#forge:dyes/white',
    B: '#forge:concretes',
    C: '#forge:dyes/orange',
  })
    .id('kubejs:crafting/architectschisel/warning_stripes_1')

  // sturdy
  event.shaped('32x factory_blocks:sturdy', [
    'ABA',
    'B B',
    'ABA',
  ], {
    A: 'minecraft:stone',
    B: 'minecraft:iron_ingot',
  })
    .id('kubejs:crafting/factory_blocks/sturdy')

  // charging_station
  event.remove({ output: 'charginggadgets:charging_station' })
  event.shaped('charginggadgets:charging_station', [
    'ABA',
    'CDC',
    'ABA',
  ], {
    A: '#forge:plates/quartz_alloy',
    B: 'gtceu:nickel_single_cable',
    C: '#gtceu:circuits/lv',
    D: 'kubejs:quartz_alloy_machine_hull',
  })
    .id('kubejs:crafting/charginggadgets/charging_station')

  // template_manager
  event.remove({ output: 'buildinggadgets2:template_manager' })
  event.shaped('buildinggadgets2:template_manager', [
    'ABA',
    'CDC',
    'AEA',
  ], {
    A: '#forge:plates/quartz_alloy',
    B: '#forge:books',
    C: 'gtceu:nickel_single_cable',
    D: 'kubejs:quartz_alloy_machine_hull',
    E: '#gtceu:circuits/lv',
  })
    .id('kubejs:crafting/buildinggadgets2/template_manager')

  // framed_cube
  event.remove({ id: 'framedblocks:framed_cube' })
  event.shaped('1x framedblocks:framed_cube', [
    'A A',
    ' B ',
    'A A',
  ], {
    A: 'minecraft:stick',
    B: '#forge:tools/saws',
  })
    .id('kubejs:crafting/framedblocks/framed_cube')

  // sleeping_bag_${color}
  Color.DYE.forEach(color => {
    event.remove({ id: `comforts:sleeping_bag_${color}` })
    event.shaped(`1x comforts:sleeping_bag_${color}`, [
      'B B',
      'AAA',
      'B B',
    ], {
      A: `minecraft:${color}_carpet`,
      B: '#forge:string',
    })
      .id(`kubejs:crafting/comforts/sleeping_bag_${color}`)
  })

  // hammock_${color}
  Color.DYE.forEach(color => {
    event.remove({ id: `comforts:hammock_${color}` })
    event.shaped(`1x comforts:hammock_${color}`, [
      'BCB',
      'BAB',
      'BCB',
    ], {
      A: `minecraft:${color}_carpet`,
      B: '#forge:string',
      C: '#forge:rods/wooden',
    })
      .id(`kubejs:crafting/comforts/hammock_${color}`)
  })

  // grapevine_stem
  event.remove({ id: 'vinery:grapevine_stem' })
  event.shaped('4x vinery:grapevine_stem', [
    'BA',
    'A ',
  ], {
    A: '#minecraft:logs',
    B: '#forge:tools/saws',
  })
    .id('kubejs:crafting/vinery/grapevine_stem')

  // chisel
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped('1x rechiseled:chisel', [
    ' A',
    'B ',
  ], {
    A: '#forge:plates/wrought_iron',
    B: '#forge:rods/wooden',
  })
    .id('kubejs:crafting/rechiseled/chisel')

  // chisel
  event.remove({ id: 'chisel:chisel' })
  event.shaped('1x chisel:chisel', [
    ' A',
    'B ',
  ], {
    A: '#forge:plates/iron',
    B: '#forge:rods/wooden',
  })
    .id('kubejs:crafting/chisel/chisel')

  // enlighted_text_laboratory_screen
  event.remove({ id: 'laboratoryblocks:enlighted_text_laboratory_screen' })
  event.shapeless('1x laboratoryblocks:enlighted_text_laboratory_screen',
    [
      'laboratoryblocks:text_laboratory_screen',
      'laboratoryblocks:glowstone_particles'
    ])
    .id('kubejs:crafting/laboratoryblocks/enlighted_text_laboratory_screen')

  // facade_item
  event.remove({ id: 'cable_facades:facade_item' })
  event.shaped('16x cable_facades:facade', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: '#forge:rods/tin',
    B: '#forge:rods/wooden',
    C: '#forge:tools/hammers',
  })
    .id('kubejs:crafting/cable_facades/facade')

  // certus_quartz_sword
  event.remove({ id: 'ae2:tools/certus_quartz_sword' })
  event.shaped('1x ae2:certus_quartz_sword', [
    ' A ',
    'BAC',
    ' D ',
  ], {
    A: '#forge:plates/certus_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
  })
    .id('kubejs:crafting/ae2/certus_quartz_sword')

  // certus_quartz_pickaxe
  event.remove({ id: 'ae2:tools/certus_quartz_pickaxe' })
  event.shaped('1x ae2:certus_quartz_pickaxe', [
    'AEE',
    'BDC',
    ' D ',
  ], {
    A: '#forge:plates/certus_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/certus_quartz',
  })
    .id('kubejs:crafting/ae2/certus_quartz_pickaxe')

  // certus_quartz_shovel
  event.remove({ id: 'ae2:tools/certus_quartz_spade' })
  event.shaped('1x ae2:certus_quartz_shovel', [
    'BAC',
    ' D ',
    ' D ',
  ], {
    A: '#forge:plates/certus_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
  })
    .id('kubejs:crafting/ae2/certus_quartz_shovel')

  // certus_quartz_axe
  event.remove({ id: 'ae2:tools/certus_quartz_axe' })
  event.shaped('1x ae2:certus_quartz_axe', [
    'AEC',
    'AD ',
    'BD ',
  ], {
    A: '#forge:plates/certus_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/certus_quartz',
  })
    .id('kubejs:crafting/ae2/certus_quartz_axe')

  // certus_quartz_hoe
  event.remove({ id: 'ae2:tools/certus_quartz_hoe' })
  event.shaped('1x ae2:certus_quartz_hoe', [
    'AEC',
    'BD ',
    ' D ',
  ], {
    A: '#forge:plates/certus_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/certus_quartz',
  })
    .id('kubejs:crafting/ae2/certus_quartz_hoe')

  // nether_quartz_sword
  event.remove({ id: 'ae2:tools/nether_quartz_sword' })
  event.shaped('1x ae2:nether_quartz_sword', [
    ' A ',
    'BAC',
    ' D ',
  ], {
    A: '#forge:plates/nether_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
  })
    .id('kubejs:crafting/ae2/nether_quartz_sword')

  // nether_quartz_pickaxe
  event.remove({ id: 'ae2:tools/nether_quartz_pickaxe' })
  event.shaped('1x ae2:nether_quartz_pickaxe', [
    'AEE',
    'BDC',
    ' D ',
  ], {
    A: '#forge:plates/nether_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/nether_quartz',
  })
    .id('kubejs:crafting/ae2/nether_quartz_pickaxe')

  // nether_quartz_shovel
  event.remove({ id: 'ae2:tools/nether_quartz_spade' })
  event.shaped('1x ae2:nether_quartz_shovel', [
    'BAC',
    ' D ',
    ' D ',
  ], {
    A: '#forge:plates/nether_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
  })
    .id('kubejs:crafting/ae2/nether_quartz_shovel')

  // nether_quartz_axe
  event.remove({ id: 'ae2:tools/nether_quartz_axe' })
  event.shaped('1x ae2:nether_quartz_axe', [
    'AEC',
    'AD ',
    'BD ',
  ], {
    A: '#forge:plates/nether_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/nether_quartz',
  })
    .id('kubejs:crafting/ae2/nether_quartz_axe')

  // nether_quartz_hoe
  event.remove({ id: 'ae2:tools/nether_quartz_hoe' })
  event.shaped('1x ae2:nether_quartz_hoe', [
    'AEC',
    'BD ',
    ' D ',
  ], {
    A: '#forge:plates/nether_quartz',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: 'minecraft:stick',
    E: '#forge:gems/nether_quartz',
  })
    .id('kubejs:crafting/ae2/nether_quartz_hoe')

  // copper_boiler
  event.remove({ id: 'davebuildingmod:rec_copper_boiler' })
  event.shaped('2x davebuildingmod:copper_boiler', [
    ' B ',
    'BAB',
    ' B ',
  ], {
    A: 'minecraft:water_bucket',
    B: '#forge:plates/copper',
  })
    .id('kubejs:crafting/davebuildingmod/copper_boiler')

  // zinc_boiler
  event.remove({ id: 'davebuildingmod:rec_zinc_boiler' })
  event.shaped('2x davebuildingmod:zinc_boiler', [
    ' B ',
    'BAB',
    ' B ',
  ], {
    A: 'minecraft:water_bucket',
    B: '#forge:plates/zinc',
  })
    .id('kubejs:crafting/davebuildingmod/zinc_boiler')

  // brass_boiler
  event.remove({ id: 'davebuildingmod:rec_brass_boiler' })
  event.shaped('2x davebuildingmod:brass_boiler', [
    ' B ',
    'BAB',
    ' B ',
  ], {
    A: 'minecraft:water_bucket',
    B: '#forge:plates/brass',
  })
    .id('kubejs:crafting/davebuildingmod/brass_boiler')

  // framing_saw
  event.remove({ id: `framedblocks:framing_saw` })
  event.shaped(`1x framedblocks:framing_saw`, [
    ' A ',
    'DCD',
    'EBE',
  ], {
    A: 'gtceu:iron_buzz_saw_blade',
    B: 'framedblocks:framed_slab',
    C: 'gtceu:lv_electric_motor',
    D: 'framedblocks:framed_pressure_plate',
    E: 'minecraft:stone_slab',
  })
    .id(`kubejs:crafting/framedblocks/framing_saw`)

  // powered_framing_saw
  event.remove({ id: `framedblocks:powered_framing_saw` })
  event.shaped(`1x framedblocks:powered_framing_saw`, [
    'FAF',
    'DCD',
    'EBE',
  ], {
    A: 'gtceu:steel_buzz_saw_blade',
    B: '#gtceu:circuits/lv',
    C: 'gtceu:lv_electric_motor',
    D: 'framedblocks:framed_pressure_plate',
    E: 'minecraft:stone_slab',
    F: '#forge:glass/colorless',
  })
    .id(`kubejs:crafting/framedblocks/powered_framing_saw`)

  // furniture_station
  event.remove({ id: `fantasyfurniture:furniture_station` })
  event.shaped(`1x fantasyfurniture:furniture_station`, [
    'FBG',
    'DAD',
    'CEC',
  ], {
    A: '#forge:frames/treated_wood',
    B: '#forge:leather',
    C: '#forge:rods/treated_wood',
    D: '#forge:screws/steel',
    E: '#forge:tools/screwdrivers',
    F: '#forge:tools/hammers',
    G: '#forge:tools/saws',
  })
    .id(`kubejs:crafting/fantasyfurniture/furniture_station`)

  // flight_card
  event.remove({ id: `advanced_ae:flight_card` })
  event.shaped(`1x advanced_ae:flight_card`, [
    'ACA',
    'DBD',
    'AEA',
  ], {
    A: 'advanced_ae:quantum_alloy_plate',
    B: 'advanced_ae:quantum_upgrade_base',
    C: 'angelring:angel_ring',
    D: 'minecraft:feather',
    E: 'minecraft:tnt',
  })
    .id(`kubejs:crafting/advanced_ae/flight_card`)

  // quantum_helmet
  event.shaped(`1x advanced_ae:quantum_helmet`, [
    'ADA',
    'AEA',
    'BCB',
  ], {
    A: 'advanced_ae:quantum_processor',
    B: 'advanced_ae:quantum_alloy_plate',
    C: 'advanced_ae:quantum_storage_component',
    D: 'ae2:wireless_access_point',
    E: 'gtceu:nanomuscle_helmet',
  })
    .id(`kubejs:crafting/advanced_ae/quantum_helmet`)

  // quantum_chestplate
  event.shaped(`1x advanced_ae:quantum_chestplate`, [
    'ADA',
    'AEA',
    'BCB',
  ], {
    A: 'advanced_ae:quantum_processor',
    B: 'advanced_ae:quantum_alloy_plate',
    C: 'advanced_ae:quantum_storage_component',
    D: 'ae2:wireless_access_point',
    E: 'gtceu:nanomuscle_chestplate',
  })
    .id(`kubejs:crafting/advanced_ae/quantum_chestplate`)

  // quantum_leggings
  event.shaped(`1x advanced_ae:quantum_leggings`, [
    'ADA',
    'AEA',
    'BCB',
  ], {
    A: 'advanced_ae:quantum_processor',
    B: 'advanced_ae:quantum_alloy_plate',
    C: 'advanced_ae:quantum_storage_component',
    D: 'ae2:wireless_access_point',
    E: 'gtceu:nanomuscle_leggings',
  })
    .id(`kubejs:crafting/advanced_ae/quantum_leggings`)

  // quantum_boots
  event.shaped(`1x advanced_ae:quantum_boots`, [
    'ADA',
    'AEA',
    'BCB',
  ], {
    A: 'advanced_ae:quantum_processor',
    B: 'advanced_ae:quantum_alloy_plate',
    C: 'advanced_ae:quantum_storage_component',
    D: 'ae2:wireless_access_point',
    E: 'gtceu:nanomuscle_boots',
  })
    .id(`kubejs:crafting/advanced_ae/quantum_boots`)

  // calculation_processor_press
  event.shaped(`1x ae2:calculation_processor_press`, [
    'CD',
    'BA',
  ], {
    A: '#forge:double_plates/quartz_alloy',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: '#forge:gems/certus_quartz',
  })
    .id(`kubejs:crafting/ae2/calculation_processor_press`)

  // engineering_processor_press
  event.shaped(`1x ae2:engineering_processor_press`, [
    'CD',
    'BA',
  ], {
    A: '#forge:double_plates/quartz_alloy',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: '#forge:gems/diamond',
  })
    .id(`kubejs:crafting/ae2/engineering_processor_press`)

  // logic_processor_press
  event.shaped(`1x ae2:logic_processor_press`, [
    'CD',
    'BA',
  ], {
    A: '#forge:double_plates/quartz_alloy',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: '#forge:ingots/gold',
  })
    .id(`kubejs:crafting/ae2/logic_processor_press`)

  // silicon_press
  event.shaped(`1x ae2:silicon_press`, [
    'CD',
    'BA',
  ], {
    A: '#forge:double_plates/quartz_alloy',
    B: '#forge:tools/files',
    C: '#forge:tools/hammers',
    D: '#forge:silicon',
  })
    .id(`kubejs:crafting/ae2/silicon_press`)

  // card_programmed_circuit
  event.remove({ id: 'pccard:item/card_programmed_circuit' })
  event.shapeless('pccard:card_programmed_circuit',
    [
      '1x ae2:crafting_card',
      '1x #gtceu:circuits/lv',
    ])
    .id('kubejs:crafting/pccard/card_programmed_circuit')

  // dimensional_tank/swap
  event.shapeless('dimstorage:dimensional_tank',
    [
      '1x endertanks:ender_tank',
      '1x #forge:tools/screwdrivers',
    ])
    .id('kubejs:crafting/dimstorage/dimensional_tank/swap')

  // ender_tank/swap
  event.shapeless('endertanks:ender_tank',
    [
      '1x dimstorage:dimensional_tank',
      '1x #forge:tools/screwdrivers',
    ])
    .id('kubejs:crafting/endertanks/ender_tank/swap')

  // dimensional_chest/swap
  event.shapeless('dimstorage:dimensional_chest',
    [
      '1x enderchests:ender_chest',
      '1x #forge:tools/screwdrivers',
    ])
    .id('kubejs:crafting/dimstorage/dimensional_chest/swap')

  // ender_chest/swap
  event.shapeless('enderchests:ender_chest',
    [
      '1x dimstorage:dimensional_chest',
      '1x #forge:tools/screwdrivers',
    ])
    .id('kubejs:crafting/enderchests/ender_chest/swap')

  // piglin
  event.shapeless('easy_piglins:piglin',
    [
      '1x minecraft:piglin_spawn_egg',
    ])
    .id('kubejs:crafting/easy_piglins/piglin')

  // infinity_wand
  event.shaped(`1x constructionwand:infinity_wand`, [
    '  B',
    ' A ',
    'A  ',
  ], {
    A: '#forge:rods/wooden',
    B: '#forge:double_plates/titanium',
  })
    .id(`kubejs:crafting/constructionwand/infinity_wand`)

  // mario pipes
  Color.DYE.forEach(color => {

    event.remove({ id: `warp_pipes:${color}_warp_pipe` })
    event.shaped(`2x warp_pipes:${color}_warp_pipe`, [
      ' A ',
      ' B ',
      ' C ',
    ], {
      A: `#forge:dyes/${color}`,
      B: `gtceu:copper_huge_fluid_pipe`,
      C: `#forge:ender_pearl_ingredients`,
    })
      .id(`kubejs:crafting/warp_pipes/${color}_warp_pipe`)
  })

  event.remove({ id: `warp_pipes:clear_warp_pipe` })
  event.shaped(`2x warp_pipes:clear_warp_pipe`, [
    'A A',
    'ABA',
    'ACA',
  ], {
    A: `#forge:glass/colorless`,
    B: `gtceu:copper_huge_fluid_pipe`,
    C: `#forge:ender_pearl_ingredients`,
  })
    .id(`kubejs:crafting/warp_pipes/clear_warp_pipe`)

  // entangled_block (nbt)
  event.shapeless('entangled:block',
    [
      '1x entangled:block'
    ])
    .id('kubejs:crafting/entangled/block/nbt')

  // iron_shovel
  event.remove({ id: `gtceu:shaped/shovel_iron` })
  event.shaped(`1x gtceu:iron_shovel`, [
    ' AB',
    'CD ',
    ' D ',
  ], {
    A: `#forge:plates/iron`,
    B: `#forge:tools/hammers`,
    C: `#forge:tools/files`,
    D: `minecraft:stick`,
  })
    .id('kubejs:crafting/gtceu/iron_shovel')

  // diamond_shovel
  event.remove({ id: `gtceu:shaped/shovel_diamond` })
  event.shaped(`1x gtceu:diamond_shovel`, [
    ' AB',
    'CD ',
    ' D ',
  ], {
    A: `#forge:plates/diamond`,
    B: `#forge:tools/hammers`,
    C: `#forge:tools/files`,
    D: `minecraft:stick`,
  })
    .id('kubejs:crafting/gtceu/diamond_shovel')

  // dismantler
  event.remove({ id: `gtceuterminal:dismantler` })
  event.shaped(`1x gtceuterminal:dismantler`, [
    'ABA',
    'CDC',
    'EFE',
  ], {
    A: `#forge:screws/steel`,
    B: `gtceu:mv_sensor`,
    C: `gtceu:black_steel_single_wire`,
    D: `gtceu:computer_monitor_cover`,
    E: `#forge:plates/steel`,
    F: `gtceu:data_stick`,
  })
    .id('kubejs:crafting/gtceuterminal/dismantler')

  // energy_analyzer
  event.remove({ id: `gtceuterminal:energy_analyzer` })
  event.shaped(`1x gtceuterminal:energy_analyzer`, [
    'ABA',
    'CDC',
    'EFE',
  ], {
    A: `#forge:screws/rose_gold`,
    B: `gtceu:mv_sensor`,
    C: `gtceu:manganese_phosphide_single_wire`,
    D: `gtceu:computer_monitor_cover`,
    E: `#forge:plates/rose_gold`,
    F: `gtceu:data_stick`,
  })
    .id('kubejs:crafting/gtceuterminal/energy_analyzer')

  // fluix_covered_cable
  event.shapeless('ae2:fluix_covered_cable',
    [
      '1x #forge:plates/rubber',
      '1x ae2:fluix_glass_cable',
    ])
    .id('kubejs:crafting/ae2/fluix_covered_cable')

  // fluix_smart_cable
  event.shapeless('ae2:fluix_smart_cable',
    [
      '1x #minecraft:wool',
      '1x ae2:fluix_glass_cable',
      '1x #forge:dusts/redstone',
      '1x #forge:dusts/glowstone',
    ])
    .id('kubejs:crafting/ae2/fluix_smart_cable/combo/wool')

  event.shapeless('ae2:fluix_smart_cable',
    [
      '1x #forge:plates/rubber',
      '1x ae2:fluix_glass_cable',
      '1x #forge:dusts/redstone',
      '1x #forge:dusts/glowstone',
    ])
    .id('kubejs:crafting/ae2/fluix_smart_cable/combo/rubber')




















  // certus_quartz_crystal
  event.custom(
    {
      "type": "ae2:transform",
      "circumstance": {
        "type": "fluid",
        "tag": "minecraft:water"
      },
      "ingredients": [
        {
          "item": "gtceu:certus_quartz_gem"
        },
        {
          "item": "gtceu:small_redstone_dust"
        }
      ],
      "result": {
        "item": "ae2:certus_quartz_crystal"
      }
    }
  )

  // conduit_binder
  event.custom(
    {
      "type": "ae2:transform",
      "circumstance": {
        "type": "fluid",
        "tag": "minecraft:water"
      },
      "ingredients": [
        {
          "item": "enderio:conduit_binder_composite"
        },
        {
          "item": "gtceu:sticky_resin"
        }
      ],
      "result": {
        "count": 2,
        "item": "enderio:conduit_binder"
      }
    }
  )

  // conduit_binder_composite
  event.custom(
    {
      "type": "ae2:transform",
      "circumstance": {
        "type": "fluid",
        "tag": "minecraft:water"
      },
      "ingredients": [
        {
          "item": "gtceu:flint_dust"
        },
        {
          "item": "gtceu:clay_dust"
        }
      ],
      "result": {
        "count": 1,
        "item": "enderio:conduit_binder_composite"
      }
    }
  )







  // fin //

})