// priority: 1000


// ******************* //
// **** ITEM TAGS **** //
// ******************* //
//#region ITEM TAGS

ServerEvents.tags('item', event => {

  // Add minecraft:planks tag to forge:planks/wood
  event.add('forge:planks/wood', '#minecraft:planks')

  // Add tools to minecraft:pickaxes
  event.add('minecraft:pickaxes', 'ex_hammers:stone_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:iron_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:diamond_hammer')
  event.add('minecraft:pickaxes', 'ex_hammers:netherite_hammer')

  // Add missing items to coal_coke
  event.add('forge:storage_blocks/coal_coke', '#forge:storage_blocks/coke')
  event.add('forge:coal_coke', '#forge:gems/coke')

  // Add cherry logs to vinery:cherry_logs
  event.add('vinery:cherry_logs', 'vinery:dark_cherry_log')
  event.add('vinery:cherry_logs', 'vinery:stripped_dark_cherry_log')
  event.add('vinery:cherry_logs', 'vinery:dark_cherry_wood')
  event.add('vinery:cherry_logs', 'vinery:stripped_dark_cherry_wood')

  // Add apple logs to vinery:apple_logs
  event.add('vinery:apple_logs', 'vinery:apple_log')
  event.add('vinery:apple_logs', 'vinery:apple_wood')

  // Remove ender io dyes from dyes
  event.remove('forge:dyes/brown', 'enderio:organic_brown_dye')
  event.remove('forge:dyes/green', 'enderio:organic_green_dye')
  event.remove('forge:dyes/black', 'enderio:organic_black_dye')

  event.remove('forge:dyes', 'enderio:organic_brown_dye')
  event.remove('forge:dyes', 'enderio:organic_green_dye')
  event.remove('forge:dyes', 'enderio:organic_black_dye')

  // Remove unused/hidden materials from misc
  event.remove('forge:dusts/coal', 'enderio:powdered_coal')
  event.remove('forge:dusts/iron', 'enderio:powdered_iron')
  event.remove('forge:dusts/gold', 'enderio:powdered_gold')
  event.remove('forge:dusts/copper', 'enderio:powdered_copper')
  event.remove('forge:dusts/tin', 'enderio:powdered_tin')
  event.remove('forge:dusts/cobalt', 'enderio:powdered_cobalt')
  event.remove('forge:dusts/ender_pearl', 'enderio:powdered_ender_pearl')
  event.remove('forge:dusts/quartz', 'enderio:powdered_quartz')
  event.remove('forge:dusts/lapis', 'enderio:powdered_lapis_lazuli')
  event.remove('forge:dusts/obsidian', 'enderio:powdered_obsidian')
  event.remove('forge:dusts/steel', 'enderio:powdered_steel')
  event.remove('forge:dusts/ender_pearl', 'ae2:ender_dust')
  event.remove('forge:ingots/steel', 'davebuildingmod:steel_ingot')
  event.remove('forge:silicon', 'enderio:silicon')
  event.remove('forge:ores', 'exocraft:lava_crystal_ore')

  // Add stone dust variants to forge:dusts/stone_types
  event.add('forge:dusts/stone_types', [
    '#forge:dusts/stone',
    '#forge:dusts/netherrack',
    '#forge:dusts/basalt',
    '#forge:dusts/deepslate',
    '#forge:dusts/granite',
    '#forge:dusts/andesite',
    '#forge:dusts/diorite',
    '#forge:dusts/endstone',
  ])

  // Add ingredients to farmersdelight:bone_broth_ingredients
  event.add('farmersdelight:bone_broth_ingredients', [
    '#forge:mushrooms',
    'minecraft:hanging_roots',
    'minecraft:glow_lichen',
    'minecraft:glow_berries',
  ])

  // Add ingredients to farmersdelight:mushroom_rice_ingredients
  event.add('farmersdelight:mushroom_rice_ingredients', [
    'minecraft:carrot',
    'minecraft:potato',
  ])

  // Add ingredients to farmersdelight:dumplings_ingredients
  event.add('farmersdelight:dumplings_ingredients', [
    'minecraft:brown_mushroom',
    '#forge:raw_chicken',
    '#forge:raw_beef',
    '#forge:raw_pork',
  ])

  // Add darker_concrete to forge:storage_blocks
  event.add('forge:storage_blocks', [
    'kubejs:darker_concrete',
  ])

  // Add darker_concrete to forge:storage_blocks/concrete
  event.add('forge:storage_blocks/concrete', [
    'kubejs:darker_concrete',
  ])

  // Add missing waystones to waystones:waystones
  event.add('waystones:waystones', [
    'waystones:deepslate_waystone',
    'waystones:blackstone_waystone',
    'waystones:end_stone_waystone',
  ])

  // Add ender pearl types to forge:ender_pearl_ingredients
  event.add('forge:ender_pearl_ingredients', [
    'gtceu:ender_pearl_dust',
    'minecraft:ender_pearl',
  ])

  // Add chests to forge:chests/wooden
  event.add('forge:chests/wooden', [
    'framedblocks:framed_chest',
  ])

  // Remove ender chests from forge:chests
  event.remove('forge:chests', [
    'minecraft:ender_chest',
    'enderchests:ender_chest',
    '#forge:chests/ender',
  ])

  // Remove ores from ores
  event.remove('forge:ores', [
    'exocraft:lava_crystal_ore',
    'rftoolsbase:dimensionalshard_overworld',
    'rftoolsbase:dimensionalshard_nether',
    'rftoolsbase:dimensionalshard_end',
  ])

  // Add minecraft:pickaxes to forge:tools/pickaxes
  event.add('forge:tools/pickaxes', [
    '#minecraft:pickaxes',
  ])

  // Add minecraft:axes to forge:tools/axes
  event.add('forge:tools/axes', [
    '#minecraft:axes',
  ])

  // Add minecraft:shovels to forge:tools/shovels
  event.add('forge:tools/shovels', [
    '#minecraft:shovels',
  ])

  // Add forge:tools/wrench to forge:wrenches
  event.add('forge:wrenches', [
    '#forge:tools/wrench',
  ])

  // Add coal types to forge:fuels/coals
  event.add('forge:fuels/coals', [
    'minecraft:coal',
    'minecraft:charcoal',
    '#forge:dusts/coal',
    '#forge:dusts/charcoal',
  ])

  // Add coke types to forge:fuels/cokes
  event.add('forge:fuels/cokes', [
    '#forge:gems/coke',
    '#forge:dusts/coke',
  ])

  // Remove expatternprovider silicon_block from forge:storage_blocks/silicon (fix this)
  event.remove('forge:storage_blocks/silicon', [
    'expatternprovider:silicon_block',
  ])

  // Add universal circuits to gtceu:circuits/x
  event.add('gtceu:circuits/lv', ['kubejs:lv_universal_circuit',])
  event.add('gtceu:circuits/mv', ['kubejs:mv_universal_circuit',])
  event.add('gtceu:circuits/hv', ['kubejs:hv_universal_circuit',])
  event.add('gtceu:circuits/ev', ['kubejs:ev_universal_circuit',])
  event.add('gtceu:circuits/iv', ['kubejs:iv_universal_circuit',])
  event.add('gtceu:circuits/luv', ['kubejs:luv_universal_circuit',])
  event.add('gtceu:circuits/zpm', ['kubejs:zpm_universal_circuit',])
  event.add('gtceu:circuits/uv', ['kubejs:uv_universal_circuit',])
  event.add('gtceu:circuits/uhv', ['kubejs:uhv_universal_circuit',])

  event.add('gtceu:circuits/universal', [
    'kubejs:lv_universal_circuit',
    'kubejs:mv_universal_circuit',
    'kubejs:hv_universal_circuit',
    'kubejs:ev_universal_circuit',
    'kubejs:iv_universal_circuit',
    'kubejs:luv_universal_circuit',
    'kubejs:zpm_universal_circuit',
    'kubejs:uv_universal_circuit',
    'kubejs:uhv_universal_circuit',
  ])

  // Add p2p tunnels to ae2:p2p_tunnels
  event.add('ae2:p2p_tunnels', [
    'ae2:me_p2p_tunnel',
    'ae2:redstone_p2p_tunnel',
    'ae2:item_p2p_tunnel',
    'ae2:fluid_p2p_tunnel',
    'ae2:fe_p2p_tunnel',
    'ae2:light_p2p_tunnel',
    'mae2:pattern_p2p_tunnel',
    'mae2:eu_p2p_tunnel',
    'mae2:pattern_multi_p2p_tunnel',
    'mae2:redstone_multi_p2p_tunnel',
    'mae2:fe_multi_p2p_tunnel',
    'mae2:fluid_multi_p2p_tunnel',
    'mae2:item_multi_p2p_tunnel',
    'mae2:eu_multi_p2p_tunnel',
  ])

  // Add ev perfect multis to gtceu:multiblocks/ev_perfect
  event.add('gtceu:multiblocks/ev_perfect', [
    'gtceu:ev_perfect_macerator',
    'gtceu:ev_perfect_chemical_bath',
    'gtceu:ev_perfect_centrifuge',
    'gtceu:ev_perfect_mixer',
    'gtceu:ev_perfect_electrolyzer',
    'gtceu:ev_perfect_electromagnet',
    'gtceu:ev_perfect_assembler',
    'gtceu:ev_perfect_circuit_assembler',
    'gtceu:ev_perfect_arc_furnace',
    'gtceu:ev_perfect_laser_engraver',
    'gtceu:ev_perfect_sifter',
    'gtceu:ev_perfect_crystallization_chamber',
    'gtceu:ev_perfect_material_press',
    'gtceu:ev_perfect_brewing_vat',
    'gtceu:ev_perfect_cutting_saw',
    'gtceu:ev_perfect_fractionating_distillery',
    'gtceu:ev_perfect_extraction_machine',
    'gtceu:ev_perfect_extrusion_machine',
    'gtceu:ev_perfect_solidification_array',
    'gtceu:ev_perfect_wire_factory',
    'gtceu:ev_perfect_gas_collector',
  ])

  // Add input buses to gtceu:buses/input/standard
  event.add('gtceu:buses/input/standard', [
    'gtceu:ulv_input_bus',
    'gtceu:lv_input_bus',
    'gtceu:mv_input_bus',
    'gtceu:hv_input_bus',
    'gtceu:ev_input_bus',
    'gtceu:iv_input_bus',
    'gtceu:luv_input_bus',
    'gtceu:zpm_input_bus',
    'gtceu:uv_input_bus',
    'gtceu:uhv_input_bus',
  ])

  // Add output buses to gtceu:buses/output/standard
  event.add('gtceu:buses/output/standard', [
    'gtceu:ulv_output_bus',
    'gtceu:lv_output_bus',
    'gtceu:mv_output_bus',
    'gtceu:hv_output_bus',
    'gtceu:ev_output_bus',
    'gtceu:iv_output_bus',
    'gtceu:luv_output_bus',
    'gtceu:zpm_output_bus',
    'gtceu:uv_output_bus',
    'gtceu:uhv_output_bus',
  ])

  // Add input hatches to gtceu:hatches/input/standard
  event.add('gtceu:hatches/input/standard', [
    'gtceu:ulv_input_hatch',
    'gtceu:lv_input_hatch',
    'gtceu:mv_input_hatch',
    'gtceu:hv_input_hatch',
    'gtceu:ev_input_hatch',
    'gtceu:iv_input_hatch',
    'gtceu:luv_input_hatch',
    'gtceu:zpm_input_hatch',
    'gtceu:uv_input_hatch',
    'gtceu:uhv_input_hatch',
  ])

  // Add quad input hatches to gtceu:hatches/input/quad
  event.add('gtceu:hatches/input/quad', [
    'gtceu:ev_input_hatch_4x',
    'gtceu:iv_input_hatch_4x',
    'gtceu:luv_input_hatch_4x',
    'gtceu:zpm_input_hatch_4x',
    'gtceu:uv_input_hatch_4x',
    'gtceu:uhv_input_hatch_4x',
  ])

  // Add nonuple input hatches to gtceu:hatches/input/nonuple
  event.add('gtceu:hatches/input/nonuple', [
    'gtceu:ev_input_hatch_9x',
    'gtceu:iv_input_hatch_9x',
    'gtceu:luv_input_hatch_9x',
    'gtceu:zpm_input_hatch_9x',
    'gtceu:uv_input_hatch_9x',
    'gtceu:uhv_input_hatch_9x',
  ])

  // Add dual input hatches to gtceu:hatches/input/dual
  event.add('gtceu:hatches/input/dual', [
    'gtceu:luv_dual_input_hatch',
    'gtceu:zpm_dual_input_hatch',
    'gtceu:uv_dual_input_hatch',
    'gtceu:uhv_dual_input_hatch',
  ])

  // Add output hatches to gtceu:hatches/output/standard
  event.add('gtceu:hatches/output/standard', [
    'gtceu:ulv_output_hatch',
    'gtceu:lv_output_hatch',
    'gtceu:mv_output_hatch',
    'gtceu:hv_output_hatch',
    'gtceu:ev_output_hatch',
    'gtceu:iv_output_hatch',
    'gtceu:luv_output_hatch',
    'gtceu:zpm_output_hatch',
    'gtceu:uv_output_hatch',
    'gtceu:uhv_output_hatch',
  ])

  // Add quad output hatches to gtceu:hatches/output/quad
  event.add('gtceu:hatches/output/quad', [
    'gtceu:ev_output_hatch_4x',
    'gtceu:iv_output_hatch_4x',
    'gtceu:luv_output_hatch_4x',
    'gtceu:zpm_output_hatch_4x',
    'gtceu:uv_output_hatch_4x',
    'gtceu:uhv_output_hatch_4x',
  ])

  // Add nonuple output hatches to gtceu:hatches/output/nonuple
  event.add('gtceu:hatches/output/nonuple', [
    'gtceu:ev_output_hatch_9x',
    'gtceu:iv_output_hatch_9x',
    'gtceu:luv_output_hatch_9x',
    'gtceu:zpm_output_hatch_9x',
    'gtceu:uv_output_hatch_9x',
    'gtceu:uhv_output_hatch_9x',
  ])

  // Add dual output hatches to gtceu:hatches/output/dual
  event.add('gtceu:hatches/output/dual', [
    'gtceu:luv_dual_output_hatch',
    'gtceu:zpm_dual_output_hatch',
    'gtceu:uv_dual_output_hatch',
    'gtceu:uhv_dual_output_hatch',
  ])

  // Add energy hatches to gtceu:hatches/energy/standard
  event.add('gtceu:hatches/energy/standard', [
    'gtceu:ulv_energy_input_hatch',
    'gtceu:lv_energy_input_hatch',
    'gtceu:mv_energy_input_hatch',
    'gtceu:hv_energy_input_hatch',
    'gtceu:ev_energy_input_hatch',
    'gtceu:iv_energy_input_hatch',
    'gtceu:luv_energy_input_hatch',
    'gtceu:zpm_energy_input_hatch',
    'gtceu:uv_energy_input_hatch',
    'gtceu:uhv_energy_input_hatch',
  ])

  // Add 4a energy hatches to gtceu:hatches/energy/4a
  event.add('gtceu:hatches/energy/4a', [
    'gtceu:hv_energy_input_hatch_4a',
    'gtceu:ev_energy_input_hatch_4a',
    'gtceu:iv_energy_input_hatch_4a',
    'gtceu:luv_energy_input_hatch_4a',
    'gtceu:zpm_energy_input_hatch_4a',
    'gtceu:uv_energy_input_hatch_4a',
    'gtceu:uhv_energy_input_hatch_4a',
  ])

  // Add 16a energy hatches to gtceu:hatches/energy/16a
  event.add('gtceu:hatches/energy/16a', [
    'gtceu:ev_energy_input_hatch_16a',
    'gtceu:iv_energy_input_hatch_16a',
    'gtceu:luv_energy_input_hatch_16a',
    'gtceu:zpm_energy_input_hatch_16a',
    'gtceu:uv_energy_input_hatch_16a',
    'gtceu:uhv_energy_input_hatch_16a',
  ])

  // Add 64a energy hatches to gtceu:hatches/energy/64a
  event.add('gtceu:hatches/energy/64a', [
    'gtceu:ev_substation_input_hatch_64a',
    'gtceu:iv_substation_input_hatch_64a',
    'gtceu:luv_substation_input_hatch_64a',
    'gtceu:zpm_substation_input_hatch_64a',
    'gtceu:uv_substation_input_hatch_64a',
    'gtceu:uhv_substation_input_hatch_64a',
  ])

  // Add dynamo hatches to gtceu:hatches/dynamo/standard
  event.add('gtceu:hatches/dynamo/standard', [
    'gtceu:ulv_energy_output_hatch',
    'gtceu:lv_energy_output_hatch',
    'gtceu:mv_energy_output_hatch',
    'gtceu:hv_energy_output_hatch',
    'gtceu:ev_energy_output_hatch',
    'gtceu:iv_energy_output_hatch',
    'gtceu:luv_energy_output_hatch',
    'gtceu:zpm_energy_output_hatch',
    'gtceu:uv_energy_output_hatch',
    'gtceu:uhv_energy_output_hatch',
  ])

  // Add 4a dynamo hatches to gtceu:hatches/dynamo/4a
  event.add('gtceu:hatches/dynamo/4a', [
    'gtceu:ulv_energy_output_hatch_4a',
    'gtceu:lv_energy_output_hatch_4a',
    'gtceu:mv_energy_output_hatch_4a',
    'gtceu:hv_energy_output_hatch_4a',
    'gtceu:ev_energy_output_hatch_4a',
    'gtceu:iv_energy_output_hatch_4a',
    'gtceu:luv_energy_output_hatch_4a',
    'gtceu:zpm_energy_output_hatch_4a',
    'gtceu:uv_energy_output_hatch_4a',
    'gtceu:uhv_energy_output_hatch_4a',
  ])

  // Add 16a dynamo hatches to gtceu:hatches/dynamo/16a
  event.add('gtceu:hatches/dynamo/16a', [
    'gtceu:ulv_energy_output_hatch_16a',
    'gtceu:lv_energy_output_hatch_16a',
    'gtceu:mv_energy_output_hatch_16a',
    'gtceu:hv_energy_output_hatch_16a',
    'gtceu:ev_energy_output_hatch_16a',
    'gtceu:iv_energy_output_hatch_16a',
    'gtceu:luv_energy_output_hatch_16a',
    'gtceu:zpm_energy_output_hatch_16a',
    'gtceu:uv_energy_output_hatch_16a',
    'gtceu:uhv_energy_output_hatch_16a',
  ])

  // Add 64a dynamo hatches to gtceu:hatches/dynamo/64a
  event.add('gtceu:hatches/dynamo/64a', [
    'gtceu:ulv_energy_output_hatch_64a',
    'gtceu:lv_energy_output_hatch_64a',
    'gtceu:mv_energy_output_hatch_64a',
    'gtceu:hv_energy_output_hatch_64a',
    'gtceu:ev_substation_output_hatch_64a',
    'gtceu:iv_substation_output_hatch_64a',
    'gtceu:luv_substation_output_hatch_64a',
    'gtceu:zpm_substation_output_hatch_64a',
    'gtceu:uv_substation_output_hatch_64a',
    'gtceu:uhv_substation_output_hatch_64a',
  ])

  // Add muffler hatches to gtceu:hatches/muffler
  event.add('gtceu:hatches/muffler', [
    'gtceu:lv_muffler_hatch',
    'gtceu:mv_muffler_hatch',
    'gtceu:hv_muffler_hatch',
    'gtceu:ev_muffler_hatch',
    'gtceu:iv_muffler_hatch',
    'gtceu:luv_muffler_hatch',
    'gtceu:zpm_muffler_hatch',
    'gtceu:uv_muffler_hatch',
    'gtceu:uhv_muffler_hatch',
  ])

  // Add parallel hatches to gtceu:hatches/parallel
  event.add('gtceu:hatches/parallel', [
    'gtceu:iv_parallel_hatch',
    'gtceu:luv_parallel_hatch',
    'gtceu:zpm_parallel_hatch',
    'gtceu:uv_parallel_hatch',
  ])

  // Add smd and advanced smd components to gtceu:smd_xxx
  event.add('gtceu:smd_transistors', [
    'gtceu:smd_transistor',
    'gtceu:advanced_smd_transistor',
  ])

  event.add('gtceu:smd_resistors', [
    'gtceu:smd_resistor',
    'gtceu:advanced_smd_resistor',
  ])

  event.add('gtceu:smd_capacitors', [
    'gtceu:smd_capacitor',
    'gtceu:advanced_smd_capacitor',
  ])

  event.add('gtceu:smd_diodes', [
    'gtceu:smd_diode',
    'gtceu:advanced_smd_diode',
  ])

  event.add('gtceu:smd_inductors', [
    'gtceu:smd_inductor',
    'gtceu:advanced_smd_inductor',
  ])


  // fin //

})




