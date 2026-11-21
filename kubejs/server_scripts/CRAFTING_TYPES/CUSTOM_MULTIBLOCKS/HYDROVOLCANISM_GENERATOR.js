// priority: 0


ServerEvents.recipes(event => {

    event.recipes.gtceu.hydrovolcanism_generator('kubejs:processed_fuels/steam')
        .inputFluids(Fluid.of('gtceu:crystalized_water', 1000))
        .inputFluids(Fluid.of('gtceu:activated_lava', 400))
        .outputFluids(Fluid.of('gtceu:steam', 40000))
        .duration(20)
        .EUt(-4096)

    event.recipes.gtceu.hydrovolcanism_generator('kubejs:basic_fuels/steam')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .inputFluids(Fluid.of('minecraft:lava', 400))
        .outputFluids(Fluid.of('gtceu:steam', 20000))
        .duration(20)
        .EUt(-2048)


    // fin //

})