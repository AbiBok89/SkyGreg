// priority: 0


// ************************** //
// **** SCRIPT CONSTANTS **** //
// ************************** //
let countMultiblock = 0
let countSingleblock = 0
let countRecipe = 0
let countHatch = 0


// ************************** //
// **** JAVA CLASS LOADS **** //
// ************************** //
const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
const RelativeDirection = Java.loadClass("com.gregtechceu.gtceu.api.pattern.util.RelativeDirection")
const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine')
const $Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags")
const $RecipeLogic = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.RecipeLogic')
const $List = Java.loadClass('java.util.List')
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine");
const $ModifierFunction = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction");
const $BlockPos = Java.loadClass("net.minecraft.core.BlockPos");
const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $CleaningMaintenanceHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine");
const $CleanroomType = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType");
const $GTMachineModelProperties = Java.loadClass("com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties")
const ParallelLogic = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ParallelLogic");
const ContentModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.content.ContentModifier");
const Component = Java.loadClass("net.minecraft.network.chat.Component");
const BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties');
const RailShape = Java.loadClass('net.minecraft.world.level.block.state.properties.RailShape');
const KubeJSDynamicRender = Java.loadClass('com.p_nsk.kubejs_gtrender.KubeJSDynamicRender');
const Direction = Java.loadClass('net.minecraft.core.Direction');
const $EnergyHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine")
const $IO = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.IO")
const $TrueSteamPredicates = Java.loadClass('site.siredvin.gttruesteam.TrueSteamPredicates')


// ******************************* //
// **** GUI PROGRESS OPTTIONS **** //
// ******************************* //
/*
GuiTextures.PROGRESS_BAR_ARC_FURNACE
GuiTextures.PROGRESS_BAR_ARROW
GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE
GuiTextures.PROGRESS_BAR_ASSEMBLER
GuiTextures.PROGRESS_BAR_ASSEMBLY_LINE
GuiTextures.PROGRESS_BAR_ASSEMBLY_LINE_ARROW
GuiTextures.PROGRESS_BAR_BATH
GuiTextures.PROGRESS_BAR_BENDING
GuiTextures.PROGRESS_BAR_BOILER_HEAT
GuiTextures.PROGRESS_BAR_CANNER
GuiTextures.PROGRESS_BAR_CIRCUIT
GuiTextures.PROGRESS_BAR_CIRCUIT_ASSEMBLER
GuiTextures.PROGRESS_BAR_COKE_OVEN
GuiTextures.PROGRESS_BAR_COMPRESS
GuiTextures.PROGRESS_BAR_CRACKING
GuiTextures.PROGRESS_BAR_CRACKING_INPUT
GuiTextures.PROGRESS_BAR_CRYSTALLIZATION
GuiTextures.PROGRESS_BAR_DISTILLATION_TOWER
GuiTextures.PROGRESS_BAR_EXTRACT
GuiTextures.PROGRESS_BAR_EXTRUDER
GuiTextures.PROGRESS_BAR_FUSION
GuiTextures.PROGRESS_BAR_GAS_COLLECTOR
GuiTextures.PROGRESS_BAR_HAMMER
GuiTextures.PROGRESS_BAR_HAMMER_BASE
GuiTextures.PROGRESS_BAR_LATHE
GuiTextures.PROGRESS_BAR_LATHE_BASE
GuiTextures.PROGRESS_BAR_MACERATE
GuiTextures.PROGRESS_BAR_MAGNET
GuiTextures.PROGRESS_BAR_MASS_FAB
GuiTextures.PROGRESS_BAR_MIXER
GuiTextures.PROGRESS_BAR_PACKER
GuiTextures.PROGRESS_BAR_RECYCLER
GuiTextures.PROGRESS_BAR_REPLICATOR
GuiTextures.PROGRESS_BAR_SIFT
GuiTextures.PROGRESS_BAR_SLICE
GuiTextures.PROGRESS_BAR_UNLOCK
GuiTextures.PROGRESS_BAR_UNPACKER
GuiTextures.PROGRESS_BAR_WIREMILL
GuiTextures.PROGRESS_BAR_RESEARCH_STATION_1
GuiTextures.PROGRESS_BAR_RESEARCH_STATION_2
GuiTextures.PROGRESS_BAR_RESEARCH_STATION_BASE

GuiTextures.PROGRESS_BAR_ARROW_STEAM
GuiTextures.PROGRESS_BAR_BOILER_EMPTY
GuiTextures.PROGRESS_BAR_BOILER_FUEL
GuiTextures.PROGRESS_BAR_COMPRESS_STEAM
GuiTextures.PROGRESS_BAR_EXTRACT_STEAM
GuiTextures.PROGRESS_BAR_HAMMER_STEAM
GuiTextures.PROGRESS_BAR_HAMMER_BASE_STEAM
GuiTextures.PROGRESS_BAR_MACERATE_STEAM
GuiTextures.PROGRESS_BAR_SOLAR_STEAM

FillDirection.LEFT_TO_RIGHT
FillDirection.RIGHT_TO_LEFT
FillDirection.UP_TO_DOWN
FillDirection.DOWN_TO_UP
FillDirection.ALWAYS_FULL
*/


// *************************** // // *************************** //
// ***** STANDARD MULTIS ***** // // ***** STANDARD MULTIS ***** //
// *************************** // // *************************** //
//#region STANDARD MULTIS

// **** glass_box **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('glass_box')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('glass_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('glass_box')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CGC', 'CGC', 'CCC')
            .aisle('CCC', 'GSG', 'GMG', 'CCC')
            .aisle('CKC', 'CXC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('gtceu:hv_hermetic_casing'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('S', Predicates.blocks('gtceu:filter_casing'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/evaporation_plant'
        )
})
countMultiblock += 1


// **** desulfurizer **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('desulfurizer')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('desulfurizer', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('desulfurizer')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start(RelativeDirection.BACK, RelativeDirection.UP, RelativeDirection.LEFT)
            .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
            .aisle('CCDPDCLCLCLC', 'CCDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
            .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
            .aisle('CCCCCCLCLCLC', 'KGGGCCLCLCLC', 'CCCCCCLCLCLC', '   XXXXXXXX ', '      L L L ', '            ')
            .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
            .aisle('CCDPDCLCLCLC', 'CCDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
            .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('gtceu:tempered_glass'))
            .where('P', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:titanium_gearbox'))
            .where('D', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('L', Predicates.heatingCoils())
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/multiblock/large_chemical_reactor'
        )
})
countMultiblock += 1


// **** large_gas_collector **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_gas_collector')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gtceu:gas_collector')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCC ', ' CCC ', ' CCC ', ' CCC ', ' CCC ')
            .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
            .aisle('CCCCC', 'CPPPC', 'CPPPC', 'CPPPC', 'CCCCC')
            .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
            .aisle(' CCC ', ' CKC ', ' CCC ', ' CCC ', ' CCC ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_WATERTIGHT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/watertight_casing',
            'gtceu:block/multiblock/distillation_tower'
        )
})
countMultiblock += 1


// **** certus_quartz_charger **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('certus_quartz_charger')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('certus_quartz_charger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('certus_quartz_charger')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CCC')
            .aisle('CKC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('S', Predicates.blocks('ae2:charger'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/cracking_unit'
        )
})
countMultiblock += 1


// **** large_inscriber **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_inscriber')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_inscriber')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'CCC')
            .aisle('CKC', 'CXC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('ae2:inscriber'))
            .where('Z', Predicates.blocks('gtceu:mv_forming_press'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/network_switch'
        )
})
countMultiblock += 1


// **** meat_box **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('meat_box')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('meat_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('meat_box')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'CCC')
            .aisle('CKC', 'CXC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('mob_grinding_utils:tinted_glass'))
            .where('S', Predicates.blocks('mob_grinding_utils:spikes'))
            .where('Z', Predicates.blocks('easy_villagers:breeder'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor'
        )
})
countMultiblock += 1


// **** auto_cutting_board **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('auto_cutting_board')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('auto_cutting_board', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('auto_cutting_board')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'CCC')
            .aisle('CKC', 'CXC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('farmersdelight:cutting_board'))
            .where('Z', Predicates.blocks('factory_blocks:gears'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/assembly_line'
        )
})
countMultiblock += 1


// **** auto_cooking_pot **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('auto_cooking_pot')
        .setEUIO('in')
        .setMaxIOSize(8, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('auto_cooking_pot', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('auto_cooking_pot')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'CCC')
            .aisle('CKC', 'CXC', 'CXC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('farmersdelight:stove'))
            .where('Z', Predicates.blocks('farmersdelight:cooking_pot'))
            .where('C', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_heatproof',
            'gtceu:block/multiblock/pyrolyse_oven'
        )
})
countMultiblock += 1


