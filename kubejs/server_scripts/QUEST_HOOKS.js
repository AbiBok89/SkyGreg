// FTBQuestsEvents.completed(event => {
//     console.info('[Quest Hooks Basic Logging] ---------- FTBQuestsEvents.completed fired ----------')

//     const completedObject = event.getObject()
//     const server = event.server || Utils.server

//     if (!completedObject) {
//         console.info('[Quest Hooks Basic Logging] STOP: completedObject was missing.')
//         return
//     }

//     if (!server) {
//         console.info('[Quest Hooks Basic Logging] STOP: server was missing.')
//         return
//     }

//     console.info('[Quest Hooks Basic Logging] Completed object type = ' + completedObject.objectType)
//     console.info('[Quest Hooks Basic Logging] Completed object id = ' + completedObject.id)

//     // only react to task completions
//     if (String(completedObject.objectType) !== 'TASK') {
//         console.info('[Quest Hooks Basic Logging] STOP: completed object was not a TASK.')
//         return
//     }

//     // ========================================================
//     // Enable Flux Storage
//     // Task tag: enable_flux_storage
//     // ========================================================

//     if (completedObject.hasTag('enable_flux_storage')) {
//         if (server.persistentData.enable_flux_storage === 1) {
//             console.info('[Enable Flux Storage] Flux Storage was already unlocked.')
//             return
//         }

//         server.persistentData.enable_flux_storage = true

//         console.info('[Enable Flux Storage] SUCCESS: enable_flux_storage was set to true/1.')
//         console.info('[Enable Flux Storage] New raw persistent value = ' + server.persistentData.enable_flux_storage)

//         // auto reload - silent
//         server.scheduleInTicks(1, () => {
//             console.info('[Enable Flux Storage] Running reload after unlock.')
//             server.runCommandSilent('reload')
//         })

//         return
//     }

//     // ========================================================
//     // Reset Flux Storage
//     // Task tag: reset_flux_storage
//     // ========================================================

//     if (completedObject.hasTag('reset_flux_storage')) {
//         if (server.persistentData.enable_flux_storage === 0 || server.persistentData.enable_flux_storage == null) {
//             console.info('[Reset Flux Storage] Flux Storage was already locked/reset.')
//             return
//         }

//         server.persistentData.enable_flux_storage = false

//         console.info('[Reset Flux Storage] RESET: enable_flux_storage was set to false/0.')
//         console.info('[Reset Flux Storage] New raw persistent value = ' + server.persistentData.enable_flux_storage)

//         // auto reload - silent
//         server.scheduleInTicks(1, () => {
//             console.info('[Reset Flux Storage] Running reload after reset.')
//             server.runCommandSilent('reload')
//         })

//         return
//     }

//     console.info('[Reset Flux Storage] STOP: completed task did not have enable_flux_storage or reset_flux_storage tag.')
// })