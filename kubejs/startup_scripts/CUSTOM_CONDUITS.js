// priority: 0


EnderIOEvents.conduits(event => {

    event.registerEnergyConduit("bronze_energy_conduit", "Bronze Energy Conduit", 128)
    event.registerEnergyConduit("steel_energy_conduit", "Steel Energy Conduit", 512)
    event.registerEnergyConduit("aluminium_energy_conduit", "Aluminium Energy Conduit", 2048)
    event.registerEnergyConduit("stainless_steel_energy_conduit", "Stainless Steel Energy Conduit", 8192)


    // fin //

})


















// works, kinda, but not good for conduits, good for custom batteries if needed

// // kubejs/startup_scripts/MB_furnace_fe_storage.js
// // Forge 1.20.1 + KubeJS + PowerfulJS (1.20.1 line)
// // Adds an FE energy storage capability to the vanilla furnace BlockEntity type.

// // Stored on the block entity NBT:
// const MB_FE_KEY = "mb_fe";

// // Tweak these:
// const MB_FE_CAPACITY = 10000;
// const MB_FE_MAX_RECEIVE = 100000;
// const MB_FE_MAX_EXTRACT = 100000;

// CapabilityEvents.blockEntity(event => {
//     // IMPORTANT: 1.20.1 uses event.attach(...), not attachCapability(...)
//     event.attach(
//         "enderio:conduit", // block entity type id
//         CapabilityBuilder.ENERGY.customBlockEntity()
//             .canExtract(() => true)
//             .canReceive(() => true)

//             .getEnergyStored(be => {
//                 return be.persistentData.getInt(MB_FE_KEY);
//             })
//             .getMaxEnergyStored(() => {
//                 return MB_FE_CAPACITY;
//             })

//             .extractEnergy((be, amount, simulate) => {
//                 const stored = be.persistentData.getInt(MB_FE_KEY);
//                 const toExtract = Math.min(stored, Math.min(MB_FE_MAX_EXTRACT, amount));

//                 if (!simulate && toExtract > 0) {
//                     be.persistentData.putInt(MB_FE_KEY, stored - toExtract);
//                     be.setChanged();
//                 }
//                 return toExtract;
//             })

//             .receiveEnergy((be, amount, simulate) => {
//                 const stored = be.persistentData.getInt(MB_FE_KEY);
//                 const space = MB_FE_CAPACITY - stored;
//                 const toReceive = Math.min(space, Math.min(MB_FE_MAX_RECEIVE, amount));

//                 if (!simulate && toReceive > 0) {
//                     be.persistentData.putInt(MB_FE_KEY, stored + toReceive);
//                     be.setChanged();
//                 }
//                 return toReceive;
//             })
//     );
// });
