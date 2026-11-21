// priority: 900


ServerEvents.recipes(event => {

    // simple_ore_generator
    event.remove({ id: 'simple_resource_generators:simple_ore_generator_recipe' })
    event.shaped('simple_resource_generators:simple_ore_generator', [
        'FAF',
        'BCB',
        'GDG',
    ], {
        A: '#forge:gears/steel',
        B: 'gtceu:nickel_small_item_pipe',
        C: 'simple_resource_generators:raw_conversion_generator',
        D: 'gtceu:lead_rotor',
        F: '#forge:plates/nickel',
        G: '#forge:springs/lead',
    })

    // advanced_ore_generator
    event.remove({ id: 'simple_resource_generators:advanced_ore_generator_recipe' })
    event.shaped('simple_resource_generators:advanced_ore_generator', [
        '   ',
        'BAB',
        '   ',
    ], {
        A: 'simple_resource_generators:simple_ore_generator',
        B: 'gtceu:lv_conveyor_module',
    })

    // random_ore_generator
    event.remove({ output: 'simple_resource_generators:random_ore_generator' })
    event.shaped('simple_resource_generators:random_ore_generator', [
        'FAF',
        'BCB',
        'GDG',
    ], {
        A: '#forge:gears/steel',
        B: 'gtceu:nickel_small_item_pipe',
        C: 'simple_resource_generators:random_ore_block_generator_placement',
        D: 'gtceu:lead_rotor',
        F: '#forge:plates/nickel',
        G: '#forge:springs/lead',
    })

    // random_ore_generator
    event.remove({ output: 'simple_resource_generators:raw_conversion_generator' })
    event.shaped('simple_resource_generators:raw_conversion_generator', [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: '#minecraft:planks',
        B: '#forge:raw_materials',
    })


    // fin //

})