// **** large_resource_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_resource_generator')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_resource_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_resource_generator')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .aisle('CCC', 'TCT', 'TCT', 'TCT', ' T ', ' T ', 'TTT')
            .aisle('CKC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.blocks("gtceu:tungsten_frame"))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_stable_titanium',
            'gtceu:block/multiblock/bedrock_ore_miner'
        )
})
countMultiblock += 1


// **** natural_fluid_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('natural_fluid_generator')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('natural_fluid_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('natural_fluid_generator')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .aisle('CCC', 'TPT', 'TPT', 'TET', ' T ', ' T ', 'TTT')
            .aisle('CKC', ' T ', ' T ', ' T ', '   ', '   ', ' T ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.blocks("gtceu:steel_frame"))
            .where('E', Predicates.blocks("tesseract:tesseract"))
            .where('P', Predicates.blocks("gtceu:steel_pipe_casing"))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/fluid_drilling_rig'
        )
})
countMultiblock += 1


// **** fusion_assembler **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fusion_assembler')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 6, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fusion_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fusion_assembler')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '  FF       FF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '               ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '     GGGGG     ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '     GBUBG     ', '     GSSSG     ', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GBUBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '     GUPUG     ', '     GSPSG     ', 'S    GSPSG    S', 'U    GSPSG    U', 'S    GSPSG    S', 'S    GSPSG    S', 'U    GSPSG    U', 'S    GUPUG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '     GBUBG     ', '     GSSSG     ', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GSSSG    S', 'S    GBUBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '     GGGGG     ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '               ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCNNNNNNNNNNNCC', '  FF       FF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCKCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks("gtceu:neutronium_frame"))
            .where('H', Predicates.blocks("gtceu:uhv_hermetic_casing"))
            .where('B', Predicates.blocks("gtceu:uhv_ultimate_battery"))
            .where('U', Predicates.blocks("gtceu:fusion_coil"))
            .where('M', Predicates.blocks("gtceu:fusion_casing_mk3"))
            .where('G', Predicates.blocks("gtceu:fusion_glass"))
            .where('N', Predicates.blocks("gtceu:nonconducting_casing"))
            .where('P', Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where('S', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_ATOMIC.get())
                .setMinGlobalLimited(350)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/multiblock/fusion_reactor'
        )
})
countMultiblock += 1


// **** elicitor_rimae_ignotus **** // (unknown rift elicitor)
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('elicitor_rimae_ignotus')
        .setEUIO('in')
        .setMaxIOSize(12, 2, 6, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('elicitor_rimae_ignotus', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('elicitor_rimae_ignotus')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("kubejs:ignota_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CC           CC', 'CC           CC', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CMMMGGGGGGGMMMC', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGUGGGGGF ', ' FFFFFFFFFFFFF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' MMMM     MMMM ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G     S     G ', ' FGGGGGGGGGGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' MMMMM   MMMMM ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' FGGGGGGGGGGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' G MMMM MMMM G ', ' G           G ', ' G           G ', ' G     S     G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' G   SSSSS   G ', ' FGGMMMMMMMGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' G  MMMMMMM  G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' G     S     G ', ' G    SSS    G ', ' G   SSSSS   G ', ' G  SUUUUUS  G ', ' FGGMGGGGGMGGF ', '               ')
            .aisle(' CCCCCHHHCCCCC ', ' G   MHHHM   G ', ' G    USU    G ', ' G    S S    G ', ' G   S   S   G ', ' G    S S    G ', ' G   S   S   G ', ' G  SS   SS  G ', ' G SSU   USS G ', ' FGGMGBBBGMGGF ', '               ')
            .aisle(' CCCCCHBHCCCCC ', ' G   MHBHM   G ', ' G    SBS    G ', ' G   S B S   G ', ' G  SS B SS  G ', ' G   S B S   G ', ' G  SS B SS  G ', ' G SSS B SSS G ', ' USSSU B USSSU ', ' FGGMGBBBGMGGF ', '       L       ')
            .aisle(' CCCCCHHHCCCCC ', ' G   MHHHM   G ', ' G    USU    G ', ' G    S S    G ', ' G   S   S   G ', ' G    S S    G ', ' G   S   S   G ', ' G  SS   SS  G ', ' G SSU   USS G ', ' FGGMGBBBGMGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' G  MMMMMMM  G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' G     S     G ', ' G    SSS    G ', ' G   SSSSS   G ', ' G  SUUUUUS  G ', ' FGGMGGGGGMGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' G MMMM MMMM G ', ' G           G ', ' G           G ', ' G     S     G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' G   SSSSS   G ', ' FGGMMMMMMMGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' MMMMM   MMMMM ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G     S     G ', ' G    SSS    G ', ' FGGGGGGGGGGGF ', '               ')
            .aisle(' CCCCCCCCCCCCC ', ' MMMM     MMMM ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G           G ', ' G     S     G ', ' FGGGGGGGGGGGF ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CMMMCCCKCCCMMMC', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGGGGGGGF ', ' FGGGGGUGGGGGF ', ' FFFFFFFFFFFFF ', '               ')
            .aisle('CC           CC', 'CC           CC', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks("gtceu:uhv_hermetic_casing"))
            .where('F', Predicates.blocks("gtceu:materia_ignota_frame"))
            .where('B', Predicates.blocks("gtceu:materia_ignota_block"))
            .where('G', Predicates.blocks("gtceu:fusion_glass"))
            .where('U', Predicates.blocks("gtceu:fusion_coil"))
            .where('M', Predicates.blocks("gtceu:fusion_casing_mk3"))
            .where('L', Predicates.blocks("minecraft:beacon"))
            .where('S', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            .where('C', Predicates.blocks('kubejs:ignota_casing').setMinGlobalLimited(175)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'kubejs:block/custom_casings/ignota_casing/ignota_casing',
            'gtceu:block/multiblock/fusion_reactor'
        )
})
countMultiblock += 1


// **** greenhouse **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CGC', 'CGC', 'CLC', 'CCC')
            .aisle('CMC', 'G G', 'G G', 'LIL', 'CCC')
            .aisle('CKC', 'CGC', 'CGC', 'CLC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('moss_block')
                .or(Predicates.blocks('dirt'))
                .or(Predicates.blocks('grass_block'))
            )
            .where('G', Predicates.blocks('ae2:quartz_glass'))
            .where('I', Predicates.blocks('glowstone'))
            .where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
        .model(GTMachineModels.createWorkableCasingMachineModel(
            GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
            GTCEu.id("block/multiblock/implosion_compressor")
        )["andThen(java.util.function.Consumer)"](b =>
            b.addDynamicRenderer(() => GTDynamicRenders.makeGrowingPlantRender($List.of(new Vector3f(0, 1, -1))))
        )
        )
})
countMultiblock += 1


// **** simulation_arena **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('simulation_arena')
        .setEUIO('in')
        .setMaxIOSize(3, 9, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('simulation_arena', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('simulation_arena')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCCCC', 'CXXXXXXXXXXXC', 'CXXXXXXXXXXXC', 'CXXXXXXXXXXXC', 'CCCCCCCCCCCCC')
            .aisle('CLLLCCCCCLLLC', 'X           X', 'X           X', 'X           X', 'CDDDDDDDDDDDC')
            .aisle('CLCLLLLLLLCLC', 'X L       L X', 'X L       L X', 'X L       L X', 'CDPDDDDDDDPDC')
            .aisle('CLLLCCCCCLLLC', 'X   LLLLL   X', 'X   LLLLL   X', 'X   LLLLL   X', 'CDDDPPPPPDDDC')
            .aisle('CLCLLLLLLLCLC', 'X L       L X', 'X L       L X', 'X L       L X', 'CDPDDDDDDDPDC')
            .aisle('CLLLCCCCCLLLC', 'X           X', 'X           X', 'X           X', 'CDDDDDDDDDDDC')
            .aisle('CCCCCCCCCCCCC', 'CXXXXCKCXXXXC', 'CXXXXCCCXXXXC', 'CXXXXXXXXXXXC', 'CCCCCCCCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('L', Predicates.heatingCoils())
            .where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/assembly_line'
        )
})
countMultiblock += 1


// **** apothic_condenser **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('apothic_condenser')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('apothic_condenser', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('apothic_condenser')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   C   ', '       ', '       ', '       ', '       ', '       ', '       ', '       ', '   C   ')
            .aisle('  CCC  ', '   C   ', '       ', '       ', '       ', '       ', '       ', '   L   ', '  CCC  ')
            .aisle(' CCCCC ', '  CCC  ', '   C   ', '   C   ', '  QQQ  ', '   C   ', '   C   ', '  LCL  ', ' CCCCC ')
            .aisle('CCCCCCC', ' CCPCC ', '  CPC  ', '  CPC  ', '  QNQ  ', '  CPC  ', '  CPC  ', ' LCPCL ', 'CCCCCCC')
            .aisle(' CCCCC ', '  CCC  ', '   C   ', '   C   ', '  QQQ  ', '   C   ', '   C   ', '  LCL  ', ' CCCCC ')
            .aisle('  CCC  ', '   K   ', '       ', '       ', '       ', '       ', '       ', '   L   ', '  CCC  ')
            .aisle('   C   ', '       ', '       ', '       ', '       ', '       ', '       ', '       ', '   C   ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:mv_hermetic_casing'))
            .where('U', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('Q', Predicates.blocks('ae2:quantum_ring'))
            .where('N', Predicates.blocks('ae2:quantum_link'))
            .where('L', Predicates.heatingCoils())
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_TURBINE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/mechanic/machine_casing_turbine_steel',
            'gtceu:block/multiblock/data_bank'
        )
})
countMultiblock += 1


