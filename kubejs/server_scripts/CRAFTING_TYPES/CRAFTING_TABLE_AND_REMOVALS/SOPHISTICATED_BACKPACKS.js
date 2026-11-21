// priority: 900


ServerEvents.recipes(event => {

    // copper_backpack
    event.remove({ id: 'sophisticatedbackpacks:copper_backpack' })
    event.custom(
        {
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:copper_backpack"
                }
            ],
            "key": {
                "B": {
                    "item": "sophisticatedbackpacks:backpack"
                },
                "I": {
                    "tag": "forge:double_plates/bronze"
                }
            },
            "pattern": [
                "III",
                "IBI",
                "III"
            ],
            "result": {
                "item": "sophisticatedbackpacks:copper_backpack"
            }
        }
    )
        .id('kubejs:crafting/sophisticatedbackpacks/copper_backpack')

    // iron_backpack
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack' })
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' })
    event.custom(
        {
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
                }
            ],
            "key": {
                "B": {
                    "item": "sophisticatedbackpacks:copper_backpack"
                },
                "I": {
                    "tag": "forge:double_plates/steel"
                }
            },
            "pattern": [
                "III",
                "IBI",
                "III"
            ],
            "result": {
                "item": "sophisticatedbackpacks:iron_backpack"
            }
        }
    )
        .id('kubejs:crafting/sophisticatedbackpacks/iron_backpack')

    // gold_backpack
    event.remove({ id: 'sophisticatedbackpacks:gold_backpack' })
    event.custom(
        {
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
                }
            ],
            "key": {
                "B": {
                    "item": "sophisticatedbackpacks:iron_backpack"
                },
                "I": {
                    "tag": "forge:double_plates/aluminium"
                }
            },
            "pattern": [
                "III",
                "IBI",
                "III"
            ],
            "result": {
                "item": "sophisticatedbackpacks:gold_backpack"
            }
        }
    )
        .id('kubejs:crafting/sophisticatedbackpacks/gold_backpack')

    // diamond_backpack
    event.remove({ id: 'sophisticatedbackpacks:diamond_backpack' })
    event.custom(
        {
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
                }
            ],
            "key": {
                "B": {
                    "item": "sophisticatedbackpacks:gold_backpack"
                },
                "I": {
                    "tag": "forge:double_plates/stainless_steel"
                }
            },
            "pattern": [
                "III",
                "IBI",
                "III"
            ],
            "result": {
                "item": "sophisticatedbackpacks:diamond_backpack"
            }
        }
    )
        .id('kubejs:crafting/sophisticatedbackpacks/diamond_backpack')

    // netherite_backpack
    event.remove({ id: 'sophisticatedbackpacks:netherite_backpack' })
    event.custom(
        {
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:netherite_backpack"
                }
            ],
            "key": {
                "B": {
                    "item": "sophisticatedbackpacks:diamond_backpack"
                },
                "I": {
                    "tag": "forge:double_plates/titanium"
                }
            },
            "pattern": [
                "III",
                "IBI",
                "III"
            ],
            "result": {
                "item": "sophisticatedbackpacks:netherite_backpack"
            }
        }
    )
        .id('kubejs:crafting/sophisticatedbackpacks/netherite_backpack')


    // fin //

})