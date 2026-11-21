// priority: 0


// adds tooltip lines for edited food buffs based on global.mb_foodEffectDurationTweaks from startup script

// time formatting (MMSS)
function formatMMSS(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds || 0));
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    return String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0');
}

// "namespace:path" -> "effect.namespace.path" (MC style translation key)
function effectTranslateKey(effectId) {
    const parts = (effectId || '').split(':');
    const ns = parts[0] || 'minecraft';
    const path = parts[1] || effectId;
    return `effect.${ns}.${path}`;
}

// roman numerals for amplifier display
function romanNumeral(n) {
    const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return romans[n - 1] || String(n);
}

// build and apply tooltips
ItemEvents.tooltip(event => {
    const tweaks = global.mb_foodEffectDurationTweaks;

    // if this is undefined, check the logs first
    if (!tweaks) {
        // uncomment for a log line
        // console.log('[MB] global.mb_foodEffectDurationTweaks was undefined in client tooltips!');
        return;
    }

    Object.entries(tweaks).forEach(([itemId, effects]) => {
        const lines = [];

        effects.forEach(e => {
            const time = formatMMSS(e.duration);

            // build like "Comfort (15:00)" localized effect name
            // if amplifier >0, show roman numerals
            const amp = (e.amplifier ?? 0);
            const ampText = amp > 0 ? ` ${romanNumeral(amp + 1)}` : '';

            // text component, but event.add also accepts plain strings
            // keeping it as Text lets the effect name localize properly
            lines.push(
                Text.blue(Text.translate(effectTranslateKey(e.effect)).append(`${ampText} (${time})`))
            );
        });

        // add all lines at once for this item
        event.add(itemId, lines);
    });
});


// fin //