// super_extruder
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('super_extruder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.EXTRUDER_RECIPES)
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("kubejs:solid_aluminium_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('VVV', 'CCC', 'CCC', 'CCC', 'CCC')
            .aisle('VVV', 'CVC', 'C C', 'CGC', 'CCC')
            .aisle('VVV', 'CKC', 'CCC', 'CCC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('V', Predicates.blocks('gtceu:black_steel_block'))
            .where('C', Predicates.blocks('kubejs:solid_aluminium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'kubejs:block/custom_casings/solid_aluminium_casing/solid_aluminium_casing',
            'gtceu:block/multiblock/gcym/large_extruder'
        )
})
countMultiblock += 1


// powered_enchanter
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('powered_enchanter')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('powered_enchanter', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('powered_enchanter')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)
        ])
        .appearanceBlock(() => new Block.getBlock("xtonesreworked:zion_block_9"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', '       ', '       ')
            .aisle('COOOOOC', '  BBB  ', '  SSS  ')
            .aisle('COOOOOC', ' B   B ', ' B   B ')
            .aisle('COOOOOC', ' B K B ', ' S   S ')
            .aisle('COOOOOC', ' B   B ', ' S   S ')
            .aisle('COOOOOC', ' B   B ', ' B   B ')
            .aisle('CCCCCCC', '       ', '       ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blockTag($Tags.block("forge:bookshelves")))
            .where('O', Predicates.blocks('minecraft:obsidian'))
            .where('B', Predicates.heatingCoils())
            .where('C', Predicates.blocks('minecraft:obsidian')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'minecraft:block/obsidian',
            'gtceu:block/multiblock/gcym/large_extruder'
        )
})
countMultiblock += 1


// **** industrial_fluid_pressurizer **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('industrial_fluid_pressurizer')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('industrial_fluid_pressurizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('industrial_fluid_pressurizer')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' F F ', ' F F ', ' CCC ', ' TTT ', ' CCC ', ' CCC ', ' CCC ', ' TTT ', ' CCC ')
            .aisle('F   F', 'F   F', 'CCCCC', 'T   T', 'C   C', 'C   C', 'C   C', 'T   T', 'CCCCC')
            .aisle('     ', '     ', 'CCCCC', 'T   T', 'C   C', 'C   C', 'C   C', 'T   T', 'CCCCC')
            .aisle('F   F', 'F   F', 'CCCCC', 'T   T', 'C   C', 'C   C', 'C   C', 'T   T', 'CCCCC')
            .aisle(' F F ', ' F F ', ' CCC ', ' TTT ', ' CCC ', ' CCC ', ' CCC ', ' TTT ', ' CCC ')
            .aisle('     ', '     ', '     ', '     ', '     ', '  P  ', '     ', '     ', '     ')
            .aisle('     ', '     ', '     ', '     ', '     ', '  P  ', '     ', '     ', '     ')
            .aisle(' SSS ', ' SSS ', ' SSS ', ' SSS ', '     ', '  P  ', '     ', '     ', '     ')
            .aisle(' SSS ', ' S S ', ' S S ', ' S S ', '  P  ', '  P  ', '     ', '     ', '     ')
            .aisle(' SSS ', ' SKS ', ' SSS ', ' SSS ', '     ', '     ', '     ', '     ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where('T', Predicates.blocks('gtceu:stainless_steel_turbine_casing'))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(2)
                    .setPreviewCount(2)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/implosion_compressor'
        )
})
countMultiblock += 1


// **** quad_electric_blast_furnace modifier **** //
function quadEbfParallelDiscount(machine, recipe) {
    // EBF overclock modifier
    const oc = GTRecipeModifiers.ebfOverclock(machine, recipe);

    // need an overclocked copy once to make a good decision about IO parallels
    const ocPreview = oc.apply(recipe);
    if (ocPreview == null) return $ModifierFunction.NULL;

    // decide how many parallels it can actually do (up to 4) based on IO only (ignore EU)
    let p = ParallelLogic.getParallelAmountWithoutEU(machine, ocPreview, 4);
    if (p < 1) {
        return $ModifierFunction.cancel(Component.translatable('sky_greg.kjs.multiblock.1'));
    }

    // discounted energy scaling for parallels
    let eutMult = 1.0;
    if (p === 2) eutMult = 1.25;
    else if (p === 3) eutMult = 1.33;
    else if (p === 4) eutMult = 1.5;

    // build the parallel modifier
    // modifyAllContents scales item/fluid IO, but NOT EU (EU is handled by eutMultiplier)
    const par = $ModifierFunction.builder()
        .modifyAllContents(ContentModifier.multiplier(p))
        .parallels(p)                 // makes Jade show parallels
        .eutMultiplier(eutMult)       // discounted EU scaling
        .build();

    // chain them so OC is applied first, then parallel scaling
    return oc.andThen(par);
}

// **** quad_electric_blast_furnace **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('quad_electric_blast_furnace', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_blast_furnace')
        .recipeModifiers([
            (machine, recipe) => quadEbfParallelDiscount(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'HHHHH', 'HIIIH', 'HHHHH', 'CCCCC')
            .aisle('CCCCC', 'H   H', 'I   I', 'H   H', 'CCCCC')
            .aisle('CCCCC', 'H P H', 'I P I', 'H P H', 'CCPCC')
            .aisle('CCCCC', 'H   H', 'I   I', 'H   H', 'CCCCC')
            .aisle('CCKCC', 'HHHHH', 'HIIIH', 'HHHHH', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.heatingCoils())
            .where('I', Predicates.blocks('gtceu:inert_machine_casing'))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('C', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get())
                .setMinGlobalLimited(28)
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(3)
                    .setPreviewCount(3)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_heatproof',
            'gtceu:block/multiblock/electric_blast_furnace'
        )
})
countMultiblock += 1


// **** woodworking_station **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('woodworking_station')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CUT)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('woodworking_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('woodworking_station')
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(() => Block.getBlock('gtceu:wood_wall'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FSSSSSF', 'F     F', 'SS   SS', '       ', '       ')
            .aisle(' CCCCC ', ' C   C ', 'NT   TN', ' SNTNS ', '   S   ')
            .aisle(' URRRC ', ' I X O ', 'NT   TN', ' SNTNS ', '   S   ')
            .aisle(' CCKCC ', ' C   C ', 'NT   TN', ' SNTNS ', '   S   ')
            .aisle('FSSSSSF', 'F     F', 'SS   SS', '       ', '       ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:treated_wood_fence'))
            .where('S', Predicates.blocks('gtceu:treated_wood_slab'))
            .where('N', Predicates.blocks('gtceu:treated_wood_stairs'))
            .where('T', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('R', Predicates.blocks('kubejs:railed_bricks'))
            .where('X', Predicates.blocks('domum_ornamentum:architectscutter'))
            .where('C', Predicates.blocks('gtceu:wood_wall')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(2)
                )
            )
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS)
                .setPreviewCount(1)
            )
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS)
                .setPreviewCount(1)
            )
            .where('U', Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                .setPreviewCount(1)
            )
            .where(' ', Predicates.any())
            .build())

        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle('FSSSSSF', 'F     F', 'SS   SS', '       ', '       ')
            .aisle(' CCKCE ', ' C   C ', 'nT   TN', ' SnTNS ', '   S   ')
            .aisle(' CRRRU ', ' O X I ', 'nT   TN', ' SnTNS ', '   S   ')
            .aisle(' CCCCE ', ' C   C ', 'nT   TN', ' SnTNS ', '   S   ')
            .aisle('FSSSSSF', 'F     F', 'SS   SS', '       ', '       ')
            .where('K', controller, Direction.NORTH)
            .where('C', Block.getBlock('gtceu:wood_wall'))
            .where('F', Block.getBlock('gtceu:treated_wood_fence'))
            .where('S', Block.getBlock('gtceu:treated_wood_slab'))
            .where('T', Block.getBlock('gtceu:treated_wood_frame'))
            .where('X', Block.getBlock('domum_ornamentum:architectscutter'))
            .where(' ', Block.getBlock('minecraft:air'))
        ["where(char,net.minecraft.world.level.block.state.BlockState)"](
            'R', Block.getBlock('kubejs:railed_bricks')
                .defaultBlockState()
                .setValue(BlockStateProperties.HORIZONTAL_FACING, Direction.EAST)
        )
        ["where(char,net.minecraft.world.level.block.state.BlockState)"](
            'n', Block.getBlock('gtceu:treated_wood_stairs')
                .defaultBlockState()
                .setValue(BlockStateProperties.HORIZONTAL_FACING, Direction.EAST)
        )
        ["where(char,net.minecraft.world.level.block.state.BlockState)"](
            'N', Block.getBlock('gtceu:treated_wood_stairs')
                .defaultBlockState()
                .setValue(BlockStateProperties.HORIZONTAL_FACING, Direction.WEST)
        )
            .where('I', GTMachines.ITEM_IMPORT_BUS[1], Direction.EAST)
            .where('O', GTMachines.ITEM_EXPORT_BUS[1], Direction.WEST)
            .where('U', GTMachines.FLUID_IMPORT_HATCH[1], Direction.EAST)
            .where('E', GTMachines.ENERGY_INPUT_HATCH[1], Direction.EAST)
            .build())
        .model(
            GTMachineModels.createWorkableCasingMachineModel(
                'gtceu:block/casings/wood_wall/side',
                'gtceu:block/machines/cutter'
            )["andThen(java.util.function.Consumer)"](b =>
                b.addDynamicRenderer(() => KubeJSDynamicRender.of('kubejs:woodworking_item_slide'))
            )
        )
})
countMultiblock += 1


