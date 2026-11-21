// priority: 0


const commonTime = 100
const energyMV = 120 // MV
const fluidMV = 'gtceu:polyethylene'
const commonXpQty = 500
const uncommonTime = 200
const energyHV = 480 // HV
const fluidHV = 'gtceu:polyvinyl_chloride'
const uncommonXpQty = 1000
const rareTime = 300
const energyEV = 1920 // EV
const fluidEV = 'gtceu:polytetrafluoroethylene'
const rareXpQty = 1500
const epicTime = 400
const energyIV = 7680 // IV
const fluidIV = 'gtceu:polybenzimidazole'
const epicXpQty = 2000
const mythicTime = 500
// const energyLuV = 30720 // LuV
const mythicXpQty = 2500
const ancientTime = 600
// const energyZPM = 122880 // ZPM
const ancientXpQty = 3000

ServerEvents.recipes(event => {

    const gemComponents = [


        // **************** //
        // ***** CORE ***** //
        // **************** //

        // ***** ballast ***** //
        {
            type: 'ballast', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/monazite', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'ballast', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/ballast"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'ballast', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/ballast"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'ballast', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/ballast"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'ballast', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/ballast"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'ballast', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/ballast"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** speedy ***** //
        {
            type: 'speedy', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/sapphire', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'speedy', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/speedy"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'speedy', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/speedy"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'speedy', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/speedy"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'speedy', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/speedy"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'speedy', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/speedy"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** brawlers ***** //
        {
            type: 'brawlers', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/realgar', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'brawlers', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/brawlers"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'brawlers', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/brawlers"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'brawlers', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/brawlers"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'brawlers', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/brawlers"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'brawlers', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/brawlers"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** breach ***** //
        {
            type: 'breach', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/green_sapphire', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'breach', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/breach"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'breach', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/breach"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'breach', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/breach"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'breach', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/breach"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'breach', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/breach"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** combatant ***** //
        {
            type: 'combatant', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/amethyst', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'combatant', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/combatant"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'combatant', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/combatant"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'combatant', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/combatant"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'combatant', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/combatant"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'combatant', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/combatant"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** guardian ***** //
        {
            type: 'guardian', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/olivine', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'guardian', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/guardian"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'guardian', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/guardian"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'guardian', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/guardian"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'guardian', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/guardian"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'guardian', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/guardian"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** lightning ***** //
        {
            type: 'lightning', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/topaz', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'lightning', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lightning"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'lightning', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/lightning"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'lightning', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/lightning"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'lightning', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/lightning"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'lightning', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/lightning"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** lunar ***** //
        {
            type: 'lunar', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/lazurite', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'lunar', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lunar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'lunar', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/lunar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'lunar', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/lunar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'lunar', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/lunar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'lunar', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/lunar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** samurai ***** //
        {
            type: 'samurai', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/diamond', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'samurai', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/samurai"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'samurai', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/samurai"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'samurai', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/samurai"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'samurai', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/samurai"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'samurai', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/samurai"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** slipstream ***** //
        {
            type: 'slipstream', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/emerald', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'slipstream', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/slipstream"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'slipstream', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/slipstream"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'slipstream', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/slipstream"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'slipstream', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/slipstream"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'slipstream', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/slipstream"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** solar ***** //
        {
            type: 'solar', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/spessartine', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'solar', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/solar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'solar', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/solar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'solar', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/solar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'solar', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/solar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'solar', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/solar"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** splendor ***** //
        {
            type: 'splendor', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/malachite', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'splendor', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/splendor"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'splendor', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/splendor"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'splendor', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/splendor"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'splendor', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/splendor"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'splendor', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/splendor"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** tyrannical ***** //
        {
            type: 'tyrannical', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/cinnabar', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'tyrannical', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/tyrannical"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'tyrannical', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/tyrannical"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'tyrannical', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/tyrannical"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'tyrannical', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/tyrannical"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'tyrannical', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/tyrannical"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** warlord ***** //
        {
            type: 'warlord', module: 'core', rarity: 'common',
            inputItems: [
                { item: '#forge:exquisite_gems/yellow_garnet', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 4 },
                { item: 'apotheosis:common_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: commonXpQty },
            ],
            time: commonTime,
            energy: energyMV
        },
        {
            type: 'warlord', module: 'core', rarity: 'uncommon',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/warlord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 8 },
                { item: 'apotheosis:uncommon_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidMV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: uncommonXpQty },
            ],
            time: uncommonTime,
            energy: energyMV
        },
        {
            type: 'warlord', module: 'core', rarity: 'rare',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:uncommon"},gem:"apotheosis:core/warlord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'warlord', module: 'core', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:core/warlord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'warlord', module: 'core', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:core/warlord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'warlord', module: 'core', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:core/warlord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },


        // ********************* //
        // ***** OVERWORLD ***** //
        // ********************* //

        // ***** earth ***** //
        {
            type: 'earth', module: 'overworld', rarity: 'rare',
            inputItems: [
                { item: '#forge:exquisite_gems/uvarovite', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'earth', module: 'overworld', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/earth"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'earth', module: 'overworld', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:overworld/earth"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'earth', module: 'overworld', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:overworld/earth"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** royalty ***** //
        {
            type: 'royalty', module: 'overworld', rarity: 'rare',
            inputItems: [
                { item: '#forge:exquisite_gems/andradite', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'royalty', module: 'overworld', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/royalty"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'royalty', module: 'overworld', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:overworld/royalty"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'royalty', module: 'overworld', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:overworld/royalty"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },


        // ********************** //
        // ***** THE NETHER ***** //
        // ********************** //

        // ***** blood_lord ***** //
        {
            type: 'blood_lord', module: 'the_nether', rarity: 'rare',
            inputItems: [
                { item: '#forge:exquisite_gems/rutile', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'blood_lord', module: 'the_nether', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/blood_lord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'blood_lord', module: 'the_nether', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_nether/blood_lord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'blood_lord', module: 'the_nether', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_nether/blood_lord"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** inferno ***** //
        {
            type: 'inferno', module: 'the_nether', rarity: 'rare',
            inputItems: [
                { item: '#forge:exquisite_gems/almandine', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 16 },
                { item: 'apotheosis:rare_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: rareXpQty },
            ],
            time: rareTime,
            energy: energyHV
        },
        {
            type: 'inferno', module: 'the_nether', rarity: 'epic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/inferno"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'inferno', module: 'the_nether', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_nether/inferno"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'inferno', module: 'the_nether', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_nether/inferno"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },


        // ******************* //
        // ***** THE END ***** //
        // ******************* //

        // ***** endersurge ***** //
        {
            type: 'endersurge', module: 'the_end', rarity: 'epic',
            inputItems: [
                { item: '#forge:exquisite_gems/opal', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'endersurge', module: 'the_end', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/endersurge"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'endersurge', module: 'the_end', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_end/endersurge"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
        // ***** mageslayer ***** //
        {
            type: 'mageslayer', module: 'the_end', rarity: 'epic',
            inputItems: [
                { item: '#forge:exquisite_gems/coke', qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 32 },
                { item: 'apotheosis:epic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidHV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: epicXpQty },
            ],
            time: epicTime,
            energy: energyHV
        },
        {
            type: 'mageslayer', module: 'the_end', rarity: 'mythic',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/mageslayer"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_rebirth', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 48 },
                { item: 'apotheosis:mythic_material', qty: 2 },
            ],
            inputFluids: [
                { fluid: fluidEV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: mythicXpQty },
            ],
            time: mythicTime,
            energy: energyEV
        },
        {
            type: 'mageslayer', module: 'the_end', rarity: 'ancient',
            inputItems: [
                { item: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:mythic"},gem:"apotheosis:the_end/mageslayer"}').strongNBT(), qty: 1 },
                { item: 'apotheosis:sigil_of_enhancement', qty: 1 },
                { item: 'apotheosis:gem_dust', qty: 64 },
                { item: 'gtceu:quantum_star', qty: 1 },
            ],
            inputFluids: [
                { fluid: fluidIV, qty: 288 },
                { fluid: 'mob_grinding_utils:fluid_xp', qty: ancientXpQty },
            ],
            time: ancientTime,
            energy: energyIV
        },
    ]


    // ***************** //
    // **** BUILDER **** //
    // ***************** //

    const asItemInput = (obj) => {
        if (typeof obj.item === 'string') return `${obj.qty}x ${obj.item}`
        if (obj.item && typeof obj.item.withCount === 'function') return obj.item.withCount(obj.qty)

        return Item.of(obj.item, obj.qty)
    }

    const asFluidInput = (obj) => `${obj.fluid} ${obj.qty}`

    const gemCrafting = (itemInputsArr, fluidInputsArr, output, time, energy, id) => {
        const recipeBuilder = event.recipes.gtceu.apothic_condenser(id)
        itemInputsArr.forEach(item => recipeBuilder.itemInputs(asItemInput(item)))
        fluidInputsArr.forEach(fluid => recipeBuilder.inputFluids(asFluidInput(fluid)))
        recipeBuilder.itemOutputs(output)
            .duration(time)
            .EUt(energy)
    }
    gemComponents.forEach(gemType => {
        const outputGem = Item.of(
            'apotheosis:gem',
            `{affix_data:{rarity:"apotheosis:${gemType.rarity}"},gem:"apotheosis:${gemType.module}/${gemType.type}"}`)

        const id = `kubejs:apotheosis/${gemType.type}/${gemType.rarity}`

        gemCrafting(
            gemType.inputItems,
            gemType.inputFluids,
            outputGem,
            gemType.time,
            gemType.energy,
            id
        )
    })


    // fin //

})