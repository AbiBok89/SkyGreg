// priority: 999


ServerEvents.recipes(event => {

    // angelring
    event.remove([
        { id: 'angelring:energetic_angel_ring' },
        { id: 'angelring:leadstone_angel_ring' },
        { id: 'angelring:hardened_angel_ring' },
        { id: 'angelring:reinforced_angel_ring' },
        { id: 'angelring:resonant_angel_ring' },
        { id: 'angelring:diamond_ring' },
    ])

    // rfd
    event.remove([
        { id: 'rfd:clay_gen_tier_1' },
        { id: 'rfd:clay_gen_tier_2' },
        { id: 'rfd:clay_gen_tier_3' },
        { id: 'rfd:clay_gen_tier_4' },
        { id: 'rfd:clay_gen_tier_5' },
        { id: 'rfd:clean_gen_tier_1' },
        { id: 'rfd:clean_gen_tier_2' },
        { id: 'rfd:clean_gen_tier_3' },
        { id: 'rfd:clean_gen_tier_4' },
        { id: 'rfd:clean_gen_tier_5' },
        { id: 'rfd:fungus_gen_tier_1' },
        { id: 'rfd:fungus_gen_tier_2' },
        { id: 'rfd:fungus_gen_tier_3' },
        { id: 'rfd:fungus_gen_tier_4' },
        { id: 'rfd:fungus_gen_tier_5' },
        { id: 'rfd:glowstone_gen_tier_1' },
        { id: 'rfd:glowstone_gen_tier_2' },
        { id: 'rfd:glowstone_gen_tier_3' },
        { id: 'rfd:glowstone_gen_tier_4' },
        { id: 'rfd:glowstone_gen_tier_5' },
        { id: 'rfd:grass_gen_tier_1' },
        { id: 'rfd:grass_gen_tier_2' },
        { id: 'rfd:grass_gen_tier_3' },
        { id: 'rfd:grass_gen_tier_4' },
        { id: 'rfd:grass_gen_tier_5' },
        { id: 'rfd:gravel_gen_tier_1' },
        { id: 'rfd:gravel_gen_tier_2' },
        { id: 'rfd:gravel_gen_tier_3' },
        { id: 'rfd:gravel_gen_tier_4' },
        { id: 'rfd:gravel_gen_tier_5' },
        { id: 'rfd:ice_gen_tier_1' },
        { id: 'rfd:ice_gen_tier_2' },
        { id: 'rfd:ice_gen_tier_3' },
        { id: 'rfd:ice_gen_tier_4' },
        { id: 'rfd:ice_gen_tier_5' },
        { id: 'rfd:obsidian_gen_tier_1' },
        { id: 'rfd:obsidian_gen_tier_2' },
        { id: 'rfd:obsidian_gen_tier_3' },
        { id: 'rfd:obsidian_gen_tier_4' },
        { id: 'rfd:obsidian_gen_tier_5' },
        { id: 'rfd:quartz_gen_tier_1' },
        { id: 'rfd:quartz_gen_tier_2' },
        { id: 'rfd:quartz_gen_tier_3' },
        { id: 'rfd:quartz_gen_tier_4' },
        { id: 'rfd:quartz_gen_tier_5' },
        { id: 'rfd:redstone_gen_tier_1' },
        { id: 'rfd:redstone_gen_tier_2' },
        { id: 'rfd:redstone_gen_tier_3' },
        { id: 'rfd:redstone_gen_tier_4' },
        { id: 'rfd:redstone_gen_tier_5' },
        { id: 'rfd:snow_gen_tier_1' },
        { id: 'rfd:snow_gen_tier_2' },
        { id: 'rfd:snow_gen_tier_3' },
        { id: 'rfd:snow_gen_tier_4' },
        { id: 'rfd:snow_gen_tier_5' },
        { id: 'rfd:sand_gen_tier_1' },
        { id: 'rfd:sand_gen_tier_2' },
        { id: 'rfd:sand_gen_tier_3' },
        { id: 'rfd:sand_gen_tier_4' },
        { id: 'rfd:sand_gen_tier_5' },
        { id: 'rfd:soulsand_gen_tier_1' },
        { id: 'rfd:soulsand_gen_tier_2' },
        { id: 'rfd:soulsand_gen_tier_3' },
        { id: 'rfd:soulsand_gen_tier_4' },
        { id: 'rfd:soulsand_gen_tier_5' },
        { id: 'rfd:ore_gen_tier_1' },
        { id: 'rfd:ore_gen_tier_2' },
        { id: 'rfd:ore_gen_tier_3' },
        { id: 'rfd:ore_gen_tier_4' },
        { id: 'rfd:ore_gen_tier_5' },
        { id: 'rfd:dye_gen_tier_1' },
        { id: 'rfd:dye_gen_tier_2' },
        { id: 'rfd:dye_gen_tier_3' },
        { id: 'rfd:dye_gen_tier_4' },
        { id: 'rfd:dye_gen_tier_5' },
        { id: 'rfd:crushed_netherrack_gen_tier_1' },
        { id: 'rfd:crushed_netherrack_gen_tier_2' },
        { id: 'rfd:crushed_netherrack_gen_tier_3' },
        { id: 'rfd:crushed_netherrack_gen_tier_4' },
        { id: 'rfd:crushed_netherrack_gen_tier_5' },
        { id: 'rfd:crushed_endstone_gen_tier_1' },
        { id: 'rfd:crushed_endstone_gen_tier_2' },
        { id: 'rfd:crushed_endstone_gen_tier_3' },
        { id: 'rfd:crushed_endstone_gen_tier_4' },
        { id: 'rfd:crushed_endstone_gen_tier_5' },
        { id: 'rfd:dust_gen_tier_1' },
        { id: 'rfd:dust_gen_tier_2' },
        { id: 'rfd:dust_gen_tier_3' },
        { id: 'rfd:dust_gen_tier_4' },
        { id: 'rfd:dust_gen_tier_5' },
    ])

    // davebuildingmod
    event.remove([
        { id: 'davebuildingmod:rec_steel_ingot' },
        { id: 'davebuildingmod:rec_steel_block' },
        { id: 'davebuildingmod:rec_copper_boiler' },
        { id: 'davebuildingmod:rec_zinc_boiler' },
        { id: 'davebuildingmod:rec_brass_boiler' },
        { id: 'davebuildingmod:rec_dirt_slab' },
    ])

    // exocraft
    event.remove([
        { id: 'exocraft:atlas_unit' },
        { id: 'exocraft:ogre_unit' },
        { id: 'exocraft:stryder_unit' },
        { id: 'exocraft:legion_unit' },
        { id: 'exocraft:ion_unit' },
        { id: 'exocraft:empty_unit' },
        { id: 'exocraft:lava_crystal' },
        { id: 'exocraft:lava_crystal_block' },
        { id: 'exocraft:lava_crystal_ore' },
        { id: 'exocraft:smelting/reinforced_iron_plate' },
    ])

    // farmersdelight
    event.remove([
        { id: 'farmersdelight:paper_from_tree_bark' },
        { id: 'farmersdelight:bread_from_smelting' },
        { id: 'farmersdelight:bread_from_smoking' },
        { id: 'farmersdelight:painting_from_canvas' },
        { id: 'farmersdelight:book_from_canvas' },
    ])

    // apotheosis
    event.remove({ id: 'apotheosis:gem_cutting_table' })

    // enderio (nuke all except selected types)
    event.remove({
        not: [
            { type: 'enderio:painting' },
            { type: 'enderio:tank' },
            { type: 'enderio:enchanting' }
        ],
        mod: 'enderio'
    });

    // minecraft
    event.remove([
        { id: 'minecraft:charcoal' },
        { id: 'minecraft:glowstone_dust' },
    ])

    // ae2
    event.remove({ id: 'ae2:inscriber/ender_dust' })

    // expatternprovider (Extended AE)
    // event.remove({ output: 'expatternprovider:infinity_cell' })

    // advgenerators
    event.remove({ id: 'advgenerators:turbines/blade' }) // item is hidden

    // ender storage types
    event.remove([
        { id: 'dimstorage:solid_dim_core' },
        { id: 'dimstorage:dim_core' },
        { id: 'dimstorage:dim_wall' },
        { id: 'endertanks:tank' },
        { id: 'enderchests:ender_chest' },
    ])

    // functionalstorage
    event.remove([
        { id: 'functionalstorage:oak_drawer_alternate_x1' },
        { id: 'functionalstorage:oak_drawer_alternate_x2' },
        { id: 'functionalstorage:oak_drawer_alternate_x4' },
        { id: 'functionalstorage:custom_compacting/melon' },
        { id: 'functionalstorage:custom_compacting/clay' },
        { id: 'functionalstorage:custom_compacting/glowstone' },
        { id: 'functionalstorage:custom_compacting/packed_ice' },
        { id: 'functionalstorage:custom_compacting/ice' },
        { id: 'functionalstorage:custom_compacting/amethyst' },
        { id: 'functionalstorage:custom_compacting/quartz' },
        { id: 'functionalstorage:compacting_drawer' },
        { id: 'functionalstorage:compacting_framed_drawer' },
        { id: 'functionalstorage:simple_compacting_drawer' },
        { id: 'functionalstorage:framed_simple_compacting_drawer' },
    ])

    // storagedrawers
    event.remove([
        { id: 'storagedrawers:compacting_drawers_2' },
        { id: 'storagedrawers:compacting_drawers_3' },
        { id: 'storagedrawers:compacting_half_drawers_2' },
        { id: 'storagedrawers:compacting_half_drawers_3' },
    ])

    // glassential
    event.remove([
        { id: 'glassential:glass_trapdoor' },
    ])

    // gtceu
    event.remove([
        { id: 'gtceu:extractor/extract_chipped_materialized_experience_gem' },
        { id: 'gtceu:extractor/extract_flawed_materialized_experience_gem' },
        { id: 'gtceu:extractor/extract_materialized_experience_gem' },
        { id: 'gtceu:extractor/extract_flawless_materialized_experience_gem' },
        { id: 'gtceu:extractor/extract_materialized_experience_dust' },
        { id: 'gtceu:extractor/extract_materialized_experience_block' },
    ])


    // fin //

})