// **** large_pyrolyse_oven **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_pyrolyse_oven', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:pyrolyse_oven'
        ])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            (machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)
        ])
        .appearanceBlock(() => new Block.getBlock("kubejs:pyrolysis_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCC ', ' CCC ', ' CCC ', ' CCC ', '     ')
            .aisle('CCCCC', 'C   C', 'C   C', 'C   C', 'CCCCC')
            .aisle('HHHHH', 'H   H', 'H   H', 'H   H', 'HHHHH')
            .aisle('HHHHH', 'H   H', 'H   H', 'H   H', 'HHHHH')
            .aisle('HHHHH', 'H   H', 'H   H', 'H   H', 'HHHHH')
            .aisle('CCCCC', 'C   C', 'C   C', 'C   C', 'CCCCC')
            .aisle(' CCC ', ' CKC ', ' CCC ', ' CCC ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.heatingCoils())
            .where('C', Predicates.blocks('kubejs:pyrolysis_casing')
                .setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'kubejs:block/custom_casings/pyrolysis_casing/pyrolysis_casing',
            'gtceu:block/multiblock/pyrolyse_oven'
        )
})
countMultiblock += 1


// **** mega_alloy_blast_smelter **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mega_alloy_blast_smelter', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .langValue("Mega Alloy Blast Smelter")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:alloy_blast_smelter'
        ])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)
        ])
        .appearanceBlock(() => Block.getBlock("gtceu:high_temperature_smelting_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  CCCCCCCCC  ', '  CCCCCCCCC  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
            .aisle(' CCCCCCCCCCC ', ' CCCCCCCCCCC ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CCCCCCCCCCCCC', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', ' R         R ', '  FIFIFIFIF  ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CCCCCCCCCCCCC', 'RVVVVVVVVVVVR', 'RIFIFIFIFIFIR', 'RRRRRRRRRRRRR', 'RHHHHHHHHHHHR', 'RHHHHHHHHHHHR', 'RHHHHHHHHHHHR', 'RRRRRRRRRRRRR', 'RIFIFIFIFIFIR', ' RVVVVVVVVVR ', '  RVVVVVVVR  ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CVVVVVVVVVVVC', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', ' C         C ', '  CCCCVCCCC  ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CVCCCCCCCCCVC', 'C PPPPPPPPP C', 'C PPPPPPPPP C', 'C P   P   P C', 'C PPPPPPPPP C', 'C PPPPPPPPP C', 'C P   P   P C', 'C PPPPPPPPP C', 'C PPPPPPPPP C', ' C VVVVVVV C ', '  CCCCCCCCC  ', '     CCC     ', '     CCC     ', '     CCC     ')
            .aisle('CCCCCCCCCCCCC', 'CVCCCCCCCCCVC', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', ' C    V    C ', '  CCCCVCCCC  ', '     CVC     ', '     CVC     ', '     CMC     ')
            .aisle('CCCCCCCCCCCCC', 'CVCCCCCCCCCVC', 'C PPPPPPPPP C', 'C PPPPPPPPP C', 'C P   P   P C', 'C PPPPPPPPP C', 'C PPPPPPPPP C', 'C P   P   P C', 'C PPPPPPPPP C', 'C PPPPPPPPP C', ' C VVVVVVV C ', '  CCCCCCCCC  ', '     CCC     ', '     CCC     ', '     CCC     ')
            .aisle('CCCCCCCCCCCCC', 'CVVVVVVVVVVVC', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', 'C           C', ' C         C ', '  CCCCVCCCC  ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CCCCCCCCCCCCC', 'RVVVVVVVVVVVR', 'RIFIFIFIFIFIR', 'RRRRRRRRRRRRR', 'RHHHHHHHHHHHR', 'RHHHHHHHHHHHR', 'RHHHHHHHHHHHR', 'RRRRRRRRRRRRR', 'RIFIFIFIFIFIR', ' RVVVVVVVVVR ', '  RVVVVVVVR  ', '             ', '             ', '             ')
            .aisle('CCCCCCCCCCCCC', 'CCCCCCCCCCCCC', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', 'R           R', ' R         R ', '  FIFIFIFIF  ', '             ', '             ', '             ')
            .aisle(' CCCCCCCCCCC ', ' CCCCCCCCCCC ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
            .aisle('  CCCCCCCCC  ', '  CCCCKCCCC  ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ', '             ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.heatingCoils())
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('F', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where('I', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .where('R', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('M', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .setMinGlobalLimited(380)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/multiblock/gcym/blast_alloy_smelter'
        )
})
countMultiblock += 1


// ***** celestial_harvester modifier ***** //

const CELESTIAL_SKY_CHECK_Y_OFFSET = 1;
const CELESTIAL_SKY_CENTER_FORWARD_OFFSET = -3;
const CELESTIAL_SKY_CENTER_RIGHT_OFFSET = 0;
const CELESTIAL_DEBUG_ALWAYS = false;

// facing / rotated offset helpers
// Converts local machine-space offsets into world X/Z offsets
//
// localForward:
//   + = machine front
//   - = machine back
//
// localRight:
//   + = machine right
//   - = machine left
//
// returns: { x: worldDx, z: worldDz }
function celestialRotateLocalOffset(facing, localForward, localRight) {
    // default safe fallback
    if (facing == null) {
        return {
            x: localRight,
            z: localForward
        };
    }

    // minecraft horizontal facings:
    // NORTH = z-
    // SOUTH = z+
    // WEST  = x-
    // EAST  = x+
    //
    // relative facings:
    // forward = facing direction
    // right   = 90 degrees clockwise from facing

    if (facing == Direction.NORTH) {
        return {
            x: localRight,
            z: -localForward
        };
    }

    if (facing == Direction.SOUTH) {
        return {
            x: -localRight,
            z: localForward
        };
    }

    if (facing == Direction.WEST) {
        return {
            x: -localForward,
            z: -localRight
        };
    }

    if (facing == Direction.EAST) {
        return {
            x: localForward,
            z: localRight
        };
    }

    // fallback
    return {
        x: localRight,
        z: localForward
    };
}

// gets the shifted center position for the 3x3 sky check
// this applies the configurable forward/right offset relative
// to controller facing
function celestialGetSkyCheckCenter(machine) {
    const base = machine.getPos();
    const facing = machine.getFrontFacing ? machine.getFrontFacing() : null;

    const rotated = celestialRotateLocalOffset(
        facing,
        CELESTIAL_SKY_CENTER_FORWARD_OFFSET,
        CELESTIAL_SKY_CENTER_RIGHT_OFFSET
    );

    const center = new $BlockPos(
        base.getX() + rotated.x,
        base.getY(),
        base.getZ() + rotated.z
    );

    return {
        base: base,
        center: center,
        facing: facing,
        rotatedX: rotated.x,
        rotatedZ: rotated.z
    };
}

// sky check helpers
function celestialCheckColumn(level, centerPos, dx, dz) {
    const pos = new $BlockPos(
        centerPos.getX() + dx,
        centerPos.getY() + CELESTIAL_SKY_CHECK_Y_OFFSET,
        centerPos.getZ() + dz
    );

    const state = level.getBlockState(pos);

    const isAir = state.isAir();
    const canSee = level.canSeeSky(pos);

    let blockId = 'unknown';
    try {
        blockId = String($BuiltInRegistries.BLOCK.getKey(state.getBlock()));
    } catch (e) {
        // ignore
    }

    return {
        pos: pos,
        isAir: isAir,
        canSee: canSee,
        blockId: blockId
    };
}

function celestialLogFormat(label, columnResult) {
    return label +
        '@x=' + columnResult.pos.getX() +
        ',y=' + columnResult.pos.getY() +
        ',z=' + columnResult.pos.getZ() +
        ' air=' + columnResult.isAir +
        ' sky=' + columnResult.canSee +
        ' block=' + columnResult.blockId;
}

// sky check modifier for celestial harvester
function celestialHarvesterSkyCheck(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return $ModifierFunction.IDENTITY;
    if (!(recipe instanceof $GTRecipe)) return $ModifierFunction.IDENTITY;

    const level = machine.getLevel();
    if (level == null) return $ModifierFunction.NULL;

    const skyInfo = celestialGetSkyCheckCenter(machine);
    const base = skyInfo.base;
    const center = skyInfo.center;
    const facing = skyInfo.facing;

    // explicit 3x3 checks around shifted center
    const c = celestialCheckColumn(level, center, 0, 0);
    const nw = celestialCheckColumn(level, center, -1, -1);
    const n = celestialCheckColumn(level, center, 0, -1);
    const ne = celestialCheckColumn(level, center, 1, -1);
    const w = celestialCheckColumn(level, center, -1, 0);
    const e = celestialCheckColumn(level, center, 1, 0);
    const sw = celestialCheckColumn(level, center, -1, 1);
    const s = celestialCheckColumn(level, center, 0, 1);
    const se = celestialCheckColumn(level, center, 1, 1);

    let ok = true;

    if (!c.isAir || !c.canSee) ok = false;
    if (!nw.isAir || !nw.canSee) ok = false;
    if (!n.isAir || !n.canSee) ok = false;
    if (!ne.isAir || !ne.canSee) ok = false;
    if (!w.isAir || !w.canSee) ok = false;
    if (!e.isAir || !e.canSee) ok = false;
    if (!sw.isAir || !sw.canSee) ok = false;
    if (!s.isAir || !s.canSee) ok = false;
    if (!se.isAir || !se.canSee) ok = false;

    if (CELESTIAL_DEBUG_ALWAYS) {
        let facingName = 'null';
        try {
            facingName = String(facing);
        } catch (e) {
            // ignore
        }

        console.info(
            '[celestial_harvester] base=x=' + base.getX() +
            ',y=' + base.getY() +
            ',z=' + base.getZ() +
            ' facing=' + facingName +
            ' center=x=' + center.getX() +
            ',y=' + center.getY() +
            ',z=' + center.getZ() +
            ' rotatedOffsetX=' + skyInfo.rotatedX +
            ' rotatedOffsetZ=' + skyInfo.rotatedZ +
            ' ok=' + ok + ' | ' +
            celestialLogFormat('C', c) + ' | ' +
            celestialLogFormat('NW', nw) + ' | ' +
            celestialLogFormat('N', n) + ' | ' +
            celestialLogFormat('NE', ne) + ' | ' +
            celestialLogFormat('W', w) + ' | ' +
            celestialLogFormat('E', e) + ' | ' +
            celestialLogFormat('SW', sw) + ' | ' +
            celestialLogFormat('S', s) + ' | ' +
            celestialLogFormat('SE', se)
        );
    }

    if (!ok) {
        return $ModifierFunction.cancel(Component.translatable('sky_greg.kjs.multiblock.2'));
    }

    return $ModifierFunction.IDENTITY;
}

// combine modifiers for celestial harvester
function celestialHarvesterSkyThenPyroOC(machine, recipe) {
    const sky = celestialHarvesterSkyCheck(machine, recipe);
    const pyro = GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe);

    return sky.andThen(pyro);
}

// celestial_harvester
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('celestial_harvester')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 2, 8)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('celestial_harvester', 'multiblock')
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('celestial_harvester')
        .recipeModifiers([
            (machine, recipe) => celestialHarvesterSkyThenPyroOC(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCC ', ' CCC ', ' CCC ', '     ', '     ')
            .aisle('CHHHC', 'CHHHC', 'CCCCC', ' CCC ', ' CCC ')
            .aisle('CHHHC', 'CGGGC', 'C   C', 'C   C', 'C   C')
            .aisle('CHHHC', 'CGGGC', 'C   C', 'C   C', 'C   C')
            .aisle('CHHHC', 'CGGGC', 'C   C', 'C   C', 'C   C')
            .aisle('CHHHC', 'CHHHC', 'CCCCC', ' CCC ', ' CCC ')
            .aisle(' CCC ', ' CKC ', ' CCC ', '     ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:titanium_gearbox'))
            .where('H', Predicates.heatingCoils())
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .setMinGlobalLimited(65)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .model(
            GTMachineModels.createWorkableCasingMachineModel(
                'gtceu:block/casings/solid/machine_casing_stable_titanium',
                'gtceu:block/multiblock/implosion_compressor'
            )['andThen(java.util.function.Consumer)'](b =>
                b.addDynamicRenderer(() => KubeJSDynamicRender.of('kubejs:celestial_harvester_launch'))
            )
        );
});
countMultiblock += 1


// **** advanced_greenhouse **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('advanced_greenhouse')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('advanced_greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('advanced_greenhouse')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(() => Block.getBlock("gtceu:plascrete"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CLLLC', 'CAAAC', 'CCCCC')
            .aisle('CSSSC', 'G   G', 'G   G', 'G   G', 'L   L', 'A   A', 'CFFFC')
            .aisle('CSSSC', 'G   G', 'G   G', 'G   G', 'L   L', 'A   A', 'CFFFC')
            .aisle('CSSSC', 'G   G', 'G   G', 'G   G', 'L   L', 'A   A', 'CFFFC')
            .aisle('CCKCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CLLLC', 'CAAAC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('farmersdelight:rich_soil')
                .or(Predicates.blocks('farmersdelight:rich_soil_farmland'))
            )
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('F', Predicates.blocks('gtceu:filter_casing'))
            .where('L', Predicates.blocks('minecraft:glowstone')
                .or(Predicates.blocks('minecraft:sea_lantern'))
            )
            .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('C', Predicates.blocks('gtceu:plascrete')
                .setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)
                    .setMaxGlobalLimited(1)
                )
            )
            .build()
        )
        .modelProperty(
            GTModelProperties.RECIPE_LOGIC_STATUS,
            $RecipeLogic.Status.IDLE
        )
        .model(
            GTMachineModels.createWorkableCasingMachineModel(GTCEu.id("block/casings/cleanroom/plascrete"),
                GTCEu.id("block/multiblock/implosion_compressor")
            )["andThen(java.util.function.Consumer)"](b =>
                b.addDynamicRenderer(() => GTDynamicRenders.makeGrowingPlantRender($List.of(new Vector3f(0, 1, -2))))
            )
        )
})
countMultiblock += 1


// **** cryogenic_distillation_tower **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cryogenic_distillation_tower')
        .setEUIO('in')
        .setMaxIOSize(0, 1, 1, 12)
        .setProgressBar(GuiTextures.PROGRESS_BAR_DISTILLATION_TOWER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cryogenic_distillation_tower', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cryogenic_distillation_tower')
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.OC_NON_PERFECT
        ])
        .appearanceBlock(() => Block.getBlock("kubejs:cryo_stable_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' BBBBB ', ' OOOOO ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ')
            .aisle('BBBBBBB', 'OPPPPPO', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'CTTTTTC')
            .aisle('BBBBBBB', 'OP P PO', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'CTTTTTC')
            .aisle('BBBBBBB', 'OPPPPPO', 'H PPP H', 'C PPP C', 'C PPP C', 'C PPP C', 'H PPP H', 'C PPP C', 'C PPP C', 'C PPP C', 'H PPP H', 'C PPP C', 'C PPP C', 'C PPP C', 'H PPP H', 'CTTTTTC')
            .aisle('BBBBBBB', 'OP P PO', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'C  P  C', 'C  P  C', 'C  P  C', 'H  P  H', 'CTTTTTC')
            .aisle('BBBBBBB', 'OPPPPPO', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'C     C', 'C     C', 'C     C', 'H     H', 'CTTTTTC')
            .aisle(' BBBBB ', ' CCKCC ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ', ' CCCCC ', ' CCCCC ', ' HHHHH ', ' CCCCC ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', $TrueSteamPredicates.coolingCoils())
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('C', Predicates.blocks('kubejs:cryo_stable_casing'))
            .where('T', Predicates.blocks('kubejs:cryo_stable_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setExactLimit(1)
                )
            )
            .where('O', Predicates.blocks('kubejs:cryo_stable_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS_1X)
                    .setMaxGlobalLimited(12)
                    .setPreviewCount(12)
                )
            )
            .where('B', Predicates.blocks('kubejs:cryo_stable_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(2)
                    .setPreviewCount(2)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .build()
        )
        .workableCasingModel(
            'kubejs:block/custom_casings/cryo_stable_casing/cryo_stable_casing',
            'gtceu:block/multiblock/distillation_tower'
        )
})
countMultiblock += 1


// const $CoolingCoilElectricMachine = Java.loadClass('site.siredvin.gttruesteam.machines.shared.cooling.CoolingCoilElectricMachine')
// const $DistillationTowerMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.electric.DistillationTowerMachine')

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('cryogenic_distillation_tower')
//         .setEUIO('in')
//         .setMaxIOSize(0, 1, 1, 12)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.BATH)
// })

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('cryogenic_distillation_tower', 'multiblock')
//         .machine(holder => new $DistillationTowerMachine(holder, 1))
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('cryogenic_distillation_tower')
//         .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
//         .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
//         .pattern(definition => FactoryBlockPattern
//             .start(
//                 RelativeDirection.RIGHT,
//                 RelativeDirection.FRONT,
//                 RelativeDirection.UP
//             )
//             .aisle(
//                 'BBB',
//                 'BBB',
//                 'BKB'
//             )
//             .aisle(
//                 'COC',
//                 'C C',
//                 'COC'
//             )
//             .setRepeatable(1, 12)
//             .aisle(
//                 'COC',
//                 'CCC',
//                 'COC'
//             )
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('B', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
//                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
//                 .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//             )
//             .where('O', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
//                 .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS_1X)
//                     .setPreviewCount(1)
//                     .setMinLayerLimited(1)
//                     .setMaxLayerLimited(1)
//                 )
//             )
//             .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
//             // .where('H', $TrueSteamPredicates.coolingCoils())
//             .where(' ', Predicates.air())
//             .build()
//         )

//         .workableCasingModel(
//             'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
//             'gtceu:block/multiblock/distillation_tower'
//         )
// })




//#endregion
// **************************** // // **************************** //
// ***** GENERATOR MULTIS ***** // // ***** GENERATOR MULTIS ***** //
// **************************** // // **************************** //
//#region GENERATOR MULTIS


// **** hydrovolcanism_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hydrovolcanism_generator')
        .setEUIO('out')
        .setMaxIOSize(0, 0, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hydrovolcanism_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hydrovolcanism_generator')
        .noRecipeModifier()
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  BBB  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .aisle(' BBBBB ', ' C   C ', ' C   C ', ' C P C ', ' C P C ', ' C P C ', ' CGVGC ')
            .aisle('BBBBBBB', 'C     C', 'C     C', 'C  P  C', 'C     C', 'C     C', 'CGGGGGC')
            .aisle('BBBBBBB', 'IH   HI', 'CP   PC', 'CPPHPPC', 'C  H  C', 'C  H  C', 'CGGOGGC')
            .aisle('BBBBBBB', 'C     C', 'C     C', 'C  P  C', 'C     C', 'C     C', 'CGGGGGC')
            .aisle(' BBBBB ', ' C   C ', ' C   C ', ' C P C ', ' C P C ', ' C P C ', ' CGVGC ')
            .aisle('  BBB  ', '  CKC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ', '  CCC  ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('ae2:quartz_vibrant_glass')
                .or(Predicates.blocks('ae2:quartz_glass'))
            )
            .where('V', Predicates.blocks('gtceu:filter_casing'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('B', Predicates.blocks('gtceu:stainless_steel_turbine_casing'))
            .where('H', Predicates.blocks('gtceu:hv_hermetic_casing'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                .setMaxGlobalLimited(2)
            )
            .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                .setMaxGlobalLimited(1)
            )
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.blocks(PartAbility.OUTPUT_ENERGY.getBlocks(GTValues.HV).toArray())
                    .setMaxGlobalLimited(4)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/generator/large_steam_turbine'
        )
})
countMultiblock += 1




//#endregion
// ************************ // // ************************ //
// ***** SOLAR MULTIS ***** // // ***** SOLAR MULTIS ***** //
// ************************ // // ************************ //
//#region SOLAR MULTIS


// **** can see sky/is not raining modifier **** //
const SKY_CHECK_Y_OFFSET = 2;
const SOLAR_ZERO_EU = $ModifierFunction.builder().eutMultiplier(0.0).build();

const SOLAR_DEBUG_ALWAYS = false;

function checkColumn(level, base, dx, dz) {
    const pos = new $BlockPos(base.getX() + dx, base.getY() + SKY_CHECK_Y_OFFSET, base.getZ() + dz);
    const state = level.getBlockState(pos);

    const isAir = state.isAir();
    const canSee = level.canSeeSky(pos);
    const raining = level.isRainingAt(pos);

    let blockId = "unknown";
    try {
        blockId = String($BuiltInRegistries.BLOCK.getKey(state.getBlock()));
    } catch (e) {
        // ignore
    }

    return {
        pos: pos,
        isAir: isAir,
        canSee: canSee,
        raining: raining,
        blockId: blockId
    };
}

function solarLogFormat(label, columnResult) {
    return label +
        "@x=" + columnResult.pos.getX() + ",y=" + columnResult.pos.getY() + ",z=" + columnResult.pos.getZ() +
        " air=" + columnResult.isAir +
        " sky=" + columnResult.canSee +
        " rain=" + columnResult.raining +
        " block=" + columnResult.blockId;
}

function solarCheckRainCheckSky(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return $ModifierFunction.IDENTITY;
    if (!(recipe instanceof $GTRecipe)) return $ModifierFunction.IDENTITY;

    const level = machine.getLevel();
    if (level == null) return $ModifierFunction.NULL;

    const base = machine.getPos();

    // 9 explicit checks
    const c = checkColumn(level, base, 0, 0);
    const nw = checkColumn(level, base, -1, -1);
    const n = checkColumn(level, base, 0, -1);
    const ne = checkColumn(level, base, 1, -1);
    const w = checkColumn(level, base, -1, 0);
    const e = checkColumn(level, base, 1, 0);
    const sw = checkColumn(level, base, -1, 1);
    const s = checkColumn(level, base, 0, 1);
    const se = checkColumn(level, base, 1, 1);

    // all must pass
    let ok = true;

    if (!c.isAir || !c.canSee || c.raining) ok = false;
    if (!nw.isAir || !nw.canSee || nw.raining) ok = false;
    if (!n.isAir || !n.canSee || n.raining) ok = false;
    if (!ne.isAir || !ne.canSee || ne.raining) ok = false;
    if (!w.isAir || !w.canSee || w.raining) ok = false;
    if (!e.isAir || !e.canSee || e.raining) ok = false;
    if (!sw.isAir || !sw.canSee || sw.raining) ok = false;
    if (!s.isAir || !s.canSee || s.raining) ok = false;
    if (!se.isAir || !se.canSee || se.raining) ok = false;

    if (SOLAR_DEBUG_ALWAYS) {
        console.info(
            "[lv_solar_generator] base=x=" + base.getX() + ",y=" + base.getY() + ",z=" + base.getZ() +
            " ok=" + ok + " | " +
            solarLogFormat("C", c) + " | " +
            solarLogFormat("NW", nw) + " | " +
            solarLogFormat("N", n) + " | " +
            solarLogFormat("NE", ne) + " | " +
            solarLogFormat("W", w) + " | " +
            solarLogFormat("E", e) + " | " +
            solarLogFormat("SW", sw) + " | " +
            solarLogFormat("S", s) + " | " +
            solarLogFormat("SE", se)
        );
    }

    return ok ? $ModifierFunction.IDENTITY : SOLAR_ZERO_EU;
}


// **** lv_solar_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('lv_solar_generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('lv_solar_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('lv_solar_generator')
        .recipeModifiers([
            (machine, recipe) => solarCheckRainCheckSky(machine, recipe),
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', '   ', 'GGG')
            .aisle('CBC', ' K ', 'GGG')
            .aisle('CCC', '   ', 'GGG')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:steel_block'))
            .where('G', Predicates.blocks('kubejs:solar_panel_casing'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.blocks(PartAbility.OUTPUT_ENERGY.getBlocks(GTValues.LV).toArray())
                    .setMaxGlobalLimited(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/machines/wiremill'
        );
});
countMultiblock += 1


// **** mv_solar_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mv_solar_generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mv_solar_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mv_solar_generator')
        .recipeModifiers([
            (machine, recipe) => solarCheckRainCheckSky(machine, recipe),
        ])
        .appearanceBlock(() => new Block.getBlock("kubejs:solid_aluminium_casing"))
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', '   ', 'GGG')
            .aisle('CBC', ' K ', 'GGG')
            .aisle('CCC', '   ', 'GGG')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:aluminium_block'))
            .where('G', Predicates.blocks('kubejs:solar_panel_casing'))
            .where('C', Predicates.blocks('kubejs:solid_aluminium_casing')
                .or(Predicates.blocks(PartAbility.OUTPUT_ENERGY.getBlocks(GTValues.MV).toArray())
                    .setMaxGlobalLimited(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'kubejs:block/custom_casings/solid_aluminium_casing/solid_aluminium_casing',
            'gtceu:block/machines/wiremill'
        );
});
countMultiblock += 1


// **** hv_solar_generator **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hv_solar_generator')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hv_solar_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hv_solar_generator')
        .recipeModifiers([
            (machine, recipe) => solarCheckRainCheckSky(machine, recipe),
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:clean_machine_casing"))
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', '   ', 'GGG')
            .aisle('CBC', ' K ', 'GGG')
            .aisle('CCC', '   ', 'GGG')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:stainless_steel_block'))
            .where('G', Predicates.blocks('kubejs:solar_panel_casing'))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.blocks(PartAbility.OUTPUT_ENERGY.getBlocks(GTValues.HV).toArray())
                    .setMaxGlobalLimited(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/machines/wiremill'
        );
});
countMultiblock += 1


//#endregion
// ***************************** // // ***************************** //
// ***** EV PERFECT MULTIS ***** // // ***** EV PERFECT MULTIS ***** //
// ***************************** // // ***************************** //
//#region EV PERFECT MULTIS

// fusion style half OC math only
// const OC_HALF_PERFECT_LOGIC = OverclockingLogic.create(0.5, 2.0, false);

//                                                     Dur   EU   SUB
const OC_HALF_PERFECT_LOGIC = OverclockingLogic.create(0.5, 2.0, false);

// recipe modifier built through GT's normal electric OC wrapper
const OC_HALF_PERFECT = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OC_HALF_PERFECT_LOGIC);

// **** ev_perfect_macerator **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_macerator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:macerator'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_maceration_tower'
        )
})
countMultiblock += 1


