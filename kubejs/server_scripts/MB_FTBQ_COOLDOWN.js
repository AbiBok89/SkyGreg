// priority: 0


// UNUSED

// =====================
// CONFIG
// =====================
const COOLDOWNS = [
    // {
    //     name: 'Oak Log',
    //     questId: '0964E994296799AC',
    //     taskId: '0453345F661CF454',
    //     cooldownMinutes: 3
    // },
    // {
    //     name: 'Iron Pack',
    //     questId: '3BFE9A22621FB4FB',
    //     taskId: '23B083EC5FB8ED89',
    //     cooldownMinutes: 2
    // },
    // {
    //     name: 'Basic Electronic Circuit',
    //     questId: '7AF39AE69D4ED951',
    //     taskId: '582350AE6EC3B3B8',
    //     cooldownMinutes: 0.5
    // },
];

// 20 = 1s, 200 = 10s, 1200 = 60s
const CHECK_TIMER_TICKS = 20;
const TELL_ON_COMPLETE = true;

// =====================
// HELPERS
// =====================
function safeKey(id) {
    return String(id).replace(/[^a-zA-Z0-9_]/g, '_');
}

function nowMs() {
    return Date.now(); // real-world time; offline time counts
}

function storageKeyForQuest(questId) {
    return `mb_ftbq_lastComplete_${safeKey(questId)}`;
}

function getLastCompleteMs(player, questId) {
    const k = storageKeyForQuest(questId);
    return player.persistentData.getLong(k) || 0;
}

function setLastCompleteMs(player, questId, ms) {
    const k = storageKeyForQuest(questId);
    player.persistentData.putLong(k, ms);
}

function cooldownSeconds(entry) {
    return Math.max(1, Math.floor(entry.cooldownMinutes * 60));
}

function elapsedSecondsSinceLastComplete(player, questId, entry) {
    const last = getLastCompleteMs(player, questId);
    if (last <= 0) return cooldownSeconds(entry); // never completed => ready immediately
    return Math.floor((nowMs() - last) / 1000);
}

function remainingSeconds(player, questId, entry) {
    const el = elapsedSecondsSinceLastComplete(player, questId, entry);
    return Math.max(0, cooldownSeconds(entry) - el);
}

function minutesCeilFromSeconds(sec) {
    return Math.max(0, Math.ceil(sec / 60));
}

// =====================
// REGISTER ONE COOLDOWN (own scope per quest)
// =====================
function registerCooldown(entry, index) {
    if (!entry.questId || !entry.taskId) {
        console.warn(`[MB] Skipping entry index ${index} because questId/taskId is missing.`);
        return;
    }
    if (typeof entry.cooldownMinutes !== 'number' || entry.cooldownMinutes < 0) {
        console.warn(`[MB] Skipping entry index ${index} because cooldownMinutes is invalid.`);
        return;
    }

    console.info(`[MB] Registering cooldown: ${entry.name || '(no name)'} | quest=${entry.questId} | task=${entry.taskId} | cd=${entry.cooldownMinutes}m`);

    FTBQuestsEvents.completed(entry.questId, event => {
        const player = event.player;
        setLastCompleteMs(player, entry.questId, nowMs());

        if (TELL_ON_COMPLETE) {
            const remS = remainingSeconds(player, entry.questId, entry);
            player.tell(`[Shop Cooldown] ${entry.name || 'Quest'}: ${minutesCeilFromSeconds(remS)} minute(s) until repeat! UwU`);
        }
    });

    FTBQuestsEvents.customTask(entry.taskId, event => {
        event.maxProgress = cooldownSeconds(entry);
        event.setCheckTimer(CHECK_TIMER_TICKS);

        event.setCheck((task, player) => {
            const el = elapsedSecondsSinceLastComplete(player, entry.questId, entry);
            task.progress = Math.min(cooldownSeconds(entry), el);
        });
    });
}

// =====================
// REGISTER ALL COOLDOWNS
// =====================
for (let i = 0; i < COOLDOWNS.length; i++) {
    registerCooldown(COOLDOWNS[i], i);
}

// Reminder: after editing IDs
// /reload
// /ftbquests reload
