// priority: 0


ServerEvents.recipes(event => {

    // logic_processor
    event.recipes.gtceu.large_inscriber('kubejs:ae2/logic_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/gold')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:logic_processor')
        .duration(8)
        .EUt(60)

    event.recipes.gtceu.large_inscriber('kubejs:ae2/logic_processor_2')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('#forge:dusts/silicon')
        .itemInputs('#forge:ingots/gold')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:logic_processor')
        .duration(8)
        .EUt(60)

    // engineering_processor
    event.recipes.gtceu.large_inscriber('kubejs:ae2/engineering_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/diamond')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:engineering_processor')
        .duration(8)
        .EUt(60)

    event.recipes.gtceu.large_inscriber('kubejs:ae2/engineering_processor_2')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('#forge:dusts/silicon')
        .itemInputs('#forge:gems/diamond')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:engineering_processor')
        .duration(8)
        .EUt(60)

    // calculation_processor
    event.recipes.gtceu.large_inscriber('kubejs:ae2/calculation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:calculation_processor')
        .duration(8)
        .EUt(60)

    event.recipes.gtceu.large_inscriber('kubejs:ae2/calculation_processor_2')
        .notConsumable('ae2:silicon_press')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:dusts/silicon')
        .itemInputs('#forge:gems/certus_quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('ae2:calculation_processor')
        .duration(8)
        .EUt(60)

    // accumulation_processor
    event.recipes.gtceu.large_inscriber('kubejs:megacells/accumulation_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('megacells:accumulation_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('#forge:ingots/sky_steel')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('megacells:accumulation_processor')
        .duration(8)
        .EUt(60)

    event.recipes.gtceu.large_inscriber('kubejs:megacells/accumulation_processor_2')
        .notConsumable('ae2:silicon_press')
        .notConsumable('megacells:accumulation_processor_press')
        .itemInputs('#forge:dusts/silicon')
        .itemInputs('#forge:ingots/sky_steel')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('megacells:accumulation_processor')
        .duration(8)
        .EUt(60)

    // quantum_processor
    event.recipes.gtceu.large_inscriber('kubejs:advanced_ae/quantum_processor')
        .notConsumable('ae2:silicon_press')
        .notConsumable('advanced_ae:quantum_processor_press')
        .itemInputs('#forge:silicon')
        .itemInputs('advanced_ae:quantum_alloy')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('advanced_ae:quantum_processor')
        .duration(8)
        .EUt(60)

    event.recipes.gtceu.large_inscriber('kubejs:advanced_ae/quantum_processor_2')
        .notConsumable('ae2:silicon_press')
        .notConsumable('advanced_ae:quantum_processor_press')
        .itemInputs('#forge:dusts/silicon')
        .itemInputs('advanced_ae:quantum_alloy')
        .inputFluids(Fluid.of('gtceu:redstone', 72))
        .itemOutputs('advanced_ae:quantum_processor')
        .duration(8)
        .EUt(60)


    // fin //

})