// **** ev_perfect_chemical_bath **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_chemical_bath', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:ore_washer',
            'gtceu:chemical_bath'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_chemical_bath'
        )
})
countMultiblock += 1

// **** ev_perfect_centrifuge **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_centrifuge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:centrifuge',
            'gtceu:thermal_centrifuge'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_centrifuge'
        )
})
countMultiblock += 1

// **** ev_perfect_mixer **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_mixer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:mixer'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_mixer'
        )
})
countMultiblock += 1


// **** ev_perfect_electrolyzer **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_electrolyzer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:electrolyzer'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_electrolyzer'
        )
})
countMultiblock += 1


// **** ev_perfect_electromagnet **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_electromagnet', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:electromagnetic_separator',
            'gtceu:polarizer'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_electrolyzer'
        )
})
countMultiblock += 1


// **** ev_perfect_assembler **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:assembler'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_assembler'
        )
})
countMultiblock += 1


// **** ev_perfect_circuit_assembler **** // (half)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_circuit_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:circuit_assembler'
        ])
        .recipeModifiers([
            OC_HALF_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_circuit_assembler'
        )
})
countMultiblock += 1


// **** ev_perfect_arc_furnace **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_arc_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:arc_furnace'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_arc_smelter'
        )
})
countMultiblock += 1


