# PRD — ONE NZ × TBMC Dynamic Brand System page
v2.0 · 6 Aug 2026 · Owner: TBMC (Momentus) for One NZ Memory + Intelligence

## 1 · Purpose
A single shareable web page that IS the co-brand: shows the lockup system live (static + animated), the stamps, motifs in motion, imagery treatment, type, palette, taglines, and the system applied to documents, channels and merch. Dual-audience: One NZ M+I stakeholders (sell-in) and designers/devs (reference).

## 2 · Page frame
- Max content width 1180px, 64px side padding; hairline-separated sections, numbered mono headers `0N — NAME`.
- Grounds: dark `#0E0D11` / light `#FCFBFA`, switched by the nav toggle. All colors, hairlines, and logo variants must answer the toggle (CSS variables + cross-faded image pairs; 0.35s transitions).
- Nav: co-brand lockup (one.nz | bar | green TBMC icon + wordmark) with animated micro-trail beneath; right: `CO-BRAND SYSTEM · V1.0` + mode toggle button (green border, dot, `DARK/LIGHT MODE — SWITCH`).
- Footer: `ONE NZ × THE BRAND MEMORY CO.` · `NETWORKS CONNECT. MEMORIES COMPOUND.` · `● SYSTEM LIVE` (green).

## 3 · Sections
**Hero** — `BRAND MEMORY LAYER [ACTIVE]` status kicker; serif headline "One system. Two marks. Momentum between them."; body intro; full-width animated trail (18 units, omWave).

**01 Lockup** — four cards: 10C standard (headers/formal), 10A trail (covers/hero), 10D animated wave L→R (digital only), 10B two-way pulse connector (digital only). Construction: one.nz mark · 2px bar · TBMC icon ALWAYS in green (bright `#2BDE8C` on dark, deep `#17B26A` on light) + wordmark (white on dark / ink on light). Trail = 13 rounded units, opacity ramp 0.25→1, small→large left→right.

**02 Stamp systems** — the badge (bordered: lockup over hairline row `MEMORY + INTELLIGENCE` + `● PHASE ONE`), the memory card (REF/GENERATED/STATUS rows + hairline + Aura icon in green + `BRAND MEMORY LAYER [ACTIVE]` + `62 MEMORIES PLUGGED INTO THIS DOCUMENT`), the stamp line (Aura icon + `MEMORY LAYER [ACTIVE] · 62 MEMORIES IN THIS DOCUMENT`, lives above document footers). Memory counts are real per-document data.

**03 Motifs, in motion** — four cards over dot fields, all in the ground's green: pixel field (blocks, omPulse staggered), trail units (rows, omWave sweep), node connectors (45° traces ending in pads on a faint 30px grid, pads pulse), organic config (X cluster of 34px blocks + 70px core, omBreathe, flanking dot columns, two horizontal hairlines).

**04 Imagery** — rule set + six mocks. Rules row: SUBJECTS devices in hand · retail · network · business · people in motion / GRADE cool, desaturated · motion blur welcome · never warm stock / RULES duotone in green never blue · dots trace the subject · one chip per image. Mocks: IMG 01 people green duotone (grayscale + green `mix-blend-mode:color` 0.9 + ink multiply 0.22 + ink caption chip); IMG 02 pattern-traced iPhone (green dot-grid slab, rounded 26px, island cutout, omBreathe — the move when the shot isn't ours to own); IMG 03 mixed motif layering (ink band 24% / green band 11% / photo, dot spill, green hairline, pixel steps, TBMC chip); IMG 04 device traced over ghosted photo (photo at 0.32 opacity grayscale, dot slab over subject, chip `MEMORY IN EVERY CONNECTION.`); IMG 05 place/event backdrop (green duotone + centered serif place line + rule); IMG 06 stat hero (ink gradient scrim from left, kicker `AURA · THE SCALE`, serif scale line). IMG 01/03 are drag-drop image slots prefilled with supplied photography.

**05 Type** — specimen rows: ABC Arizona Mix Light (display, −0.045em), Geist Regular (body, 1.7), Geist Mono (labels/metadata, uppercase, 0.1–0.22em), Geist Mono descriptor register (0.3em, green) — with usage notes per row.

**06 Taglines** — six rows, serif 36px quotes + 310px mono note column:
1. "Every memory starts as a connection." — THE ORIGIN LINE · warm, human, editorial · opens documents, editorial and campaign-adjacent work.
2. "The network never drops. The brand never forgets." — THE PARTNERSHIP LINE · One NZ owns the first clause, TBMC the second · decks and any shared surface · always the full stop, never the comma · the side hit on merch.
3. "Five million connections. One memory." — THE SCALE LINE · the stat-hero slide, the exec moment, the whole Aura architecture in six words.
4. "Where connection becomes memory." — THE PLACE LINE · environments, section dividers, portal headers, event backdrops · quietly the M+I team's identity line.
5. "Memory in every connection." — THE PRODUCT LINE · in-product surfaces, next to the Memory Stamp, The Loop for frontline staff.
6. "Networks connect. Memories compound." — THE STAMP · four words · footers, lockup adjacency, under the memory stamp · never the headline, always present. Shown as a live footer-strip demo (lockup + MEMORY LAYER [ACTIVE] + stamp, wraps as whole groups on narrow screens; the stamp string itself never breaks).

**07 Shared palette** — INK `#111015` covers · WHITE `#FCFBFA` content · PAPER `#F2F1EE` cards · ONE GREEN `#2BDE8C` on ink · DEEP GREEN `#17B26A` on white. Rule line: green is a line, a numeral, a dot, a unit — never a fill, never body text; TBMC electric blue rests in co-branded work.

**08 The system in use** — four A4 document pages (cover ink, section cover, milestones content page, diagram in ink box); OTHER CHANNELS: social post 1:1 (origin line), title slide 16:9 (partnership line + `CO-BRANDED DECK · WHERE BOTH MARKS APPEAR`), event badge (Kia ora greeting, `ACCESS [ALL AREAS]`, trail); MERCH: '47 Clean Up cap — black, TBMC icon embroidered in One green, side hit "The brand never forgets" in green thread — plus spec card (EMBROIDERY icon-only in One green · SIDE HIT partnership second clause · COLOURWAYS black, more to follow · LOCKUP never on merch · LABEL woven M+I).

## 4 · Behaviors
- Toggle: swaps ~10 CSS variables + logo pairs; body background follows; no reload.
- Animations: omWave 2.6s ease-in-out infinite (trail sweep, negative delays ≈ 0.09–0.24s steps), omPulse 1.4–2.2s alternate (pulses/pixels), omBreathe 3.4–4.2s (clusters/traced slab). Motion is ambient — no hover states, no scroll triggers.
- Responsive: specimen grids collapse 2→1 below ~1160px (`auto-fit minmax(480px,1fr)`); card label bars `justify-content:space-between` with 12px gap, badges `white-space:nowrap`.

## 5 · Hard rules (acceptance)
- TBMC icon is always green in co-brand contexts; electric blue `#0100FF` never appears.
- Green never fills a surface or colors body copy.
- Serif = display only; Geist body; Geist Mono labels; uppercase metadata carries 0.1em+ tracking.
- Every mock carries the twin footer or a chip crediting both marks; the stamp line appears wherever a document footer is simulated.
- No emoji, no shadows; hairlines and flat surfaces; arrows typographic (→).
