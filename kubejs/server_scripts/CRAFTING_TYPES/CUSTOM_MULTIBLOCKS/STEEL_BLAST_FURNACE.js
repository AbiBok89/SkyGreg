// priority: 0


ServerEvents.recipes(event => {

    let sbf = (duration, id, input1, input2, output1, output2, chance) =>

        event.recipes.gtceu.steel_blast_furnace(id)
            .itemInputs(input1)
            .itemInputs(input2)
            .itemOutputs(output1)
            .chancedOutput(output2, chance, 0)
            .duration(duration * 0.75)

    // ***** steel_ingot ***** //
    // iron
    sbf(1500, 'kubejs:gtceu/steel_ingot/from/iron/coke',
        '1x #forge:ingots/iron', '1x #forge:gems/coke',
        '1x gtceu:steel_ingot', '1x gtceu:ash_dust', 1111)

    sbf(1500, 'kubejs:gtceu/steel_ingot/from/iron/coke_dust',
        '1x #forge:ingots/iron', '1x #forge:dusts/coke',
        '1x gtceu:steel_ingot', '1x gtceu:ash_dust', 1111)

    sbf(1800, 'kubejs:gtceu/steel_ingot/from/iron/coal',
        '1x #forge:ingots/iron', '2x #forge:gems/coal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(1800, 'kubejs:gtceu/steel_ingot/from/iron/coal_dust',
        '1x #forge:ingots/iron', '2x #forge:dusts/coal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(1800, 'kubejs:gtceu/steel_ingot/from/iron/charcoal',
        '1x #forge:ingots/iron', '2x #forge:gems/charcoal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(1800, 'kubejs:gtceu/steel_ingot/from/iron/charcoal_dust',
        '1x #forge:ingots/iron', '2x #forge:dusts/charcoal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    // wrought_iron
    sbf(600, 'kubejs:gtceu/steel_ingot/from/wrought_iron/coke',
        '1x #forge:ingots/wrought_iron', '1x #forge:gems/coke',
        '1x gtceu:steel_ingot', '1x gtceu:ash_dust', 1111)

    sbf(600, 'kubejs:gtceu/steel_ingot/from/wrought_iron/coke_dust',
        '1x #forge:ingots/wrought_iron', '1x #forge:dusts/coke',
        '1x gtceu:steel_ingot', '1x gtceu:ash_dust', 1111)

    sbf(800, 'kubejs:gtceu/steel_ingot/from/wrought_iron/coal',
        '1x #forge:ingots/wrought_iron', '2x #forge:gems/coal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(800, 'kubejs:gtceu/steel_ingot/from/wrought_iron/coal_dust',
        '1x #forge:ingots/wrought_iron', '2x #forge:dusts/coal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(800, 'kubejs:gtceu/steel_ingot/from/wrought_iron/charcoal',
        '1x #forge:ingots/wrought_iron', '2x #forge:gems/charcoal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    sbf(800, 'kubejs:gtceu/steel_ingot/from/wrought_iron/charcoal_dust',
        '1x #forge:ingots/wrought_iron', '2x #forge:dusts/charcoal',
        '1x gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust', 10000)

    // ***** steel_block ***** //
    // iron
    sbf(13500, 'kubejs:gtceu/steel_block/from/iron/coke',
        '1x #forge:storage_blocks/iron', '1x #forge:storage_blocks/coke',
        '1x gtceu:steel_block', '1x gtceu:ash_dust', 10000)

    sbf(16200, 'kubejs:gtceu/steel_block/from/iron/coal',
        '1x #forge:storage_blocks/iron', '2x #forge:storage_blocks/coal',
        '1x gtceu:steel_block', '2x gtceu:dark_ash_dust', 10000)

    sbf(16200, 'kubejs:gtceu/steel_block/from/iron/charcoal',
        '1x #forge:storage_blocks/iron', '2x #forge:storage_blocks/charcoal',
        '1x gtceu:steel_block', '2x gtceu:dark_ash_dust', 10000)

    // wrought_iron
    sbf(5400, 'kubejs:gtceu/steel_block/from/wrought_iron/coke',
        '1x #forge:storage_blocks/wrought_iron', '1x #forge:storage_blocks/coke',
        '1x gtceu:steel_block', '1x gtceu:ash_dust', 10000)

    sbf(7200, 'kubejs:gtceu/steel_block/from/wrought_iron/coal',
        '1x #forge:storage_blocks/wrought_iron', '2x #forge:storage_blocks/coal',
        '1x gtceu:steel_block', '2x gtceu:dark_ash_dust', 10000)

    sbf(7200, 'kubejs:gtceu/steel_block/from/wrought_iron/charcoal',
        '1x #forge:storage_blocks/wrought_iron', '2x #forge:storage_blocks/charcoal',
        '1x gtceu:steel_block', '2x gtceu:dark_ash_dust', 10000)


    // fin //

})