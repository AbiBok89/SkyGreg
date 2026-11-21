// priority: 999


// *************************************** //
// ***** ALL THINGS NETHERITE RELATED **** //
// *************************************** //

ServerEvents.recipes(event => {

    // ******************** //
    // ***** SMITHING ***** //
    // ******************** //

    event.remove([
        { id: 'gtceu:netherite_axe_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_wrench_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_scythe_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_butchery_knife_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_ev_drill_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_pickaxe_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_mining_hammer_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_lv_wirecutter_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_knife_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_sword_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_screwdriver_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_iv_wirecutter_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hammer_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_iv_wrench_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_crowbar_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_spade_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_wire_cutter_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hv_wirecutter_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_iv_screwdriver_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_lv_screwdriver_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_saw_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hv_chainsaw_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_file_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_lv_drill_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_iv_chainsaw_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_lv_wrench_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_lv_chainsaw_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hv_screwdriver_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hv_wrench_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hoe_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_buzzsaw_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_iv_drill_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_shovel_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_hv_drill_smithing_transform_from_diamond' },
        { id: 'gtceu:netherite_mv_drill_smithing_transform_from_diamond' },

        { id: 'minecraft:netherite_shovel_smithing' },
        { id: 'minecraft:netherite_pickaxe_smithing' },
        { id: 'minecraft:netherite_axe_smithing' },
        { id: 'minecraft:netherite_hoe_smithing' },
        { id: 'minecraft:netherite_sword_smithing' },

        { id: 'ex_hammers:netherite_hammer' },
        { id: 'easypaxellite:netherite_paxel_smithing' },
        { id: 'farmersdelight:netherite_knife_smithing' },
        { id: 'vinery:banner_from_smithing_table' },
        { id: 'bakery:banner_from_smithing_table' },
        { id: 'brewery:banner_from_smithing_table' },
        { id: 'brewery:netherite_brewingstation_smithing' },
        { id: 'functionalstorage:netherite_upgrade' },

        // { id: 'sophisticatedbackpacks:netherite_backpack' },
    ])

    const upgradeItem = 'minecraft:netherite_upgrade_smithing_template'
    const upgradeIngot = 'gtceu:forged_netherite_ingot'
    const unbreakable = '{Damage:0,Unbreakable:1.0d}'

    const toSmith = [
        { out: Item.of('ex_hammers:netherite_hammer', unbreakable), in: 'ex_hammers:diamond_hammer', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('easypaxellite:netherite_paxel', unbreakable), in: 'easypaxellite:diamond_paxel', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('farmersdelight:netherite_knife', unbreakable), in: 'farmersdelight:diamond_knife', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('2x vinery:vinery_standard'), in: 'vinery:vinery_standard', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('2x bakery:bakery_standard'), in: 'bakery:bakery_standard', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('2x brewery:beer_standard'), in: 'brewery:beer_standard', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('brewery:netherite_brewingstation'), in: 'brewery:copper_brewingstation', temp: upgradeItem, upgrade: upgradeIngot },
        { out: Item.of('functionalstorage:netherite_upgrade'), in: 'functionalstorage:diamond_upgrade', temp: upgradeItem, upgrade: upgradeIngot },
    ]

    const smither = (output, template, toUpgrade, upgrader, id) => {
        event.smithing(
            output,         // output               // out
            template,       // smithing template    // temp
            toUpgrade,      // to be upgraded       // in
            upgrader        // upgrade item         // upgrade
        )
            .id(id)
    }

    toSmith.forEach(smith => {
        const outId = (smith.out.id ?? Item.of(smith.out).id)
        const outMod = outId.split(':')[0]
        const outItem = outId.split(':')[1]
        smither(smith.out, smith.temp, smith.in, smith.upgrade, `kubejs:smithing/${outMod}/${outItem}`)
    })

    // event.custom(
    //     {
    //         "type": "sophisticatedbackpacks:smithing_backpack_upgrade",
    //         "addition": {
    //             "item": "gtceu:forged_netherite_ingot"
    //         },
    //         "base": {
    //             "item": "sophisticatedbackpacks:diamond_backpack"
    //         },
    //         "result": {
    //             "item": "sophisticatedbackpacks:netherite_backpack"
    //         },
    //         "template": {
    //             "item": "minecraft:netherite_upgrade_smithing_template"
    //         }
    //     }
    // )
    //     .id('kubejs:crafting/sophisticatedbackpacks/netherite_backpack')

    // ******************** //
    // ***** CRAFTING ***** //
    // ******************** //

    const disable = true

    event.remove([
        { id: 'easypaxellite:netherite_paxel_ingot' },
        { id: 'easypaxellite:netherite_paxel' },
        { id: 'minecraft:netherite_ingot' },
    ])

    // netherite_helmet
    if (disable) { event.remove({ id: 'minecraft:netherite_helmet_smithing' }) }
    event.shaped(Item.of('minecraft:netherite_helmet', unbreakable), [
        'AAA',
        'ABA',
        '   ',
    ], {
        A: '#forge:plates/forged_netherite',
        B: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/minecraft/netherite_helmet')

    // netherite_chestplate
    if (disable) { event.remove({ id: 'minecraft:netherite_chestplate_smithing' }) }
    event.shaped(Item.of('minecraft:netherite_chestplate', unbreakable), [
        'ABA',
        'AAA',
        'AAA',
    ], {
        A: '#forge:plates/forged_netherite',
        B: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/minecraft/netherite_chestplate')

    // netherite_leggings
    if (disable) { event.remove({ id: 'minecraft:netherite_leggings_smithing' }) }
    event.shaped(Item.of('minecraft:netherite_leggings', unbreakable), [
        'AAA',
        'ABA',
        'A A',
    ], {
        A: '#forge:plates/forged_netherite',
        B: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/minecraft/netherite_leggings')

    // netherite_boots
    if (disable) { event.remove({ id: 'minecraft:netherite_boots_smithing' }) }
    event.shaped(Item.of('minecraft:netherite_boots', unbreakable), [
        'A A',
        'ABA',
        '   ',
    ], {
        A: '#forge:plates/forged_netherite',
        B: '#forge:tools/hammers',
    })
        .id('kubejs:crafting/minecraft/netherite_boots')

    // sightshelf_t2
    if (disable) { event.remove({ id: 'apotheosis:sightshelf_t2' }) }
    event.shaped('apotheosis:sightshelf_t2', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: '#forge:storage_blocks/emerald',
        B: '#forge:ingots/forged_netherite',
        C: Item.of('minecraft:potion', '{Potion:"minecraft:long_night_vision"}').strongNBT(),
        D: 'apotheosis:sightshelf',
    })
        .id('kubejs:crafting/apotheosis/sightshelf_t2')

    // reforging_table
    if (disable) { event.remove({ id: 'apotheosis:reforging_table' }) }
    event.shaped('apotheosis:reforging_table', [
        ' A ',
        'BCB',
        'DDD',
    ], {
        A: '#forge:ingots/forged_netherite',
        B: 'apotheosis:epic_material',
        C: 'apotheosis:simple_reforging_table',
        D: 'minecraft:nether_bricks',
    })
        .id('kubejs:crafting/apotheosis/reforging_table')

    // disk_housing
    if (disable) { event.remove({ id: 'ae2things:cells/disk_housing' }) }
    event.shaped('ae2things:disk_housing', [
        'ABA',
        'B B',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
    })
        .id('kubejs:crafting/ae2things/disk_housing')

    // disk_drive_1k
    if (disable) { event.remove({ id: 'ae2things:cells/disk_drive_1k' }) }
    event.shaped('ae2things:disk_drive_1k', [
        'ABA',
        'BEB',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
        E: 'ae2:cell_component_1k',
    })
        .id('kubejs:crafting/ae2things/disk_drive_1k')

    // disk_drive_4k
    if (disable) { event.remove({ id: 'ae2things:cells/disk_drive_4k' }) }
    event.shaped('ae2things:disk_drive_4k', [
        'ABA',
        'BEB',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
        E: 'ae2:cell_component_4k',
    })
        .id('kubejs:crafting/ae2things/disk_drive_4k')

    // disk_drive_16k
    if (disable) { event.remove({ id: 'ae2things:cells/disk_drive_16k' }) }
    event.shaped('ae2things:disk_drive_16k', [
        'ABA',
        'BEB',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
        E: 'ae2:cell_component_16k',
    })
        .id('kubejs:crafting/ae2things/disk_drive_16k')

    // disk_drive_64k
    if (disable) { event.remove({ id: 'ae2things:cells/disk_drive_64k' }) }
    event.shaped('ae2things:disk_drive_64k', [
        'ABA',
        'BEB',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
        E: 'ae2:cell_component_64k',
    })
        .id('kubejs:crafting/ae2things/disk_drive_64k')

    // disk_drive_256k
    if (disable) { event.remove({ id: 'ae2things:cells/disk_drive_256k' }) }
    event.shaped('ae2things:disk_drive_256k', [
        'ABA',
        'BEB',
        'CDC',
    ], {
        A: 'ae2:quartz_glass',
        B: '#forge:dusts/redstone',
        C: '#forge:ingots/steel',
        D: '#forge:gems/amethyst',
        E: 'ae2:cell_component_256k',
    })
        .id('kubejs:crafting/ae2things/disk_drive_256k')

    // bulk_item_cell
    if (disable) { event.remove({ id: 'megacells:cells/standard/bulk_item_cell' }) }
    event.shaped('megacells:bulk_item_cell', [
        'ABA',
        'BCB',
        'DDD',
    ], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'megacells:bulk_cell_component',
        D: '#forge:ingots/steel',
    })
        .id('kubejs:crafting/megacells/bulk_item_cell')

    // netherite_storage_upgrade
    if (disable) { event.remove({ id: 'storagedrawers:netherite_storage_upgrade' }) }
    event.shaped('storagedrawers:netherite_storage_upgrade', [
        'AAA',
        'BCB',
        'AAA',
    ], {
        A: '#forge:rods/wooden',
        B: '#forge:ingots/forged_netherite',
        C: 'storagedrawers:upgrade_template',
    })
        .id('kubejs:crafting/storagedrawers/netherite_storage_upgrade')

    // armory_cabinet
    if (disable) { event.remove({ id: 'functionalstorage:armory_cabinet' }) }
    event.shaped('functionalstorage:armory_cabinet', [
        'ABA',
        'BCB',
        'ADA',
    ], {
        A: '#forge:stone',
        B: '#functionalstorage:drawer',
        C: 'minecraft:comparator',
        D: '#forge:ingots/forged_netherite',
    })
        .id('kubejs:crafting/functionalstorage/armory_cabinet')

    // ************************ //
    // ***** STONECUTTING ***** //
    // ************************ //

    event.stonecutting('rechiseled:netherite_block_beams', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_beams_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_bricks', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_bricks_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_chiseled', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_chiseled_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_compacted', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_compacted_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_decorated', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_decorated_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_diagonal_tiles', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_diagonal_tiles_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_indented', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_indented_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_meteoric', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_patterned', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_patterned_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_pillar', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_pillar_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_small_tiles', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_small_tiles_connecting', 'minecraft:netherite_block')
    event.stonecutting('rechiseled:netherite_block_smooth', 'minecraft:netherite_block')

    // **************************** //
    // ***** REACTION CHAMBER ***** //
    // **************************** //

    event.remove({ id: 'advanced_ae:quantum_alloy_plate' })
    event.custom(
        {
            "type": "advanced_ae:reaction",
            "energy": 1000000,
            "fluid": {
                "fluidStack": {
                    "Amount": 1000,
                    "FluidName": "advanced_ae:quantum_infusion_source"
                }
            },
            "input_items": [
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "advanced_ae:quantum_alloy"
                    }
                },
                {
                    "amount": 2,
                    "ingredient": {
                        "item": "gtceu:forged_netherite_ingot"
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": "minecraft:nether_star"
                    }
                }
            ],
            "output": {
                "#": 1,
                "#c": "ae2:i",
                "id": "advanced_ae:quantum_alloy_plate"
            }
        }
    )
        .id('kubejs:reaction_chamber/quantum_alloy_plate')

    // ************************* //
    // ***** MISC REMOVALS ***** //
    // ************************* //

    event.remove([
        { id: 'gtceu:smelting/smelt_dust_netherite_to_ingot' },
        { id: 'gtceu:arc_furnace/arc_netherite_dust' },
        { id: 'gtceu:alloy_smelter/alloy_smelt_netherite_nugget_to_ingot' },
        { id: 'gtceu:compressor/compress_netherite_nugget_to_ingot' },
        { id: 'gtceu:macerator/macerate_netherite_ingot' },
        { id: 'gtceu:alloy_smelter/alloy_smelt_netherite_to_nugget' },
        { id: 'gtceu:macerator/macerate_netherite_nugget' },
        { id: 'gtceu:shaped/tiny_dust_assembling_netherite' },
        { id: 'gtceu:shaped/tiny_dust_disassembling_netherite' },
        { id: 'gtceu:packer/package_netherite_tiny_dust' },
        { id: 'gtceu:packer/unpackage_netherite_tiny_dust' },
        { id: 'gtceu:shaped/small_dust_assembling_netherite' },
        { id: 'gtceu:shaped/small_dust_disassembling_netherite' },
        { id: 'gtceu:packer/package_netherite_small_dust' },
        { id: 'gtceu:packer/unpackage_netherite_small_dust' },
        { id: 'minecraft:netherite_scrap' },
        { id: 'minecraft:netherite_scrap_from_blasting' },
    ])

    event.replaceInput(
        { input: 'minecraft:netherite_ingot' }, // Arg 1: the filter
        'minecraft:netherite_ingot',            // Arg 2: the item to replace
        'gtceu:forged_netherite_ingot'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    // fin //

})


// ********************* //
// ***** ITEM TAGS ***** //
// ********************* //

ServerEvents.tags('item', event => {

    event.remove('forge:nuggets', 'gtceu:netherite_nugget')
    event.remove('forge:nuggets/netherite', 'gtceu:netherite_nugget')
    event.remove('forge:ingots', 'minecraft:netherite_ingot')
    event.remove('forge:ingots/netherite', 'minecraft:netherite_ingot')
    event.remove('forge:storage_blocks', 'minecraft:netherite_block')
    event.remove('forge:storage_blocks/netherite', 'minecraft:netherite_block')
    event.remove('forge:dusts', 'gtceu:netherite_dust')
    event.remove('forge:dusts/netherite', 'gtceu:netherite_dust')
    event.remove('forge:tiny_dusts', 'gtceu:tiny_netherite_dust')
    event.remove('forge:tiny_dusts/netherite', 'gtceu:tiny_netherite_dust')
    event.remove('forge:small_dusts', 'gtceu:small_netherite_dust')
    event.remove('forge:small_dusts/netherite', 'gtceu:small_netherite_dust')

    event.remove('minecraft:beacon_payment_items', 'minecraft:netherite_ingot')
    event.remove('minecraft:trim_materials', 'minecraft:netherite_ingot')
    event.add('minecraft:beacon_payment_items', 'gtceu:forged_netherite_ingot')

    event.remove('forge:ores', 'minecraft:ancient_debris')
    event.remove('forge:ores/netherite_scrap', 'minecraft:ancient_debris')

    event.remove('forge:ore_rates/singular', 'minecraft:ancient_debris')

    // Add ingot to forge:ingots/netherite tag (just in case)
    event.add('forge:ingots/netherite', '#forge:ingots/forged_netherite')


})


// ********************** //
// ***** BLOCK TAGS ***** //
// ********************** //

ServerEvents.tags('block', event => {

    event.remove('forge:storage_blocks', 'minecraft:netherite_block')
    event.remove('forge:storage_blocks/netherite', 'minecraft:netherite_block')

    event.remove('minecraft:beacon_base_blocks', 'minecraft:netherite_block')
    event.add('minecraft:beacon_base_blocks', 'gtceu:forged_netherite_block')
    event.remove('minecraft:needs_stone_tool', 'gtceu:forged_netherite_block')
    event.add('minecraft:needs_diamond_tool', 'gtceu:forged_netherite_block')

    event.remove('forge:ores', 'minecraft:ancient_debris')
    event.remove('forge:ores/netherite_scrap', 'minecraft:ancient_debris')

    event.add('srg:banned_blocks', 'minecraft:ancient_debris')

    event.remove('forge:ore_rates/singular', 'minecraft:ancient_debris')


    // fin //

})