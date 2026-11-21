// priority: 0


ServerEvents.recipes(event => {

    // dark_cherry_log
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": "vinery:dark_cherry_log"
                }
            ],
            "result": [
                {
                    "item": "vinery:stripped_dark_cherry_log"
                },
                {
                    "item": "farmersdelight:tree_bark"
                }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }
        }
    )

    // dark_cherry_wood
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": "vinery:dark_cherry_wood"
                }
            ],
            "result": [
                {
                    "item": "vinery:stripped_dark_cherry_wood"
                },
                {
                    "item": "farmersdelight:tree_bark"
                }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }
        }
    )

    // rubber_log
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": "gtceu:rubber_log"
                }
            ],
            "result": [
                {
                    "item": "gtceu:stripped_rubber_log"
                },
                {
                    "item": "farmersdelight:tree_bark"
                }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }
        }
    )

    // rubber_wood
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": "gtceu:rubber_wood"
                }
            ],
            "result": [
                {
                    "item": "gtceu:stripped_rubber_wood"
                },
                {
                    "item": "farmersdelight:tree_bark"
                }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }
        }
    )


    // fin //

})