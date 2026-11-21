// Allows #forge:ingots/forged_netherite to repair netherite items in an anvil.

import crafttweaker.forge.api.event.anvil.AnvilUpdateEvent;
import crafttweaker.api.item.ForgeItemStack;

val forgedNetherite = <tag:items:forge:ingots/forged_netherite>;

// List every netherite thing you want affected.
val netheriteDefs = [
  <item:minecraft:netherite_helmet>.definition,
  <item:minecraft:netherite_chestplate>.definition,
  <item:minecraft:netherite_leggings>.definition,
  <item:minecraft:netherite_boots>.definition,

  <item:minecraft:netherite_sword>.definition,
  <item:minecraft:netherite_pickaxe>.definition,
  <item:minecraft:netherite_axe>.definition,
  <item:minecraft:netherite_shovel>.definition,
  <item:minecraft:netherite_hoe>.definition,

  <item:ex_hammers:netherite_hammer>.definition,
  <item:easypaxellite:netherite_paxel>.definition,
  <item:farmersdelight:netherite_knife>.definition
];

events.register<AnvilUpdateEvent>(event => {
  // Cast the event stacks into ForgeItemStack so we can read damage/maxDamage and set withDamage.
  val left = event.left as ForgeItemStack;
  val right = event.right as ForgeItemStack;

  // Must be one of the netherite items we listed
  var isTarget = false;
  for def in netheriteDefs {
    if (left.definition == def) {
      isTarget = true;
      break;
    }
  }
  if (!isTarget) return;

  // Only when the right item is in your tag (ingredient in stack operator)
  if (!(forgedNetherite in right)) return;

  // Only if it can actually be repaired (damageable + damaged)
  if (!left.damageableItem) return;
  if (!left.damaged) return;

  // Fully repair with one ingot
  val repairAmount = left.maxDamage;
  var newDamage = left.damage - repairAmount;
  if (newDamage < 0) newDamage = 0;

  // Set the anvil result + costs
  event.output = left.withDamage(newDamage);
  event.materialCost = 1;                    // consumes 1 ingot
  event.cost = 1;                            // XP level cost

  // Tell Forge to accept our custom output
  event.setAllow();
});