// **** ev_perfect_laser_engraver **** // (half)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_laser_engraver', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:laser_engraver'
        ])
        .recipeModifiers([
            OC_HALF_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_engraving_laser'
        )
})
countMultiblock += 1


// **** ev_perfect_sifter **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:sifter'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_sifting_funnel'
        )
})
countMultiblock += 1


// **** ev_perfect_crystallization_chamber **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_crystallization_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:autoclave'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_autoclave'
        )
})
countMultiblock += 1


// **** ev_perfect_material_press **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_material_press', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:bender',
            'gtceu:compressor',
            'gtceu:forge_hammer',
            'gtceu:forming_press'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_material_press'
        )
})
countMultiblock += 1


// **** ev_perfect_brewing_vat **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_brewing_vat', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:brewery',
            'gtceu:fermenter',
            'gtceu:fluid_heater'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_brewer'
        )
})
countMultiblock += 1


// **** ev_perfect_cutting_saw **** // (half)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_cutting_saw', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:cutter',
            'gtceu:lathe'
        ])
        .recipeModifiers([
            OC_HALF_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_cutter'
        )
})
countMultiblock += 1


// **** ev_perfect_fractionating_distillery **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_fractionating_distillery', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:distillery'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_distillery'
        )
})
countMultiblock += 1


