# TBMC × HEX Design System

Design system extracted from the Figma file **"Momentus + HEX (Updates) (Copy).fig"** — a 112-frame brand-kit deck ("Brand Kit Update 6, Thu 28 2026") in which studio **HEX** presents the evolving visual identity for **The Brand Memory Co. (TBMC)**, Momentus Group's brand-memory venture ("Create brand systems that shift, adapt and respond to the audience" / "The system that holds what a brand knows").

Source: the attached .fig only. It is a slide deck, not a component library — it defines **0 Figma component families, 0 text styles, and 1 variable** (`salmon`, in `tokens/fig-tokens.css`). Everything else here is read verbatim from the slide frames.

## CONTENT FUNDAMENTALS
- Voice is declarative and systems-flavored: "The system that holds what a brand knows", "A dynamic brand system where…". Short nouns for section titles: "Brand in Action", "Node Connectors", "Colours".
- Two registers: sentence-case editorial display copy (Arizona Mix / Lausanne), and UPPERCASE mono metadata strings in Favorit Mono — e.g. `IDENTITY OVERVIEW [TBMC]`, `EXTENDED [ACTIVE]`, `LAST UPDATE [26-05-26]`, `brand DEPT [PARENT] access v2.0 [parse] process exposure d1-l-888-00`. Square brackets, version numbers and serials (`d1-l-888-00`) are a deliberate motif.
- No emoji. Arrows (→) used as glyphs inside blue chip buttons.
- Brand name written in full: "The Brand Memory Co."; abbreviation "TBMC" appears in mono stamps.

## VISUAL FOUNDATIONS
- **Color**: primary palette (from the palette slide): `#18171C` ink, `#0100FF` electric blue, `#8DB0BB` slate, `#CCFFF8` mint, `#D5D5D5` / `#E5E1E1` / `#EAEAEA` greys. Motif blues extend to `#2D00FE`, `#3300FF`, sky `#3BCEF0`, aqua `#4BFFFF`, cyan `#A0F0FB`. HEX's own mark is mint `#21FFBC` on black.
- **Grounds**: three only — light grey `#EAEAEA`, ink `#18171C` (or pure black for deck titles), and full-bleed electric `#0100FF`. Content panels are `#E5E1E1` cards with ~6px radius.
- **Type**: ABC Arizona Mix (Light 300, tracking −0.06em, leading 0.97) for display; TWK Lausanne (400/500) for body and deck titles (80px, leading 1.1, −0.04em); ABC Favorit Mono for uppercase technical labels; Monomaniac One for pixel-flavored numerals; Inter appears in small UI mockups.
- **Motifs**: (1) *Node connectors* — electric-blue diagonal circuit traces ending in rectangular pads, on a faint grid; (2) *Organic configs* — pixel-block clusters + scattered dot fields on near-black; (3) *Trail units* — cyan pixel trails on electric blue. All built from thousands of tiny vector rects in the source (procedurally recreated here, see `guidelines/` cards).
- **Shapes**: small radii (1–6px); hairline 0.5–0.8px strokes in electric blue or ink; rounded "pipe" union shapes (see `assets/motif/`). Blue chip button with white → arrow, radius ~3.9px.
- **Imagery**: motion-blur photography, cool color grade (see `assets/imagery/`); often duotoned under a 60% electric-blue overlay with `color-burn` blending.
- **Animation/hover**: none defined in source (static deck).
- **Shadows**: none — flat surfaces, hairline strokes instead.

## ICONOGRAPHY
- No icon font. Icons are bespoke rounded "node/pipe" union vectors — copied verbatim into `assets/icons/` (department/container glyphs from the Iconography slides). Arrows are typographic (→). No emoji, no third-party icon set.

## LOGOS
- `assets/hex-logo.svg` — HEX studio wordmark (mint pixel-glyph mark used on deck title slides).
- **TBMC has no drawn logo in the source**: the identity renders "The Brand Memory Co." in Arizona Mix type plus a bordered mono "TB / MC" stamp. Recreate in type — do not invent a mark.

## FONT SUBSTITUTIONS (flagged)
No font binaries ship in a .fig. **Self-hosted now: ABC Arizona Mix** (variable, 100–900) and **TWK Lausanne** (Lausanne Pan statics, 300–700 + italic). **ABC Favorit Mono is still missing** — self-hosted **DM Mono** stands in behind it; Monomaniac One + Inter load from CDN. Upload ABC Favorit Mono files and they'll be wired into `tokens/fonts.css`. (Other uploaded families — Geist, Geist Mono, Host Grotesk, KH Teka — are not part of this brand kit and are left unwired.)

## INDEX
- `styles.css` → `tokens/` (colors, typography, fonts, fig-tokens)
- `assets/` — hex-logo.svg, motif/ (pipe unions), icons/ (node glyphs), imagery/ (3 brand photos)
- `guidelines/` — foundation specimen cards (colors, type, motifs, brand)
- `slides/` — sample slide recreations (title, dividers, palette, contents, blue statement)
- `SKILL.md` — agent skill entry point

## Intentional additions
- None. No React components were authored: the source defines no component families; slide layouts live as HTML in `slides/`.
