// priority: 900


ServerEvents.recipes(event => {


    // ********************************** //
    // ***** MULTIBLOCK CONTROLLERS ***** //
    // ********************************** //
    //#region CONTROLLERS

    // certus_quartz_charger
    event.shaped('gtceu:certus_quartz_charger', [
        'ABA',
        'CDC',
        'AEA',
    ], {
        A: 'gtceu:mv_electric_motor',
        B: 'ae2:energy_level_emitter',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:mv_emitter',
    })
        .id('kubejs:crafting/gtceu/certus_quartz_charger')

    // large_inscriber
    event.shaped('gtceu:large_inscriber', [
        'ACA',
        'CDC',
        'AEA',
    ], {
        A: 'gtceu:mv_electric_piston',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:mv_robot_arm',
    })
        .id('kubejs:crafting/gtceu/large_inscriber')

    // large_resource_generator
    event.shaped('gtceu:large_resource_generator', [
        'ACA',
        'CDC',
        'AEA',
    ], {
        A: 'gtceu:ev_electric_motor',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:ev_machine_hull',
        E: 'gtceu:ev_electric_piston',
    })
        .id('kubejs:crafting/gtceu/large_resource_generator')

    // natural_fluid_generator
    event.shaped('gtceu:natural_fluid_generator', [
        'ACA',
        'CDC',
        'AEA',
    ], {
        E: 'gtceu:mv_electric_motor',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        A: 'gtceu:mv_electric_pump',
    })
        .id('kubejs:crafting/gtceu/natural_fluid_generator')

    // desulfurizer
    event.shaped('gtceu:desulfurizer', [
        'AEA',
        'CDC',
        'AEA',
    ], {
        E: 'gtceu:ev_electric_motor',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        A: 'gtceu:ev_electric_pump',
    })
        .id('kubejs:crafting/gtceu/desulfurizer')

    // glass_box
    event.shaped('gtceu:glass_box', [
        'AEA',
        'CDC',
        'AEA',
    ], {
        E: 'gtceu:laminated_glass',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        A: 'gtceu:hv_electric_motor',
    })
        .id('kubejs:crafting/gtceu/glass_box')

    // large_gas_collector
    event.shaped('gtceu:large_gas_collector', [
        'AEA',
        'CDC',
        'ACA',
    ], {
        A: 'gtceu:iv_electric_pump',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_gas_collector',
        E: 'gtceu:iv_electric_motor',
    })
        .id('kubejs:crafting/gtceu/large_gas_collector')

    // auto_cutting_board
    event.shaped('gtceu:auto_cutting_board', [
        'FAF',
        'CBD',
        'EGE',
    ], {
        A: 'easypaxellite:iron_paxel',
        B: 'gtceu:lv_machine_hull',
        C: 'minecraft:shears',
        D: 'farmersdelight:iron_knife',
        E: '#gtceu:circuits/lv',
        F: 'gtceu:lv_electric_motor',
        G: 'gtceu:lv_robot_arm',
    })
        .id('kubejs:crafting/gtceu/auto_cutting_board')

    // auto_cooking_pot
    event.shaped('gtceu:auto_cooking_pot', [
        'AEA',
        'BCB',
        'DBD',
    ], {
        A: 'minecraft:smoker',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:tin_single_cable',
        E: 'minecraft:cauldron',
    })
        .id('kubejs:crafting/gtceu/auto_cooking_pot')

    // apothic_condenser
    event.shaped('gtceu:apothic_condenser', [
        'RGB',
        'DCD',
        'FEF',
    ], {
        R: '#forge:lenses/red',
        G: '#forge:lenses/green',
        B: '#forge:lenses/blue',
        C: 'gtceu:steel_turbine_casing',
        D: '#gtceu:circuits/mv',
        E: 'gtceu:computer_monitor_cover',
        F: 'apotheosis:gem_dust',
    })
        .id('kubejs:crafting/gtceu/apothic_condenser')

    // simulation_arena
    event.shaped('gtceu:simulation_arena', [
        'AAA',
        'DCD',
        'FEF',
    ], {
        A: 'gtceu:platinum_quadruple_cable',
        C: 'gtceu:iv_machine_hull',
        D: '#gtceu:circuits/iv',
        E: 'gtceu:ev_field_generator',
        F: '#forge:plates/tungsten_steel',
    })
        .id('kubejs:crafting/gtceu/simulation_arena')

    // meat_box
    event.shaped('gtceu:meat_box', [
        'FAF',
        'DCD',
        'FAF',
    ], {
        A: 'gtceu:copper_quadruple_cable',
        C: 'gtceu:mv_machine_hull',
        D: '#gtceu:circuits/mv',
        F: '#forge:plates/steel',
    })
        .id('kubejs:crafting/gtceu/meat_box')

    // steam_alloy_smelter
    event.shaped('gtceu:steam_alloy_smelter', [
        'CDC',
        'BAB',
        'CDC',
    ], {
        A: 'gtceu:lp_steam_alloy_smelter',
        B: 'gtceu:bronze_gearbox',
        C: 'gtceu:steam_machine_casing',
        D: '#forge:gears/quartz_alloy',
    })
        .id('kubejs:crafting/gtceu/steam_alloy_smelter/from/lp')

    event.shaped('gtceu:steam_alloy_smelter', [
        'CDC',
        'BAB',
        'CDC',
    ], {
        A: 'gtceu:hp_steam_alloy_smelter',
        B: 'gtceu:bronze_gearbox',
        C: 'gtceu:steam_machine_casing',
        D: '#forge:gears/quartz_alloy',
    })
        .id('kubejs:crafting/gtceu/steam_alloy_smelter/from/hp')

    // bronze_bulk_smelter
    event.shaped('gtceu:bronze_bulk_smelter', [
        'EFE',
        'ABA',
        'CDC',
    ], {
        A: '#forge:rods/copper',
        B: 'minecraft:terracotta',
        C: '#forge:plates/copper',
        D: '#forge:tools/hammers',
        E: '#forge:screws/copper',
        F: '#forge:tools/screwdrivers',
    })
        .id('kubejs:crafting/gtceu/bronze_bulk_smelter')

    // steam_wiremill
    event.shaped('gtceu:steam_wiremill', [
        'CDC',
        'BAB',
        'CDC',
    ], {
        A: 'gtceu:lv_wiremill',
        B: 'gtceu:lv_robot_arm',
        C: 'gtceu:solid_machine_casing',
        D: '#gtceu:circuits/lv',
    })
        .id('kubejs:crafting/gtceu/steam_wiremill')

    // ev_perfect_macerator
    event.shaped('gtceu:ev_perfect_macerator', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_macerator',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_macerator')

    // ev_perfect_chemical_bath
    event.shaped('gtceu:ev_perfect_chemical_bath', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_chemical_bath',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_chemical_bath')

    // ev_perfect_centrifuge
    event.shaped('gtceu:ev_perfect_centrifuge', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_centrifuge',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_centrifuge')

    // ev_perfect_mixer
    event.shaped('gtceu:ev_perfect_mixer', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_mixer',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_mixer')

    // ev_perfect_electrolyzer
    event.shaped('gtceu:ev_perfect_electrolyzer', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_electrolyzer',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_electrolyzer')

    // ev_perfect_electromagnet
    event.shaped('gtceu:ev_perfect_electromagnet', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_electromagnetic_separator',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_electromagnet')

    // ev_perfect_assembler
    event.shaped('gtceu:ev_perfect_assembler', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_assembler',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_assembler')

    // ev_perfect_circuit_assembler
    event.shaped('gtceu:ev_perfect_circuit_assembler', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_circuit_assembler',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_circuit_assembler')

    // ev_perfect_arc_furnace
    event.shaped('gtceu:ev_perfect_arc_furnace', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_arc_furnace',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_arc_furnace')

    // ev_perfect_laser_engraver
    event.shaped('gtceu:ev_perfect_laser_engraver', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_laser_engraver',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_laser_engraver')

    // ev_perfect_sifter
    event.shaped('gtceu:ev_perfect_sifter', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_sifter',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_sifter')

    // ev_perfect_crystallization_chamber
    event.shaped('gtceu:ev_perfect_crystallization_chamber', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_autoclave',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_crystallization_chamber')

    // ev_perfect_material_press
    event.shaped('gtceu:ev_perfect_material_press', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_forming_press',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_material_press')

    // ev_perfect_brewing_vat
    event.shaped('gtceu:ev_perfect_brewing_vat', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_brewery',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_brewing_vat')

    // ev_perfect_cutting_saw
    event.shaped('gtceu:ev_perfect_cutting_saw', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_cutter',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_cutting_saw')

    // ev_perfect_fractionating_distillery
    event.shaped('gtceu:ev_perfect_fractionating_distillery', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_distillery',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_fractionating_distillery')

    // ev_perfect_extraction_machine
    event.shaped('gtceu:ev_perfect_extraction_machine', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_extractor',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_extraction_machine')

    // ev_perfect_extrusion_machine
    event.shaped('gtceu:ev_perfect_extrusion_machine', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_extruder',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_extrusion_machine')

    // ev_perfect_solidification_array
    event.shaped('gtceu:ev_perfect_solidification_array', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_fluid_solidifier',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_solidification_array')

    // ev_perfect_wire_factory
    event.shaped('gtceu:ev_perfect_wire_factory', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_wiremill',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_wire_factory')

    // ev_perfect_gas_collector
    event.shaped('gtceu:ev_perfect_gas_collector', [
        'BCB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:ev_gas_collector',
        B: '#forge:double_plates/maraging_steel_300',
        C: '#gtceu:circuits/ev',
    })
        .id('kubejs:crafting/gtceu/ev_perfect_gas_collector')

    // steam_compressor
    event.shaped('gtceu:steam_compressor', [
        'BCB',
        'DAD',
        'BCB',
    ], {
        A: 'gtceu:lp_steam_compressor',
        B: 'gtceu:steam_machine_casing',
        C: '#forge:double_plates/invar',
        D: 'gtceu:bronze_gearbox',
    })
        .id('kubejs:crafting/gtceu/steam_compressor/from/lp')

    event.shaped('gtceu:steam_compressor', [
        'BCB',
        'DAD',
        'BCB',
    ], {
        A: 'gtceu:hp_steam_compressor',
        B: 'gtceu:steam_machine_casing',
        C: '#forge:double_plates/invar',
        D: 'gtceu:bronze_gearbox',
    })
        .id('kubejs:crafting/gtceu/steam_compressor/from/hp')

    // super_extruder
    event.shaped('gtceu:super_extruder', [
        'BEB',
        'CAC',
        'BDB',
    ], {
        A: 'gtceu:mv_extruder',
        B: 'gtceu:mv_electric_piston',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:cupronickel_quadruple_wire',
        E: 'kubejs:solid_aluminium_casing',
    })
        .id('kubejs:crafting/gtceu/super_extruder')

    // lv_solar_generator
    event.shaped('gtceu:lv_solar_generator', [
        'BDB',
        'CAC',
        'BEB',
    ], {
        A: 'gtceu:lv_machine_hull',
        B: 'gtceu:manganese_phosphide_quadruple_wire',
        C: '#forge:plates/glass',
        D: 'gtceu:lv_sensor',
        E: 'gtceu:lv_emitter',
    })
        .id('kubejs:crafting/gtceu/lv_solar_generator')

    // mv_solar_generator
    event.shaped('gtceu:mv_solar_generator', [
        'BDB',
        'CAC',
        'BEB',
    ], {
        A: 'gtceu:mv_machine_hull',
        B: 'gtceu:magnesium_diboride_quadruple_wire',
        C: '#forge:plates/glass',
        D: 'gtceu:mv_sensor',
        E: 'gtceu:mv_emitter',
    })
        .id('kubejs:crafting/gtceu/mv_solar_generator')

    // hv_solar_generator
    event.shaped('gtceu:hv_solar_generator', [
        'BDB',
        'CAC',
        'BEB',
    ], {
        A: 'gtceu:hv_machine_hull',
        B: 'gtceu:mercury_barium_calcium_cuprate_quadruple_wire',
        C: '#forge:plates/glass',
        D: 'gtceu:hv_sensor',
        E: 'gtceu:hv_emitter',
    })
        .id('kubejs:crafting/gtceu/hv_solar_generator')

    // quad_electric_blast_furnace
    event.shaped('gtceu:quad_electric_blast_furnace', [
        'BDB',
        'CAC',
        'BCB',
    ], {
        A: 'gtceu:electric_blast_furnace',
        B: 'gtceu:mercury_barium_calcium_cuprate_quadruple_wire',
        C: '#gtceu:circuits/hv',
        D: '#forge:double_plates/palladium',
    })
        .id('kubejs:crafting/gtceu/quad_electric_blast_furnace')

    // woodworking_station
    event.shaped('gtceu:woodworking_station', [
        'BDB',
        'EAE',
        'CFC',
    ], {
        A: 'gtceu:lv_machine_hull',
        B: 'gtceu:tin_single_cable',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:wood_wall',
        E: 'gtceu:cobalt_brass_buzz_saw_blade',
        F: 'gtceu:lv_electric_motor',
    })
        .id('kubejs:crafting/gtceu/woodworking_station')

    // large_pyrolyse_oven
    event.shaped('gtceu:large_pyrolyse_oven', [
        'FBF',
        'CAC',
        'EDE',
    ], {
        A: 'gtceu:pyrolyse_oven',
        B: 'gtceu:iv_electric_pump',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_conveyor_module',
        E: 'gtceu:iv_electric_piston',
        F: 'gtceu:tungsten_quadruple_wire',
    })
        .id('kubejs:crafting/gtceu/large_pyrolyse_oven')

    // celestial_harvester
    event.shaped('gtceu:celestial_harvester', [
        'FBF',
        'CAC',
        'EDE',
    ], {
        A: 'gtceu:ev_machine_hull',
        B: 'gtceu:ev_electric_pump',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_conveyor_module',
        E: 'gtceu:ev_electric_piston',
        F: 'gtceu:ev_robot_arm',
    })
        .id('kubejs:crafting/gtceu/celestial_harvester')

    // mega_alloy_blast_smelter
    event.shaped('gtceu:mega_alloy_blast_smelter', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: '#forge:springs/naquadah',
        B: '#gtceu:circuits/zpm',
        C: 'gtceu:zpm_field_generator',
        D: 'gtceu:alloy_blast_smelter',
        E: '#forge:dense_plates/naquadah_alloy',
        F: 'gtceu:uranium_rhodium_dinaquadide_quadruple_wire',
    })
        .id('kubejs:crafting/gtceu/mega_alloy_blast_smelter')

    // steel_blast_furnace
    event.shaped('gtceu:steel_blast_furnace', [
        'BEF',
        'DAE',
        'CEF',
    ], {
        A: 'kubejs:primitive_smelting_bricks',
        B: '#forge:tools/hammers',
        C: '#forge:tools/screwdrivers',
        D: '#forge:plates/steel',
        E: '#forge:rods/steel',
        F: '#forge:screws/steel',
    })
        .id('kubejs:crafting/gtceu/steel_blast_furnace')

    // mega_blast_furnace
    event.remove({ id: 'gtceu:shaped/mega_blast_furnace' })
    event.shaped('gtceu:mega_blast_furnace', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: '#forge:springs/naquadah',
        B: '#gtceu:circuits/zpm',
        C: 'gtceu:zpm_field_generator',
        D: 'gtceu:electric_blast_furnace',
        E: '#forge:dense_plates/naquadah_alloy',
        F: 'gtceu:uranium_rhodium_dinaquadide_quadruple_wire',
    })
        .id('kubejs:crafting/gtceu/mega_blast_furnace')

    // mega_vacuum_freezer
    event.remove({ id: 'gtceu:shaped/mega_vacuum_freezer' })
    event.shaped('gtceu:mega_vacuum_freezer', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:niobium_titanium_normal_fluid_pipe',
        B: '#gtceu:circuits/zpm',
        C: 'gtceu:zpm_field_generator',
        D: 'gtceu:vacuum_freezer',
        E: '#forge:dense_plates/rhodium_plated_palladium',
        F: 'gtceu:uranium_rhodium_dinaquadide_quadruple_wire',
    })
        .id('kubejs:crafting/gtceu/mega_vacuum_freezer')




    //#endregion
    // ******************** //
    // ***** MACHINES ***** //
    // ******************** //
    //#region MACHINES

    // firebrick_mixer
    event.shaped('gtceu:lp_firebrick_mixer', [
        'CBC',
        'DAD',
        'BBB',
    ], {
        A: 'gtceu:bronze_machine_casing',
        B: 'gtceu:bronze_small_fluid_pipe',
        C: '#forge:small_gears/iron',
        D: 'minecraft:water_bucket',
    })
        .id('kubejs:crafting/gtceu/lp_firebrick_mixer')

    // hp_steam_solid_boiler
    event.shaped('gtceu:hp_steam_solid_boiler', [
        'AAA',
        'ABA',
        'CDC',
    ], {
        A: '#forge:plates/steel',
        B: '#gtceu:tools/crafting_wrenches',
        C: 'gtceu:sticky_resin',
        D: 'gtceu:lp_steam_solid_boiler',
    })
        .id('kubejs:crafting/gtceu/hp_steam_solid_boiler')

    // lv_card_assembler
    event.shaped('gtceu:lv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:lv_electric_motor',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:lv_conveyor_module',
        D: 'gtceu:lv_machine_hull',
        E: 'gtceu:tin_single_cable',
    })
        .id('kubejs:crafting/gtceu/lv_card_assembler')

    // mv_card_assembler
    event.shaped('gtceu:mv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:mv_electric_motor',
        B: '#gtceu:circuits/mv',
        C: 'gtceu:mv_conveyor_module',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:copper_single_cable',
    })
        .id('kubejs:crafting/gtceu/mv_card_assembler')

    // hv_card_assembler
    event.shaped('gtceu:hv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:hv_electric_motor',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:hv_conveyor_module',
        D: 'gtceu:hv_machine_hull',
        E: 'gtceu:gold_single_cable',
    })
        .id('kubejs:crafting/gtceu/hv_card_assembler')

    // ev_card_assembler
    event.shaped('gtceu:ev_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:ev_electric_motor',
        B: '#gtceu:circuits/ev',
        C: 'gtceu:ev_conveyor_module',
        D: 'gtceu:ev_machine_hull',
        E: 'gtceu:aluminium_single_cable',
    })
        .id('kubejs:crafting/gtceu/ev_card_assembler')

    // iv_card_assembler
    event.shaped('gtceu:iv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:iv_electric_motor',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_conveyor_module',
        D: 'gtceu:iv_machine_hull',
        E: 'gtceu:platinum_single_cable',
    })
        .id('kubejs:crafting/gtceu/iv_card_assembler')

    // luv_card_assembler
    event.shaped('gtceu:luv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:luv_electric_motor',
        B: '#gtceu:circuits/luv',
        C: 'gtceu:luv_conveyor_module',
        D: 'gtceu:luv_machine_hull',
        E: 'gtceu:niobium_titanium_single_cable',
    })
        .id('kubejs:crafting/gtceu/luv_card_assembler')

    // zpm_card_assembler
    event.shaped('gtceu:zpm_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:zpm_electric_motor',
        B: '#gtceu:circuits/zpm',
        C: 'gtceu:zpm_conveyor_module',
        D: 'gtceu:zpm_machine_hull',
        E: 'gtceu:vanadium_gallium_single_cable',
    })
        .id('kubejs:crafting/gtceu/zpm_card_assembler')

    // uv_card_assembler
    event.shaped('gtceu:uv_card_assembler', [
        'ABA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:uv_electric_motor',
        B: '#gtceu:circuits/uv',
        C: 'gtceu:uv_conveyor_module',
        D: 'gtceu:uv_machine_hull',
        E: 'gtceu:yttrium_barium_cuprate_single_cable',
    })
        .id('kubejs:crafting/gtceu/uv_card_assembler')

    // lv_cablemill
    event.shaped('gtceu:lv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:lv_electric_motor',
        B: 'gtceu:tin_quadruple_cable',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:lv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/lv_cablemill')

    // mv_cablemill
    event.shaped('gtceu:mv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:mv_electric_motor',
        B: 'gtceu:copper_quadruple_cable',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/mv_cablemill')

    // hv_cablemill
    event.shaped('gtceu:hv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:hv_electric_motor',
        B: 'gtceu:gold_quadruple_cable',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/hv_cablemill')

    // ev_cablemill
    event.shaped('gtceu:ev_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:ev_electric_motor',
        B: 'gtceu:aluminium_quadruple_cable',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_machine_hull',
    })
        .id('kubejs:crafting/gtceu/ev_cablemill')

    // iv_cablemill
    event.shaped('gtceu:iv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:iv_electric_motor',
        B: 'gtceu:platinum_quadruple_cable',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/iv_cablemill')

    // luv_cablemill
    event.shaped('gtceu:luv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:luv_electric_motor',
        B: 'gtceu:niobium_titanium_quadruple_cable',
        C: '#gtceu:circuits/luv',
        D: 'gtceu:luv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/luv_cablemill')

    // zpm_cablemill
    event.shaped('gtceu:zpm_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:zpm_electric_motor',
        B: 'gtceu:vanadium_gallium_quadruple_cable',
        C: '#gtceu:circuits/zpm',
        D: 'gtceu:zpm_machine_hull',
    })
        .id('kubejs:crafting/gtceu/zpm_cablemill')

    // uv_cablemill
    event.shaped('gtceu:uv_cablemill', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:uv_electric_motor',
        B: 'gtceu:yttrium_barium_cuprate_quadruple_cable',
        C: '#gtceu:circuits/uv',
        D: 'gtceu:uv_machine_hull',
    })
        .id('kubejs:crafting/gtceu/uv_cablemill')




    //#endregion
    // ***** ***** ***** //
    // ***** DUSTS ***** //
    // ***** ***** ***** //
    //#region DUSTS

    // ender_pearl_dust
    event.shapeless('4x gtceu:ender_pearl_dust',
        [
            '1x #forge:dusts/beryllium',
            '2x #forge:dusts/potassium',
            '4x #forge:dusts/saltpeter'
        ])
        .id('kubejs:crafting/gtceu/ender_pearl_dust')

    // rough_concrete_dust
    event.shapeless('1x gtceu:rough_concrete_dust',
        [
            '#forge:dusts/calcite',
            '#forge:dusts/calcite',
            '#forge:dusts/clay',
            '#forge:dusts/quartz_sand',
            '#forge:dusts/stone',
        ])
        .id('kubejs:crafting/gtceu/rough_concrete_dust')




    //#endregion
    // **************** //
    // ***** MISC ***** //
    // **************** //
    //#region MISC

    // ulv_machine_hull
    event.remove({ id: 'gtceu:shaped/ulv_machine_hull' })
    event.shaped('gtceu:ulv_machine_hull', [
        'AAA',
        'EDE',
        'ECE',
    ], {
        A: 'gtceu:sticky_resin',
        C: 'gtceu:copper_double_wire',
        D: 'gtceu:ulv_machine_casing',
        E: 'minecraft:redstone',
    })
        .id('kubejs:crafting/gtceu/ulv_machine_hull')

    // ulv_input_bus
    event.shaped('gtceu:ulv_input_bus', [
        'DBD',
        'DAD',
        'DCD',
    ], {
        A: 'gtceu:ulv_machine_hull',
        B: '#forge:chests/wooden',
        C: '#forge:tools/hammers',
        D: 'gtceu:sticky_resin',
    })
        .id('kubejs:crafting/gtceu/ulv_input_bus')

    // ulv_output_bus
    event.shaped('gtceu:ulv_output_bus', [
        'DCD',
        'DAD',
        'DBD',
    ], {
        A: 'gtceu:ulv_machine_hull',
        B: '#forge:chests/wooden',
        C: '#forge:tools/hammers',
        D: 'gtceu:sticky_resin',
    })
        .id('kubejs:crafting/gtceu/ulv_output_bus')

    // ulv_input_hatch
    event.shaped('gtceu:ulv_input_hatch', [
        'DBD',
        'DAD',
        'DCD',
    ], {
        A: 'gtceu:ulv_machine_hull',
        B: 'gtceu:wood_drum',
        C: '#forge:tools/hammers',
        D: 'gtceu:sticky_resin',
    })
        .id('kubejs:crafting/gtceu/ulv_input_hatch')

    // ulv_output_hatch
    event.shaped('gtceu:ulv_output_hatch', [
        'DCD',
        'DAD',
        'DBD',
    ], {
        A: 'gtceu:ulv_machine_hull',
        B: 'gtceu:wood_drum',
        C: '#forge:tools/hammers',
        D: 'gtceu:sticky_resin',
    })
        .id('kubejs:crafting/gtceu/ulv_output_hatch')

    // ulv_electric_pump
    event.remove({ id: 'ulvcovm:shaped/ulv_electric_pump' })
    event.shaped('ulvcovm:ulv_electric_pump', [
        'ABC',
        'DEF',
        'CGH',
    ], {
        A: '#forge:screws/copper',
        B: '#forge:rotors/copper',
        C: 'gtceu:sticky_resin',
        D: '#forge:tools/saws',
        E: 'gtceu:copper_normal_fluid_pipe',
        F: '#gtceu:tools/crafting_wrenches',
        G: 'ulvcovm:ulv_electric_motor',
        H: 'gtceu:lead_single_wire',
    })
        .id('kubejs:crafting/ulvcovm/ulv_electric_pump')

    // ulv_conveyor_module
    event.remove({ id: 'ulvcovm:shaped/ulv_electric_conveyor' })
    event.shaped('ulvcovm:ulv_conveyor_module', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: 'gtceu:sticky_resin',
        B: 'ulvcovm:ulv_electric_motor',
        C: 'gtceu:lead_single_wire',
    })
        .id('kubejs:crafting/ulvcovm/ulv_conveyor_module')

    // ulv_fluid_regulator
    event.remove({ id: 'ulvcovm:shaped/ulv_fluid_regulator' })
    event.shaped('ulvcovm:ulv_fluid_regulator', [
        'ABC',
        'DEF',
        'CGH',
    ], {
        A: '#forge:screws/copper',
        B: '#forge:rotors/copper',
        C: '#gtceu:circuits/ulv',
        D: '#forge:tools/saws',
        E: 'ulvcovm:ulv_electric_pump',
        F: '#gtceu:tools/crafting_wrenches',
        G: 'ulvcovm:ulv_electric_motor',
        H: 'gtceu:lead_single_wire',
    })
        .id('kubejs:crafting/ulvcovm/ulv_fluid_regulator')

    // ulv_robot_arm
    event.remove({ id: 'ulvcovm:shaped/ulv_robot_arm' })
    event.shaped('ulvcovm:ulv_robot_arm', [
        'AAA',
        'BCB',
        'DEC',
    ], {
        A: 'gtceu:lead_single_wire',
        B: 'ulvcovm:ulv_electric_motor',
        C: '#forge:rods/copper',
        D: 'ulvcovm:ulv_electric_piston',
        E: '#gtceu:circuits/ulv',
    })
        .id('kubejs:crafting/ulvcovm/ulv_robot_arm')




    //#endregion

    // fin //

})