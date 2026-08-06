# ONE NZ × The Brand Memory Co. — Co-brand Document System
## Skill build guide (page recipes, scale, assets)

The design system for co-branded ONE NZ / TBMC documents: dark covers, white content pages, ink diagram boxes. Reference images `01`–`08` in this folder are the approved concept set; `assets/` holds every logo crop needed to rebuild them.

---

## 1 · Foundations

**Canvas.** Every page is A4 portrait at 96 dpi: **794 × 1123 px**. All specs below are in these page-pixels. Render at 2× (1588×2246) for crisp export; print PDF maps 794px → 210mm.

**Grounds — three only:**
- `#111015` ink — covers and section covers (never content pages)
- `#FCFBFA` white — ALL content pages (body, milestones, scope, diagrams)
- `#F2F1EE` paper — light cover variant + light-grey cards on white pages

**Greens (One NZ accent).** Green is a line, a numeral, a dot, a unit — never a fill, never body text:
- `#2BDE8C` bright green — on ink grounds
- `#17B26A` deep green — on white/paper grounds
- TBMC electric blue `#0100FF` is retired in co-brand documents.

**Type stack:**
- Display: **ABC Arizona Mix** Light 300, tracking −0.045em, leading 1.0–1.05 (serif headlines)
- Body: **TWK Lausanne** 300 (13.5px/1.7 intro, 11.5px/1.6 card body)
- Labels: **DM Mono** (stand-in for ABC Favorit Mono), uppercase, tracking 0.09–0.18em
- Descriptor + stamps: **Geist Mono** uppercase, tracking 0.24–0.3em

**Margins.** Content column: left/right **44px**. Header row top **36px** (covers) / **32px** (content). Footer baseline row bottom **34px** (covers) / **30px** (content). No full-width header rule on covers; content pages keep a 1px rule at y≈78 (`rgba(24,23,28,0.14)`).

---

## 2 · The co-brand lockup (headers)

Two marks joined by a vertical bar, with the momentum trail beneath (the "10a lockup").

**Cover scale:** one.nz logo h**26** · bar 1.5×34 (`rgba(255,255,255,0.4)` on ink / `rgba(24,23,28,0.35)` on paper) · gap 16 each side · TBMC icon h**28** (GREEN tint: bright on ink, deep on paper) + gap 7 + TBMC wordmark h**28** (white on ink / ink on paper).
**Trail under the lockup:** 13 rounded units spanning the lockup width (space-between), margin-top 9: widths 2,2,2,2,3,3,3,3,4,4,6,10,16 · heights 2–3 · radius 1 · opacity ramp 0.25→1, in the ground's green.
**Header right:** `MEMORY + INTELLIGENCE` — Geist Mono 8px, tracking 0.3em, grey (`#7D7C82` ink / `#8B8A86` paper).
**Content-page scale:** one.nz h20 · bar 1×26 · icon h21 + words h21 (gap 5); right slot carries `SECTION 0N · NAME` in DM Mono 8.5px. No trail at this scale.

Assets: `assets/onenz-on-dark.png`, `assets/onenz-on-light.png`, `assets/tbmc-icon-green(-deep).png`, `assets/tbmc-words-white|ink.png`. Pre-composed masters: `assets/logo-lockup-*.png`, `assets/logo-trail-*.png`.

---

## 3 · Page classes

### A. Document cover — dark or paper (images 01, 02)
1. Header lockup (above) — no rule below it.
2. Title block at y≈214: serif display **57px**, up to 2 lines; green rule 64×2 at margin-top 34; Lausanne 19px/1.5 subtitle, max-width 560, grey (`#B9B8BC` ink / `#55545A` paper).
3. Motif, mid-page right (see §5), sitting over a dot field.
4. **One metadata card**, bottom-left (bottom 96, left 44), shrink-to-fit width (equal 20px padding both sides), border `rgba(255,255,255,0.16)` / `rgba(24,23,28,0.22)`, radius 4:
   - Four DM Mono rows 9.5px, tracking 0.09em, line-height 2.05: `REF … V1.0` / `GENERATED …` / `PREPARED FOR …` / `STATUS …`
   - Internal hairline divider (margin-top 14, padding-top 14)
   - **Memory stamp**: Aura icon h22 (green) + `BRAND MEMORY LAYER [ACTIVE]` (Geist Mono 8px, 0.24em, green) + `N MEMORIES PLUGGED INTO THIS DOCUMENT` (DM Mono 8.5px, grey). No trail inside the card.
