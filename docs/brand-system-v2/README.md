# ONE NZ × TBMC — Dynamic Brand System page · v2 handoff

One self-contained page: `onenz-tbmc-brand-system-v2.html`. Everything (fonts, logos, photos, animations, theme toggle) is inlined — no build, no dependencies, works offline.

## Deploy
**Option A — drop-in (recommended).** Replace the previously deployed single HTML file with `onenz-tbmc-brand-system-v2.html`. Any static host (nginx, S3, Vercel, intranet folder).

**Option B — source.** Serve the `source/` folder from its root (`npx serve source`, nginx root, etc.) and open `Brand System.dc.html`. Keep the folder layout exactly as shipped — paths are relative (`assets/`, `exports/skill-guide/`, `_ds/`, `support.js`, `image-slot.js`).

## What changed since v1
- Sections renumbered **01–08**; hero header hairline removed.
- Type: body copy now **Geist** (regular); all labels/metadata **Geist Mono**; ABC Arizona Mix reserved for serif display.
- **03 Motifs** — now four, all animated: pixel field, trail units, node connectors, organic config.
- **04 Imagery** (new) — six treatment mocks over real photography: green duotone (people), pattern-traced iPhone, mixed motif layering, device traced over the shot, event backdrop (place line), stat hero (scale line). Cards 1 and 3 are drag-drop image slots.
- **06 Taglines** (new) — the six-line ladder with usage notes + a live footer stamp demo.
- **08 System in use** — adds OTHER CHANNELS (social 1:1, title slide 16:9, event badge) and **MERCH** (the black cap, green icon, "The brand never forgets" side hit, spec card).
- Page footer now carries the stamp: `NETWORKS CONNECT. MEMORIES COMPOUND.`

## Notes for devs
- Theme toggle sets CSS custom properties on the root section (`--pg/--tx/--tx2/--tx3/--ln/--cardbd/--bar/--grn/--grnsoft`, plus `--sd/--sl` which cross-fade the dark/light logo image pairs). Persisting mode: store the flag and set the same variables on load.
- Animations are three CSS keyframes: `omWave` (2.6s trail sweep), `omPulse` (1.4s alternate pulse), `omBreathe` (opacity breathe). Stagger via negative `animation-delay`.
- `<image-slot>` (imagery cards 1 & 3): outside our design runtime the slots are read-only — they render their prefilled photos; drag-drop persistence is inactive. To change the photos, edit the `src` attribute (source) or re-export.
- Related packs (unchanged since last delivery): the A4 document-system skill guide (`GUIDE.md` + 8 concept pages) and the hi-res logo pack (PNG + animated GIF).

## File map
- `onenz-tbmc-brand-system-v2.html` — standalone page (deploy this)
- `PRD.md` — full product/content spec for rebuilding elsewhere
- `source/Brand System.dc.html` — source page
- `source/support.js`, `source/image-slot.js` — runtime + image-slot component
- `source/assets/` — logo crops, Aura icons, photography, cap render
- `source/exports/skill-guide/` — the four doc-page images shown in section 08
- `source/_ds/` — fonts + design tokens (ABC Arizona Mix, TWK Lausanne, DM Mono)
