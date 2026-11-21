// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


  // fluix_dust
  event.recipes.gtceu.macerator('kubejs:ae2/fluix_dust')
    .itemInputs('ae2:fluix_crystal')
    .itemOutputs('ae2:fluix_dust')
    .duration(28)
    .EUt(2)

  // certus_quartz_dust
  event.recipes.gtceu.macerator('kubejs:ae2/certus_quartz_dust')
    .itemInputs('ae2:certus_quartz_crystal')
    .itemOutputs('ae2:certus_quartz_dust')
    .duration(28)
    .EUt(2)

  // sky_dust
  event.recipes.gtceu.macerator('kubejs:ae2/sky_dust')
    .itemInputs('ae2:sky_stone_block')
    .itemOutputs('ae2:sky_dust')
    .duration(28)
    .EUt(2)

  // concrete_dust
  event.remove({ id: 'gtceu:macerator/macerate_white_concrete' })
  event.recipes.gtceu.macerator('kubejs:gtceu/concrete_dust')
    .itemInputs('#forge:storage_blocks/concrete')
    .itemOutputs('gtceu:concrete_dust')
    .duration(98)
    .EUt(2)

  // glowstone_particles
  event.recipes.gtceu.macerator('kubejs:laboratoryblocks/glowstone_particles')
    .itemInputs('minecraft:glowstone_dust')
    .itemOutputs('12x laboratoryblocks:glowstone_particles')
    .duration(20)
    .EUt(8)

  // redstone_particles
  event.recipes.gtceu.macerator('kubejs:laboratoryblocks/redstone_particles')
    .itemInputs('minecraft:redstone')
    .itemOutputs('12x laboratoryblocks:redstone_particles')
    .duration(20)
    .EUt(8)

  // plant_fiber
  event.recipes.gtceu.macerator('kubejs:ex_hammers/plant_fiber/from/saplings')
    .itemInputs('#minecraft:saplings')
    .chancedOutput('1x ex_hammers:plant_fiber', 2500, 0)
    .duration(10)
    .EUt(8)

  event.recipes.gtceu.macerator('kubejs:ex_hammers/plant_fiber/from/grass')
    .itemInputs('minecraft:grass')
    .itemOutputs('1x ex_hammers:plant_fiber')
    .chancedOutput('1x ex_hammers:grass_seed', 2500, 0)
    .duration(40)
    .EUt(8)

  event.recipes.gtceu.macerator('kubejs:ex_hammers/plant_fiber/from/tall_grass')
    .itemInputs('minecraft:tall_grass')
    .itemOutputs('2x ex_hammers:plant_fiber')
    .chancedOutput('1x ex_hammers:grass_seed', 5000, 0)
    .duration(40)
    .EUt(8)

  // ancient_debris
  event.recipes.gtceu.macerator('kubejs:minecraft/ancient_debris')
    .itemInputs('minecraft:netherite_block')
    .itemOutputs('1x minecraft:ancient_debris')
    .duration(50)
    .EUt(8)

  // common_material
  event.recipes.gtceu.macerator('kubejs:apotheosis/common_material')
    .itemInputs('gtceu:metal_mixture_dust')
    .itemOutputs('2x apotheosis:common_material')
    .chancedOutput('1x apotheosis:common_material', 5000, 0)
    .chancedOutput('1x apotheosis:common_material', 2500, 0)
    .duration(50)
    .EUt(8)

  // gem_dust
  event.recipes.gtceu.macerator('kubejs:apotheosis/gem_dust')
    .itemInputs('apotheosis:gem')
    .itemOutputs('4x apotheosis:gem_dust')
    .chancedOutput('1x apotheosis:gem_dust', 5000, 0)
    .chancedOutput('2x apotheosis:gem_dust', 2500, 0)
    .chancedOutput('3x apotheosis:gem_dust', 1250, 0)
    .duration(50)
    .EUt(8)

  // quantum_infused_dust
  event.recipes.gtceu.macerator('kubejs:advanced_ae/quantum_infused_dust')
    .itemInputs('advanced_ae:shattered_singularity')
    .itemOutputs('1x advanced_ae:quantum_infused_dust')
    .duration(30)
    .EUt(2)


  // fin //

})