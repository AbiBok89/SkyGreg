// priority: 0


ServerEvents.recipes(event => {

    event.recipes.gtceu.lv_solar_generator('kubejs:lv_solar_generator')
        .notConsumable('#gtceu:circuits/lv')
        .daytime(false)
        .duration(20)
        .EUt(-32)

    event.recipes.gtceu.mv_solar_generator('kubejs:mv_solar_generator')
        .notConsumable('#gtceu:circuits/mv')
        .daytime(false)
        .duration(20)
        .EUt(-128)

    event.recipes.gtceu.hv_solar_generator('kubejs:hv_solar_generator')
        .notConsumable('#gtceu:circuits/hv')
        .daytime(false)
        .duration(20)
        .EUt(-512)


    // fin //

})