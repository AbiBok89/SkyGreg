// priority: 0


ServerEvents.recipes(event => {

    // charged_certus_quartz_crystal
    event.custom(
        {
            "type": "ae2:charger",
            "ingredient": {
                "item": "gtceu:certus_quartz_gem"
            },
            "result": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        }
    )


    // fin //

})