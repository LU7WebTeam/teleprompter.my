# Brand spec — Teleprompter.my revamp

Source: logo `assets/logo.png` (Blue-BG-Tele.png). Sampled brand blue: **#182B9E** (deep royal blue). Direction: modern-minimal (Linear/Vercel) posture, **inverted to dark premium** to honour the Frisk reference (Q1: close to reference). Brand blue kept as the accent.

System (one sentence): dark near-black canvas with a subtle blue undertone, hairline borders, a single decisive brand-blue accent, large geometric display type over a clean body sans, and real event photography as the primary texture.

## Tokens (OKLch)
```css
:root {
  --bg:           oklch(15% 0.010 264);  /* near-black, blue undertone */
  --surface:      oklch(19% 0.012 264);  /* lifted card / form */
  --surface-2:    oklch(23% 0.014 264);  /* hover */
  --fg:           oklch(97% 0.004 264);  /* near-white */
  --muted:        oklch(66% 0.012 264);  /* dim text */
  --border:       oklch(30% 0.012 264);  /* hairline */
  --accent:       oklch(40% 0.190 264);  /* brand blue #182B9E */
  --accent-bright:oklch(63% 0.170 262);  /* glow / active / bright text */
  --status:       oklch(72% 0.150 150);  /* rates/positive - restrained green, one domain accent */

  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;
}
```

## Posture rules
1. Dark premium canvas; brand blue is the only saturated hue (used on CTAs, numbering, active/hover, glow) — at most twice per screen as fills.
2. Hairline borders, shadows only on floating elements (sticky nav, FAB, cards on hover); depth via surface layering, not heavy shadows.
3. Display face (Space Grotesk) never used for body; body uses Inter. Prices/specs in mono with `tabular-nums`.
4. Tight letter-spacing on display (`-0.02em`); generous section padding; one kinetic flourish (marquee).
5. Real photography carries texture — never hand-drawn substitutes. Placeholder logo slots are neutral monogram chips, clearly labelled for swap.
