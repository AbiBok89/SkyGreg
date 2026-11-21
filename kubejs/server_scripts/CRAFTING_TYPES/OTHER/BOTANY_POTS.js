// priority: 0


ServerEvents.recipes(event => {

  event.remove({ id: 'botanytrees:gtceu/rubber' })
  event.custom(
    {
      "type": "botanypots:crop",
      "seed": { "item": "gtceu:rubber_sapling" },
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": { "block": "gtceu:rubber_sapling" },
      "drops": [
        {
          "chance": 1.00,
          "output": { "item": "gtceu:rubber_log" },
          "minRolls": 2,
          "maxRolls": 4
        },
        {
          "chance": 0.10,
          "output": { "item": "minecraft:stick" },
          "minRolls": 1,
          "maxRolls": 2
        },
        {
          "chance": 0.65,
          "output": { "item": "gtceu:sticky_resin" }
        },
        {
          "chance": 0.25,
          "output": { "item": "gtceu:rubber_sapling" }
        }
      ]
    }
  )

  // Optional entries for outputs from 1-4

  let botanyPotMachine = (
    input, category, blockID,

    output1, qtyMin1, qtyMax1, chance1,
    output2, qtyMin2, qtyMax2, chance2,
    output3, qtyMin3, qtyMax3, chance3,
    output4, qtyMin4, qtyMax4, chance4
  ) => {

    let drops = []

    if (output1) {
      drops.push({
        chance: chance1,
        output: { item: output1 },
        minRolls: qtyMin1,
        maxRolls: qtyMax1
      })
    }

    if (output2) {
      drops.push({
        chance: chance2,
        output: { item: output2 },
        minRolls: qtyMin2,
        maxRolls: qtyMax2
      })
    }

    if (output3) {
      drops.push({
        chance: chance3,
        output: { item: output3 },
        minRolls: qtyMin3,
        maxRolls: qtyMax3
      })
    }

    if (output4) {
      drops.push({
        chance: chance4,
        output: { item: output4 },
        minRolls: qtyMin4,
        maxRolls: qtyMax4
      })
    }

    event.custom({
      type: "botanypots:crop",
      seed: { item: input },
      categories: [category],
      growthTicks: 1200,
      display: { block: blockID },
      drops: drops
    })
  }

  // input, category, display (block)
  // output min, max, chance (first)
  // output min, max, chance (second optional)
  // output min, max, chance (third optional)
  // output min, max, chance (fourth optional)

  // corn_seeds
  botanyPotMachine(
    "brewery:corn_seeds", "dirt", "brewery:corn_crop",
    "brewery:corn", 1, 2, 1,
    "brewery:corn_seeds", 1, 2, 0.05,
  )

  // barley_seeds
  botanyPotMachine(
    "brewery:barley_seeds", "dirt", "brewery:barley_crop",
    "brewery:barley", 1, 2, 1,
    "brewery:barley_seeds", 1, 2, 0.05,
  )

  // hops_seeds
  botanyPotMachine(
    "brewery:hops_seeds", "dirt", "brewery:hops_crop",
    "brewery:hops", 1, 2, 1,
    "brewery:hops_seeds", 1, 2, 0.05,
  )

  // strawberry_seeds
  botanyPotMachine(
    "bakery:strawberry_seeds", "dirt", "bakery:strawberry_crop",
    "bakery:strawberry", 1, 2, 1,
    "bakery:strawberry_seeds", 1, 2, 0.05,
  )

  // oat_seeds
  botanyPotMachine(
    "bakery:oat_seeds", "dirt", "bakery:oat_crop",
    "bakery:oat", 1, 2, 1,
    "bakery:oat_seeds", 1, 2, 0.05,
  )

  // red_grape_seeds
  botanyPotMachine(
    "vinery:red_grape_seeds", "dirt", "vinery:red_grape_bush",
    "vinery:red_grape", 1, 2, 1,
    "vinery:red_grape_seeds", 1, 2, 0.05,
  )

  // white_grape_seeds
  botanyPotMachine(
    "vinery:white_grape_seeds", "dirt", "vinery:white_grape_bush",
    "vinery:white_grape", 1, 2, 1,
    "vinery:white_grape_seeds", 1, 2, 0.05,
  )

  // savanna_grape_seeds_red
  botanyPotMachine(
    "vinery:savanna_grape_seeds_red", "dirt", "vinery:savanna_grape_bush_red",
    "vinery:savanna_grapes_red", 1, 2, 1,
    "vinery:savanna_grape_seeds_red", 1, 2, 0.05,
  )

  // savanna_grape_seeds_white
  botanyPotMachine(
    "vinery:savanna_grape_seeds_white", "dirt", "vinery:savanna_grape_bush_white",
    "vinery:savanna_grapes_white", 1, 2, 1,
    "vinery:savanna_grape_seeds_white", 1, 2, 0.05,
  )

  // taiga_grape_seeds_red
  botanyPotMachine(
    "vinery:taiga_grape_seeds_red", "dirt", "vinery:taiga_grape_bush_red",
    "vinery:taiga_grapes_red", 1, 2, 1,
    "vinery:taiga_grape_seeds_red", 1, 2, 0.05,
  )

  // taiga_grape_seeds_white
  botanyPotMachine(
    "vinery:taiga_grape_seeds_white", "dirt", "vinery:taiga_grape_bush_white",
    "vinery:taiga_grapes_white", 1, 2, 1,
    "vinery:taiga_grape_seeds_white", 1, 2, 0.05,
  )

  // jungle_grape_seeds_red
  botanyPotMachine(
    "vinery:jungle_grape_seeds_red", "dirt", "vinery:jungle_grape_bush_red",
    "vinery:jungle_grapes_red", 1, 2, 1,
    "vinery:jungle_grape_seeds_red", 1, 2, 0.05,
  )

  // jungle_grape_seeds_white
  botanyPotMachine(
    "vinery:jungle_grape_seeds_white", "dirt", "vinery:jungle_grape_bush_white",
    "vinery:jungle_grapes_white", 1, 2, 1,
    "vinery:jungle_grape_seeds_white", 1, 2, 0.05,
  )

  // grass_seed
  botanyPotMachine(
    "ex_hammers:grass_seed", "dirt", "minecraft:grass",
    "minecraft:grass", 1, 2, 1,
    "minecraft:tall_grass", 1, 2, 0.5,
    "minecraft:grass_block", 1, 1, 0.25,
    "ex_hammers:grass_seed", 1, 2, 0.05,
  )


  // fin //

})