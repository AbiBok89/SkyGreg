// priority: 0


let countMaterials = 0
let countTools = 0

Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

const Enchantments = Java.loadClass('net.minecraft.world.item.enchantment.Enchantments');

GTCEuStartupEvents.registry('gtceu:material', event => {

    // quartz_alloy
    event.create('quartz_alloy')
        .ingot()
        .components('2x nether_quartz', '1x iron')
        .color(0xe4e4e4).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
    countMaterials += 1

    // forged_netherite
    event.create('forged_netherite')
        .ingot()
        .components('1x gold', '4x steel')
        .color(0x443a3b).secondaryColor(0x5a575a).iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.HV], 1600)
        .toolStats(
            ToolProperty.Builder.of(10.0, 4.0, 2032, 4,
                [
                    GTToolType.SWORD,
                    GTToolType.PICKAXE,
                    GTToolType.SHOVEL,
                    GTToolType.AXE,
                    GTToolType.HOE,
                    GTToolType.MINING_HAMMER,
                    GTToolType.SPADE,
                    GTToolType.SAW,
                    GTToolType.HARD_HAMMER,
                    GTToolType.WRENCH,
                    GTToolType.FILE,
                    GTToolType.CROWBAR,
                    GTToolType.SCREWDRIVER,
                    GTToolType.MORTAR,
                    GTToolType.WIRE_CUTTER,
                    GTToolType.SCYTHE,
                    GTToolType.KNIFE,
                    GTToolType.BUTCHERY_KNIFE,
                    GTToolType.DRILL_LV,
                    GTToolType.DRILL_MV,
                    GTToolType.DRILL_HV,
                    GTToolType.DRILL_EV,
                    GTToolType.DRILL_IV,
                    GTToolType.CHAINSAW_LV,
                    GTToolType.WRENCH_LV,
                    GTToolType.WIRE_CUTTER_LV,
                    GTToolType.BUZZSAW,
                    GTToolType.SCREWDRIVER_LV,
                ]
            )
                .unbreakable()
                .build()
        )
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_ROTOR
        )
    countMaterials += 1
    countTools += 28

    // rough_concrete
    event.create('rough_concrete')
        .dust()
        .color(0xffffcc)
    countMaterials += 1

    // materialized_experience
    event.create('materialized_experience')
        .gem()
        .liquid()
        .color(0x009900).secondaryColor(0x004d00)
    countMaterials += 1

    // activated_lava
    event.create('activated_lava')
        .liquid(1300)
        .color(0xff2500).secondaryColor(0xff6600)
    countMaterials += 1

    // crystalized_water
    event.create('crystalized_water')
        .liquid()
        .color(0x2389da).secondaryColor(0x5abcd8)
    countMaterials += 1

    // hyperconcentrated_helium
    event.create('hyperconcentrated_helium')
        .liquid(20586)
        .color(0xffffe6)
    countMaterials += 1

    // materia_ignota (unknown material)
    event.create('materia_ignota')
        .ingot()
        .liquid(49450)
        .components('1x neutronium', '2x europium')
        .color(0x14f3ef).iconSet(GTMaterialIconSet.RADIOACTIVE)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
    countMaterials += 1

    // titanobarium_electrotine
    event.create('titanobarium_electrotine')
        .ingot()
        .liquid(3700)
        .components('2x electrotine', '3x titanium', '1x barium')
        .blastTemp(3700, 'mid', GTValues.VA[GTValues.EV])
        .color(0x00e6e6).secondaryColor(0xccccff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
    countMaterials += 1

    // red_titanium
    event.create('red_titanium')
        .ingot()
        .liquid(3700)
        .components('1x rose_gold', '1x brass', '4x black_steel', '2x titanium')
        .blastTemp(3700, 'mid', GTValues.VA[GTValues.EV])
        .color(0x732626).secondaryColor(0xbf4040).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
    countMaterials += 1

    // titanosteel_alloy
    event.create('titanosteel_alloy')
        .ingot()
        .liquid(3700)
        .components('2x steel', '4x red_steel', '1x titanium')
        .blastTemp(3700, 'mid', GTValues.VA[GTValues.EV])
        .color(0x5c4c48).secondaryColor(0xe7a6e6a).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
    countMaterials += 1

    // silky_quartz
    const SILK_TOUCH = Enchantments.SILK_TOUCH;
    event.create('silky_quartz')
        .ingot()
        .components('1x nether_quartz', '1x bronze')
        .color(0xffe6cc).secondaryColor(0xffce99).iconSet(GTMaterialIconSet.METALLIC)
        .toolStats(
            ToolProperty.Builder.of(2.0, 1.0, 576, 2,
                [
                    GTToolType.PICKAXE,
                    GTToolType.SHOVEL,
                    GTToolType.AXE,
                ]
            )
                .enchantment(SILK_TOUCH, 1)
                .build()
        )
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
        );
    countMaterials += 1
    countTools += 3




    // **************************** //
    // **** REGISTRY REPORTING **** //
    // **************************** //

    let countTotals = countMaterials + countTools
    console.info(`[=====================================================]`)
    console.info(`[====TOTAL REGISTRIES FROM CUSTOM_MATERIALS SCRIPT====]`)
    console.info(`[MATERIALS] ${countMaterials} registered.`)
    console.info(`[TOOLS] ${countTools} registered.`)
    console.info(`[TOTAL REGISTRIES] ${countTotals} registered.`)
    console.info(`[=====================================================]`)


    // fin //

})