5. Footer: `ONE NZ × THE BRAND MEMORY CO.` left · date or `REF … / CONFIDENTIAL` right — DM Mono 9px, 0.14em, `#6E6D73` / `#8B8A86`.

### B. Section cover — always ink (images 03, 04)
Header lockup + M+I right, no rule. At y≈480: green mono numeral **34px** (`02`) + `SECTION` (10.5px, 0.22em, grey); serif title **48px**; green rule 56×2. Nothing else — no intro copy, no index. One subtle motif bottom-right at reduced opacity (cluster at 0.7 / trail rows at 0.75, dot field at ~0.3). Footer: `0N / SECTION NAME` left, brand twin right.

### C. Content page — always white (images 05, 06, 07)
Header (content scale) + rule. Kicker row: deep-green DM Mono 9.5px 0.18em left, doc ref right. Serif h2 **31px**, intro 13.5px/1.7 max-width 660. Then compose from:
- **Product/feature cards**: paper `#F2F1EE`, radius 6, padding 22–28; green kicker 8.5px, serif 19px title, 11.5px body, `SECTION 0N →` link line
- **Milestone rows**: hairline-separated, padding 26px 0: green week label (w104) + serif 17px title + body + right-aligned mono status (w150)
- **Scope lists**: filled green unit (6×6 r1.5) = in scope; outlined unit = out of scope; 12px/1.55 items, gap 22
- **Stats row**: green tick 26×2 + serif 36–38px numeral + mono label
- **Ink callout**: `#18171C` radius 6, corner dot field, green mono kicker + `#C9C8CD` body — max one per page
- **Spec grid**: 3-column mono rows (label grey / value ink), hairline-topped
- **Stamp line** above footer: hairline, Aura icon h16 + `MEMORY LAYER [ACTIVE]` + `· N MEMORIES IN THIS DOCUMENT`, right slot for `FIG`/section tag
Pages must fill to ≈y1035 — add spec rows or open row padding rather than leaving voids.

### D. Diagram page — white, diagram in an ink box (image 08)
Content-page header/kicker/h2/intro, then ALL diagram work inside one ink box (`#18171C`, radius 6, corner dot field). Inside: node cards `#1F1E25`, border `rgba(255,255,255,0.24)`, radius 6; serif node titles, green mono numbers; connectors 1.5px green lines with 14px corner radii, 8px triangle arrowheads, 7px green square joints. Legend centered under the diagram (mono 8.5px). FIG tag + stamp line below the box. Never draw a diagram directly on white.

---

## 4 · The memory stamp (trust mark)

Appears once per cover (inside the metadata card) and once per content page (stamp line above footer). Grammar: Aura icon (green) + `BRAND MEMORY LAYER [ACTIVE]` + memory count. The count is real per-document data — vary it. Icon: `assets/aura-icon-green(-deep).png`.

---

## 5 · Motifs (two, interchangeable)

Over a **dot field** (radial-gradient dots: 1–1.1px, grid 15–16px, green at 0.3 alpha, container opacity 0.3–0.5):
1. **Pixel field** (image 01/03): cluster of 8–16 squares on a 36–40px grid, one 2×-unit anchor block, opacities 0.25–1, a few offset strays.
2. **Trail units** (image 02/04): 4–5 rows of rounded pills (h13–14, r2.5–3, unit widths 26/52/78/104/130+), staggered left-indents, opacities 0.2–1 — reads left→right acceleration.
Covers: motif mid-page right (~y560–900). Section covers: smaller, bottom-right, reduced opacity. Content pages: never — dot fields only inside ink boxes/callouts.

---

## 6 · Sample document (the concept images, in order)

01 cover (ink, pixel field) → 03 section cover 02 → 05 overview content → 06 milestones → 07 scope → 08 diagram in ink box → 04 section cover 03 → … repeat per section. 02 is the paper cover alternative for workshop/pre-read docs.

## 7 · Rules that must hold

- Covers and section covers dark (or paper for pre-reads); content pages always white.
- Green never fills a surface or colours body text.
- One metadata card per cover; one ink callout max per content page.
- The trail always grows/strengthens left → right.
- No emoji, no drop shadows; hairlines and flat surfaces only. Arrows are typographic (→).
- Footer twin `ONE NZ × THE BRAND MEMORY CO.` on every page.
