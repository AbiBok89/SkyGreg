// priority: 0


ServerEvents.recipes(event => {

    // stable_footing
    event.custom(
        {
            "type": "enderio:enchanting",
            "cost_multiplier": 1,
            "enchantment": "apotheosis:stable_footing",
            "input": {
                "count": 1,
                "ingredient": {
                    "item": "angelblockrenewed:angel_block"
                }
            }
        }
    )

    // protection
    event.remove({ id: 'enderio:enchanting/protection' })
    event.custom(
        {
            "type": "enderio:enchanting",
            "cost_multiplier": 1,
            "enchantment": "minecraft:protection",
            "input": {
                "count": 16,
                "ingredient": {
                    "item": "gtceu:steel_ingot"
                }
            }
        }
    )

    // soulbound
    event.remove({ id: 'enderio:enchanting/soulbound' })
    event.custom(
        {
            "type": "enderio:enchanting",
            "cost_multiplier": 1,
            "enchantment": "enderio:soulbound",
            "input": {
                "count": 1,
                "ingredient": {
                    "item": "ae2:fluix_crystal"
                }
            }
        }
    )

    // soulbound
    event.remove({ id: 'enderio:enchanting/soulbound' })
    event.custom(
        {
            "type": "enderio:enchanting",
            "cost_multiplier": 1,
            "enchantment": "enderio:soulbound",
            "input": {
                "count": 1,
                "ingredient": {
                    "item": "ae2:fluix_crystal"
                }
            }
        }
    )

    // withering
    event.remove({ id: 'enderio:enchanting/withering' })
    event.custom(
        {
            "type": "enderio:enchanting",
            "cost_multiplier": 1,
            "enchantment": "enderio:withering",
            "input": {
                "count": 4,
                "ingredient": {
                    "item": "minecraft:wither_rose"
                }
            }
        }
    )


    // fin //

})