// priority: 0


ServerEvents.recipes(event => {

  const rawOres = [
    '#forge:raw_materials/copper',
    '#forge:raw_materials/gold',
    '#forge:raw_materials/iron',
    '#forge:raw_materials/pyrochlore',
    '#forge:raw_materials/aluminium',
    '#forge:raw_materials/scheelite',
    '#forge:raw_materials/grossular',
    '#forge:raw_materials/green_sapphire',
    '#forge:raw_materials/glauconite_sand',
    '#forge:raw_materials/chalcocite',
    '#forge:raw_materials/wulfenite',
    '#forge:raw_materials/cassiterite_sand',
    '#forge:raw_materials/tetrahedrite',
    '#forge:raw_materials/uraninite',
    '#forge:raw_materials/pentlandite',
    '#forge:raw_materials/stibnite',
    '#forge:raw_materials/spodumene',
    '#forge:raw_materials/bastnasite',
    '#forge:raw_materials/tungstate',
    '#forge:raw_materials/almandine',
    '#forge:raw_materials/lead',
    '#forge:raw_materials/pitchblende',
    '#forge:raw_materials/lapis',
    '#forge:raw_materials/powellite',
    '#forge:raw_materials/talc',
    '#forge:raw_materials/naquadah',
    '#forge:raw_materials/bentonite',
    '#forge:raw_materials/palladium',
    '#forge:raw_materials/electrotine',
    '#forge:raw_materials/neodymium',
    '#forge:raw_materials/redstone',
    '#forge:raw_materials/molybdenite',
    '#forge:raw_materials/galena',
    '#forge:raw_materials/olivine',
    '#forge:raw_materials/nickel',
    '#forge:raw_materials/red_garnet',
    '#forge:raw_materials/cooperite',
    '#forge:raw_materials/alunite',
    '#forge:raw_materials/asbestos',
    '#forge:raw_materials/sphalerite',
    '#forge:raw_materials/bornite',
    '#forge:raw_materials/ruby',
    '#forge:raw_materials/pyrope',
    '#forge:raw_materials/diatomite',
    '#forge:raw_materials/tricalcium_phosphate',
    '#forge:raw_materials/sapphire',
    '#forge:raw_materials/silver',
    '#forge:raw_materials/sulfur',
    '#forge:raw_materials/cobaltite',
    '#forge:raw_materials/lepidolite',
    '#forge:raw_materials/soapstone',
    '#forge:raw_materials/goethite',
    '#forge:raw_materials/rock_salt',
    '#forge:raw_materials/cassiterite',
    '#forge:raw_materials/kyanite',
    '#forge:raw_materials/sodalite',
    '#forge:raw_materials/beryllium',
    '#forge:raw_materials/realgar',
    '#forge:raw_materials/nether_quartz',
    '#forge:raw_materials/cobalt',
    '#forge:raw_materials/hematite',
    '#forge:raw_materials/spessartine',
    '#forge:raw_materials/tin',
    '#forge:raw_materials/yellow_garnet',
    '#forge:raw_materials/plutonium',
    '#forge:raw_materials/basaltic_mineral_sand',
    '#forge:raw_materials/tantalite',
    '#forge:raw_materials/oilsands',
    '#forge:raw_materials/yellow_limonite',
    '#forge:raw_materials/barite',
    '#forge:raw_materials/mica',
    '#forge:raw_materials/pyrite',
    '#forge:raw_materials/magnesite',
    '#forge:raw_materials/diamond',
    '#forge:raw_materials/garnet_sand',
    '#forge:raw_materials/opal',
    '#forge:raw_materials/fullers_earth',
    '#forge:raw_materials/zeolite',
    '#forge:raw_materials/blue_topaz',
    '#forge:raw_materials/monazite',
    '#forge:raw_materials/malachite',
    '#forge:raw_materials/emerald',
    '#forge:raw_materials/molybdenum',
    '#forge:raw_materials/coal',
    '#forge:raw_materials/chromite',
    '#forge:raw_materials/salt',
    '#forge:raw_materials/saltpeter',
    '#forge:raw_materials/granitic_mineral_sand',
    '#forge:raw_materials/quartzite',
    '#forge:raw_materials/trona',
    '#forge:raw_materials/apatite',
    '#forge:raw_materials/vanadium_magnetite',
    '#forge:raw_materials/certus_quartz',
    '#forge:raw_materials/calcite',
    '#forge:raw_materials/thorium',
    '#forge:raw_materials/pollucite',
    '#forge:raw_materials/gypsum',
    '#forge:raw_materials/bauxite',
    '#forge:raw_materials/platinum',
    '#forge:raw_materials/pyrolusite',
    '#forge:raw_materials/magnetite',
    '#forge:raw_materials/graphite',
    '#forge:raw_materials/topaz',
    '#forge:raw_materials/lithium',
    '#forge:raw_materials/cinnabar',
    '#forge:raw_materials/lazurite',
    '#forge:raw_materials/garnierite',
    '#forge:raw_materials/ilmenite',
    '#forge:raw_materials/chalcopyrite',
    '#forge:raw_materials/amethyst',
  ]

  // ---------------------------------------------------------------------------
  // 14 stone “bases” (dust -> output template)
  // We store output as a function(material) so it can be computed cleanly per ore.
  // ---------------------------------------------------------------------------
  const dusts = [
    { dust: 'gtceu:basalt_dust',           ore: (m) => `gtceu:basalt_${m}_ore` },
    { dust: 'gtceu:granite_red_dust',      ore: (m) => `gtceu:red_granite_${m}_ore` },
    { dust: 'gtceu:endstone_dust',         ore: (m) => `gtceu:endstone_${m}_ore` },
    { dust: 'gtceu:andesite_dust',         ore: (m) => `gtceu:andesite_${m}_ore` },
    { dust: 'gtceu:stone_dust',            ore: (m) => `gtceu:${m}_ore` },
    { dust: 'gtceu:granite_dust',          ore: (m) => `gtceu:granite_${m}_ore` },
    { dust: 'gtceu:diorite_dust',          ore: (m) => `gtceu:diorite_${m}_ore` },
    { dust: 'gtceu:marble_dust',           ore: (m) => `gtceu:marble_${m}_ore` },
    { dust: 'gtceu:tuff_dust',             ore: (m) => `gtceu:tuff_${m}_ore` },
    { dust: 'gtceu:flint_dust',            ore: (m) => `gtceu:gravel_${m}_ore` },
    { dust: 'gtceu:deepslate_dust',        ore: (m) => `gtceu:deepslate_${m}_ore` },
    { dust: 'gtceu:silicon_dioxide_dust',  ore: (m) => `gtceu:sand_${m}_ore` },
    { dust: 'gtceu:blackstone_dust',       ore: (m) => `gtceu:blackstone_${m}_ore` },
    { dust: 'gtceu:netherrack_dust',       ore: (m) => `gtceu:netherrack_${m}_ore` },
  ]

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  /**
   * Extracts the material name from a tag like "#forge:raw_materials/copper" -> "copper"
   */
  function materialFromRawTag(rawTag) {
    // rawTag is like "#forge:raw_materials/copper"
    const parts = rawTag.split('/')
    return parts[parts.length - 1]
  }

  /**
   * Builds the recipe id suffix from an item id like "gtceu:andesite_copper_ore" -> "andesite_copper_ore"
   * If it doesn't contain ":", we just use the whole string.
   */
  function idFromOutput(outputId) {
    const parts = outputId.split(':')
    return parts.length > 1 ? parts[1] : outputId
  }

  // ---------------------------------------------------------------------------
  // Recipe generation
  // ---------------------------------------------------------------------------

  rawOres.forEach(rawOre => {
    const material = materialFromRawTag(rawOre)

    dusts.forEach(entry => {
      const dust = entry.dust
      const output = entry.ore(material)
      const id = idFromOutput(output)

      event.shaped(`1x ${output}`, [
        'AAA',
        'ABA',
        'AAA',
      ], {
        A: dust,
        B: rawOre,
      })
      .id(`kubejs:crafting/${id}`)
    })
  })

  // fin //

})
