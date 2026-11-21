// priority: 0


ServerEvents.recipes(event => {

  // common_material
  event.custom(
    {
      "type": "apotheosis:salvaging",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "adventure"
      }],
      "input": {
        "tag": "forge:dusts/metal_mixture"
      },
      "outputs": [{
        "min_count": 1,
        "max_count": 3,
        "stack": {
          "item": "apotheosis:common_material"
        }
      }]
    }
  )


  // fin //

})