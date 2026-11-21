// priority: 0


ServerEvents.recipes(event => {

    // experience_bottle
    event.custom(
        {
            "type": "enderio:tank",
            "fluid": {
                "amount": 12,
                "fluid": "mob_grinding_utils:fluid_xp"
            },
            "input": {
                "item": "minecraft:glass_bottle"
            },
            "is_emptying": false,
            "output": {
                "item": "minecraft:experience_bottle"
            }
        }
    )


    // fin //

})