//#endregion
// ******************** //
// **** BLOCK TAGS **** //
// ******************** //
//#region BLOCK TAGS

ServerEvents.tags('block', event => {

  // Blocks added to minecraft:mineable/pickaxe
  event.add('minecraft:mineable/pickaxe', [
    'travelanchors:travel_anchor',
    'minecraft:reinforced_deepslate',
    'mae2:cloud_chamber',
    'kubejs:quartz_alloy_machine_casing',
    'kubejs:quartz_alloy_machine_hull',
    'kubejs:chiseled_darker_concrete',
    'kubejs:cracked_darker_concrete_bricks',
    'kubejs:darker_concrete_bricks',
    'kubejs:darker_concrete_cobblestone',
    'kubejs:darker_concrete_small_tile',
    'kubejs:darker_concrete_tile',
    'kubejs:darker_concrete_windmill_a',
    'kubejs:darker_concrete_windmill_b',
    'kubejs:darker_concrete',
    'kubejs:mossy_darker_concrete_bricks',
    'kubejs:mossy_darker_concrete_cobblestone',
    'kubejs:polished_darker_concrete',
    'kubejs:small_darker_concrete_bricks',
    'kubejs:square_darker_concrete_bricks',
    'kubejs:dark_steel_casing',
    'kubejs:medium_temperature_smelting_casing',
    'kubejs:electrolytic_casing',
    'kubejs:solid_aluminium_casing',
    'kubejs:ignota_casing',
    'kubejs:pyrolysis_casing',
    'kubejs:primitive_smelting_bricks',
    'kubejs:custom_a_coil_block',

    'kubejs:marble_dent',
    'kubejs:marble_dent_large',
    'kubejs:fused_quartz_cryoglass',
    'kubejs:railed_bricks',
  ])

  // Blocks added to forge:mineable/wrench
  event.add('forge:mineable/wrench', [
    'kubejs:quartz_alloy_machine_casing',
    'kubejs:quartz_alloy_machine_hull',
    'kubejs:dark_steel_casing',
    'kubejs:medium_temperature_smelting_casing',
    'kubejs:electrolytic_casing',
    'kubejs:solid_aluminium_casing',
    'kubejs:ignota_casing',
    'kubejs:pyrolysis_casing',
    'kubejs:primitive_smelting_bricks',
    'kubejs:custom_a_coil_block',
  ])

  // Blocks added to forge:very_fast_walkable_blocks
  event.add('forge:very_fast_walkable_blocks', [
    'kubejs:chiseled_darker_concrete',
    'kubejs:cracked_darker_concrete_bricks',
    'kubejs:darker_concrete_bricks',
    'kubejs:darker_concrete_cobblestone',
    'kubejs:darker_concrete_small_tile',
    'kubejs:darker_concrete_tile',
    'kubejs:darker_concrete_windmill_a',
    'kubejs:darker_concrete_windmill_b',
    'kubejs:darker_concrete',
    'kubejs:mossy_darker_concrete_bricks',
    'kubejs:mossy_darker_concrete_cobblestone',
    'kubejs:polished_darker_concrete',
    'kubejs:small_darker_concrete_bricks',
    'kubejs:square_darker_concrete_bricks',
  ])

  // Blocks added to forge:needs_wood_tool
  event.add('forge:needs_wood_tool', [
    'kubejs:chiseled_darker_concrete',
    'kubejs:cracked_darker_concrete_bricks',
    'kubejs:darker_concrete_bricks',
    'kubejs:darker_concrete_cobblestone',
    'kubejs:darker_concrete_small_tile',
    'kubejs:darker_concrete_tile',
    'kubejs:darker_concrete_windmill_a',
    'kubejs:darker_concrete_windmill_b',
    'kubejs:darker_concrete',
    'kubejs:mossy_darker_concrete_bricks',
    'kubejs:mossy_darker_concrete_cobblestone',
    'kubejs:polished_darker_concrete',
    'kubejs:small_darker_concrete_bricks',
    'kubejs:square_darker_concrete_bricks',
  ])

  // Blocks added to forge:storage_blocks/concrete
  event.add('forge:storage_blocks/concrete', [
    'kubejs:darker_concrete',
  ])

  // Blocks added to forge:storage_blocks
  event.add('forge:storage_blocks', [
    'kubejs:darker_concrete',
  ])

  // SFG booster blocks
  event.add('sfg:tier_1_generator', 'gtceu:cupronickel_coil_block')
  event.add('sfg:tier_2_generator', 'gtceu:kanthal_coil_block')
  event.add('sfg:tier_3_generator', 'gtceu:nichrome_coil_block')
  event.add('sfg:tier_4_generator', 'gtceu:rtm_alloy_coil_block')
  event.add('sfg:tier_5_generator', 'gtceu:hssg_coil_block')
  event.remove('sfg:tier_1_generator', 'minecraft:iron_block')
  event.remove('sfg:tier_2_generator', 'minecraft:gold_block')
  event.remove('sfg:tier_3_generator', 'minecraft:diamond_block')
  event.remove('sfg:tier_4_generator', 'minecraft:emerald_block')
  event.remove('sfg:tier_5_generator', 'minecraft:netherite_block')

  // Remove ores from ores
  event.remove('forge:ores', [
    'exocraft:lava_crystal_ore',
    'rftoolsbase:dimensionalshard_overworld',
    'rftoolsbase:dimensionalshard_nether',
    'rftoolsbase:dimensionalshard_end',
  ])

  // Add ores to banned_blocks
  event.add('srg:banned_blocks', [
    'exocraft:lava_crystal_ore',
    'rftoolsbase:dimensionalshard_overworld',
    'rftoolsbase:dimensionalshard_nether',
    'rftoolsbase:dimensionalshard_end',
  ])

  // Blocks added to infinite_blocks:infinite_blocks
  event.add('infinite_blocks:infinite_blocks', [
    'xtonesreworked:xtone_tile',
    '#forge:cobblestone',
    '#forge:concretes',
    '#minecraft:terracotta',
    'laboratoryblocks:laboratory_block',
    'laboratoryblocks:pla_block',
    'factory_blocks:factory',
    'factory_blocks:sturdy',
    'minecraft:grass_block',
    'minecraft:podzol',
    'minecraft:mycelium',
    'minecraft:dirt',
    'minecraft:coarse_dirt',
    'minecraft:rooted_dirt',
    'minecraft:mud',
    'minecraft:moss_block',
    'minecraft:muddy_mangrove_roots',
  ])

  // Blocks removed from infinite_blocks:infinite_blocks
  event.remove('infinite_blocks:infinite_blocks', [
    '#minecraft:dirt',
  ])

  // Blocks removed from unbreakable_netherite:interactionblock
  event.remove('unbreakable_netherite:interactionblock', [
    'minecraft:netherite_block',
  ])

  // Blocks added to unbreakable_netherite:interactionblock
  event.add('unbreakable_netherite:interactionblock', [
    'gtceu:iridium_block',
  ])

  // Blocks removed from forge:stone
  event.remove('forge:stone', [
    'gtceu:light_concrete',
    'gtceu:dark_concrete',
  ])

  // Blocks removed from forge:cobblestone
  event.remove('forge:cobblestone', [
    'gtceu:light_concrete_cobblestone',
    'gtceu:dark_concrete_cobblestone',
  ])

  // Blocks added to gtceu:cleanroom_doors
  event.add('gtceu:cleanroom_doors', [
    'laboratoryblocks:laboratory_door',
    'laboratoryblocks:glass_laboratory_door',
    'dustrial_decor:padded_door',
    'dustrial_decor:chain_door',
    'dustrial_decor:industrial_iron_door',
    'dustrial_decor:sheet_metal_door',
    'dustrial_decor:rusty_sheet_metal_door',
    'dustrial_decor:rusty_iron_door',
    'glassential:glass_door',
    'glassential:dark_ethereal_door',
    'glassential:dark_ethereal_reverse_door',
    'glassential:ethereal_door',
    'glassential:ethereal_reverse_door',
    'glassential:light_door',
    'glassential:redstone_door',
    'glassential:ghostly_door',
    'glassential:black_glass_door',
    'glassential:blue_glass_door',
    'glassential:brown_glass_door',
    'glassential:cyan_glass_door',
    'glassential:gray_glass_door',
    'glassential:green_glass_door',
    'glassential:light_blue_glass_door',
    'glassential:light_gray_glass_door',
    'glassential:lime_glass_door',
    'glassential:magenta_glass_door',
    'glassential:orange_glass_door',
    'glassential:pink_glass_door',
    'glassential:purple_glass_door',
    'glassential:red_glass_door',
    'glassential:tinted_glass_door',
    'glassential:white_glass_door',
    'glassential:yellow_glass_door',
    'framedblocks:framed_door',
    'framedblocks:framed_iron_door',
    'davebuildingmod:steel_door',
  ])

  // Blocks added to gtceu:cleanroom_floors
  event.add('gtceu:cleanroom_floors', [
    '#warp_pipes:warp_pipes',
  ])

  // Blocks added to forge:bookshelves
  event.add('forge:bookshelves', [
    'minecraft:chiseled_bookshelf',
    'apotheosis:hellshelf',
    'apotheosis:infused_hellshelf',
    'apotheosis:blazing_hellshelf',
    'apotheosis:glowing_hellshelf',
    'apotheosis:seashelf',
    'apotheosis:infused_seashelf',
    'apotheosis:crystal_seashelf',
    'apotheosis:heart_seashelf',
    'apotheosis:dormant_deepshelf',
    'apotheosis:deepshelf',
    'apotheosis:echoing_deepshelf',
    'apotheosis:soul_touched_deepshelf',
    'apotheosis:echoing_sculkshelf',
    'apotheosis:soul_touched_sculkshelf',
    'apotheosis:endshelf',
    'apotheosis:pearl_endshelf',
    'apotheosis:draconic_endshelf',
    'apotheosis:beeshelf',
    'apotheosis:melonshelf',
    'apotheosis:stoneshelf',
    'apotheosis:rectifier',
    'apotheosis:rectifier_t2',
    'apotheosis:sightshelf',
    'apotheosis:sightshelf_t2',
    'apotheosis:filtering_shelf',
    'apotheosis:treasure_shelf',
    'laboratoryblocks:laboratory_bookshelf',
    'laboratoryblocks:chiseled_laboratory_bookshelf',
    'laboratoryblocks:chiseled_enlighted_laboratory_bookshelf',
    'framedblocks:framed_chiseled_bookshelf',
  ])

  // Blocks added to minecraft:beacon_base_blocks
  event.add('minecraft:beacon_base_blocks', [
    'gtceu:materia_ignota_block',
  ])


  // fin //

})




//#endregion
// ******************** //
// **** FLUID TAGS **** //
// ******************** //
//#region FLUID TAGS

ServerEvents.tags('fluid', event => {

  // Add xp juice to experience
  // event.add('forge:experience', 'enderio:xp_juice')


  // fin //

})




//#endregion
// *************************** //
// **** BLOCK LOOT TABLES **** //
// *************************** // (move this?)
//#region BLOCK LOOT TABLES

ServerEvents.blockLootTables(event => {

  // Fix block not dropping item
  event.addSimpleBlock('xtonesreworked:xtone_tile', 'xtonesreworked:xtone_tile')
  event.addSimpleBlock('minecraft:reinforced_deepslate', 'minecraft:reinforced_deepslate')
  event.addSimpleBlock('mae2:cloud_chamber', 'mae2:cloud_chamber')




  //#endregion


  // fin //

})