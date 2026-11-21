// priority: 0


ServerEvents.recipes(event => {

    let cookingMachine = (output, input, circuit, id) =>

        event.recipes.gtceu.auto_cooking_pot(id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(200)
            .EUt(30)
            .circuit(circuit)


    // baked_cod_stew
    cookingMachine(
        '2x farmersdelight:baked_cod_stew',
        [
            '2x minecraft:bowl',
            '#forge:raw_fishes/cod',
            'minecraft:potato',
            'minecraft:egg',
            'farmersdelight:tomato',
        ],
        1,
        'kubejs:baked_cod_stew')

    // squid_ink_pasta
    cookingMachine(
        '2x farmersdelight:squid_ink_pasta',
        [
            '2x minecraft:bowl',
            '#forge:raw_fishes',
            'farmersdelight:raw_pasta',
            'farmersdelight:tomato',
            'minecraft:ink_sac',
        ],
        1,
        'kubejs:squid_ink_pasta')

    // rabbit_stew
    cookingMachine(
        '2x minecraft:rabbit_stew',
        [
            '2x minecraft:bowl',
            'minecraft:baked_potato',
            'minecraft:rabbit',
            'minecraft:carrot',
            '#forge:mushrooms',
        ],
        1,
        'kubejs:rabbit_stew')

    // bone_broth
    cookingMachine(
        '2x farmersdelight:bone_broth',
        [
            '2x minecraft:bowl',
            'minecraft:bone',
            '#farmersdelight:bone_broth_ingredients',
        ],
        1,
        'kubejs:bone_broth')

    // cabbage_rolls
    cookingMachine(
        '2x farmersdelight:cabbage_rolls',
        [
            '#forge:crops/cabbage',
            '#farmersdelight:cabbage_roll_ingredients',
        ],
        1,
        'kubejs:cabbage_rolls')

    // beef_stew
    cookingMachine(
        '2x farmersdelight:beef_stew',
        [
            '2x minecraft:bowl',
            '#forge:raw_beef',
            'minecraft:carrot',
            'minecraft:potato',
        ],
        1,
        'kubejs:beef_stew')

    // vegetable_noodles
    cookingMachine(
        '2x farmersdelight:vegetable_noodles',
        [
            '2x minecraft:bowl',
            'minecraft:carrot',
            'minecraft:brown_mushroom',
            'farmersdelight:raw_pasta',
            '#forge:crops/cabbage',
            '#forge:vegetables',
        ],
        1,
        'kubejs:vegetable_noodles')

    // mushroom_rice
    cookingMachine(
        '2x farmersdelight:mushroom_rice',
        [
            '2x minecraft:bowl',
            'minecraft:brown_mushroom',
            'minecraft:red_mushroom',
            'farmersdelight:rice',
            '#farmersdelight:mushroom_rice_ingredients',
        ],
        1,
        'kubejs:mushroom_rice')

    // cooked_rice
    cookingMachine(
        '2x farmersdelight:cooked_rice',
        [
            '2x minecraft:bowl',
            'farmersdelight:rice',
        ],
        1,
        'kubejs:cooked_rice')

    // dumplings
    cookingMachine(
        '4x farmersdelight:dumplings',
        [
            '#forge:dough',
            '#forge:crops/cabbage',
            'farmersdelight:onion',
            '#farmersdelight:dumplings_ingredients',
        ],
        1,
        'kubejs:dumplings')

    // vegetable_soup
    cookingMachine(
        '2x farmersdelight:vegetable_soup',
        [
            '2x minecraft:bowl',
            'minecraft:carrot',
            'minecraft:potato',
            'minecraft:beetroot',
            '#forge:crops/cabbage',
        ],
        1,
        'kubejs:vegetable_soup')

    // fried_rice
    cookingMachine(
        '2x farmersdelight:fried_rice',
        [
            '2x minecraft:bowl',
            'farmersdelight:rice',
            'minecraft:egg',
            'minecraft:carrot',
            'farmersdelight:onion',
        ],
        2,
        'kubejs:fried_rice')

    // mushroom_stew
    cookingMachine(
        '2x minecraft:mushroom_stew',
        [
            '2x minecraft:bowl',
            'minecraft:brown_mushroom',
            'minecraft:red_mushroom',
        ],
        1,
        'kubejs:mushroom_stew')

    // stuffed_pumpkin_block
    cookingMachine(
        '2x farmersdelight:stuffed_pumpkin_block',
        [
            '2x minecraft:pumpkin',
            'farmersdelight:rice',
            'farmersdelight:onion',
            'minecraft:brown_mushroom',
            'minecraft:potato',
            '#forge:berries',
            '#forge:vegetables',
        ],
        1,
        'kubejs:stuffed_pumpkin_block')

    // pasta_with_meatballs
    cookingMachine(
        '2x farmersdelight:pasta_with_meatballs',
        [
            '2x minecraft:bowl',
            'farmersdelight:minced_beef',
            'farmersdelight:raw_pasta',
            'farmersdelight:tomato_sauce',
        ],
        1,
        'kubejs:pasta_with_meatballs')

    // chicken_soup
    cookingMachine(
        '2x farmersdelight:chicken_soup',
        [
            '2x minecraft:bowl',
            '#forge:raw_chicken',
            'minecraft:carrot',
            '#forge:crops/cabbage',
            '#forge:vegetables',
        ],
        1,
        'kubejs:chicken_soup')

    // tomato_sauce
    cookingMachine(
        '2x farmersdelight:tomato_sauce',
        [
            '2x minecraft:bowl',
            'farmersdelight:tomato',
            'farmersdelight:tomato',
        ],
        1,
        'kubejs:tomato_sauce')

    // glow_berry_custard
    cookingMachine(
        '2x farmersdelight:glow_berry_custard',
        [
            '2x minecraft:glass_bottle',
            'minecraft:glow_berries',
            '#forge:milk',
            'minecraft:egg',
            'minecraft:sugar',
        ],
        1,
        'kubejs:glow_berry_custard')

    // dog_food
    cookingMachine(
        '2x farmersdelight:dog_food',
        [
            '2x minecraft:bowl',
            'minecraft:rotten_flesh',
            'minecraft:bone_meal',
            '#farmersdelight:wolf_prey',
            'farmersdelight:rice',
        ],
        1,
        'kubejs:dog_food')

    // beetroot_soup
    cookingMachine(
        '2x minecraft:beetroot_soup',
        [
            '2x minecraft:bowl',
            'minecraft:beetroot',
            'minecraft:beetroot',
            'minecraft:beetroot',
        ],
        1,
        'kubejs:beetroot_soup')

    // pasta_with_mutton_chop
    cookingMachine(
        '2x farmersdelight:pasta_with_mutton_chop',
        [
            '2x minecraft:bowl',
            '#forge:raw_mutton',
            'farmersdelight:raw_pasta',
            'farmersdelight:tomato_sauce',
        ],
        1,
        'kubejs:pasta_with_mutton_chop')

    // ratatouille
    cookingMachine(
        '2x farmersdelight:ratatouille',
        [
            '2x minecraft:bowl',
            'farmersdelight:tomato',
            'farmersdelight:onion',
            'minecraft:beetroot',
            '#forge:vegetables',
        ],
        1,
        'kubejs:ratatouille')

    // pumpkin_soup
    cookingMachine(
        '2x farmersdelight:pumpkin_soup',
        [
            '2x minecraft:bowl',
            'farmersdelight:pumpkin_slice',
            '#forge:crops/cabbage',
            '#forge:raw_pork',
            '#forge:milk',
        ],
        1,
        'kubejs:pumpkin_soup')

    // apple_cider
    cookingMachine(
        '2x farmersdelight:apple_cider',
        [
            '2x minecraft:glass_bottle',
            'minecraft:apple',
            'minecraft:apple',
            'minecraft:sugar',
        ],
        1,
        'kubejs:apple_cider')

    // hot_cocoa
    cookingMachine(
        '2x farmersdelight:hot_cocoa',
        [
            '2x minecraft:glass_bottle',
            '#forge:milk',
            'minecraft:sugar',
            'minecraft:cocoa_beans',
            'minecraft:cocoa_beans',
        ],
        1,
        'kubejs:hot_cocoa')

    // noodle_soup
    cookingMachine(
        '2x farmersdelight:noodle_soup',
        [
            '2x minecraft:bowl',
            'farmersdelight:raw_pasta',
            'farmersdelight:fried_egg',
            'minecraft:dried_kelp',
            '#forge:raw_pork',
        ],
        1,
        'kubejs:noodle_soup')

    // fish_stew
    cookingMachine(
        '2x farmersdelight:fish_stew',
        [
            '2x minecraft:bowl',
            '#forge:raw_fishes',
            'farmersdelight:tomato_sauce',
            'farmersdelight:onion',
        ],
        1,
        'kubejs:fish_stew')


    // fin //

})