// **** ev_perfect_extraction_machine **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_extraction_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:extractor',
            'gtceu:canner'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_extractor'
        )
})
countMultiblock += 1


// **** ev_perfect_extrusion_machine **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_extrusion_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:extruder'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_extruder'
        )
})
countMultiblock += 1


// **** ev_perfect_solidification_array **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_solidification_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:fluid_solidifier'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_solidifier'
        )
})
countMultiblock += 1


// **** ev_perfect_wire_factory **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_wire_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:wiremill'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_wiremill'
        )
})
countMultiblock += 1


// **** ev_perfect_gas_collector **** //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ev_perfect_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([
            'gtceu:gas_collector'
        ])
        .recipeModifiers([
            GTRecipeModifiers.OC_PERFECT
        ])
        .appearanceBlock(() => new Block.getBlock("gtceu:stress_proof_casing"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'CCC')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('C', Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.MUFFLER)
                    .setExactLimit(1)
                )
                .or(Predicates.abilities(PartAbility.MAINTENANCE)
                    .setExactLimit(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'gtceu:block/casings/gcym/stress_proof_casing',
            'gtceu:block/multiblock/gcym/large_wiremill'
        )
})
countMultiblock += 1




//#endregion
// ********************************* // // ********************************* //
// ***** SINGLE BLOCK MACHINES ***** // // ***** SINGLE BLOCK MACHINES ***** //
// ********************************* // // ********************************* //
//#region SINGLE BLOCKS


// TODO - move me!
// **** firebrick_mixer **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('firebrick_mixer')
        .category('firebrick_mixer')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
});
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('firebrick_mixer', 'steam')
        .hasHighPressure(false)
        .definition((hp, builder) => (
            builder
                .recipeType("firebrick_mixer")
                .workableSteamHullModel(hp, 'gtceu:block/machines/mixer')
        ))
});
countSingleblock += 1


// **** card_assembler **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('card_assembler')
        .category('card_assembler')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('card_assembler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Card Assembler")
                .recipeType('card_assembler')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        )
})
countSingleblock += 1


// **** cablemill **** //
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cablemill')
        .category('cablemill')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cablemill', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Cablemill")
                .recipeType('cablemill')
                .workableTieredHullModel('gtceu:block/machines/wiremill')
        )
})
countSingleblock += 1




//#endregion
// **************************** // // **************************** //
// ***** PRIMITIVE MULTIS ***** // // ***** PRIMITIVE MULTIS ***** //
// **************************** // // **************************** //
//#region PRIMITIVE MULTIS


