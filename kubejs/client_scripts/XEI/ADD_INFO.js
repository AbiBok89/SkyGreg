// priority: 0


// *************************** //
// **** ADD EMI INFO PAGE **** //
// *************************** //

JEIEvents.information(event => {

    // raw_conversion_generator
    event.addItem('simple_resource_generators:raw_conversion_generator', [
        Text.translate('sky_greg.kjs.info.1')
    ])

    // simple_ore_generator
    event.addItem('simple_resource_generators:simple_ore_generator', [
        Text.translate('sky_greg.kjs.info.2')
    ])

    // simple_ore_generator_placement
    event.addItem('simple_resource_generators:simple_ore_generator_placement', [
        Text.translate('sky_greg.kjs.info.3')
    ])

    // simple_water_condenser
    event.addItem('simple_resource_generators:simple_water_condenser', [
        Text.translate('sky_greg.kjs.info.4')
    ])

    // grass_seed
    event.addItem('ex_hammers:grass_seed', [
        Text.translate('sky_greg.kjs.info.5')
    ])

    // basic_water_generator
    event.addItem('simplefluidgenerators:basic_water_generator', [
        Text.translate('sky_greg.kjs.info.6')
    ])

    // basic_lava_generator
    event.addItem('simplefluidgenerators:basic_lava_generator', [
        Text.translate('sky_greg.kjs.info.7')
    ])


    // fin //

})


// ********************** //
// **** RENAME ITEMS **** //
// ********************** //

ClientEvents.lang('en_us', event => {

    event.renameItem('minecraft:netherite_helmet', 'Forged Netherite Helmet')
    event.renameItem('minecraft:netherite_chestplate', 'Forged Netherite Chestplate')
    event.renameItem('minecraft:netherite_leggings', 'Forged Netherite Leggings')
    event.renameItem('minecraft:netherite_boots', 'Forged Netherite Boots')
    event.renameItem('minecraft:netherite_block', 'Block of Decorative Netherite')
    event.renameItem('minecraft:ancient_debris', 'Poor Ancient Debris')
    event.renameItem('easypaxellite:netherite_paxel', 'Forged Netherite Paxel')
    event.renameItem('farmersdelight:netherite_knife', 'Forged Netherite Knife')
    event.renameItem('brewery:netherite_brewingstation', 'Forged Netherite Brewingstation')
    event.renameItem('functionalstorage:netherite_upgrade', 'Forged Netherite Upgrade')

    event.renameItem('ex_hammers:stone_hammer', 'Stone Crushing Hammer')
    event.renameItem('ex_hammers:iron_hammer', 'Iron Crushing Hammer')
    event.renameItem('ex_hammers:diamond_hammer', 'Diamond Crushing Hammer')
    event.renameItem('ex_hammers:netherite_hammer', 'Forged Netherite Crushing Hammer')

    event.renameItem('sophisticatedbackpacks:copper_backpack', 'Bronze Backpack')
    event.renameItem('sophisticatedbackpacks:iron_backpack', 'Steel Backpack')
    event.renameItem('sophisticatedbackpacks:gold_backpack', 'Aluminium Backpack')
    event.renameItem('sophisticatedbackpacks:diamond_backpack', 'Stainless Steel Backpack')
    event.renameItem('sophisticatedbackpacks:netherite_backpack', 'Titanium Backpack')


    // fin //

})

ClientEvents.lang('ru_ru', event => {
    event.renameItem('minecraft:netherite_helmet', 'Шлем из кованого незерита')
    event.renameItem('minecraft:netherite_chestplate', 'Нагрудник из кованого незерита')
    event.renameItem('minecraft:netherite_leggings', 'Кованые незеритовые поножи')
    event.renameItem('minecraft:netherite_boots', 'Кованые незеритовые ботинки')
    event.renameItem('minecraft:netherite_block', 'Блок декоративного незерита')
    event.renameItem('minecraft:ancient_debris', 'Бедные древние обломки')
    event.renameItem('easypaxellite:netherite_paxel', 'Кованый незеритовый паксель')
    event.renameItem('farmersdelight:netherite_knife', 'Кованый незеритовый нож')
    event.renameItem('brewery:netherite_brewingstation', 'Кованая незеритовая варочная станция')
    event.renameItem('functionalstorage:netherite_upgrade', 'Кованое незеритовое улучшение')
    event.renameItem('ex_hammers:stone_hammer', 'Каменный дробильный молот')
    event.renameItem('ex_hammers:iron_hammer', 'Железный дробильный молот')
    event.renameItem('ex_hammers:diamond_hammer', 'Алмазный дробильный молот')
    event.renameItem('ex_hammers:netherite_hammer', 'Кованый незеритовый дробильный молот')
    event.renameItem('sophisticatedbackpacks:copper_backpack', 'Бронзовый рюкзак')
    event.renameItem('sophisticatedbackpacks:iron_backpack', 'Стальной рюкзак')
    event.renameItem('sophisticatedbackpacks:gold_backpack', 'Алюминиевый рюкзак')
    event.renameItem('sophisticatedbackpacks:diamond_backpack', 'Рюкзак из нержавеющей стали')
    event.renameItem('sophisticatedbackpacks:netherite_backpack', 'Титановый рюкзак')
})
