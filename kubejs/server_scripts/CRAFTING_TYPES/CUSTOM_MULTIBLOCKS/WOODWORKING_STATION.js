// priority: 0


ServerEvents.recipes(event => {

    const plankQty = 6
    const slabQty = plankQty * 2
    const stickQty = plankQty * 2

    const woodTypes = [
        { output: 'minecraft:stick', outQ: stickQty, input: '#minecraft:logs', circuit: 3 },

        // planks
        { output: 'minecraft:oak_planks', outQ: plankQty, input: '#minecraft:oak_logs', circuit: 1 },
        { output: 'minecraft:spruce_planks', outQ: plankQty, input: '#minecraft:spruce_logs', circuit: 1 },
        { output: 'minecraft:birch_planks', outQ: plankQty, input: '#minecraft:birch_logs', circuit: 1 },
        { output: 'minecraft:jungle_planks', outQ: plankQty, input: '#minecraft:jungle_logs', circuit: 1 },
        { output: 'minecraft:acacia_planks', outQ: plankQty, input: '#minecraft:acacia_logs', circuit: 1 },
        { output: 'minecraft:dark_oak_planks', outQ: plankQty, input: '#minecraft:dark_oak_logs', circuit: 1 },
        { output: 'minecraft:mangrove_planks', outQ: plankQty, input: '#minecraft:mangrove_logs', circuit: 1 },
        { output: 'minecraft:cherry_planks', outQ: plankQty, input: '#minecraft:cherry_logs', circuit: 1 },
        { output: 'minecraft:bamboo_planks', outQ: plankQty, input: '#minecraft:bamboo_blocks', circuit: 1 },
        { output: 'minecraft:crimson_planks', outQ: plankQty, input: '#minecraft:crimson_stems', circuit: 1 },
        { output: 'minecraft:warped_planks', outQ: plankQty, input: '#minecraft:warped_stems', circuit: 1 },

        { output: 'vinery:dark_cherry_planks', outQ: plankQty, input: '#vinery:cherry_logs', circuit: 1 },
        { output: 'minecraft:oak_planks', outQ: plankQty, input: '#vinery:apple_logs', circuit: 1 },
        { output: 'gtceu:rubber_planks', outQ: plankQty, input: '#gtceu:rubber_logs', circuit: 1 },

        // slabs
        { output: 'minecraft:oak_slab', outQ: slabQty, input: '#minecraft:oak_logs', circuit: 2 },
        { output: 'minecraft:spruce_slab', outQ: slabQty, input: '#minecraft:spruce_logs', circuit: 2 },
        { output: 'minecraft:birch_slab', outQ: slabQty, input: '#minecraft:birch_logs', circuit: 2 },
        { output: 'minecraft:jungle_slab', outQ: slabQty, input: '#minecraft:jungle_logs', circuit: 2 },
        { output: 'minecraft:acacia_slab', outQ: slabQty, input: '#minecraft:acacia_logs', circuit: 2 },
        { output: 'minecraft:dark_oak_slab', outQ: slabQty, input: '#minecraft:dark_oak_logs', circuit: 2 },
        { output: 'minecraft:mangrove_slab', outQ: slabQty, input: '#minecraft:mangrove_logs', circuit: 2 },
        { output: 'minecraft:cherry_slab', outQ: slabQty, input: '#minecraft:cherry_logs', circuit: 2 },
        { output: 'minecraft:bamboo_slab', outQ: slabQty, input: '#minecraft:bamboo_blocks', circuit: 2 },
        { output: 'minecraft:crimson_slab', outQ: slabQty, input: '#minecraft:crimson_stems', circuit: 2 },
        { output: 'minecraft:warped_slab', outQ: slabQty, input: '#minecraft:warped_stems', circuit: 2 },

        { output: 'vinery:dark_cherry_slab', outQ: slabQty, input: '#vinery:cherry_logs', circuit: 2 },
        { output: 'minecraft:oak_slab', outQ: slabQty, input: '#vinery:apple_logs', circuit: 2 },
        { output: 'gtceu:rubber_slab', outQ: slabQty, input: '#gtceu:rubber_logs', circuit: 2 },
    ];

    const fluidTypes = [
        { fluid: 'minecraft:water', qty: 8, duration: 200 },
        { fluid: 'gtceu:distilled_water', qty: 6, duration: 150 },
        { fluid: 'gtceu:lubricant', qty: 2, duration: 100 },
    ];

    const woodworking = (woodEntry, fluidEntry, id) => {
        event.recipes.gtceu
            .woodworking_station(`kubejs:${id}`)
            .itemInputs(woodEntry.input)
            .inputFluids(Fluid.of(fluidEntry.fluid, fluidEntry.qty))
            .itemOutputs(`${woodEntry.outQ}x ${woodEntry.output}`)
            .duration(fluidEntry.duration)
            .EUt(24)
            .circuit(woodEntry.circuit);
    };

    woodTypes.forEach(woodCraft => {
        const [outMod, outItem] = String(woodCraft.output).split(':');
        const inItem = String(woodCraft.input).split(':')[1];

        fluidTypes.forEach(fluidCraft => {
            const fluidIdPart = String(fluidCraft.fluid).split(':')[1];

            woodworking(woodCraft, fluidCraft, `${outMod}/${outItem}/${fluidIdPart}/from/${inItem}`);
        });
    });


    // fin //

})