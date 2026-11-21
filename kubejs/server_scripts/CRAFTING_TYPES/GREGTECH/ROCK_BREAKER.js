// priority: 0


ServerEvents.recipes(event => {

    let ULV = 4
    let LV = 16
    let MV = 60
    let HV = 120
    let EV = 960
    let IV = 3840


    let rockGen = (output, noncon, fluid, EUt, id) =>

        event.recipes.gtceu.rock_breaker(id)
            .notConsumable(noncon)
            .itemOutputs(output)
            .adjacentFluids(fluid, "minecraft:water")
            .duration(16)
            .EUt(EUt)

    event.remove({ id: 'gtceu:rock_breaker/cobblestone' })
    event.remove({ id: 'gtceu:rock_breaker/stone' })
    event.remove({ id: 'gtceu:rock_breaker/granite' })
    event.remove({ id: 'gtceu:rock_breaker/diorite' })
    event.remove({ id: 'gtceu:rock_breaker/andesite' })
    event.remove({ id: 'gtceu:rock_breaker/deepslate' })
    event.remove({ id: 'gtceu:rock_breaker/basalt' })
    event.remove({ id: 'gtceu:rock_breaker/blackstone' })
    event.remove({ id: 'gtceu:rock_breaker/red_granite' })
    event.remove({ id: 'gtceu:rock_breaker/marble' })

    rockGen('minecraft:stone', 'minecraft:stone', 'minecraft:lava', ULV, 'kubejs:minecraft/stone')
    rockGen('minecraft:cobblestone', 'minecraft:cobblestone', 'minecraft:lava', ULV, 'kubejs:minecraft/cobblestone')
    rockGen('minecraft:mossy_cobblestone', 'minecraft:mossy_cobblestone', 'minecraft:lava', LV, 'kubejs:minecraft/mossy_cobblestone')
    rockGen('minecraft:granite', 'minecraft:granite', 'minecraft:lava', ULV, 'kubejs:minecraft/granite')
    rockGen('minecraft:polished_granite', 'minecraft:polished_granite', 'minecraft:lava', LV, 'kubejs:minecraft/polished_granite')
    rockGen('minecraft:diorite', 'minecraft:diorite', 'minecraft:lava', ULV, 'kubejs:minecraft/diorite')
    rockGen('minecraft:polished_diorite', 'minecraft:polished_diorite', 'minecraft:lava', LV, 'kubejs:minecraft/polished_diorite')
    rockGen('minecraft:andesite', 'minecraft:andesite', 'minecraft:lava', ULV, 'kubejs:minecraft/andesite')
    rockGen('minecraft:polished_andesite', 'minecraft:polished_andesite', 'minecraft:lava', LV, 'kubejs:minecraft/polished_andesite')
    rockGen('minecraft:deepslate', 'minecraft:deepslate', 'minecraft:lava', LV, 'kubejs:minecraft/deepslate')
    rockGen('minecraft:cobbled_deepslate', 'minecraft:cobbled_deepslate', 'minecraft:lava', LV, 'kubejs:minecraft/cobbled_deepslate')
    rockGen('minecraft:polished_deepslate', 'minecraft:polished_deepslate', 'minecraft:lava', MV, 'kubejs:minecraft/polished_deepslate')
    rockGen('factory_blocks:factory', 'factory_blocks:factory', 'minecraft:lava', LV, 'kubejs:factory_blocks/factory')
    rockGen('factory_blocks:sturdy', 'factory_blocks:sturdy', 'minecraft:lava', LV, 'kubejs:factory_blocks/sturdy')
    rockGen('minecraft:terracotta', 'minecraft:terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/terracotta')
    rockGen('minecraft:white_terracotta', 'minecraft:white_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/white_terracotta')
    rockGen('minecraft:light_gray_terracotta', 'minecraft:light_gray_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/light_gray_terracotta')
    rockGen('minecraft:gray_terracotta', 'minecraft:gray_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/gray_terracotta')
    rockGen('minecraft:black_terracotta', 'minecraft:black_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/black_terracotta')
    rockGen('minecraft:brown_terracotta', 'minecraft:brown_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/brown_terracotta')
    rockGen('minecraft:red_terracotta', 'minecraft:red_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/red_terracotta')
    rockGen('minecraft:orange_terracotta', 'minecraft:orange_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/orange_terracotta')
    rockGen('minecraft:yellow_terracotta', 'minecraft:yellow_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/yellow_terracotta')
    rockGen('minecraft:lime_terracotta', 'minecraft:lime_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/lime_terracotta')
    rockGen('minecraft:green_terracotta', 'minecraft:green_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/green_terracotta')
    rockGen('minecraft:cyan_terracotta', 'minecraft:cyan_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/cyan_terracotta')
    rockGen('minecraft:light_blue_terracotta', 'minecraft:light_blue_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/light_blue_terracotta')
    rockGen('minecraft:blue_terracotta', 'minecraft:blue_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/blue_terracotta')
    rockGen('minecraft:purple_terracotta', 'minecraft:purple_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/purple_terracotta')
    rockGen('minecraft:magenta_terracotta', 'minecraft:magenta_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/magenta_terracotta')
    rockGen('minecraft:pink_terracotta', 'minecraft:pink_terracotta', 'minecraft:lava', ULV, 'kubejs:minecraft/pink_terracotta')
    rockGen('minecraft:white_concrete', 'minecraft:white_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/white_concrete')
    rockGen('minecraft:light_gray_concrete', 'minecraft:light_gray_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/light_gray_concrete')
    rockGen('minecraft:gray_concrete', 'minecraft:gray_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/gray_concrete')
    rockGen('minecraft:black_concrete', 'minecraft:black_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/black_concrete')
    rockGen('minecraft:brown_concrete', 'minecraft:brown_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/brown_concrete')
    rockGen('minecraft:red_concrete', 'minecraft:red_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/red_concrete')
    rockGen('minecraft:orange_concrete', 'minecraft:orange_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/orange_concrete')
    rockGen('minecraft:yellow_concrete', 'minecraft:yellow_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/yellow_concrete')
    rockGen('minecraft:lime_concrete', 'minecraft:lime_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/lime_concrete')
    rockGen('minecraft:green_concrete', 'minecraft:green_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/green_concrete')
    rockGen('minecraft:cyan_concrete', 'minecraft:cyan_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/cyan_concrete')
    rockGen('minecraft:light_blue_concrete', 'minecraft:light_blue_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/light_blue_concrete')
    rockGen('minecraft:blue_concrete', 'minecraft:blue_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/blue_concrete')
    rockGen('minecraft:purple_concrete', 'minecraft:purple_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/purple_concrete')
    rockGen('minecraft:magenta_concrete', 'minecraft:magenta_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/magenta_concrete')
    rockGen('minecraft:pink_concrete', 'minecraft:pink_concrete', 'minecraft:lava', LV, 'kubejs:minecraft/pink_concrete')
    rockGen('minecraft:grass_block', 'minecraft:grass_block', 'minecraft:water', ULV, 'kubejs:minecraft/grass_block')
    rockGen('minecraft:podzol', 'minecraft:podzol', 'minecraft:water', ULV, 'kubejs:minecraft/podzol')
    rockGen('minecraft:mycelium', 'minecraft:mycelium', 'minecraft:water', ULV, 'kubejs:minecraft/mycelium')
    rockGen('minecraft:dirt', 'minecraft:dirt', 'minecraft:water', ULV, 'kubejs:minecraft/dirt')
    rockGen('minecraft:coarse_dirt', 'minecraft:coarse_dirt', 'minecraft:water', ULV, 'kubejs:minecraft/coarse_dirt')
    rockGen('minecraft:rooted_dirt', 'minecraft:rooted_dirt', 'minecraft:water', ULV, 'kubejs:minecraft/rooted_dirt')
    rockGen('minecraft:mud', 'minecraft:mud', 'minecraft:water', ULV, 'kubejs:minecraft/mud')
    rockGen('minecraft:moss_block', 'minecraft:moss_block', 'minecraft:water', ULV, 'kubejs:minecraft/moss_block')
    rockGen('minecraft:tuff', 'minecraft:tuff', 'minecraft:lava', ULV, 'kubejs:minecraft/tuff')
    rockGen('minecraft:muddy_mangrove_roots', 'minecraft:muddy_mangrove_roots', 'minecraft:water', ULV, 'kubejs:minecraft/muddy_mangrove_roots')
    rockGen('minecraft:infested_stone', 'minecraft:infested_stone', 'minecraft:lava', ULV, 'kubejs:minecraft/infested_stone')
    rockGen('minecraft:infested_cobblestone', 'minecraft:infested_cobblestone', 'minecraft:lava', ULV, 'kubejs:minecraft/infested_cobblestone')
    rockGen('minecraft:infested_deepslate', 'minecraft:infested_deepslate', 'minecraft:lava', ULV, 'kubejs:minecraft/infested_deepslate')
    rockGen('laboratoryblocks:laboratory_block', 'laboratoryblocks:laboratory_block', 'minecraft:lava', LV, 'kubejs:laboratoryblocks/laboratory_block')
    rockGen('laboratoryblocks:pla_block', 'laboratoryblocks:pla_block', 'minecraft:lava', LV, 'kubejs:laboratoryblocks/pla_block')
    rockGen('infinite_blocks:blackest_stone', 'infinite_blocks:blackest_stone', 'minecraft:lava', ULV, 'kubejs:infinite_blocks/blackest_stone')
    rockGen('gtceu:red_granite', 'gtceu:red_granite', 'minecraft:lava', ULV, 'kubejs:gtceu/red_granite')
    rockGen('gtceu:red_granite_cobblestone', 'gtceu:red_granite_cobblestone', 'minecraft:lava', ULV, 'kubejs:gtceu/red_granite_cobblestone')
    rockGen('gtceu:marble', 'gtceu:marble', 'minecraft:lava', ULV, 'kubejs:gtceu/marble')
    rockGen('gtceu:marble_cobblestone', 'gtceu:marble_cobblestone', 'minecraft:lava', ULV, 'kubejs:gtceu/marble_cobblestone')
    rockGen('xtonesreworked:xtone_tile', 'xtonesreworked:xtone_tile', 'minecraft:lava', LV, 'kubejs:xtonesreworked/xtone_tile')


    // fin //

})