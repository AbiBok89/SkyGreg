// priority: 0


ServerEvents.recipes(event => {

  let ULV = 7
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920


  // peripheralium_dust
  event.recipes.gtceu.centrifuge('kubejs:peripheralium/peripheralium_dust')
    .itemInputs('2x peripheralium:peripheralium_dust')
    .itemOutputs('1x minecraft:redstone')
    .itemOutputs('1x minecraft:glowstone_dust')
    .duration(200)
    .EUt(7)


  // fin //

})