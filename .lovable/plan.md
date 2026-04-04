

## Problem

The page uses Raleway font at default weight 400 with reduced opacity (`text-foreground/80`, `text-muted-foreground`), making text appear thin and hard to read. This affects body text, descriptions, and list items across the CO2 laser page and globally.

## Plan

### 1. Increase base body font weight globally (`src/index.css`)
- Set `font-weight: 500` on `body` so all Raleway body text is medium weight instead of regular (400).

### 2. Fix low-contrast text on the CO2 page (`src/pages/FrakcionnyyLazerCo2Spb.tsx`)
- Replace all `text-foreground/80` with `text-foreground` (full opacity) for list items and descriptions.
- Replace `text-muted-foreground` on key descriptive paragraphs with `text-foreground/90` for better readability.
- Keep `text-muted-foreground` only on small disclaimers and secondary labels where lighter text is intentional.

### 3. Ensure headings remain distinct
- Headings already use Cormorant Garamond at weight 600 — no changes needed there.

### Scope
- `src/index.css` — one line change (add `font-weight: 500`)
- `src/pages/FrakcionnyyLazerCo2Spb.tsx` — ~10 class replacements for opacity/color

