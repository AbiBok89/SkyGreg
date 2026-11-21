// priority: 0


ServerEvents.recipes(event => {

    const ID_PREFIX = 'kubejs:'
    const BASE_DURATION = 200

    // EU scaling: 2* enchantment Level
    function eutForLevel(level) {
        return 30 * Math.pow(2, level - 1)
    }

    // fluids planned (still disabled by default)
    const ENABLE_FLUIDS = false
    const FLUID_ID = 'mob_grinding_utils:fluid_xp'
    function fluidForLevel(level) {
        return 1000 * level
    }


    // ************************** //
    // **** ENCHANTMENT LIST **** //
    // ************************** //

    const ENCHANTS = {
        'minecraft:sharpness': { maxLevel: 9, uniqueItem: '#forge:gems/nether_quartz' },
        'minecraft:protection': { maxLevel: 8, uniqueItem: '#forge:plates/steel' },
        'minecraft:fire_protection': { maxLevel: 9, uniqueItem: 'minecraft:magma_cream' },
        'minecraft:projectile_protection': { maxLevel: 11, uniqueItem: 'minecraft:leather' },
        'minecraft:feather_falling': { maxLevel: 11, uniqueItem: 'minecraft:feather' },
        'minecraft:blast_protection': { maxLevel: 9, uniqueItem: 'minecraft:gunpowder' },
        'minecraft:respiration': { maxLevel: 7, uniqueItem: 'minecraft:glass_bottle' },
        'minecraft:aqua_affinity': { maxLevel: 1, uniqueItem: 'minecraft:lily_pad' },
        'minecraft:thorns': { maxLevel: 5, uniqueItem: 'minecraft:rose_bush' },
        'minecraft:depth_strider': { maxLevel: 7, uniqueItem: '#forge:dusts/prismarine' },
        'minecraft:frost_walker': { maxLevel: 7, uniqueItem: '#forge:storage_blocks/ice' },
        'minecraft:soul_speed': { maxLevel: 7, uniqueItem: 'minecraft:soul_soil' },
        'minecraft:swift_sneak': { maxLevel: 5, uniqueItem: '#minecraft:wool_carpets' },
        'minecraft:smite': { maxLevel: 10, uniqueItem: 'minecraft:rotten_flesh' },
        'minecraft:bane_of_arthropods': { maxLevel: 10, uniqueItem: 'minecraft:spider_eye' },
        'minecraft:knockback': { maxLevel: 5, uniqueItem: 'minecraft:piston' },
        'minecraft:fire_aspect': { maxLevel: 5, uniqueItem: 'minecraft:blaze_rod' },
        'minecraft:looting': { maxLevel: 8, uniqueItem: '#forge:storage_blocks/diamond' },
        'minecraft:sweeping': { maxLevel: 8, uniqueItem: '#forge:ingots/iron' },
        'minecraft:efficiency': { maxLevel: 9, uniqueItem: '#forge:dusts/redstone' },
        'minecraft:silk_touch': { maxLevel: 1, uniqueItem: '#forge:slimeballs' },
        'minecraft:unbreaking': { maxLevel: 8, uniqueItem: '#forge:obsidian' },
        'minecraft:fortune': { maxLevel: 8, uniqueItem: '#forge:storage_blocks/emerald' },
        'minecraft:power': { maxLevel: 9, uniqueItem: '#forge:gems/flint' },
        'minecraft:punch': { maxLevel: 5, uniqueItem: '#forge:string' },
        'minecraft:flame': { maxLevel: 1, uniqueItem: '#forge:netherrack' },
        'minecraft:infinity': { maxLevel: 1, uniqueItem: '#forge:dusts/grains_of_infinity' },
        'minecraft:luck_of_the_sea': { maxLevel: 8, uniqueItem: '#forge:storage_blocks/lapis' },
        'minecraft:lure': { maxLevel: 8, uniqueItem: '#minecraft:fishes' },
        'minecraft:loyalty': { maxLevel: 9, uniqueItem: 'minecraft:lead' },
        'minecraft:impaling': { maxLevel: 10, uniqueItem: '#forge:storage_blocks/iron' },
        'minecraft:riptide': { maxLevel: 9, uniqueItem: 'minecraft:firework_rocket' },
        'minecraft:channeling': { maxLevel: 1, uniqueItem: 'minecraft:lightning_rod' },
        'minecraft:multishot': { maxLevel: 1, uniqueItem: '#minecraft:arrows' },
        'minecraft:quick_charge': { maxLevel: 5, uniqueItem: '#forge:dusts/sugar' },
        'minecraft:piercing': { maxLevel: 8, uniqueItem: '#forge:gems/prismarine' },
        'minecraft:mending': { maxLevel: 1, uniqueItem: 'enderio:experience_rod' },
        // like halfway
    }


    // ************************ //
    // **** RECIPE BUILDER **** //
    // ************************ //

    function folderFromEnchantId(enchantId) {
        enchantId = String(enchantId || '')
        const parts = enchantId.split(':')
        if (parts.length >= 2 && parts[1]) return parts[1]
        return enchantId.replace(/[^a-z0-9_\-]/gi, '_')
    }

    function bookWithEnchant(enchantId, level, strong) {
        strong = !!strong
        let it = Item.of('minecraft:enchanted_book').enchant(enchantId, level)
        if (strong) it = it.strongNBT()
        return it
    }

    function makeBaseRecipe(folderKey, enchantId, level, uniqueItem) {
        const mult = 3 * level
        const recipeId = `${ID_PREFIX}${folderKey}/${level}`

        let recipe = event.recipes.gtceu.powered_enchanter(recipeId)
            .itemInputs('minecraft:book')
            .itemInputs(`${mult}x #forge:gems/lapis`)
            .itemInputs(`${mult}x ${uniqueItem}`)
            // .inputFluids(Fluid.of(FLUID_ID, fluidForLevel(level)))
            .itemOutputs(bookWithEnchant(enchantId, level, false))
            .duration(BASE_DURATION)
            .EUt(eutForLevel(level))
            .circuit(level)

        if (ENABLE_FLUIDS) {
            recipe.inputFluids(Fluid.of(FLUID_ID, fluidForLevel(level)))
        }
    }

    function makeCombineRecipe(folderKey, enchantId, outLevel) {
        const inLevel = outLevel - 1
        const recipeId = `${ID_PREFIX}${folderKey}/${outLevel}/combine`

        let recipe = event.recipes.gtceu.powered_enchanter(recipeId)
            .itemInputs(bookWithEnchant(enchantId, inLevel, true))
            .itemInputs(bookWithEnchant(enchantId, inLevel, true))
            // .inputFluids(Fluid.of(FLUID_ID, fluidForLevel(outLevel)))
            .itemOutputs(bookWithEnchant(enchantId, outLevel, false))
            .duration(BASE_DURATION)
            .EUt(eutForLevel(outLevel))
            .circuit(outLevel)

        if (ENABLE_FLUIDS) {
            recipe.inputFluids(Fluid.of(FLUID_ID, fluidForLevel(outLevel)))
        }
    }

    function generateEnchantSet(enchantId, def) {
        enchantId = String(enchantId)
        const maxLevel = Number(def.maxLevel || 1)
        const uniqueItem = String(def.uniqueItem || '')
        const folderKey = folderFromEnchantId(enchantId)

        if (!enchantId || !uniqueItem || !Number.isFinite(maxLevel) || maxLevel < 1) {
            console.error(`[Powered Enchanter] Bad enchant definition for ${enchantId}`)
            return
        }

        // base recipes 1 to max
        for (let lvl = 1; lvl <= maxLevel; lvl++) {
            makeBaseRecipe(folderKey, enchantId, lvl, uniqueItem)
        }

        // combine recipes 2 to max
        for (let lvl = 2; lvl <= maxLevel; lvl++) {
            makeCombineRecipe(folderKey, enchantId, lvl)
        }
    }

    Object.keys(ENCHANTS).forEach(enchantId => {
        generateEnchantSet(enchantId, ENCHANTS[enchantId])
    })


    // fin //

})
