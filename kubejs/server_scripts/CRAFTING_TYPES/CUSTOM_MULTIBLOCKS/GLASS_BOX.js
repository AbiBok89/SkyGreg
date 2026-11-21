// priority: 0


ServerEvents.recipes(event => {

    const glassTypes = [
        // no casting mold
        { output: 'gtceu:glass', outQ: 576, input1: '#forge:sand', circuit: 1, liquid: true },

        // plate_casting_mold
        { output: 'minecraft:glass_pane', outQ: 8, input1: '#forge:sand', nonCon: 'gtceu:plate_casting_mold', circuit: 2, item: true },
        { output: 'connectedglass:borderless_glass_pane', outQ: 8, input1: '#forge:sand', nonCon: 'gtceu:plate_casting_mold', circuit: 3, item: true },
        { output: 'connectedglass:clear_glass_pane', outQ: 8, input1: '#forge:sand', nonCon: 'gtceu:plate_casting_mold', circuit: 4, item: true },
        { output: 'connectedglass:scratched_glass_pane', outQ: 8, input1: '#forge:sand', nonCon: 'gtceu:plate_casting_mold', circuit: 5, item: true },

        // block_casting_mold - could make all except normal glass circuit 3 if all had unique secondaries
        { output: 'minecraft:glass', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:block_casting_mold', circuit: 2, item: true },
        { output: 'gtceu:tempered_glass', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:block_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:laminated_glass', outQ: 2, input1: '#forge:sand', input2: '#forge:plates/polyvinyl_butyral', nonCon: 'gtceu:block_casting_mold', circuit: 4, item: true },
        { output: 'ae2:quartz_glass', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/certus_quartz', nonCon: 'gtceu:block_casting_mold', circuit: 5, item: true },
        { output: 'ae2:quartz_vibrant_glass', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/certus_quartz', input3: '#forge:dusts/glowstone', nonCon: 'gtceu:block_casting_mold', circuit: 6, item: true },
        { output: 'glassential:glass_ethereal', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/ender_eye', nonCon: 'gtceu:block_casting_mold', circuit: 7, item: true },
        { output: 'glassential:glass_dark_ethereal', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/ender_eye', input3: '#forge:dusts/amethyst', nonCon: 'gtceu:block_casting_mold', circuit: 8, item: true },
        { output: 'glassential:glass_ghostly', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/ender_pearl', nonCon: 'gtceu:block_casting_mold', circuit: 9, item: true },
        { output: 'glassential:glass_light', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/glowstone', nonCon: 'gtceu:block_casting_mold', circuit: 10, item: true },
        { output: 'glassential:glass_redstone', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/redstone', nonCon: 'gtceu:block_casting_mold', circuit: 11, item: true },
        { output: 'laboratoryblocks:laboratory_glass', outQ: 8, input1: '2x #forge:sand', input2: 'laboratoryblocks:laboratory_block', nonCon: 'gtceu:block_casting_mold', circuit: 12, item: true },
        { output: 'laboratoryblocks:enlighted_laboratory_glass', outQ: 8, input1: '2x #forge:sand', input2: 'laboratoryblocks:laboratory_block', input3: '#forge:dusts/glowstone', nonCon: 'gtceu:block_casting_mold', circuit: 13, item: true },
        { output: 'connectedglass:borderless_glass', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:block_casting_mold', circuit: 14, item: true },
        { output: 'connectedglass:clear_glass', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:block_casting_mold', circuit: 15, item: true },
        { output: 'connectedglass:scratched_glass', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:block_casting_mold', circuit: 16, item: true },
        { output: 'connectedglass:tinted_borderless_glass', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/amethyst', nonCon: 'gtceu:block_casting_mold', circuit: 17, item: true },
        { output: 'minecraft:tinted_glass', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/amethyst', nonCon: 'gtceu:block_casting_mold', circuit: 18, item: true },
        { output: 'mob_grinding_utils:tinted_glass', outQ: 4, input1: '#forge:sand', input2: '#forge:dusts/obsidian', input3: '#forge:dusts/thorium', nonCon: 'gtceu:block_casting_mold', circuit: 19, item: true },
        { output: 'davebuildingmod:reinforced_glass', outQ: 8, input1: '2x #forge:sand', input2: '#forge:dusts/steel', nonCon: 'gtceu:block_casting_mold', circuit: 20, item: true },
        { output: 'gtceu:cleanroom_glass', outQ: 2, input1: '#forge:sand', input2: '2x #forge:dusts/steel', input3: '6x #forge:plates/polyethylene', nonCon: 'gtceu:block_casting_mold', circuit: 21, item: true },

        // ball_casting_mold
        { output: 'gtceu:glass_tube', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:ball_casting_mold', circuit: 2, item: true },

        // cylinder_casting_mold
        { output: 'gtceu:glass_lens', outQ: 4, input1: '#forge:sand', nonCon: 'gtceu:cylinder_casting_mold', circuit: 2, item: true },
        { output: 'gtceu:orange_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/orange', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:magenta_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/magenta', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:light_blue_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/light_blue', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:yellow_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/yellow', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:lime_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/lime', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:pink_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/pink', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:gray_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/gray', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:light_gray_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/light_gray', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:cyan_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/cyan', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:purple_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/purple', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:blue_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/blue', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:brown_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/brown', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:green_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/green', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:red_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/red', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
        { output: 'gtceu:black_glass_lens', outQ: 4, input1: '#forge:sand', input2: '#forge:dyes/black', nonCon: 'gtceu:cylinder_casting_mold', circuit: 3, item: true },
    ]

    const glassCrafts = (entry, id) => {
        const output = entry.output
        const outQ = entry.outQ
        const circuit = entry.circuit

        const itemInputs = []
        if (entry.input1) itemInputs.push(entry.input1)
        if (entry.input2) itemInputs.push(entry.input2)
        if (entry.input3) itemInputs.push(entry.input3)
        if (entry.input4) itemInputs.push(entry.input4)

        let recipeItems = null
        let recipeLiquids = null

        if (entry.item) {
            recipeItems = event.recipes.gtceu.glass_box(`kubejs:${id}`)

            itemInputs.forEach(input => recipeItems.itemInputs(input))
            if (entry.nonCon) recipeItems.notConsumable(entry.nonCon)

            recipeItems
                .inputFluids(Fluid.of('gtceu:oxygen', 50))
                .itemOutputs(`${outQ}x ${output}`)
                .duration(20)
                .EUt(240)
                .circuit(circuit)
        }

        if (entry.liquid) {
            recipeLiquids = event.recipes.gtceu.glass_box(`kubejs:${id}/liquid`)

            recipeLiquids.itemInputs(entry.input1)
            recipeLiquids
                .inputFluids(Fluid.of('gtceu:oxygen', 50))
                .outputFluids(Fluid.of(output, outQ))
                .duration(20)
                .EUt(240)
                .circuit(circuit)
        }
    }

    // CRAFT //
    glassTypes.forEach(glassCraft => {
        const outId = String(glassCraft.output)
        const inId = String(glassCraft.input2)
        const outMod = outId.split(':')[0]
        const outItem = outId.split(':')[1]
        const inItem = inId.split(':')[1]
        glassCrafts(glassCraft, `${outMod}/${outItem}`)
    })


    // fin //

})