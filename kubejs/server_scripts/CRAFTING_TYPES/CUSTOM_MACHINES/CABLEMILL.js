// priority: 0


ServerEvents.recipes(event => {


    // ********************* //
    // **** TIER VALUES **** //
    // ********************* //

    const TIER = {
        ULV: 0,
        LV: 1,
        MV: 2,
        HV: 3,
        EV: 4,
        IV: 5,
        LuV: 6,
        ZPM: 7,
        UV: 8,
        UHV: 9,
    };


    // ********************** //
    // **** MATERIAL MAP **** //
    // ********************** //

    // baseDuration is seconds per 1 ingot

    const cables = [
        { material: 'red_alloy', tier: TIER.ULV, baseDuration: 4 },
        { material: 'lead', tier: TIER.ULV, baseDuration: 10.35 },

        { material: 'cobalt', tier: TIER.LV, baseDuration: 2.95 },
        { material: 'nickel', tier: TIER.LV, baseDuration: 2.9 },
        { material: 'tin', tier: TIER.LV, baseDuration: 5.9 },

        { material: 'cupronickel', tier: TIER.MV, baseDuration: 3 },
        { material: 'copper', tier: TIER.MV, baseDuration: 3.15 },
        { material: 'iron', tier: TIER.MV, baseDuration: 2.8 },
        { material: 'annealed_copper', tier: TIER.MV, baseDuration: 3.15 },

        { material: 'silver', tier: TIER.HV, baseDuration: 5.35 },
        { material: 'electrum', tier: TIER.HV, baseDuration: 7.55 },
        { material: 'gold', tier: TIER.HV, baseDuration: 9.8 },
        { material: 'blue_alloy', tier: TIER.HV, baseDuration: 5.75 },
        { material: 'kanthal', tier: TIER.HV, baseDuration: 2.2 },

        { material: 'steel', tier: TIER.EV, baseDuration: 2.8 },
        { material: 'nichrome', tier: TIER.EV, baseDuration: 2.8 },
        { material: 'rtm_alloy', tier: TIER.EV, baseDuration: 6.15 },
        { material: 'aluminium', tier: TIER.EV, baseDuration: 1.3 },
        { material: 'black_steel', tier: TIER.EV, baseDuration: 3.2 },

        { material: 'platinum', tier: TIER.IV, baseDuration: 9.75 },
        { material: 'tungsten_steel', tier: TIER.IV, baseDuration: 5.95 },
        { material: 'graphene', tier: TIER.IV, baseDuration: 0.6 },
        { material: 'tungsten', tier: TIER.IV, baseDuration: 9.15 },

        { material: 'osmium', tier: TIER.LuV, baseDuration: 9.5 },
        { material: 'niobium_titanium', tier: TIER.LuV, baseDuration: 3.55 },
        { material: 'hssg', tier: TIER.LuV, baseDuration: 4.9 },
        { material: 'niobium_nitride', tier: TIER.LuV, baseDuration: 2.7 },

        { material: 'naquadah', tier: TIER.ZPM, baseDuration: 26.3 },
        { material: 'vanadium_gallium', tier: TIER.ZPM, baseDuration: 2.75 },
        { material: 'trinium', tier: TIER.ZPM, baseDuration: 16.15 },

        { material: 'tritanium', tier: TIER.UV, baseDuration: 14.85 },
        { material: 'naquadah_alloy', tier: TIER.UV, baseDuration: 19.55 },
        { material: 'yttrium_barium_cuprate', tier: TIER.UV, baseDuration: 2.55 },

        { material: 'europium', tier: TIER.UHV, baseDuration: 7.55 },
    ];


    // *************** //
    // **** SIZES **** //
    // *************** //

    // insulationMult decides fluid/foil quantity

    const cableSizes = [
        { size: 1, label: 'single', insulationMult: 1, ingotQuantity: 1, wireQuantity: 2 },
        { size: 2, label: 'double', insulationMult: 1, ingotQuantity: 1, wireQuantity: 1 },
        { size: 4, label: 'quadruple', insulationMult: 2, ingotQuantity: 2, wireQuantity: 1 },
        { size: 8, label: 'octal', insulationMult: 3, ingotQuantity: 4, wireQuantity: 1 },
        { size: 16, label: 'hex', insulationMult: 5, ingotQuantity: 8, wireQuantity: 1 },
    ];


    // *************************** //
    // **** FLUID INSULATIONS **** //
    // *************************** //

    // maxTier is inclusive - usable for all tiers <= maxTier

    const fluidInsulations = [
        { fluid: 'rubber', divisor: 1, maxTier: TIER.EV }, // ULV - EV
        { fluid: 'silicone_rubber', divisor: 2, maxTier: TIER.UHV }, // ULV - UHV
        { fluid: 'styrene_butadiene_rubber', divisor: 4, maxTier: TIER.UHV }, // ULV - UHV
    ];


    // ************************** //
    // **** FOIL INSULATIONS **** //
    // ************************** //

    // <EV - no foils
    // EV/IV - PVC foil
    // >LuV - PVC + PPS foils

    const foilInsulations = [
        { foilItem: 'gtceu:polyvinyl_chloride_foil', minTier: TIER.EV, quantityPerMult: 1 },
        { foilItem: 'gtceu:polyphenylene_sulfide_foil', minTier: TIER.LuV, quantityPerMult: 1 },
    ];


    // ******************** //
    // **** TWEAKABLES **** //
    // ******************** //

    const EU_PER_TICK = 30;
    const RECIPE_ID_PREFIX = 'kubejs:gtceu/';


    // ***************** //
    // **** HELPERS **** //
    // ***************** //

    function isFluidAllowedForCable(cableTier, maxTier) {
        // maxTier = highest tier that can still use this insulation (inclusive)
        return cableTier <= maxTier;
    }

    function buildFluidAmountMb(insulationMult, divisor) {
        // 144 mB per unit, scaled by insulationMult and divisor
        return Math.max(1, Math.round((144 * insulationMult) / divisor));
    }

    function buildDurationTicks(baseDurationSeconds, ingotQty) {
        // baseDuration * 20 * ingotQuantity
        return Math.max(1, Math.round(baseDurationSeconds * 20 * ingotQty));
    }


    // ************************ //
    // **** RECIPE BUILDER **** //
    // ************************ //

    function registerCablemillRecipe(cable, cs, ins) {
        if (!isFluidAllowedForCable(cable.tier, ins.maxTier)) return;

        const fluidMb = buildFluidAmountMb(cs.insulationMult, ins.divisor);

        const id = `${RECIPE_ID_PREFIX}${cable.material}_${cs.label}_cable_${ins.fluid}`;
        const ingotInput = `${cs.ingotQuantity}x #forge:ingots/${cable.material}`;
        const fluidInput = Fluid.of(`gtceu:${ins.fluid}`, fluidMb);
        const outputCable = `${cs.wireQuantity}x gtceu:${cable.material}_${cs.label}_cable`;
        const durationTicks = buildDurationTicks(cable.baseDuration, cs.ingotQuantity);

        // Base recipe
        let builder = event.recipes.gtceu.cablemill(id)
            .itemInputs(ingotInput)
            .inputFluids(fluidInput)
            .itemOutputs(outputCable)
            .duration(durationTicks)
            .EUt(EU_PER_TICK)

        // Add Foils depending on tiers
        if (cable.tier >= TIER.EV) {
            const pvcQty = Math.max(1, cs.insulationMult * foilInsulations[0].quantityPerMult);
            builder = builder.itemInputs(`${pvcQty}x ${foilInsulations[0].foilItem}`);

            if (cable.tier >= TIER.LuV) {
                const ppsQty = Math.max(1, cs.insulationMult * foilInsulations[1].quantityPerMult);
                builder = builder.itemInputs(`${ppsQty}x ${foilInsulations[1].foilItem}`);
            }
        }

        builder.circuit(cs.size);
    }


    // ************************** //
    // **** GENERATE RECIPES **** //
    // ************************** //

    for (const cable of cables) {
        for (const cs of cableSizes) {
            for (const ins of fluidInsulations) {
                registerCablemillRecipe(cable, cs, ins);
            }
        }
    }


    // fin //

});