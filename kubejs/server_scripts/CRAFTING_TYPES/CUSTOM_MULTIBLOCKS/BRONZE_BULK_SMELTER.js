// priority: 0


ServerEvents.recipes(event => {

    const BASE_DURATION = 350;

    const FUEL_TIERS = [
        {
            fuelType: 'coal',
            timeMult: 1.0,
            fuels: [
                '#forge:fuels/coals',
            ]
        },
        {
            fuelType: 'coke',
            timeMult: 0.75,
            fuels: [
                '#forge:fuels/cokes',
            ]
        }
    ];

    const baseInputQty = 8
    const baseOreSmeltQty = baseInputQty * 2
    const baseRawSmeltQty = baseInputQty
    const baseSmeltQty = baseInputQty

    const oreSmeltQty1 = baseOreSmeltQty * 1
    const oreSmeltQty2 = baseOreSmeltQty * 2
    const oreSmeltQty3 = baseOreSmeltQty * 3
    const oreSmeltQty4 = baseOreSmeltQty * 4
    const oreSmeltQty5 = baseOreSmeltQty * 5
    const oreSmeltQty6 = baseOreSmeltQty * 6

    const rawSmeltQty1 = baseRawSmeltQty * 1
    const rawSmeltQty2 = baseRawSmeltQty * 2
    const rawSmeltQty3 = baseRawSmeltQty * 3
    const rawSmeltQty4 = baseRawSmeltQty * 4
    const rawSmeltQty5 = baseRawSmeltQty * 5
    const rawSmeltQty6 = baseRawSmeltQty * 6

    const SMELTS = [
        { input: '#forge:ores/cobaltite', inputQty: baseInputQty, output: 'gtceu:cobalt_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/bastnasite', inputQty: baseInputQty, output: 'gtceu:bastnasite_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/kyanite', inputQty: baseInputQty, output: 'gtceu:kyanite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/spodumene', inputQty: baseInputQty, output: 'gtceu:spodumene_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/iron', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/pyrochlore', inputQty: baseInputQty, output: 'gtceu:pyrochlore_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/pyrope', inputQty: baseInputQty, output: 'gtceu:pyrope_gem', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/bentonite', inputQty: baseInputQty, output: 'gtceu:bentonite_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/electrotine', inputQty: baseInputQty, output: 'gtceu:electrotine_dust', outputQty: oreSmeltQty5 },
        { input: '#forge:ores/malachite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/barite', inputQty: baseInputQty, output: 'gtceu:barite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/bornite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/tin', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/vanadium_magnetite', inputQty: baseInputQty, output: 'gtceu:vanadium_magnetite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/quartzite', inputQty: baseInputQty, output: 'gtceu:quartzite_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/salt', inputQty: baseInputQty, output: 'gtceu:salt_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/pentlandite', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/grossular', inputQty: baseInputQty, output: 'gtceu:grossular_gem', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/chalcopyrite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/galena', inputQty: baseInputQty, output: 'gtceu:lead_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/pyrite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/cooperite', inputQty: baseInputQty, output: 'gtceu:cooperite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/wulfenite', inputQty: baseInputQty, output: 'gtceu:wulfenite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/rock_salt', inputQty: baseInputQty, output: 'gtceu:rock_salt_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/opal', inputQty: baseInputQty, output: 'gtceu:opal_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/diatomite', inputQty: baseInputQty, output: 'gtceu:diatomite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/molybdenum', inputQty: baseInputQty, output: 'gtceu:molybdenum_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/ilmenite', inputQty: baseInputQty, output: 'gtceu:ilmenite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/green_sapphire', inputQty: baseInputQty, output: 'gtceu:green_sapphire_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/almandine', inputQty: baseInputQty, output: 'gtceu:almandine_gem', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/graphite', inputQty: baseInputQty, output: 'gtceu:graphite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/emerald', inputQty: baseInputQty, output: 'minecraft:emerald', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/red_garnet', inputQty: baseInputQty, output: 'gtceu:red_garnet_gem', outputQty: oreSmeltQty4 },
        { input: '#forge:ores/amethyst', inputQty: baseInputQty, output: 'minecraft:amethyst_shard', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/calcite', inputQty: baseInputQty, output: 'gtceu:calcite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/granitic_mineral_sand', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/lazurite', inputQty: baseInputQty, output: 'gtceu:lazurite_gem', outputQty: oreSmeltQty6 },
        { input: '#forge:ores/pyrolusite', inputQty: baseInputQty, output: 'gtceu:manganese_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/stibnite', inputQty: baseInputQty, output: 'gtceu:antimony_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/thorium', inputQty: baseInputQty, output: 'gtceu:thorium_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/garnierite', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/mica', inputQty: baseInputQty, output: 'gtceu:mica_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/silver', inputQty: baseInputQty, output: 'gtceu:silver_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/alunite', inputQty: baseInputQty, output: 'gtceu:alunite_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/fullers_earth', inputQty: baseInputQty, output: 'gtceu:fullers_earth_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/saltpeter', inputQty: baseInputQty, output: 'gtceu:saltpeter_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/pollucite', inputQty: baseInputQty, output: 'gtceu:pollucite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/redstone', inputQty: baseInputQty, output: 'minecraft:redstone', outputQty: oreSmeltQty5 },
        { input: '#forge:ores/olivine', inputQty: baseInputQty, output: 'gtceu:olivine_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/cassiterite', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/ruby', inputQty: baseInputQty, output: 'gtceu:ruby_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/cassiterite_sand', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/certus_quartz', inputQty: baseInputQty, output: 'gtceu:certus_quartz_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/magnetite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/lapis', inputQty: baseInputQty, output: 'minecraft:lapis_lazuli', outputQty: oreSmeltQty6 },
        { input: '#forge:ores/tantalite', inputQty: baseInputQty, output: 'gtceu:tantalite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/coal', inputQty: baseInputQty, output: 'minecraft:coal', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/soapstone', inputQty: baseInputQty, output: 'gtceu:soapstone_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/goethite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/asbestos', inputQty: baseInputQty, output: 'gtceu:asbestos_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/sodalite', inputQty: baseInputQty, output: 'gtceu:sodalite_gem', outputQty: oreSmeltQty6 },
        { input: '#forge:ores/bauxite', inputQty: baseInputQty, output: 'gtceu:bauxite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/nether_quartz', inputQty: baseInputQty, output: 'minecraft:quartz', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/hematite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/lead', inputQty: baseInputQty, output: 'gtceu:lead_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/blue_topaz', inputQty: baseInputQty, output: 'gtceu:blue_topaz_gem', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/trona', inputQty: baseInputQty, output: 'gtceu:trona_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/nickel', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/apatite', inputQty: baseInputQty, output: 'gtceu:apatite_gem', outputQty: oreSmeltQty4 },
        { input: '#forge:ores/oilsands', inputQty: baseInputQty, output: 'gtceu:oilsands_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/uraninite', inputQty: baseInputQty, output: 'gtceu:uraninite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/chromite', inputQty: baseInputQty, output: 'gtceu:chromite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/powellite', inputQty: baseInputQty, output: 'gtceu:powellite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/garnet_sand', inputQty: baseInputQty, output: 'gtceu:garnet_sand_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/scheelite', inputQty: baseInputQty, output: 'gtceu:scheelite_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/beryllium', inputQty: baseInputQty, output: 'gtceu:beryllium_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/sapphire', inputQty: baseInputQty, output: 'gtceu:sapphire_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/magnesite', inputQty: baseInputQty, output: 'gtceu:magnesium_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/cinnabar', inputQty: baseInputQty, output: 'gtceu:cinnabar_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/gypsum', inputQty: baseInputQty, output: 'gtceu:gypsum_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/pitchblende', inputQty: baseInputQty, output: 'gtceu:pitchblende_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/basaltic_mineral_sand', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/tetrahedrite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/sulfur', inputQty: baseInputQty, output: 'gtceu:sulfur_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/zeolite', inputQty: baseInputQty, output: 'gtceu:zeolite_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/sphalerite', inputQty: baseInputQty, output: 'gtceu:zinc_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/yellow_garnet', inputQty: baseInputQty, output: 'gtceu:yellow_garnet_gem', outputQty: oreSmeltQty4 },
        { input: '#forge:ores/diamond', inputQty: baseInputQty, output: 'minecraft:diamond', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/spessartine', inputQty: baseInputQty, output: 'gtceu:spessartine_gem', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/gold', inputQty: baseInputQty, output: 'minecraft:gold_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/molybdenite', inputQty: baseInputQty, output: 'gtceu:molybdenum_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/copper', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/talc', inputQty: baseInputQty, output: 'gtceu:talc_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/tricalcium_phosphate', inputQty: baseInputQty, output: 'gtceu:tricalcium_phosphate_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/lepidolite', inputQty: baseInputQty, output: 'gtceu:lepidolite_dust', outputQty: oreSmeltQty2 },
        { input: '#forge:ores/glauconite_sand', inputQty: baseInputQty, output: 'gtceu:glauconite_sand_dust', outputQty: oreSmeltQty3 },
        { input: '#forge:ores/yellow_limonite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/realgar', inputQty: baseInputQty, output: 'gtceu:realgar_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/chalcocite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/cobalt', inputQty: baseInputQty, output: 'gtceu:cobalt_ingot', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/lithium', inputQty: baseInputQty, output: 'gtceu:lithium_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/topaz', inputQty: baseInputQty, output: 'gtceu:topaz_gem', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/tungstate', inputQty: baseInputQty, output: 'gtceu:tungstate_dust', outputQty: oreSmeltQty1 },
        { input: '#forge:ores/monazite', inputQty: baseInputQty, output: 'gtceu:monazite_gem', outputQty: oreSmeltQty4 },
        { input: '#forge:ores/plutonium', inputQty: baseInputQty, output: 'gtceu:plutonium_ingot', outputQty: oreSmeltQty1 },

        { input: '#forge:raw_materials/cobaltite', inputQty: baseInputQty, output: 'gtceu:cobalt_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/bastnasite', inputQty: baseInputQty, output: 'gtceu:bastnasite_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/kyanite', inputQty: baseInputQty, output: 'gtceu:kyanite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/spodumene', inputQty: baseInputQty, output: 'gtceu:spodumene_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/iron', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/pyrochlore', inputQty: baseInputQty, output: 'gtceu:pyrochlore_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/pyrope', inputQty: baseInputQty, output: 'gtceu:pyrope_gem', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/bentonite', inputQty: baseInputQty, output: 'gtceu:bentonite_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/electrotine', inputQty: baseInputQty, output: 'gtceu:electrotine_dust', outputQty: rawSmeltQty5 },
        { input: '#forge:raw_materials/malachite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/barite', inputQty: baseInputQty, output: 'gtceu:barite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/bornite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/tin', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/vanadium_magnetite', inputQty: baseInputQty, output: 'gtceu:vanadium_magnetite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/quartzite', inputQty: baseInputQty, output: 'gtceu:quartzite_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/salt', inputQty: baseInputQty, output: 'gtceu:salt_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/pentlandite', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/grossular', inputQty: baseInputQty, output: 'gtceu:grossular_gem', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/chalcopyrite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/galena', inputQty: baseInputQty, output: 'gtceu:lead_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/pyrite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/cooperite', inputQty: baseInputQty, output: 'gtceu:cooperite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/wulfenite', inputQty: baseInputQty, output: 'gtceu:wulfenite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/rock_salt', inputQty: baseInputQty, output: 'gtceu:rock_salt_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/opal', inputQty: baseInputQty, output: 'gtceu:opal_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/diatomite', inputQty: baseInputQty, output: 'gtceu:diatomite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/molybdenum', inputQty: baseInputQty, output: 'gtceu:molybdenum_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/ilmenite', inputQty: baseInputQty, output: 'gtceu:ilmenite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/green_sapphire', inputQty: baseInputQty, output: 'gtceu:green_sapphire_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/almandine', inputQty: baseInputQty, output: 'gtceu:almandine_gem', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/graphite', inputQty: baseInputQty, output: 'gtceu:graphite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/emerald', inputQty: baseInputQty, output: 'minecraft:emerald', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/red_garnet', inputQty: baseInputQty, output: 'gtceu:red_garnet_gem', outputQty: rawSmeltQty4 },
        { input: '#forge:raw_materials/amethyst', inputQty: baseInputQty, output: 'minecraft:amethyst_shard', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/calcite', inputQty: baseInputQty, output: 'gtceu:calcite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/granitic_mineral_sand', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/lazurite', inputQty: baseInputQty, output: 'gtceu:lazurite_gem', outputQty: rawSmeltQty6 },
        { input: '#forge:raw_materials/pyrolusite', inputQty: baseInputQty, output: 'gtceu:manganese_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/stibnite', inputQty: baseInputQty, output: 'gtceu:antimony_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/thorium', inputQty: baseInputQty, output: 'gtceu:thorium_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/garnierite', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/mica', inputQty: baseInputQty, output: 'gtceu:mica_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/silver', inputQty: baseInputQty, output: 'gtceu:silver_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/alunite', inputQty: baseInputQty, output: 'gtceu:alunite_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/fullers_earth', inputQty: baseInputQty, output: 'gtceu:fullers_earth_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/saltpeter', inputQty: baseInputQty, output: 'gtceu:saltpeter_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/pollucite', inputQty: baseInputQty, output: 'gtceu:pollucite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/redstone', inputQty: baseInputQty, output: 'minecraft:redstone', outputQty: rawSmeltQty5 },
        { input: '#forge:raw_materials/olivine', inputQty: baseInputQty, output: 'gtceu:olivine_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/cassiterite', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/ruby', inputQty: baseInputQty, output: 'gtceu:ruby_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/cassiterite_sand', inputQty: baseInputQty, output: 'gtceu:tin_ingot', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/certus_quartz', inputQty: baseInputQty, output: 'gtceu:certus_quartz_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/magnetite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/lapis', inputQty: baseInputQty, output: 'minecraft:lapis_lazuli', outputQty: rawSmeltQty6 },
        { input: '#forge:raw_materials/tantalite', inputQty: baseInputQty, output: 'gtceu:tantalite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/coal', inputQty: baseInputQty, output: 'minecraft:coal', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/soapstone', inputQty: baseInputQty, output: 'gtceu:soapstone_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/goethite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/asbestos', inputQty: baseInputQty, output: 'gtceu:asbestos_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/sodalite', inputQty: baseInputQty, output: 'gtceu:sodalite_gem', outputQty: rawSmeltQty6 },
        { input: '#forge:raw_materials/bauxite', inputQty: baseInputQty, output: 'gtceu:bauxite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/nether_quartz', inputQty: baseInputQty, output: 'minecraft:quartz', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/hematite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/lead', inputQty: baseInputQty, output: 'gtceu:lead_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/blue_topaz', inputQty: baseInputQty, output: 'gtceu:blue_topaz_gem', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/trona', inputQty: baseInputQty, output: 'gtceu:trona_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/nickel', inputQty: baseInputQty, output: 'gtceu:nickel_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/apatite', inputQty: baseInputQty, output: 'gtceu:apatite_gem', outputQty: rawSmeltQty4 },
        { input: '#forge:raw_materials/oilsands', inputQty: baseInputQty, output: 'gtceu:oilsands_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/uraninite', inputQty: baseInputQty, output: 'gtceu:uraninite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/chromite', inputQty: baseInputQty, output: 'gtceu:chromite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/powellite', inputQty: baseInputQty, output: 'gtceu:powellite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/garnet_sand', inputQty: baseInputQty, output: 'gtceu:garnet_sand_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/scheelite', inputQty: baseInputQty, output: 'gtceu:scheelite_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/beryllium', inputQty: baseInputQty, output: 'gtceu:beryllium_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/sapphire', inputQty: baseInputQty, output: 'gtceu:sapphire_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/magnesite', inputQty: baseInputQty, output: 'gtceu:magnesium_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/cinnabar', inputQty: baseInputQty, output: 'gtceu:cinnabar_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/gypsum', inputQty: baseInputQty, output: 'gtceu:gypsum_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/pitchblende', inputQty: baseInputQty, output: 'gtceu:pitchblende_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/basaltic_mineral_sand', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/tetrahedrite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/sulfur', inputQty: baseInputQty, output: 'gtceu:sulfur_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/zeolite', inputQty: baseInputQty, output: 'gtceu:zeolite_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/sphalerite', inputQty: baseInputQty, output: 'gtceu:zinc_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/yellow_garnet', inputQty: baseInputQty, output: 'gtceu:yellow_garnet_gem', outputQty: rawSmeltQty4 },
        { input: '#forge:raw_materials/diamond', inputQty: baseInputQty, output: 'minecraft:diamond', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/spessartine', inputQty: baseInputQty, output: 'gtceu:spessartine_gem', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/gold', inputQty: baseInputQty, output: 'minecraft:gold_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/molybdenite', inputQty: baseInputQty, output: 'gtceu:molybdenum_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/copper', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/talc', inputQty: baseInputQty, output: 'gtceu:talc_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/tricalcium_phosphate', inputQty: baseInputQty, output: 'gtceu:tricalcium_phosphate_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/lepidolite', inputQty: baseInputQty, output: 'gtceu:lepidolite_dust', outputQty: rawSmeltQty2 },
        { input: '#forge:raw_materials/glauconite_sand', inputQty: baseInputQty, output: 'gtceu:glauconite_sand_dust', outputQty: rawSmeltQty3 },
        { input: '#forge:raw_materials/yellow_limonite', inputQty: baseInputQty, output: 'minecraft:iron_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/realgar', inputQty: baseInputQty, output: 'gtceu:realgar_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/chalcocite', inputQty: baseInputQty, output: 'minecraft:copper_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/cobalt', inputQty: baseInputQty, output: 'gtceu:cobalt_ingot', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/lithium', inputQty: baseInputQty, output: 'gtceu:lithium_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/topaz', inputQty: baseInputQty, output: 'gtceu:topaz_gem', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/tungstate', inputQty: baseInputQty, output: 'gtceu:tungstate_dust', outputQty: rawSmeltQty1 },
        { input: '#forge:raw_materials/monazite', inputQty: baseInputQty, output: 'gtceu:monazite_gem', outputQty: rawSmeltQty4 },
        { input: '#forge:raw_materials/plutonium', inputQty: baseInputQty, output: 'gtceu:plutonium_ingot', outputQty: rawSmeltQty1 },

        { input: 'minecraft:clay_ball', inputQty: baseInputQty, output: 'minecraft:brick', outputQty: baseSmeltQty },
        { input: 'gtceu:compressed_clay', inputQty: baseInputQty, output: 'minecraft:brick', outputQty: baseSmeltQty },
        { input: 'gtceu:compressed_fireclay', inputQty: baseInputQty, output: 'gtceu:firebrick', outputQty: baseSmeltQty },
        { input: 'gtceu:compressed_coke_clay', inputQty: baseInputQty, output: 'gtceu:coke_oven_brick', outputQty: baseSmeltQty },
        { input: 'minecraft:slime_ball', inputQty: baseInputQty, output: 'gtceu:sticky_resin', outputQty: baseSmeltQty },
        { input: '#forge:dusts/bronze', inputQty: baseInputQty, output: 'gtceu:bronze_ingot', outputQty: baseSmeltQty },
        { input: '#forge:dusts/potin', inputQty: baseInputQty, output: 'gtceu:potin_ingot', outputQty: baseSmeltQty },
        { input: 'minecraft:cobblestone', inputQty: baseInputQty, output: 'minecraft:stone', outputQty: baseSmeltQty },
        { input: 'minecraft:stone', inputQty: baseInputQty, output: 'minecraft:smooth_stone', outputQty: baseSmeltQty },
        { input: 'minecraft:clay', inputQty: baseInputQty, output: 'minecraft:terracotta', outputQty: baseSmeltQty },
        { input: 'laserio:logic_chip_raw', inputQty: baseInputQty, output: 'laserio:logic_chip', outputQty: baseSmeltQty },
        { input: '#forge:dusts/certus_quartz', inputQty: baseInputQty, output: 'ae2:silicon', outputQty: baseSmeltQty },
        { input: 'ae2:sky_dust', inputQty: baseInputQty, output: 'ae2:sky_stone_block', outputQty: baseSmeltQty },
        { input: 'minecraft:iron_ingot', inputQty: baseInputQty, output: 'gtceu:wrought_iron_ingot', outputQty: baseSmeltQty },
    ];


    // ***************** //
    // **** HELPERS **** //
    // ***************** //

    function qtyStr(qty, thing) {
        return `${qty}x ${thing}`;
    }

    function outputSplit(outputItem) {
        const s = String(outputItem);
        const parts = s.split(':');
        return parts[1] || parts[0] || 'output';
    }

    function inputSplit(inputThing) {
        const s = String(inputThing);

        if (s.startsWith('#')) {
            const noHash = s.substring(1);     // "forge:ores/iron"
            const splitOnce = noHash.split(':'); // ["forge", "ores/iron"]
            return splitOnce[1] || splitOnce[0] || 'tag';
        }

        const parts = s.split(':');
        return parts[1] || parts[0] || 'input';
    }

    function slashToUnderscore(str) {
        // works everywhere: "gems/coal" -> "gems_coal"
        const s = String(str);
        return s.split('/').join('_');
    }

    function fuelSplit(fuelThing) {
        // Tag: "#forge:gems/coal" -> "tag_gems_coal"
        // Item: "minecraft:coal" -> "item_coal"
        const s = String(fuelThing);

        if (s.startsWith('#')) {
            const noHash = s.substring(1);       // "forge:gems/coal"
            const splitOnce = noHash.split(':'); // ["forge", "gems/coal"]
            const path = splitOnce[1] || splitOnce[0] || 'tag';
            return `tag_${slashToUnderscore(path)}`;
        }

        const parts = s.split(':');
        const path = parts[1] || parts[0] || 'item';
        return `item_${slashToUnderscore(path)}`;
    }

    // kubejs:<outputSplit>/from/<inputSplit...>/with/<fuelType>/<fuelSplit>
    function makeRecipeId(outItem, inThing, fuelType, fuelThing) {
        const out = outputSplit(outItem);
        const inn = inputSplit(inThing);
        const fuelT = String(fuelType);
        const fuelS = fuelSplit(fuelThing);
        return `kubejs:${out}/from/${inn}/with/${fuelT}`;
    }


    // ******************* //
    // **** MAIN LOOP **** //
    // ******************* //

    SMELTS.forEach(entry => {
        const inThing = entry.input;
        const inQty = Number(entry.inputQty ?? 1);

        const outThing = entry.output;
        const outQty = Number(entry.outputQty ?? 1);

        FUEL_TIERS.forEach(tier => {
            const duration = Math.max(1, Math.floor(BASE_DURATION * Number(tier.timeMult)));

            tier.fuels.forEach(fuelThing => {
                event.recipes.gtceu.bronze_bulk_smelter(
                    makeRecipeId(outThing, inThing, tier.fuelType, fuelThing)
                )
                    .itemInputs(qtyStr(inQty, inThing))
                    .itemInputs(qtyStr(1, fuelThing))
                    .itemOutputs(qtyStr(outQty, outThing))
                    .duration(duration);
            });
        });
    });


    // fin //

})