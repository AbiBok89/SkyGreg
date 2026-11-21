// priority: 0


let countItems = 0

StartupEvents.registry('item', event => {

    // event.create('mv_retrograde_circuit')
    //     .displayName('MV Retrograde Circuit')
    //     .texture('kubejs:item/mv_retrograde_circuit')
    //     .tooltip('§7Can be used as LV to MV Circuits')
    //     .tooltip('§dLV -> MV-Tier Circuit')
    //     .tooltip('§dNYI')
    // .tag('gtceu:circuits/lv')
    // .tag('gtceu:circuits/mv')

    // event.create('hv_retrograde_circuit')
    //     .displayName('HV Retrograde Circuit')
    //     .texture('kubejs:item/hv_retrograde_circuit')
    //     .tooltip('§7Can be used as LV to HV Circuits')
    //     .tooltip('§dLV -> HV-Tier Circuit')
    //     .tooltip('§dNYI')
    // .tag('gtceu:circuits/lv')
    // .tag('gtceu:circuits/mv')
    // .tag('gtceu:circuits/hv')

    // event.create('ev_retrograde_circuit')
    //     .displayName('EV Retrograde Circuit')
    //     .texture('kubejs:item/ev_retrograde_circuit')
    //     .tooltip('§7Can be used as LV to EV Circuits')
    //     .tooltip('§dLV -> EV-Tier Circuit')
    //     .tooltip('§dNYI')
    // .tag('gtceu:circuits/lv')
    // .tag('gtceu:circuits/mv')
    // .tag('gtceu:circuits/hv')
    // .tag('gtceu:circuits/ev')

    // credits
    event.create('ulv_credit')
        .displayName('ULV Credit')
        .texture('kubejs:item/ulv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.1'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.2'))
    countItems += 1

    event.create('lv_credit')
        .displayName('LV Credit')
        .texture('kubejs:item/lv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.3'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.4'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.5'))
    countItems += 1

    event.create('mv_credit')
        .displayName('MV Credit')
        .texture('kubejs:item/mv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.6'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.7'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.8'))
    countItems += 1

    event.create('hv_credit')
        .displayName('HV Credit')
        .texture('kubejs:item/hv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.9'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.10'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.11'))
    countItems += 1

    event.create('ev_credit')
        .displayName('EV Credit')
        .texture('kubejs:item/ev_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.12'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.13'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.14'))
    countItems += 1

    event.create('iv_credit')
        .displayName('IV Credit')
        .texture('kubejs:item/iv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.15'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.16'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.17'))
    countItems += 1

    event.create('luv_credit')
        .displayName('LuV Credit')
        .texture('kubejs:item/luv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.18'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.19'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.20'))
    countItems += 1

    event.create('zpm_credit')
        .displayName('ZPM Credit')
        .texture('kubejs:item/zpm_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.21'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.22'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.23'))
    countItems += 1

    event.create('uv_credit')
        .displayName('UV Credit')
        .texture('kubejs:item/uv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.24'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.25'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.26'))
    countItems += 1

    event.create('uhv_credit')
        .displayName('UHV Credit')
        .texture('kubejs:item/uhv_credit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.27'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.28'))
    countItems += 1

    // universal circuits
    event.create('lv_universal_circuit')
        .displayName('LV Universal Circuit')
        .texture('kubejs:item/lv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.29'))
    countItems += 1

    event.create('mv_universal_circuit')
        .displayName('MV Universal Circuit')
        .texture('kubejs:item/mv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.30'))
    countItems += 1

    event.create('hv_universal_circuit')
        .displayName('HV Universal Circuit')
        .texture('kubejs:item/hv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.31'))
    countItems += 1

    event.create('ev_universal_circuit')
        .displayName('EV Universal Circuit')
        .texture('kubejs:item/ev_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.32'))
    countItems += 1

    event.create('iv_universal_circuit')
        .displayName('IV Universal Circuit')
        .texture('kubejs:item/iv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.33'))
    countItems += 1

    event.create('luv_universal_circuit')
        .displayName('LuV Universal Circuit')
        .texture('kubejs:item/luv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.34'))
    countItems += 1

    event.create('zpm_universal_circuit')
        .displayName('ZPM Universal Circuit')
        .texture('kubejs:item/zpm_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.35'))
    countItems += 1

    event.create('uv_universal_circuit')
        .displayName('UV Universal Circuit')
        .texture('kubejs:item/uv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.36'))
    countItems += 1

    event.create('uhv_universal_circuit')
        .displayName('UHV Universal Circuit')
        .texture('kubejs:item/uhv_universal_circuit')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.37'))
    countItems += 1

    // greg_g_base
    event.create('greg_g_base')
        .displayName('§cUnfinished §aGear §dof §b§kGreg')
        .texture('kubejs:item/greg_g_base')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.38'))
    countItems += 1

    // greg_g
    event.create('greg_g')
        .displayName('§aGear §dof §b§kGreg')
        .texture('kubejs:item/greg_g')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.39'))
    countItems += 1

    // // cooling_cartridge
    // event.create('cooling_cartridge')
    //     .displayName('Cooling Cartridge')
    //     .texture('kubejs:item/cooling_cartridge')
    //     .tooltip('?')
    // countItems += 1

    // // cryo_circuit
    // event.create('cryo_circuit')
    //     .displayName('Cryo Circuit')
    //     .texture('kubejs:item/cryo_circuit/cryo_circuit')
    //     .tooltip('?')
    // countItems += 1

    // // cryo_mainframe
    // event.create('cryo_mainframe')
    //     .displayName('Cryo Circuit')
    //     .texture('kubejs:item/cryo_mainframe/cryo_mainframe')
    //     .tooltip('?')
    // countItems += 1

    // simulation_chip
    event.create('simulation_chip')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/simulation_chip/simulation_chip'
            }
        })
        .displayName('Simulation Chip')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.40'))
    countItems += 1

    // simulation_wafer
    event.create('simulation_wafer')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/simulation_wafer/simulation_wafer'
            }
        })
        .displayName('Simulation Wafer')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.41'))
    countItems += 1

    // harvester_tier_1
    event.create('harvester_tier_1')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/harvesters/harvester_tier_1'
            }
        })
        .displayName('Harvester Tier 1')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.42'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.43'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.44'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.45'))
    countItems += 1

    // harvester_tier_2
    event.create('harvester_tier_2')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/harvesters/harvester_tier_2'
            }
        })
        .displayName('Harvester Tier 2')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.46'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.47'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.48'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.49'))
    countItems += 1

    // harvester_tier_3
    event.create('harvester_tier_3')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/harvesters/harvester_tier_3'
            }
        })
        .displayName('Harvester Tier 3')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.50'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.51'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.52'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.53'))
    countItems += 1

    // harvester_tier_4
    event.create('harvester_tier_4')
        .modelJson({
            parent: 'minecraft:item/generated',
            textures: {
                layer0: 'kubejs:item/harvesters/harvester_tier_4'
            }
        })
        .displayName('Harvester Tier 4')
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.54'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.55'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.56'))
        .tooltip(Text.translate('sky_greg.kjs.item_tooltip.57'))
    countItems += 1




    // **************************** //
    // **** REGISTRY REPORTING **** //
    // **************************** //

    let countTotals = countItems
    console.info(`[=================================================]`)
    console.info(`[====TOTAL REGISTRIES FROM CUSTOM_ITEMS SCRIPT====]`)
    console.info(`[ITEMS] ${countItems} registered.`)
    console.info(`[TOTAL REGISTRIES] ${countTotals} registered.`)
    console.info(`[=================================================]`)


    // fin //

})