// priority: 0


const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

const simItem = 'kubejs:simulation_chip'

ServerEvents.recipes(event => {

    const mobDrops = [
        {
            mob: 'booze', egg: 'brewery:beer_elemental_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x brewery:patterned_wool', chance: 5000 },
                { item: '4x brewery:fried_chicken', chance: 2500 },
                { item: '4x brewery:half_chicken', chance: 2400 },
                { item: 'brewery:brewfest_hat', chance: 100 },
            ],
        },
        {
            mob: 'blaze', egg: 'minecraft:blaze_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:blaze 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '4x minecraft:blaze_rod', chance: 6000 },
                { item: '6x minecraft:blaze_powder', chance: 4000 },
            ],
        },
        {
            mob: 'cave_spider', egg: 'minecraft:cave_spider_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:spider_eye', chance: 5000 },
                { item: '8x minecraft:string', chance: 5000 },
            ],
        },
        {
            mob: 'creeper', egg: 'minecraft:creeper_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:gunpowder', chance: 10000 },
            ],
        },
        {
            mob: 'drowned', egg: 'minecraft:drowned_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:rotten_flesh', chance: 7000 },
                { item: '6x minecraft:copper_ingot', chance: 3000 },
            ],
        },
        {
            mob: 'elder_guardian', egg: 'minecraft:elder_guardian_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '4x minecraft:prismarine_shard', chance: 3000 },
                { item: '6x minecraft:prismarine_crystals', chance: 3000 },
                { item: '4x minecraft:wet_sponge', chance: 1750 },
                { item: '8x minecraft:cod', chance: 500 },
                { item: '8x minecraft:salmon', chance: 500 },
                { item: '8x minecraft:tropical_fish', chance: 500 },
                { item: '8x minecraft:pufferfish', chance: 500 },
                { item: 'minecraft:tide_armor_trim_smithing_template', chance: 250 },
            ],
        },
        {
            mob: 'enderman', egg: 'minecraft:enderman_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:ender_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '6x minecraft:ender_pearl', chance: 10000 },
            ],
        },
        {
            mob: 'evoker', egg: 'minecraft:evoker_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:emerald', chance: 7000 },
                { item: 'minecraft:totem_of_undying', chance: 3000 },
            ],
        },
        {
            mob: 'ghast', egg: 'minecraft:ghast_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '4x minecraft:ghast_tear', chance: 7000 },
                { item: '8x minecraft:gunpowder', chance: 3000 },
            ],
        },
        {
            mob: 'guardian', egg: 'minecraft:guardian_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '4x minecraft:prismarine_shard', chance: 4000 },
                { item: '6x minecraft:prismarine_crystals', chance: 4000 },
                { item: '8x minecraft:cod', chance: 500 },
                { item: '8x minecraft:salmon', chance: 500 },
                { item: '8x minecraft:tropical_fish', chance: 500 },
                { item: '8x minecraft:pufferfish', chance: 500 },
            ],
        },
        {
            mob: 'hoglin', egg: 'minecraft:hoglin_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '8x minecraft:porkchop', chance: 6000 },
                { item: '8x minecraft:leather', chance: 4000 },
            ],
        },
        {
            mob: 'husk', egg: 'minecraft:husk_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:rotten_flesh', chance: 6000 },
                { item: '6x minecraft:iron_ingot', chance: 2000 },
                { item: '8x minecraft:carrot', chance: 1000 },
                { item: '8x minecraft:potato', chance: 1000 },
            ],
        },
        {
            mob: 'magma_cube', egg: 'minecraft:magma_cube_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:blaze 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '6x minecraft:magma_cream', chance: 10000 },
            ],
        },
        {
            mob: 'magma_cube/frog', egg: 'minecraft:magma_cube_spawn_egg',
            egg2: 'minecraft:frog_spawn_egg',
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:blaze 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '4x minecraft:pearlescent_froglight', chance: 3334 },
                { item: '4x minecraft:verdant_froglight', chance: 3333 },
                { item: '4x minecraft:ochre_froglight', chance: 3333 },
            ],
        },
        {
            mob: 'phantom', egg: 'minecraft:phantom_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '4x minecraft:phantom_membrane', chance: 10000 },
            ],
        },
        {
            mob: 'shulker', egg: 'minecraft:shulker_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:ender_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '4x minecraft:shulker_shell', chance: 10000 },
            ],
        },
        {
            mob: 'skeleton', egg: 'minecraft:skeleton_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:bone', chance: 7500 },
                { item: '12x minecraft:bone_meal', chance: 1500 },
                { item: '12x minecraft:arrow', chance: 1000 },
            ],
        },
        {
            mob: 'slime', egg: 'minecraft:slime_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:glue 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '8x minecraft:slime_ball', chance: 8500 },
                { item: '2x minecraft:slime_block', chance: 1500 },
            ],
        },
        {
            mob: 'spider', egg: 'minecraft:spider_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '12x minecraft:string', chance: 6000 },
                { item: '8x minecraft:spider_eye', chance: 4000 },
            ],
        },
        {
            mob: 'stray', egg: 'minecraft:stray_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:bone', chance: 6000 },
                { item: '12x minecraft:arrow', chance: 4000 },
            ],
        },
        {
            mob: 'vindicator', egg: 'minecraft:vindicator_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:emerald', chance: 10000 },
            ],
        },
        {
            mob: 'warden', egg: 'minecraft:warden_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'mob_grinding_utils:fluid_xp 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '4x minecraft:sculk_catalyst', chance: 8000 },
                { item: '2x apotheosis:warden_tendril', chance: 2000 },
            ],
        },
        {
            mob: 'witch', egg: 'minecraft:witch_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:glowstone_dust', chance: 2500 },
                { item: '8x minecraft:redstone', chance: 2500 },
                { item: '4x minecraft:gunpowder', chance: 2500 },
                { item: '8x minecraft:sugar', chance: 1000 },
                { item: '4x minecraft:spider_eye', chance: 500 },
                { item: '4x minecraft:glass_bottle', chance: 500 },
                { item: '12x minecraft:stick', chance: 500 },
            ],
        },
        {
            mob: 'wither', egg: 'minecraft:wither_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 1000',
            outputFluid: 'gtceu:liquid_nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: 'minecraft:nether_star', chance: 10000 },
            ],
        },
        {
            mob: 'wither_skeleton', egg: 'minecraft:wither_skeleton_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: 'minecraft:wither_skeleton_skull', chance: 2500 },
                { item: '4x wstweaks:fragment', chance: 2500 },
                { item: '8x minecraft:coal', chance: 2500 },
                { item: '8x minecraft:bone', chance: 2500 },
            ],
        },
        {
            mob: 'zoglin', egg: 'minecraft:zoglin_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '12x minecraft:rotten_flesh', chance: 10000 },
            ],
        },
        {
            mob: 'zombie', egg: 'minecraft:zombie_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:rotten_flesh', chance: 5000 },
                { item: '6x minecraft:iron_ingot', chance: 3000 },
                { item: '8x minecraft:carrot', chance: 1000 },
                { item: '8x minecraft:potato', chance: 1000 },
            ],
        },
        {
            mob: 'zombie_villager', egg: 'minecraft:zombie_villager_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            drops: [
                { item: '8x minecraft:rotten_flesh', chance: 5000 },
                { item: '8x minecraft:carrot', chance: 2000 },
                { item: '8x minecraft:potato', chance: 2000 },
                { item: '6x minecraft:iron_ingot', chance: 1000 },
            ],
        },
        {
            mob: 'zombified_piglin', egg: 'minecraft:zombified_piglin_spawn_egg',
            inputItem: simItem,
            inputFluid: 'gtceu:formic_acid 250',
            outputFluid: 'gtceu:nether_air 1000',
            outputFluidChance: 10000,
            drops: [
                { item: '8x minecraft:rotten_flesh', chance: 5000 },
                { item: '12x minecraft:gold_nugget', chance: 3000 },
                { item: '6x minecraft:gold_ingot', chance: 2000 },
            ],
        },
    ]

    const buildBaseRecipe = (recipeId, time, nonCon, nonCon2, inputItem, inputFluid) => {
        const recipe = event.recipes.gtceu.simulation_arena(recipeId)
            .notConsumable(nonCon)

        if (nonCon2) recipe.notConsumable(nonCon2)
        if (inputItem) recipe.itemInputs(inputItem)

        recipe.inputFluids(inputFluid)
            .duration(time)
            .EUt(7680)

        return recipe
    }

    const addOptionalFluidOutput = (recipe, outputFluid, outputFluidChance) => {
        if (outputFluid && outputFluidChance !== undefined) {
            recipe.chancedFluidOutput(outputFluid, outputFluidChance, 0)
        }
    }

    mobDrops.forEach(mob => {

        let recipe

        // random recipe (circuit 10)
        recipe = buildBaseRecipe(
            `kubejs:simulation_arena/${mob.mob}/random`,
            200,
            mob.egg,
            mob.egg2,
            mob.inputItem,
            mob.inputFluid
        )

        recipe.circuit(10)
        addOptionalFluidOutput(recipe, mob.outputFluid, mob.outputFluidChance)

        recipe.chancedItemOutputLogic($ChanceLogic.XOR)
        mob.drops.forEach(drop => {
            recipe.chancedOutput(drop.item, drop.chance, 0)
        })

        // select recipes (circuit 1..N) — only if there’s actually a choice
        if (mob.drops.length > 1) {
            mob.drops.forEach((drop, index) => {
                const circuitNumber = index + 1

                recipe = buildBaseRecipe(
                    `kubejs:simulation_arena/${mob.mob}/select/${circuitNumber}`,
                    600,
                    mob.egg,
                    mob.egg2,
                    mob.inputItem,
                    mob.inputFluid
                )

                recipe.circuit(circuitNumber)
                addOptionalFluidOutput(recipe, mob.outputFluid, mob.outputFluidChance)

                recipe.itemOutputs(drop.item)
            })
        }
    })


    // fin //

})