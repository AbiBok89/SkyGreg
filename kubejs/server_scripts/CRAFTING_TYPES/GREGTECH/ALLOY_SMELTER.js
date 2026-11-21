// priority: 0


ServerEvents.recipes(event => {

    let ULV = 7
    let LV = 30
    let MV = 120
    let HV = 480
    let EV = 1920


    // soldering_alloy_ingot
    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/soldering_alloy_ingot')
        .itemInputs('9x gtceu:tin_ingot')
        .itemInputs('1x gtceu:antimony_ingot')
        .itemOutputs('10x gtceu:soldering_alloy_ingot')
        .duration(100)
        .EUt(16)

    // potin_ingot
    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/potin_ingot')
        .itemInputs('8x #forge:ingots/bronze')
        .itemInputs('1x #forge:ingots/lead')
        .itemOutputs('9x gtceu:potin_ingot')
        .duration(100)
        .EUt(16)

    // quartz_alloy_ingot
    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/iron/1')
        .itemInputs('2x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:ingots/iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/iron/2')
        .itemInputs('2x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:ingots/iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/iron/3')
        .itemInputs('2x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:dusts/iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/iron/4')
        .itemInputs('2x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:dusts/iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/wrought_iron/1')
        .itemInputs('2x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:ingots/wrought_iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(50)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/wrought_iron/2')
        .itemInputs('2x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:ingots/wrought_iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(50)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/wrought_iron/3')
        .itemInputs('2x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:dusts/wrought_iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(50)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/quartz_alloy_ingot/from/wrought_iron/4')
        .itemInputs('2x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:dusts/wrought_iron')
        .itemOutputs('3x gtceu:quartz_alloy_ingot')
        .duration(50)
        .EUt(7)

    // solid_xp_baby
    event.remove({ id: 'mob_grinding_utils:recipe_xp_block_uncraft' })
    event.recipes.gtceu.alloy_smelter('kubejs:mob_grinding_utils/solid_xp_baby')
        .itemInputs('1x mob_grinding_utils:solid_xp_block')
        .notConsumable('1x mob_grinding_utils:solid_xp_mould_baby')
        .itemOutputs('9x mob_grinding_utils:solid_xp_baby')
        .duration(100)
        .EUt(7)

    // quartz_glass
    event.recipes.gtceu.alloy_smelter('kubejs:ae2/quartz_glass')
        .itemInputs('1x #forge:glass/colorless')
        .itemInputs('1x #forge:dusts/certus_quartz')
        .itemOutputs('1x ae2:quartz_glass')
        .duration(60)
        .EUt(16)

    // quartz_vibrant_glass
    event.recipes.gtceu.alloy_smelter('kubejs:ae2/quartz_vibrant_glass')
        .itemInputs('1x ae2:quartz_glass')
        .itemInputs('1x #forge:dusts/glowstone')
        .itemOutputs('1x ae2:quartz_vibrant_glass')
        .duration(60)
        .EUt(16)

    // cloud_chamber
    event.remove({ id: 'mae2:cloud_chamber' })
    event.recipes.gtceu.alloy_smelter('kubejs:mae2/cloud_chamber')
        .itemInputs('1x ae2:quartz_vibrant_glass')
        .itemInputs('1x #forge:dusts/amethyst')
        .itemOutputs('1x mae2:cloud_chamber')
        .duration(60)
        .EUt(16)

    // sky_steel_block
    event.recipes.gtceu.alloy_smelter('kubejs:megacells/sky_steel_block/from/ingot')
        .itemInputs('9x #forge:ingots/sky_steel')
        .notConsumable('1x gtceu:block_casting_mold')
        .itemOutputs('1x megacells:sky_steel_block')
        .duration(5)
        .EUt(28)

    // sky_steel_ingot
    event.remove({ id: 'megacells:crafting/sky_steel_ingot_from_sky_steel_block' })
    event.recipes.gtceu.alloy_smelter('kubejs:megacells/sky_steel_ingot/from/block')
        .itemInputs('1x #forge:storage_blocks/sky_steel')
        .notConsumable('1x gtceu:ingot_casting_mold')
        .itemOutputs('9x megacells:sky_steel_ingot')
        .duration(504)
        .EUt(7)

    // rusty_iron_block
    event.recipes.gtceu.alloy_smelter('kubejs:dustrial_decor/rusty_iron_block/from/ingot')
        .itemInputs('9x dustrial_decor:rusty_iron_ingot')
        .notConsumable('1x gtceu:block_casting_mold')
        .itemOutputs('1x dustrial_decor:rusty_iron_block')
        .duration(5)
        .EUt(28)

    // rusty_iron_ingot
    event.remove({ id: 'dustrial_decor:rusty_iron_ingot_from_block' })
    event.recipes.gtceu.alloy_smelter('kubejs:dustrial_decor/rusty_iron_ingot/from/block')
        .itemInputs('1x dustrial_decor:rusty_iron_block')
        .notConsumable('1x gtceu:ingot_casting_mold')
        .itemOutputs('9x dustrial_decor:rusty_iron_ingot')
        .duration(504)
        .EUt(7)

    event.remove({ id: 'dustrial_decor:rusty_iron_ingot_from_nugget' })
    event.recipes.gtceu.alloy_smelter('kubejs:dustrial_decor/rusty_iron_ingot/from/nugget')
        .itemInputs('9x dustrial_decor:rusty_iron_nugget')
        .notConsumable('1x gtceu:ingot_casting_mold')
        .itemOutputs('1x dustrial_decor:rusty_iron_ingot')
        .duration(56)
        .EUt(7)

    // rusty_iron_nugget
    event.remove({ id: 'dustrial_decor:rusty_iron_nugget_from_ingot' })
    event.recipes.gtceu.alloy_smelter('kubejs:dustrial_decor/rusty_iron_nugget/from/ingot')
        .itemInputs('1x dustrial_decor:rusty_iron_ingot')
        .notConsumable('1x gtceu:nugget_casting_mold')
        .itemOutputs('9x dustrial_decor:rusty_iron_nugget')
        .duration(56)
        .EUt(7)

    // silky_quartz_ingot
    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/silky_quartz_ingot/from/dusts')
        .itemInputs('1x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:dusts/bronze')
        .itemOutputs('2x gtceu:silky_quartz_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/silky_quartz_ingot/from/ingots')
        .itemInputs('1x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:ingots/bronze')
        .itemOutputs('2x gtceu:silky_quartz_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/silky_quartz_ingot/from/dust/ingot')
        .itemInputs('1x #forge:dusts/nether_quartz')
        .itemInputs('1x #forge:ingots/bronze')
        .itemOutputs('2x gtceu:silky_quartz_ingot')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('kubejs:gtceu/silky_quartz_ingot/from/ingot/dust')
        .itemInputs('1x #forge:gems/nether_quartz')
        .itemInputs('1x #forge:dusts/bronze')
        .itemOutputs('2x gtceu:silky_quartz_ingot')
        .duration(100)
        .EUt(7)

    // primitive_smelting_bricks
    event.recipes.gtceu.alloy_smelter('kubejs:kubejs/primitive_smelting_bricks')
        .itemInputs('2x gtceu:firebricks')
        .itemInputs('1x #forge:dusts/steel')
        .itemOutputs('2x kubejs:primitive_smelting_bricks')
        .duration(200)
        .EUt(16)
        .addMaterialInfo(true)


    // fin //

})