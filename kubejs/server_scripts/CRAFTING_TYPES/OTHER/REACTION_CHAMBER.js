// priority: 0


ServerEvents.recipes(event => {

    // charged_certus_quartz_crystal
    event.remove({ id: 'advanced_ae:certuscharger' })

    event.custom(
        {
            "type": "advanced_ae:reaction",
            "energy": 1300000,
            "fluid": {
                "fluidStack": {
                    "Amount": 1000,
                    "FluidName": "minecraft:water"
                }
            },
            "input_items": [
                {
                    "amount": 64,
                    "ingredient": {
                        "tag": "forge:gems/certus_quartz"
                    }
                }
            ],
            "output": {
                "#": 64,
                "#c": "ae2:i",
                "id": "ae2:charged_certus_quartz_crystal"
            }
        }
    )
        .id('kubejs:reaction_chamber/charged_certus_quartz_crystal')


    // fin //

})