// bronze_bulk_smelter
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bronze_bulk_smelter')
        .category('bronze_bulk_smelter')
        .setMaxIOSize(6, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bronze_bulk_smelter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bronze_bulk_smelter')
        .appearanceBlock(() => new Block.getBlock("minecraft:terracotta"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC')
            .aisle('BBB', 'C C', 'C C')
            .aisle('BBB', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('minecraft:smooth_stone'))
            .where('C', Predicates.blocks('minecraft:terracotta')
                .or(Predicates.blocks(PartAbility.IMPORT_ITEMS.getBlocks(GTValues.ULV).toArray())
                    .setMaxGlobalLimited(2)
                    .setPreviewCount(2)
                )
                .or(Predicates.blocks(PartAbility.EXPORT_ITEMS.getBlocks(GTValues.ULV).toArray())
                    .setMaxGlobalLimited(2)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            'minecraft:block/terracotta',
            'kubejs:block/custom_casings/primitive_smelting_bricks'
        );
});
countMultiblock += 1


// primitive_farm
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_farm')
        .category('primitive_farm')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_farm')
        .appearanceBlock(() => new Block.getBlock("minecraft:stone_bricks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBBBB', 'CGGGC', 'CGGGC', 'CCCCC')
            .aisle('BWFWB', 'G   G', 'G   G', 'CGGGC')
            .aisle('BBKBB', 'CGGGC', 'CGGGC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('minecraft:bricks'))
            .where('G', Predicates.blocks('minecraft:glass')
                .or(Predicates.blocks('minecraft:bricks')
                )
            )
            .where('F', Predicates.blocks('minecraft:farmland'))
            .where('W', Predicates.fluids('minecraft:water'))
            .where('B', Predicates.blocks('minecraft:stone_bricks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setMaxGlobalLimited(4)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setMaxGlobalLimited(4)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build()
        )
        .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
        .model(GTMachineModels.createWorkableCasingMachineModel(
            GTCEu.id("minecraft:block/stone_bricks"),
            GTCEu.id("kubejs:block/custom_casings/primitive_smelting_bricks")
        )["andThen(java.util.function.Consumer)"](b =>
            b.addDynamicRenderer(() => GTDynamicRenders.makeGrowingPlantRender($List.of(new Vector3f(0, 1, -1))))
        )
        )
});
countMultiblock += 1




//#endregion
// ***************************** // // ***************************** //
// ***** STEAM MULTIS ***** // // ***** STEAM MULTIS ***** //
// ***************************** // // ***************************** //
//#region STEAM MULTIS


// steam_alloy_smelter (bulk)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_alloy_smelter', 'multiblock')
        .machine(holder => new $SteamMulti(holder, 1))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
        .recipeModifiers([
            (machine, recipe) => $SteamMulti.recipeModifier(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('RRRRR', 'CCCCC', 'CCCCC', '     ')
            .aisle('RRRRR', 'CPGPC', 'CPGPC', 'CCCCC')
            .aisle('RRRRR', 'CCKCC', 'CCCCC', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('R', Predicates.blocks('gtceu:bronze_firebox_casing'))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('C', Predicates.blocks('gtceu:steam_machine_casing')
                .or(Predicates.abilities(PartAbility.STEAM)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/alloy_smelter"
        )
})
countMultiblock += 1


// steam_wiremill (bulk)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_wiremill', 'multiblock')
        .machine(holder => new $SteamMulti(holder, 1))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.WIREMILL_RECIPES)
        .recipeModifiers([
            (machine, recipe) => $SteamMulti.recipeModifier(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' RRR ', ' CCC ', '     ')
            .aisle('RRRRR', 'CGGGC', ' CCC ')
            .aisle('RRRRR', 'CGGGC', ' CCC ')
            .aisle('RRRRR', 'CGGGC', ' CCC ')
            .aisle(' RRR ', ' CKC ', '     ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('R', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.STEAM)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/wiremill"
        )
})
countMultiblock += 1


// steam_compressor (bulk)
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_compressor', 'multiblock')
        .machine(holder => new $SteamMulti(holder, 1))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(GTRecipeTypes.COMPRESSOR_RECIPES)
        .recipeModifiers([
            (machine, recipe) => $SteamMulti.recipeModifier(machine, recipe)
        ])
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'CCC', 'CCC', 'CCC', 'CCC')
            .aisle('BBB', 'CAC', 'C C', 'CPC', 'CCC')
            .aisle('BBB', 'CKC', 'CCC', 'CCC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:bronze_firebox_casing'))
            .where('A', Predicates.blocks('minecraft:anvil'))
            .where('P', Predicates.blocks('minecraft:piston'))
            .where('C', Predicates.blocks('gtceu:steam_machine_casing')
                .or(Predicates.abilities(PartAbility.STEAM)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build())

        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle('BBB', 'CKC', 'CCC', 'CCC', 'CCC')
            .aisle('BBB', 'CAC', 'O I', 'CPC', 'CCC')
            .aisle('BBB', 'CCC', 'CSC', 'CCC', 'CCC')
            .where('K', controller, Direction.NORTH)
            .where('C', Block.getBlock('gtceu:steam_machine_casing'))
            .where('B', GTBlocks.FIREBOX_BRONZE.get())
            .where('A', Block.getBlock("minecraft:anvil"))
        ["where(char,net.minecraft.world.level.block.state.BlockState)"](
            'P', Block.getBlock('minecraft:piston').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.DOWN)
        )
            .where(' ', Block.getBlock("minecraft:air"))
            .where('I', GTMachines.STEAM_IMPORT_BUS, Direction.EAST)
            .where('O', GTMachines.STEAM_EXPORT_BUS, Direction.WEST)
            .where('S', GTMachines.STEAM_HATCH, Direction.SOUTH)
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/compressor"
        )
})
countMultiblock += 1


// steel_blast_furnace
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steel_blast_furnace')
        .category('steel_blast_furnace')
        .setMaxIOSize(2, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);
})
countRecipe += 1

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steel_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steel_blast_furnace')
        .noRecipeModifier()
        .appearanceBlock(() => new Block.getBlock("kubejs:primitive_smelting_bricks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFF', 'CCC', 'CCC', 'CCC')
            .aisle('FFF', 'C C', 'C C', 'C C')
            .aisle('FFF', 'CKC', 'CCC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('C', Predicates.blocks('kubejs:primitive_smelting_bricks')
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS)
                    .setMaxGlobalLimited(2)
                    .setPreviewCount(1)
                )
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)
                    .setMaxGlobalLimited(1)
                    .setPreviewCount(1)
                )
            )
            .where(' ', Predicates.any())
            .build())
        .workableCasingModel(
            'kubejs:block/primitive_smelting_bricks',
            'kubejs:block/custom_casings/primitive_smelting_bricks'
        )
})
countMultiblock += 1




//#endregion
// ******************* // // ******************* //
// ***** HATCHES ***** // // ***** HATCHES ***** //
// ******************* // // ******************* //
//#region HATCHES


// sterilizing_cleaning_maintenance_hatch
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("sterilizing_cleaning_maintenance_hatch", "custom")
        .machine((holder, tier) => {
            return new $CleaningMaintenanceHatchPartMachine(holder, $CleanroomType.STERILE_CLEANROOM);
        })
        .tiers(GTValues.UIV)
        .definition((tier, builder) => builder
            .langValue("Sterilizing Cleaning Maintenance Hatch")
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.MAINTENANCE)
            .modelProperty($GTMachineModelProperties.IS_FORMED)

            .workableTieredHullModel(GTCEu.id("block/machines/sterilizing_cleaning_maintenance_hatch"))
        )
})
countHatch += 1


// energy_input_hatch_4a
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("energy_input_hatch_4a", "custom")
        .machine((holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 4);
        })
        .tiers(GTValues.HV)
        .definition((tier, builder) => builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.INPUT_ENERGY)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .workableTieredHullModel(GTCEu.id("block/machines/energy_input_hatch_4a"))
        );
});
countHatch += 1


// energy_output_hatch_4a
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("energy_output_hatch_4a", "custom")
        .machine((holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 4);
        })
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) => builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.OUTPUT_ENERGY)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .workableTieredHullModel(GTCEu.id("block/machines/energy_output_hatch_4a"))
        );
});
countHatch += 1


// energy_output_hatch_16a
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("energy_output_hatch_16a", "custom")
        .machine((holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 16);
        })
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) => builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.OUTPUT_ENERGY)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .workableTieredHullModel(GTCEu.id("block/machines/energy_output_hatch_16a"))
        );
});
countHatch += 1


// energy_output_hatch_64a
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("energy_output_hatch_64a", "custom")
        .machine((holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 64);
        })
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) => builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.SUBSTATION_OUTPUT_ENERGY)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .workableTieredHullModel(GTCEu.id("block/machines/energy_output_hatch_64a"))
        );
});
countHatch += 1


// parallel hatch
// *** it "works" but the parallel values are hard coded by tier, so EV is 1, below EV is nothing *** //
// const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")

// GTCEuStartupEvents.registry("gtceu:machine", event => {
//     event.create("parallel_hatch", "custom")
//         .machine((holder, tier) => {
//             return new $ParallelHatchPartMachine(holder, tier);
//         })
//         .tiers(GTValues.EV)
//         .definition((tier, builder) =>
//             builder
//                 .rotationState(RotationState.ALL)
//                 .abilities(PartAbility.PARALLEL_HATCH)
//                 .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk4"))
//         )
// })




//#endregion
// **************************** //
// **** REGISTRY REPORTING **** //
// **************************** //


let countTotals = countRecipe + countMultiblock + countSingleblock + countHatch
console.info(`[=======================================================]`)
console.info(`[====TOTAL REGISTRIES FROM CUSTOM_MULTIBLOCKS SCRIPT====]`)
console.info(`[RECIPE TYPES] ${countRecipe} registered.`)
console.info(`[MULTIBLOCKS] ${countMultiblock} registered.`)
console.info(`[SINGLE BLOCKS] ${countSingleblock} registered.`)
console.info(`[HATCHES/MISC] ${countHatch} registered.`)
console.info(`[TOTAL REGISTRIES] ${countTotals} registered.`)
console.info(`[=======================================================]`)


// fin //