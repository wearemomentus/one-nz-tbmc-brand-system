# One NZ × TBMC Brand System

The live co-brand reference for One NZ Memory + Intelligence and The Brand Memory Co.

**Production:** [brand.tbmc.dev](https://brand.tbmc.dev/)

## What is included

- Animated co-brand lockups and connector trails
- Stamp, memory-card, and footer systems
- Motifs, imagery treatments, typography, and shared palette
- Tagline hierarchy and usage guidance
- Document, channel, social, out-of-home, event, and merchandise examples
- Responsive phone composition and dark/light mode
- Production artwork, photography, document previews, and logo exports

## Project structure

- `app/page.tsx` — full-viewport host shell
- `public/onenz-tbmc-brand-system.html` — brand-system source of truth
- `public/assets/web/` — page imagery and co-brand marks
- `public/exports/` — logo and document-system exports
- `public/_ds/` — local design-system fonts and tokens
- `docs/brand-system-v2/` — product requirements and source handoff notes
- `tests/rendered-html.test.mjs` — shell and release-contract checks

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Validation

```bash
npm test
```

The test command runs a production build and verifies the hosted shell, social tiles, out-of-home executions, responsive rules, and co-brand colour constraint.

## Production

The production domain is attached to the Vercel project `onenz-tbmc-brand-system` in the Momentus account. Coordinate production releases before deploying from a new machine so the existing project and domain remain the source of truth.

## Access

This repository is temporarily public for collaborator access. Review the supplied client artwork and bundled font licences before treating the repository as a permanent public distribution channel.
