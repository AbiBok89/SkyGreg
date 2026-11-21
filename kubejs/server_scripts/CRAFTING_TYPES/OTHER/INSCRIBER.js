// priority: 0


ServerEvents.recipes(event => {

    // printed_calculation_processor
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
    event.custom(
        {
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "tag": "forge:gems/certus_quartz"
                },
                "top": {
                    "item": "ae2:calculation_processor_press"
                }
            },
            "mode": "inscribe",
            "result": {
                "item": "ae2:printed_calculation_processor"
            }
        }
    )


    // fin //

})