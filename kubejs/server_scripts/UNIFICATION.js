// priority: 900


ServerEvents.recipes(event => {

  // ****************************** //  // ****************************** //  
  // ***** RANDOM UNIFICATION ***** //  // ***** RANDOM UNIFICATION ***** //
  // ***** RANDOM UNIFICATION ***** //  // ***** RANDOM UNIFICATION ***** //
  // ***** RANDOM UNIFICATION ***** //  // ***** RANDOM UNIFICATION ***** //  
  // ****************************** //  // ****************************** //  


  // *************************** //  // *************************** //  
  // ***** PRESSURE PLATES ***** //  // ***** PRESSURE PLATES ***** //  
  // *************************** //  // *************************** //  

  // wood pressure plates
  const pressurePlatesWood = [
    { out: 'vinery:dark_cherry_pressure_plate', in1: 'vinery:dark_cherry_slab' },
    { out: 'framedblocks:framed_pressure_plate', in1: 'framedblocks:framed_slab' },
  ]

  const woodPlateCrafts = (output, input1, id) => {
    event.shaped(`2x ${output}`, [
      'ADA',
      'BCB',
      'AEA',
    ], {
      A: '#forge:bolts/wood',
      B: input1,
      C: '#forge:springs/iron',
      D: '#forge:tools/mallets',
      E: '#forge:tools/screwdrivers',
    })
      .id(`kubejs:crafting/${id}/from/slab`)

    event.recipes.gtceu.assembler(`kubejs:${id}/from/slab`)
      .itemInputs(`2x ${input1}`)
      .itemInputs('#forge:springs/iron')
      .itemOutputs(output)
      .duration(100)
      .EUt(7)
      .circuit(27)
  }

  // CRAFT //
  pressurePlatesWood.forEach(pressure => {
    const outId = (pressure.out.id ?? Item.of(pressure.out).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    woodPlateCrafts(pressure.out, pressure.in1, `${outMod}/${outItem}`)
  })

  event.remove({ id: 'framedblocks:framing_saw/framed_pressure_plate' })

  // anti pressure plates
  const brightColorSlabs = ['white', 'orange', 'magenta', 'yellow', 'cyan', 'blue', 'green', 'red']
  brightColorSlabs.forEach(color => {
    const pressurePlatesAntiSlab = [
      { out: `antiblocksrechiseled:pressure_plate_bright_${color}`, slab: `antiblocksrechiseled:slab_${color}_bright` },
    ]

    const antiPlatesCrafts = (output, input1, id) => {
      event.shaped(`2x ${output}`, [
        'ADA',
        'BCB',
        'AEA',
      ], {
        A: '#forge:screws/iron',
        B: input1,
        C: '#forge:springs/iron',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/from/slab`)
    }

    // CRAFT //
    pressurePlatesAntiSlab.forEach(pressure => {
      const outId = (pressure.out.id ?? Item.of(pressure.out).id)
      const outMod = outId.split(':')[0]
      const outItem = outId.split(':')[1]
      event.remove({ id: `${outMod}:bright_${color}_pressure_plate` })
      antiPlatesCrafts(pressure.out, pressure.slab, `${outMod}/${outItem}`)
    })
  })

  const brightColorBlocks = ['white', 'orange', 'magenta', 'yellow', 'cyan', 'blue', 'green', 'red']
  brightColorBlocks.forEach(color => {
    const pressurePlatesAntiBlock = [
      { out: `antiblocksrechiseled:pressure_plate_bright_${color}`, block: `antiblocksrechiseled:bright_${color}` },
    ]

    const antiPlatesCrafts = (output, input1, id) => {
      event.recipes.gtceu.assembler(`kubejs:${id}/from/block`)
        .itemInputs('#forge:springs/iron')
        .itemInputs(`2x ${input1}`)
        .itemOutputs(`2x ${output}`)
        .duration(100)
        .EUt(7)
        .circuit(27)
    }

    // CRAFT //
    pressurePlatesAntiBlock.forEach(pressure => {
      const outId = (pressure.out.id ?? Item.of(pressure.out).id)
      const outMod = outId.split(':')[0]
      const outItem = outId.split(':')[1]
      antiPlatesCrafts(pressure.out, pressure.block, `${outMod}/${outItem}`)
    })
  })

  // pressure_plate_bright_black
  event.remove({ id: `antiblocksrechiseled:bright_black_pressure_plate` })
  event.shaped(`2x antiblocksrechiseled:pressure_plate_bright_black`, [
    'ADA',
    'BCB',
    'AEA',
  ], {
    A: '#forge:screws/iron',
    B: 'antiblocksrechiseled:slab_black',
    C: '#forge:springs/iron',
    D: '#forge:tools/hammers',
    E: '#forge:tools/screwdrivers',
  })
    .id(`kubejs:crafting/antiblocksrechiseled/pressure_plate_bright_black/from/slab`)

  event.recipes.gtceu.assembler(`kubejs:antiblocksrechiseled/pressure_plate_bright_black/from/slab`)
    .itemInputs('#forge:springs/iron')
    .itemInputs(`2x antiblocksrechiseled:bright_black`)
    .itemOutputs(`2x antiblocksrechiseled:pressure_plate_bright_black`)
    .duration(100)
    .EUt(7)
    .circuit(27)

  // anti wool pressure plates
  const antiWoolColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red']
  antiWoolColors.forEach(color => {
    const pressurePlatesAntiWool = [
      { out: `antiblocksrechiseled:pressure_plate_wool_${color}`, in1: `antiblocksrechiseled:slab_${color}_wool` },
    ]

    const antiWoolPlateCrafts = (output, input1, id) => {
      event.shaped(`2x ${output}`, [
        'ADA',
        'BCB',
        'AEA',
      ], {
        A: '#forge:bolts/wood',
        B: input1,
        C: '#forge:springs/iron',
        D: '#forge:tools/mallets',
        E: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/from/slab`)

      event.recipes.gtceu.assembler(`kubejs:${id}/from/block`)
        .itemInputs(`2x ${input1}`)
        .itemInputs('#forge:springs/iron')
        .itemOutputs(output)
        .duration(100)
        .EUt(7)
        .circuit(27)
    }

    // CRAFT //
    pressurePlatesAntiWool.forEach(pressure => {
      const outId = (pressure.out.id ?? Item.of(pressure.out).id)
      const outMod = outId.split(':')[0]
      const outItem = outId.split(':')[1]
      event.remove({ id: `${outMod}:wool_${color}_pressure_plate` })
      antiWoolPlateCrafts(pressure.out, pressure.in1, `${outMod}/${outItem}`)
    })
  })

  // framed_stone_pressure_plate
  event.remove({ id: `framedblocks:framed_stone_pressure_plate` })
  event.remove({ id: `framedblocks:framing_saw/framed_stone_pressure_plate` })
  event.shaped(`2x framedblocks:framed_stone_pressure_plate`, [
    'ADA',
    'BCF',
    'AEA',
  ], {
    A: '#forge:screws/iron',
    B: 'framedblocks:framed_slab',
    C: '#forge:springs/iron',
    D: '#forge:tools/hammers',
    E: '#forge:tools/screwdrivers',
    F: 'minecraft:stone_slab',
  })
    .id(`kubejs:crafting/framedblocks/framed_stone_pressure_plate/from/slab`)

  event.recipes.gtceu.assembler(`kubejs:framedblocks/framed_stone_pressure_plate/from/slab`)
    .itemInputs('#forge:springs/iron')
    .itemInputs(`1x framedblocks:framed_slab`)
    .itemInputs(`1x minecraft:stone_slab`)
    .itemOutputs(`2x framedblocks:framed_stone_pressure_plate`)
    .duration(100)
    .EUt(7)
    .circuit(27)

  // framed_iron_pressure_plate
  event.remove({ id: `framedblocks:framed_iron_pressure_plate` })
  event.remove({ id: `framedblocks:framing_saw/framed_iron_pressure_plate` })
  event.shaped(`1x framedblocks:framed_iron_pressure_plate`, [
    'ADA',
    'BCF',
    'AEA',
  ], {
    A: '#forge:screws/steel',
    B: 'framedblocks:framed_slab',
    C: '#forge:springs/steel',
    D: '#forge:tools/hammers',
    E: '#forge:tools/screwdrivers',
    F: '#forge:plates/iron',
  })
    .id(`kubejs:crafting/framedblocks/framed_iron_pressure_plate/from/slab`)

  event.recipes.gtceu.assembler(`kubejs:framedblocks/framed_iron_pressure_plate/from/slab`)
    .itemInputs('#forge:springs/steel')
    .itemInputs(`1x framedblocks:framed_slab`)
    .itemInputs(`1x #forge:plates/iron`)
    .itemOutputs(`1x framedblocks:framed_iron_pressure_plate`)
    .duration(200)
    .EUt(16)
    .circuit(27)

  // framed_gold_pressure_plate
  event.remove({ id: `framedblocks:framed_gold_pressure_plate` })
  event.remove({ id: `framedblocks:framing_saw/framed_gold_pressure_plate` })
  event.shaped(`1x framedblocks:framed_gold_pressure_plate`, [
    'ADA',
    'BCF',
    'AEA',
  ], {
    A: '#forge:screws/steel',
    B: 'framedblocks:framed_slab',
    C: '#forge:springs/steel',
    D: '#forge:tools/hammers',
    E: '#forge:tools/screwdrivers',
    F: '#forge:plates/gold',
  })
    .id(`kubejs:crafting/framedblocks/framed_gold_pressure_plate/from/slab`)

  event.recipes.gtceu.assembler(`kubejs:framedblocks/framed_gold_pressure_plate/from/slab`)
    .itemInputs('#forge:springs/steel')
    .itemInputs(`1x framedblocks:framed_slab`)
    .itemInputs(`1x #forge:plates/gold`)
    .itemOutputs(`1x framedblocks:framed_gold_pressure_plate`)
    .duration(200)
    .EUt(16)
    .circuit(27)

  // framed_obsidian_pressure_plate
  event.remove({ id: `framedblocks:framed_obsidian_pressure_plate` })
  event.remove({ id: `framedblocks:framing_saw/framed_obsidian_pressure_plate` })
  event.shaped(`1x framedblocks:framed_obsidian_pressure_plate`, [
    'ADA',
    'BCF',
    'AEA',
  ], {
    A: '#forge:screws/steel',
    B: 'framedblocks:framed_slab',
    C: '#forge:springs/steel',
    D: '#forge:tools/hammers',
    E: '#forge:tools/screwdrivers',
    F: '#forge:plates/obsidian',
  })
    .id(`kubejs:crafting/framedblocks/framed_obsidian_pressure_plate/from/slab`)

  event.recipes.gtceu.assembler(`kubejs:framedblocks/framed_obsidian_pressure_plate/from/slab`)
    .itemInputs('#forge:springs/steel')
    .itemInputs(`1x framedblocks:framed_slab`)
    .itemInputs(`1x #forge:plates/obsidian`)
    .itemOutputs(`1x framedblocks:framed_obsidian_pressure_plate`)
    .duration(200)
    .EUt(16)
    .circuit(27)

  // ***************** //  // ***************** //  // ***************** //
  // ***** SLABS ***** //  // ***** SLABS ***** //  // ***** SLABS ***** //
  // ***************** //  // ***************** //  // ***************** //

  const miscSlabTypes = [
    { block: 'dustrial_decor:mini_padded_block', slab: 'dustrial_decor:mini_padded_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:bolted_industrial_iron_block', slab: 'dustrial_decor:bolted_industrial_iron_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:cast_iron_bricks', slab: 'dustrial_decor:cast_iron_brick_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:sheet_metal_plating', slab: 'dustrial_decor:sheet_metal_plating_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:sheet_metal_treading', slab: 'dustrial_decor:sheet_metal_treading_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:rusty_sheet_metal_plating', slab: 'dustrial_decor:rusty_sheet_metal_plating_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:rusty_sheet_metal_treading', slab: 'dustrial_decor:rusty_sheet_metal_treading_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:cinder_bricks', slab: 'dustrial_decor:cinder_brick_slab', decor: true, QtyO: 1 },
    { block: 'dustrial_decor:smooth_cardboard', slab: 'dustrial_decor:smooth_cardboard_slab', decor: true, QtyO: 2 },
    { block: 'bedrockbreakers:pure_bedrock', slab: 'bedrockbreakers:pure_bedrock_slab', bedrock: true, QtyO: 1 },
    { block: 'framedblocks:framed_cube', slab: 'framedblocks:framed_slab', framed: true, QtyO: 2 },
    { block: 'minecraft:calcite', slab: 'architectschisel:calcite_slab_1', architects: true, QtyO: 1 },
    { block: 'minecraft:tuff', slab: 'architectschisel:tuff_slab_8', architects: true, QtyO: 1 },
    { block: 'minecraft:dripstone_block', slab: 'architectschisel:dripstone_slab_8', architects: true, QtyO: 1 },
    // { block: 'minecraft:amethyst_block', slab: 'architectschisel:amethyst_slab_8', architects: true, QtyO: 1 },
    { block: 'connectedglass:borderless_glass', slab: 'glassential:glass_slab', glassential: true, QtyO: 1 },
    { block: 'vinery:dark_cherry_planks', slab: 'vinery:dark_cherry_slab', vinery: true, QtyO: 2 },
    { block: 'vinery:loam', slab: 'vinery:loam_slab', vinery: true, QtyO: 1 },
    { block: 'minecraft:coarse_dirt', slab: 'vinery:coarse_dirt_slab', vinery: true, QtyO: 1 },
    { block: 'minecraft:dirt', slab: 'vinery:dirt_slab', vinery: true, QtyO: 1 },
    { block: 'minecraft:grass_block', slab: 'vinery:grass_slab', vinery: true, QtyO: 1 },
    { block: 'bakery:oat_block', slab: 'bakery:oat_slab', bakery: true, QtyO: 2 },
    { block: 'davebuildingmod:steel_tiles', slab: 'davebuildingmod:steel_slab', davebuildingmod: true, QtyO: 1 },
    { block: 'davebuildingmod:ballast', slab: 'davebuildingmod:ballast_slab', davebuildingmod: true, QtyO: 1 },
    { block: 'minecraft:gravel', slab: 'davebuildingmod:gravel_slab', davebuildingmod: true, QtyO: 1 },
    { block: 'davebuildingmod:rocky_dirt', slab: 'davebuildingmod:rocky_dirt_slab', davebuildingmod: true, QtyO: 1 },
    { block: 'ae2:sky_stone_block', slab: 'ae2:sky_stone_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:smooth_sky_stone_block', slab: 'ae2:smooth_sky_stone_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:sky_stone_brick', slab: 'ae2:sky_stone_brick_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:sky_stone_small_brick', slab: 'ae2:sky_stone_small_brick_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:fluix_block', slab: 'ae2:fluix_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:quartz_block', slab: 'ae2:quartz_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:cut_quartz_block', slab: 'ae2:cut_quartz_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:smooth_quartz_block', slab: 'ae2:smooth_quartz_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:quartz_bricks', slab: 'ae2:quartz_brick_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:chiseled_quartz_block', slab: 'ae2:chiseled_quartz_slab', ae2: true, QtyO: 1 },
    { block: 'ae2:quartz_pillar', slab: 'ae2:quartz_pillar_slab', ae2: true, QtyO: 1 },
    { block: 'antiblocksrechiseled:bright_black', slab: 'antiblocksrechiseled:slab_black', antiblocksBrightBlack: true, QtyO: 1 },
  ]

  // anti wool
  const antiWoolSlabsColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red']
  antiWoolSlabsColors.forEach(woolColor => {
    miscSlabTypes.push({
      block: `antiblocksrechiseled:wool_${woolColor}`,
      slab: `antiblocksrechiseled:slab_${woolColor}_wool`,
      QtyO: 1,
      antiblocksWool: true,
      woolColor: woolColor
    })
  })

  // bright anti
  const brightAntiSlabsColors = ['white', 'orange', 'magenta', 'yellow', 'cyan', 'blue', 'green', 'red']
  brightAntiSlabsColors.forEach(brightColor => {
    miscSlabTypes.push({
      block: `antiblocksrechiseled:bright_${brightColor}`,
      slab: `antiblocksrechiseled:slab_${brightColor}_bright`,
      QtyO: 1,
      antiblocksBright: true,
      brightColor: brightColor
    })
  })

  // wood with 7
  const architectsWoodTypes = ['acacia', 'birch', 'crimson', 'dark_oak', 'jungle', 'mangrove', 'oak', 'spruce', 'warped',]
  const architectsVariants7 = [1, 2, 3, 4, 5, 6, 7]
  architectsWoodTypes.forEach(type => {
    architectsVariants7.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_planks_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 2,
        architects: true
      })
    })
  })

  // stone with 7
  const architectsStoneTypes7 = ['cobblestone', 'granite', 'andesite', 'diorite',]
  architectsStoneTypes7.forEach(type => {
    architectsVariants7.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone with 5
  const architectsStoneTypes5 = ['deepslate', 'sandstone',]
  const architectsVariants5 = [1, 2, 3, 4, 5]
  architectsStoneTypes5.forEach(type => {
    architectsVariants5.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone with 6
  const architectsStoneTypes6 = ['prismarine',]
  const architectsVariants6 = [1, 2, 3, 4, 5, 6]
  architectsStoneTypes6.forEach(type => {
    architectsVariants6.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone plural with 7
  const architectsStoneTypesPlural7 = ['stone_brick', 'brick',]
  const architectsVariantsPlural7 = [1, 2, 3, 4, 5, 6, 7]
  architectsStoneTypesPlural7.forEach(type => {
    architectsVariantsPlural7.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}s_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone with 8 -8th
  const architectsStoneTypes8 = ['dripstone', 'tuff',]
  const architectsVariants8 = [1, 2, 3, 4, 5, 6, 7]
  architectsStoneTypes8.forEach(type => {
    architectsVariants8.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone with 8 -8th + block
  const architectsStoneTypes8Block = ['amethyst',]
  const architectsVariants8Block = [1, 2, 3, 4, 5, 6, 7]
  architectsStoneTypes8Block.forEach(type => {
    architectsVariants8Block.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_block_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // stone with 8 -1st
  const architectsStoneTypes8no1 = ['calcite',]
  const architectsVariants8no1 = [2, 3, 4, 5, 6, 7, 8]

  architectsStoneTypes8no1.forEach(type => {
    architectsVariants8no1.forEach(variation => {
      miscSlabTypes.push({
        block: `architectschisel:${type}_${variation}`,
        slab: `architectschisel:${type}_slab_${variation}`,
        QtyO: 1,
        architects: true
      })
    })
  })

  // colors - dave steel
  Color.DYE.forEach(color => {
    miscSlabTypes.push({
      block: `davebuildingmod:${color}_steel_plating`,
      slab: `davebuildingmod:${color}_steel_slab`,
      QtyO: 1,
      davebuildingmod: true
    })
  })

  const miscSlabCrafts = (output, QtyO, input1, id) => {
    event.shaped(`${QtyO}x ${output}`, [
      '  ',
      'AB',
    ], {
      A: '#forge:tools/saws',
      B: input1,
    })
      .id(`kubejs:crafting/${id}/saw`)

    event.recipes.gtceu.cutter(`kubejs:${id}`)
      .itemInputs(input1)
      .itemOutputs(`2x ${output}`)
      .duration(40)
      .EUt(8)
  }

  // CRAFT //
  miscSlabTypes.forEach(slabCraft => {
    const outId = (slabCraft.slab.id ?? Item.of(slabCraft.slab).id)
    const inId = (slabCraft.block.id ?? Item.of(slabCraft.block).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (slabCraft.davebuildingmod) event.remove({ id: `${outMod}:rec_${outItem}` })
    if (slabCraft.ae2) event.remove({ id: `${outMod}:shaped/slabs/${inItem}` })
    if (slabCraft.antiblocksBright) event.remove({ id: `${outMod}:bright_${slabCraft.brightColor}_slabs` })
    if (slabCraft.antiblocksBrightBlack) event.remove({ id: `${outMod}:bright_black_slabs` })
    if (slabCraft.antiblocksWool) event.remove({ id: `${outMod}:wool_${slabCraft.woolColor}_slabs` })
    miscSlabCrafts(slabCraft.slab, slabCraft.QtyO, slabCraft.block, `${outMod}/${outItem}`)
  })

  // event.remove({ id: 'framedblocks:framing_saw/framed_slab' })

  // certus_quartz_plate
  event.remove({ id: 'gtceu:cutter/cut_certus_quartz_block_to_plate' })
  event.remove({ id: 'gtceu:cutter/cut_certus_quartz_block_to_plate_water' })
  event.remove({ id: 'gtceu:cutter/cut_certus_quartz_block_to_plate_distilled_water' })
  event.recipes.gtceu.cutter(`kubejs:gtceu/certus_quartz_plate`)
    .itemInputs(`gtceu:certus_quartz_block`)
    .itemOutputs(`4x gtceu:certus_quartz_plate`)
    .duration(160)
    .EUt(30)

  // ******************* //  // ******************* //  // ******************* //
  // ***** BUTTONS ***** //  // ***** BUTTONS ***** //  // ***** BUTTONS ***** //
  // ******************* //  // ******************* //  // ******************* //

  const miscButtonTypes = [
    { plate: 'framedblocks:framed_pressure_plate', button: 'framedblocks:framed_button', framed: true, wood: true },
    { plate: 'framedblocks:framed_stone_pressure_plate', button: 'framedblocks:framed_stone_button', framed: true, stone: true },
    { plate: 'vinery:dark_cherry_pressure_plate', button: 'vinery:dark_cherry_button', vinery: true, wood: true },
  ]

  // anti wool
  const antiWoolButtonsColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red']
  antiWoolButtonsColors.forEach(woolColor => {
    miscButtonTypes.push({
      plate: `antiblocksrechiseled:pressure_plate_wool_${woolColor}`,
      button: `antiblocksrechiseled:button_wool_${woolColor}`,
      antiblocksWool: true,
      stone: true,
      woolColor: woolColor
    })
  })

  // bright anti
  const brightAntiButtonColors = ['white', 'orange', 'magenta', 'yellow', 'cyan', 'blue', 'green', 'red', "black"]
  brightAntiButtonColors.forEach(brightColor => {
    miscButtonTypes.push({
      plate: `antiblocksrechiseled:pressure_plate_bright_${brightColor}`,
      button: `antiblocksrechiseled:button_bright_${brightColor}`,
      antiblocksBright: true,
      stone: true,
      brightColor: brightColor
    })
  })

  const miscButtonCrafts = (entry, id) => {
    const output = entry.button
    const input1 = entry.plate

    if (entry.wood) {
      event.shaped(`6x ${output}`, [
        '  ',
        'AB',
      ], {
        A: '#forge:tools/saws',
        B: input1,
      })
        .id(`kubejs:crafting/${id}/saw`)
    }

    const recipe = event.recipes.gtceu.cutter(`kubejs:${id}`)
      .itemInputs(input1)
    if (entry.wood) {
      recipe.itemOutputs(`12x ${output}`)
      recipe.duration(250)
      recipe.EUt(7)
    }
    if (entry.stone) {
      recipe.itemOutputs(`3x ${output}`)
      recipe.duration(60)
      recipe.EUt(8)
    }
  }

  // CRAFT //
  miscButtonTypes.forEach(buttonCraft => {
    const outId = (buttonCraft.button.id ?? Item.of(buttonCraft.button).id)
    const inId = (buttonCraft.plate.id ?? Item.of(buttonCraft.plate).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (buttonCraft.antiblocksBright) event.remove({ id: `${outMod}:bright_${buttonCraft.brightColor}_button` })
    if (buttonCraft.antiblocksWool) event.remove({ id: `${outMod}:wool_${buttonCraft.woolColor}_button` })
    miscButtonCrafts(buttonCraft, `${outMod}/${outItem}`)
  })

  event.remove({ id: 'gtceu:shaped/stone_button' })
  event.remove({ id: 'framedblocks:framing_saw/framed_button' })
  event.remove({ id: 'framedblocks:framing_saw/framed_stone_button' })
  event.remove({ id: 'framedblocks:framing_saw/framed_large_button' })
  event.remove({ id: 'framedblocks:framing_saw/framed_large_stone_button' })

  // ****************** //  // ****************** //  // ****************** //
  // ***** FENCES ***** //  // ***** FENCES ***** //  // ***** FENCES ***** //
  // ****************** //  // ****************** //  // ****************** //

  const miscFenceTypes = [
    { output: 'framedblocks:framed_fence', wood: 'framedblocks:framed_cube', framed: true, fence: true },
    { output: 'framedblocks:framed_fence_gate', wood: 'framedblocks:framed_cube', framed: true, gate: true },
    { output: 'vinery:dark_cherry_fence', wood: 'vinery:dark_cherry_planks', vinery: true, fence: true },
    { output: 'vinery:dark_cherry_fence_gate', wood: 'vinery:dark_cherry_planks', vinery: true, gate: true },
  ]

  const miscFenceCrafts = (entry, id) => {
    const output = entry.output
    const input1 = entry.wood

    if (entry.fence) {
      event.shaped(`1x ${output}`, [
        'ABA',
        'ABA',
        'ABA',
      ], {
        A: input1,
        B: '#forge:rods/wooden',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`1x ${input1}`)
        .itemOutputs(`1x ${output}`)
        .duration(100)
        .EUt(4)
        .circuit(26)
    }

    if (entry.gate) {
      event.shaped(`1x ${output}`, [
        'C C',
        'BAB',
        'BAB',
      ], {
        A: input1,
        B: '#forge:rods/wooden',
        C: 'minecraft:flint',
      })
        .id(`kubejs:crafting/${id}/flint`)

      event.shaped(`2x ${output}`, [
        'CDC',
        'BAB',
        'BAB',
      ], {
        A: input1,
        B: '#forge:rods/wooden',
        C: '#forge:screws/iron',
        D: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/screw`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`2x ${input1}`)
        .itemInputs(`2x #forge:rods/wooden`)
        .itemOutputs(`1x ${output}`)
        .duration(100)
        .EUt(4)
        .circuit(25)
    }
  }

  // CRAFT //
  miscFenceTypes.forEach(fenceCraft => {
    const outId = (fenceCraft.output.id ?? Item.of(fenceCraft.output).id)
    const inId = (fenceCraft.wood.id ?? Item.of(fenceCraft.wood).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (fenceCraft.framed) event.remove({ id: `${outMod}:framing_saw/${outItem}` })
    miscFenceCrafts(fenceCraft, `${outMod}/${outItem}`)
  })

  // nether_brick_fence
  event.remove({ id: 'minecraft:nether_brick_fence' })
  event.shaped('1x minecraft:nether_brick_fence', [
    'ABA',
    'ABA',
    'ABA',
  ], {
    A: 'minecraft:nether_bricks',
    B: 'minecraft:nether_brick',
  })
    .id('kubejs:crafting/minecraft/nether_brick_fence')

  // chain_link_fence
  event.remove({ id: 'dustrial_decor:chain_link_fence' })
  event.shaped('2x dustrial_decor:chain_link_fence', [
    'ABA',
    'ABA',
    'ABA',
  ], {
    A: 'minecraft:chain',
    B: '#forge:rods/iron',
  })
    .id('kubejs:crafting/dustrial_decor/chain_link_fence')

  event.recipes.gtceu.assembler(`kubejs:dustrial_decor/chain_link_fence`)
    .itemInputs(`2x minecraft:chain`)
    .itemInputs(`2x #forge:rods/iron`)
    .itemOutputs(`2x dustrial_decor:chain_link_fence`)
    .duration(100)
    .EUt(4)
    .circuit(25)

  // barbed_chain_link_fence
  event.remove({ id: 'dustrial_decor:barbed_chain_link_fence' })
  event.shaped('2x dustrial_decor:barbed_chain_link_fence', [
    'ABA',
    'CBC',
    'ABA',
  ], {
    A: 'minecraft:chain',
    B: '#forge:rods/iron',
    C: '#forge:nuggets/iron',
  })
    .id('kubejs:crafting/dustrial_decor/barbed_chain_link_fence')

  event.recipes.gtceu.assembler(`kubejs:dustrial_decor/barbed_chain_link_fence`)
    .itemInputs(`2x minecraft:chain`)
    .itemInputs(`2x #forge:nuggets/iron`)
    .itemInputs(`2x #forge:rods/iron`)
    .itemOutputs(`2x dustrial_decor:barbed_chain_link_fence`)
    .duration(100)
    .EUt(4)
    .circuit(25)

  event.remove({ id: 'framedblocks:framed_fence_from_post' })

  // ********************* //  // ********************* //  // ********************* //
  // ***** TRAPDOORS ***** //  // ***** TRAPDOORS ***** //  // ***** TRAPDOORS ***** //
  // ********************* //  // ********************* //  // ********************* //

  const miscTrapdoorTypes = [
    { output: 'dustrial_decor:padded_trapdoor', input: '#dustrial_decor:padded_blocks', decor: true, stone: true },
    { output: 'dustrial_decor:chain_trapdoor', input: 'dustrial_decor:chain_link_fence', decor: true, stone: true },
    { output: 'dustrial_decor:industrial_iron_trapdoor', input: 'dustrial_decor:industrial_iron_billet', decor: true, stone: true },
    { output: 'dustrial_decor:sheet_metal_trapdoor', input: 'dustrial_decor:sheet_metal', decor: true, stone: true },
    { output: 'dustrial_decor:rusty_sheet_metal_trapdoor', input: 'dustrial_decor:rusty_sheet_metal', decor: true, stone: true },
    { output: 'dustrial_decor:cardboard_trapdoor', input: 'dustrial_decor:cardboard', decor: true, wood: true },
    { output: 'dustrial_decor:rusty_iron_trapdoor', input: 'dustrial_decor:rusty_iron_ingot', decor: true, stone: true },
    { output: 'dustrial_decor:iron_bar_trapdoor', input: 'minecraft:iron_bars', decor: true, stone: true },
    { output: 'framedblocks:framed_trapdoor', input: 'framedblocks:framed_cube', framed: true, wood: true },
    { output: 'laboratoryblocks:laboratory_trapdoor', input: 'laboratoryblocks:laboratory_block', laboratory: true, stone: true },
    { output: 'glassential:glass_trapdoor', input: 'minecraft:glass', glassential: true, glass: true },
    { output: 'glassential:dark_ethereal_trapdoor', input: 'glassential:glass_dark_ethereal', glassential: true, glass: true },
    { output: 'glassential:dark_ethereal_reverse_trapdoor', input: 'glassential:glass_dark_ethereal_reverse', glassential: true, glass: true },
    { output: 'glassential:ethereal_trapdoor', input: 'glassential:glass_ethereal', glassential: true, glass: true },
    { output: 'glassential:ethereal_reverse_trapdoor', input: 'glassential:glass_ethereal_reverse', glassential: true, glass: true },
    { output: 'glassential:redstone_trapdoor', input: 'glassential:glass_redstone', glassential: true, glass: true },
    { output: 'glassential:ghostly_trapdoor', input: 'glassential:glass_ghostly', glassential: true, glass: true },
    { output: 'glassential:light_trapdoor', input: 'glassential:glass_light', glassential: true, glass: true },
    { output: 'glassential:tinted_glass_trapdoor', input: 'minecraft:tinted_glass', glassential: true, glass: true },
    { output: 'vinery:dark_cherry_trapdoor', input: 'vinery:dark_cherry_planks', vinery: true, wood: true },
    { output: 'davebuildingmod:steel_trapdoor', input: 'davebuildingmod:steel_seemless', davebuildingmod: true, stone: true },
  ]

  // colors - glassential
  Color.DYE.forEach(color => {
    miscTrapdoorTypes.push({
      input: `minecraft:${color}_stained_glass`,
      output: `glassential:${color}_glass_trapdoor`,
      glassential: true,
      glass: true
    })
  })

  // colors - davebuildingmod
  Color.DYE.forEach(color => {
    miscTrapdoorTypes.push({
      input: `davebuildingmod:${color}_steel_plating`,
      output: `davebuildingmod:${color}_steel_trapdoor`,
      davebuildingmod: true,
      stone: true
    })
  })

  const miscTrapdoorCrafts = (entry, id) => {
    const output = entry.output
    const input1 = entry.input

    if (entry.wood) {
      event.shaped(`1x ${output}`, [
        'CAB',
        'ADA',
        'BAC',
      ], {
        A: input1,
        B: '#forge:rods/wooden',
        C: '#forge:bolts/iron',
        D: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/iron`)

      event.shaped(`2x ${output}`, [
        'CAB',
        'ADA',
        'BAC',
      ], {
        A: input1,
        B: '#forge:rods/wooden',
        C: '#forge:bolts/steel',
        D: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/steel`)

      event.recipes.gtceu.assembler(`kubejs:${id}/iron`)
        .circuit(24)
        .itemInputs(`2x ${input1}`)
        .inputFluids(Fluid.of('gtceu:iron', 16))
        .itemOutputs(`1x ${output}`)
        .duration(200)
        .EUt(4)

      event.recipes.gtceu.assembler(`kubejs:${id}/steel`)
        .circuit(24)
        .itemInputs(`2x ${input1}`)
        .inputFluids(Fluid.of('gtceu:steel', 16))
        .itemOutputs(`2x ${output}`)
        .duration(200)
        .EUt(4)
    }

    if (entry.stone) {
      event.shaped(`1x ${output}`, [
        'CAC',
        'ABA',
        'DAE',
      ], {
        A: input1,
        B: '#minecraft:wooden_trapdoors',
        C: '#forge:screws/iron',
        D: '#forge:tools/saws',
        E: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`4x ${input1}`)
        .itemOutputs(`1x ${output}`)
        .duration(100)
        .EUt(16)
        .circuit(24)
    }

    if (entry.glass) {
      event.shaped(`1x ${output}`, [
        'CAC',
        'ABA',
        'DAE',
      ], {
        A: input1,
        B: '#forge:plates/glass',
        C: '#forge:foils/rubber',
        D: '#forge:tools/mallets',
        E: '#forge:tools/files',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`4x ${input1}`)
        .itemOutputs(`1x ${output}`)
        .duration(100)
        .EUt(16)
        .circuit(24)
    }
  }

  // CRAFT //
  miscTrapdoorTypes.forEach(trapdoorCraft => {
    const outId = (trapdoorCraft.output.id ?? Item.of(trapdoorCraft.output).id)
    const inId = (trapdoorCraft.input.id ?? Item.of(trapdoorCraft.input).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (trapdoorCraft.framed) event.remove({ id: `${outMod}:framing_saw/${outItem}` })
    if (trapdoorCraft.glassential) event.remove({ id: `${outMod}:${outItem}_alt` })
    if (trapdoorCraft.glassential) event.remove({ id: `${outMod}:${outItem}_recipe` })
    if (trapdoorCraft.davebuildingmod) event.remove({ id: `${outMod}:rec_${outItem}` })
    miscTrapdoorCrafts(trapdoorCraft, `${outMod}/${outItem}`)
  })

  // mesh_laboratory_trapdoor
  event.remove({ id: `laboratoryblocks:mesh_laboratory_trapdoor` })
  event.shaped(`1x laboratoryblocks:mesh_laboratory_trapdoor`, [
    'CAC',
    'ABA',
    'DAE',
  ], {
    A: `laboratoryblocks:laboratory_block`,
    B: 'minecraft:iron_bars',
    C: '#forge:screws/iron',
    D: '#forge:tools/saws',
    E: '#forge:tools/screwdrivers',
  })
    .id(`kubejs:crafting/laboratoryblocks/mesh_laboratory_trapdoor`)

  event.recipes.gtceu.assembler(`kubejs:laboratoryblocks/mesh_laboratory_trapdoor`)
    .itemInputs(`4x laboratoryblocks:laboratory_block`)
    .itemInputs(`1x minecraft:iron_bars`)
    .itemOutputs(`1x laboratoryblocks:mesh_laboratory_trapdoor`)
    .duration(100)
    .EUt(16)
    .circuit(24)

  // glass_laboratory_trapdoor
  event.remove({ id: `laboratoryblocks:glass_laboratory_trapdoor` })
  event.shaped(`1x laboratoryblocks:glass_laboratory_trapdoor`, [
    'CAC',
    'ABA',
    'DAE',
  ], {
    A: `laboratoryblocks:laboratory_block`,
    B: '#forge:plates/glass',
    C: '#forge:screws/iron',
    D: '#forge:tools/saws',
    E: '#forge:tools/screwdrivers',
  })
    .id(`kubejs:crafting/laboratoryblocks/glass_laboratory_trapdoor`)

  event.recipes.gtceu.assembler(`kubejs:laboratoryblocks/glass_laboratory_trapdoor`)
    .itemInputs(`4x laboratoryblocks:laboratory_block`)
    .itemInputs(`1x #forge:plates/glass`)
    .itemOutputs(`1x laboratoryblocks:glass_laboratory_trapdoor`)
    .duration(100)
    .EUt(16)
    .circuit(24)

  // framed_iron_trapdoor
  event.remove({ id: `framedblocks:framed_iron_trapdoor` })
  event.remove({ id: `framedblocks:framing_saw/framed_iron_trapdoor` })
  event.shaped(`1x framedblocks:framed_iron_trapdoor`, [
    'CAC',
    'ABA',
    'DAE',
  ], {
    A: `framedblocks:framed_cube`,
    B: '#forge:plates/iron',
    C: '#forge:screws/iron',
    D: '#forge:tools/saws',
    E: '#forge:tools/screwdrivers',
  })
    .id(`kubejs:crafting/framedblocks/framed_iron_trapdoor`)

  event.recipes.gtceu.assembler(`kubejs:framedblocks/framed_iron_trapdoor`)
    .itemInputs(`4x framedblocks:framed_cube`)
    .itemInputs(`1x #forge:plates/iron`)
    .itemOutputs(`1x framedblocks:framed_iron_trapdoor`)
    .duration(100)
    .EUt(16)
    .circuit(24)

  // ***************** //  // ***************** //  // ***************** //
  // ***** DOORS ***** //  // ***** DOORS ***** //  // ***** DOORS ***** //
  // ***************** //  // ***************** //  // ***************** //

  const miscDoorTypes = [
    { output: 'dustrial_decor:padded_door', input: '#dustrial_decor:padded_blocks', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:chain_door', input: 'dustrial_decor:chain_link_fence', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:industrial_iron_door', input: 'dustrial_decor:industrial_iron_billet', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:sheet_metal_door', input: 'dustrial_decor:sheet_metal', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:rusty_sheet_metal_door', input: 'dustrial_decor:rusty_sheet_metal', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:cardboard_door', input: 'dustrial_decor:cardboard', extra: 'dustrial_decor:cardboard_trapdoor', decor: true, wood: true },
    { output: 'dustrial_decor:rusty_iron_door', input: 'dustrial_decor:rusty_iron_ingot', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'dustrial_decor:iron_bar_door', input: 'minecraft:iron_bars', extra: '#forge:plates/iron', decor: true, stone: true },
    { output: 'framedblocks:framed_door', input: 'framedblocks:framed_cube', extra: 'framedblocks:framed_trapdoor', framed: true, wood: true },
    { output: 'framedblocks:framed_iron_door', input: 'framedblocks:framed_cube', extra: '#forge:plates/iron', framed: true, stone: true },
    { output: 'laboratoryblocks:laboratory_door', input: 'laboratoryblocks:laboratory_block', extra: '#forge:plates/iron', laboratory: true, stone: true },
    { output: 'laboratoryblocks:mesh_laboratory_door', input: 'laboratoryblocks:laboratory_block', extra: 'minecraft:iron_bars', laboratory: true, stone: true },
    { output: 'laboratoryblocks:glass_laboratory_door', input: 'laboratoryblocks:laboratory_block', extra: '#forge:plates/glass', laboratory: true, stone: true },
    { output: 'glassential:glass_door', input: 'minecraft:glass', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:dark_ethereal_door', input: 'glassential:glass_dark_ethereal', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:dark_ethereal_reverse_door', input: 'glassential:glass_dark_ethereal_reverse', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:ethereal_door', input: 'glassential:glass_ethereal', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:ethereal_reverse_door', input: 'glassential:glass_ethereal_reverse', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:light_door', input: 'glassential:glass_light', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:redstone_door', input: 'glassential:glass_redstone', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:ghostly_door', input: 'glassential:glass_ghostly', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'glassential:tinted_glass_door', input: 'minecraft:tinted_glass', extra: 'gtceu:sticky_resin', glassential: true, glass: true },
    { output: 'vinery:dark_cherry_door', input: 'vinery:dark_cherry_planks', extra: 'vinery:dark_cherry_trapdoor', vinery: true, wood: true },
    { output: 'davebuildingmod:steel_door', input: 'davebuildingmod:steel_seemless', extra: '#forge:plates/glass', davebuildingmod: true, stone: true },
  ]

  // colors - glassential
  Color.DYE.forEach(color => {
    miscDoorTypes.push({
      input: `minecraft:${color}_stained_glass`,
      output: `glassential:${color}_glass_door`,
      extra: `gtceu:sticky_resin`,
      glassential: true,
      glass: true
    })
  })

  // // colors - davebuildingmod
  // Color.DYE.forEach(color => {
  //   miscDoorTypes.push({
  //     input: `davebuildingmod:${color}_steel_plating`,
  //     output: `davebuildingmod:${color}_steel_trapdoor`,
  //     davebuildingmod: true,
  //     stone: true
  //   })
  // })

  const miscDoorCrafts = (entry, id) => {
    const output = entry.output
    const input1 = entry.input
    const input2 = entry.extra

    if (entry.wood) {
      event.shaped(`1x ${output}`, [
        'ABF',
        'ACD',
        'AAE',
      ], {
        A: input1,
        B: input2,
        C: '#forge:rings/iron',
        D: '#forge:screws/iron',
        E: '#forge:tools/saws',
        F: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`1x ${input2}`)
        .itemInputs(`4x ${input1}`)
        .inputFluids(Fluid.of('gtceu:iron', 16))
        .itemOutputs(`1x ${output}`)
        .duration(400)
        .EUt(4)
        .circuit(23)
    }

    if (entry.stone) {
      event.shaped(`1x ${output}`, [
        'ABF',
        'ACD',
        'AAE',
      ], {
        A: input1,
        B: input2,
        C: '#forge:rings/steel',
        D: '#forge:screws/steel',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/hammers',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`4x ${input1}`)
        .itemInputs(`1x ${input2}`)
        .inputFluids(Fluid.of('gtceu:steel', 16))
        .itemOutputs(`1x ${output}`)
        .duration(400)
        .EUt(7)
        .circuit(23)
    }

    if (entry.glass) {
      event.shaped(`1x ${output}`, [
        'ABF',
        'ACD',
        'AAE',
      ], {
        A: input1,
        B: input2,
        C: '#forge:rings/rubber',
        D: '#forge:foils/rubber',
        E: '#forge:tools/files',
        F: '#forge:tools/mallets',
      })
        .id(`kubejs:crafting/${id}`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`4x ${input1}`)
        .inputFluids(Fluid.of('gtceu:rubber', 48))
        .itemOutputs(`1x ${output}`)
        .duration(400)
        .EUt(7)
        .circuit(23)
    }
  }

  // CRAFT //
  miscDoorTypes.forEach(doorCraft => {
    const outId = (doorCraft.output.id ?? Item.of(doorCraft.output).id)
    const inId = (doorCraft.input.id ?? Item.of(doorCraft.input).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (doorCraft.framed) event.remove({ id: `${outMod}:framing_saw/${outItem}` })
    if (doorCraft.glassential) event.remove({ id: `${outMod}:${outItem}_alt` })
    if (doorCraft.glassential) event.remove({ id: `${outMod}:${outItem}_recipe` })
    if (doorCraft.davebuildingmod) event.remove({ id: `${outMod}:rec_${outItem}` })
    miscDoorCrafts(doorCraft, `${outMod}/${outItem}`)
  })

  // ***************** //  // ***************** //  // ***************** //
  // ***** SIGNS ***** //  // ***** SIGNS ***** //  // ***** SIGNS ***** //
  // ***************** //  // ***************** //  // ***************** //

  const miscSignTypes = [
    { output: 'nomowanderer:no_soliciting_sign', input: '#minecraft:planks', extra: 'gtceu:wood_plate', nomowanderer: true, standard: true },
    { output: 'framedblocks:framed_sign', input: 'framedblocks:framed_cube', extra: 'framedblocks:framed_slab', framed: true, standard: true },
    { output: 'framedblocks:framed_hanging_sign', input: 'framedblocks:framed_slab', extra: 'framedblocks:framed_sign', framed: true, hanging: true },
    { output: 'farmersdelight:canvas_sign', input: '#minecraft:planks', extra: 'farmersdelight:canvas', farmers: true, standard: true },
    { output: 'farmersdelight:hanging_canvas_sign', input: 'farmersdelight:canvas', extra: 'farmersdelight:canvas_sign', farmers: true, hanging: true },
    { output: 'vinery:dark_cherry_sign', input: 'vinery:dark_cherry_planks', extra: 'vinery:dark_cherry_slab', vinery: true, standard: true },
    { output: 'vinery:dark_cherry_hanging_sign', input: 'vinery:dark_cherry_slab', extra: 'vinery:dark_cherry_sign', vinery: true, hanging: true },
  ]

  const miscSignCrafts = (entry, id) => {
    const output = entry.output
    const input1 = entry.input
    const input2 = entry.extra

    if (entry.standard) {
      event.shaped(`1x ${output}`, [
        'BBB',
        'CAC',
        'EDF',
      ], {
        A: input1,
        B: input2,
        C: '#forge:screws/iron',
        D: '#forge:rods/wooden',
        E: '#forge:tools/saws',
        F: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/iron`)

      event.shaped(`2x ${output}`, [
        'BBB',
        'CAC',
        'EDF',
      ], {
        A: input1,
        B: input2,
        C: '#forge:screws/steel',
        D: '#forge:rods/wooden',
        E: '#forge:tools/saws',
        F: '#forge:tools/screwdrivers',
      })
        .id(`kubejs:crafting/${id}/steel`)

      event.recipes.gtceu.assembler(`kubejs:${id}/iron`)
        .circuit(22)
        .itemInputs(`1x ${input2}`)
        .itemInputs(`1x #forge:rods/wooden`)
        .inputFluids(Fluid.of('gtceu:iron', 16))
        .itemOutputs(`3x ${output}`)
        .duration(200)
        .EUt(4)

      event.recipes.gtceu.assembler(`kubejs:${id}/steel`)
        .circuit(22)
        .itemInputs(`1x ${input2}`)
        .itemInputs(`1x #forge:rods/wooden`)
        .inputFluids(Fluid.of('gtceu:steel', 16))
        .itemOutputs(`5x ${output}`)
        .duration(200)
        .EUt(4)
    }

    if (entry.hanging) {
      event.shaped(`1x ${output}`, [
        'AAA',
        'B B',
        'CDC',
      ], {
        A: input1,
        B: 'minecraft:chain',
        C: '#forge:rings/iron',
        D: input2,
      })
        .id(`kubejs:crafting/${id}/iron`)

      event.shaped(`2x ${output}`, [
        'AAA',
        'B B',
        'CDC',
      ], {
        A: input1,
        B: 'minecraft:chain',
        C: '#forge:rings/steel',
        D: input2,
      })
        .id(`kubejs:crafting/${id}/steel`)

      event.recipes.gtceu.assembler(`kubejs:${id}`)
        .itemInputs(`3x ${input1}`)
        .itemInputs(`1x ${input2}`)
        .itemInputs(`2x minecraft:chain`)
        .itemOutputs(`1x ${output}`)
        .duration(200)
        .EUt(4)
        .circuit(22)
    }

  }

  // CRAFT //
  miscSignTypes.forEach(signCraft => {
    const outId = (signCraft.output.id ?? Item.of(signCraft.output).id)
    const inId = (signCraft.input.id ?? Item.of(signCraft.input).id)
    const outMod = outId.split(':')[0]
    const outItem = outId.split(':')[1]
    const inItem = inId.split(':')[1]
    event.remove({ id: `${outMod}:${outItem}` })
    if (signCraft.framed) event.remove({ id: `${outMod}:framing_saw/${outItem}` })
    miscSignCrafts(signCraft, `${outMod}/${outItem}`)
  })

  // street_sign
  event.remove({ id: `bakery:street_sign` })
  event.shaped(`1x bakery:street_sign`, [
    'BAC',
    'BAC',
    'EDF',
  ], {
    A: '#minecraft:planks',
    B: '#forge:plates/paper',
    C: '#forge:screws/iron',
    D: '#forge:tools/screwdrivers',
    E: '#forge:rods/wood',
    F: '#forge:rods/long/wood',
  })
    .id(`kubejs:crafting/bakery/street_sign`)

  // ***************** //  // ***************** //  // ***************** //
  // ***** BOATS ***** //  // ***** BOATS ***** //  // ***** BOATS ***** //
  // ***************** //  // ***************** //  // ***************** //

  // dark_cherry_boat
  event.remove({ id: `vinery:dark_cherry_boat` })
  event.shaped(`1x vinery:dark_cherry_boat`, [
    'ADA',
    'ACA',
    'BBB',
  ], {
    A: 'vinery:dark_cherry_planks',
    B: 'vinery:dark_cherry_slab',
    C: '#gtceu:tools/crafting_knives',
    D: '#minecraft:shovels',
  })
    .id(`kubejs:crafting/vinery/dark_cherry_boat`)

  event.recipes.gtceu.assembler('kubejs:vinery/dark_cherry_boat')
    .itemInputs('5x vinery:dark_cherry_planks')
    .itemOutputs('1x vinery:dark_cherry_boat')
    .duration(100)
    .EUt(4)
    .circuit(21)

  // dark_cherry_chest_boat
  event.remove({ id: `vinery:dark_cherry_chest_boat` })
  event.shaped(`1x vinery:dark_cherry_chest_boat`, [
    ' A ',
    'BCB',
    ' D ',
  ], {
    A: 'vinery:dark_cherry_boat',
    B: '#forge:bolts/wood',
    C: '#forge:chests/wooden',
    D: '#gtceu:tools/crafting_wrenches',
  })
    .id(`kubejs:crafting/vinery/dark_cherry_chest_boat`)

  event.recipes.gtceu.assembler('kubejs:vinery/dark_cherry_chest_boat')
    .itemInputs('1x vinery:dark_cherry_boat')
    .itemInputs('1x #forge:chests/wooden')
    .itemOutputs('1x vinery:dark_cherry_chest_boat')
    .duration(100)
    .EUt(4)
    .circuit(20)


  // fin //

})