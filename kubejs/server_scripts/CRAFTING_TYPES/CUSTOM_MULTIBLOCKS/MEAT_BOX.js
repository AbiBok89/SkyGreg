// priority: 0


ServerEvents.recipes(event => {

    let meatMachine = (output, noncon, input, id) =>

        event.recipes.gtceu.meat_box(id)
            .notConsumable(noncon)
            .itemInputs(input)
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .itemOutputs(output)
            .duration(1200)
            .EUt(60)

    // chicken
    meatMachine(
        '16x minecraft:chicken',
        '2x minecraft:chicken_spawn_egg',
        '2x minecraft:wheat_seeds',
        'kubejs:meat_box/chicken')

    // beef
    meatMachine(
        '16x minecraft:beef',
        '2x minecraft:cow_spawn_egg',
        '2x minecraft:wheat',
        'kubejs:meat_box/cow')

    // rabbit
    meatMachine(
        '16x minecraft:rabbit',
        '2x minecraft:rabbit_spawn_egg',
        '2x minecraft:carrot',
        'kubejs:meat_box/rabbit')

    // mutton
    meatMachine(
        '16x minecraft:mutton',
        '2x minecraft:sheep_spawn_egg',
        '2x minecraft:wheat',
        'kubejs:meat_box/sheep')

    // porkchop
    meatMachine(
        '16x minecraft:porkchop',
        '2x minecraft:pig_spawn_egg',
        '2x minecraft:carrot',
        'kubejs:meat_box/pig')


    // fin //

})