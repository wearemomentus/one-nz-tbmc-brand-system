# Progress

- [x] Inspect the supplied ZIP and identify the authoritative instructions and finished page.
- [x] Preserve the supplied visual system, fonts, logos, exports, and interactions.
- [x] Adapt the supplied mini brand system into the Sites deployment structure.
- [x] Build and validate the production bundle.
- [x] Publish the site, connect `brand.tbmc.dev`, update DNS, activate SSL, and verify the live hostname.

## Live

- `https://brand.tbmc.dev`
- Direct Vercel production deployment: `onenz-tbmc-brand-system`
- Public DNS: `brand.tbmc.dev` points to the Vercel-assigned CNAME
- HTTPS: active; the root serves the bundled brand-system page directly with a public `200`
- Previous Sites deployment retained temporarily as a cached-route fallback during DNS convergence

## Mobile refinement — 2026-08-06

- Source audit found desktop-first fixed grids, wide flex rows, and no responsive breakpoint.
- Preserve the current desktop composition unchanged.
- Phone treatment: 16px shell, stacked navigation, touch-safe theme control, tighter hero type, single-column cards, stacked type specimens, two-column palette, swipeable document previews, and stacked channel examples.
- Validate at 390 x 844 and 1440 x 900 before the production deploy.
- Production deployment: `dpl_HtbXW9uFhJCW7YHg96x743Vb2eqV` (`READY`).
- Live alias: `https://brand.tbmc.dev` returns `200` and serves the responsive source plus all supporting assets.
- Live phone QA at 390 x 844: single-column nav/cards, 38px hero, zero document-level horizontal overflow, six rendered sections, no broken images, and no console warnings or errors.
- Live desktop regression at 1440 x 900: 64px hero, 64px shell padding, two-column lockup grid, five-column palette, zero horizontal overflow, and no broken images.
- Build verification: `npm run build` passed.

## Brand system v2 refresh — 2026-08-06

- New source of truth: `/Users/jenko/Downloads/One NZ & TBMC Fusion Design (3).zip`.
- Handoff recommends the standalone v2 export; source is also supplied with runtime, image-slot helper, local fonts, logos, photography, document previews, and cap render.
- V2 scope: sections 01–08, expanded motifs, new imagery section, tagline ladder, refreshed in-use examples, merch, and the footer stamp `NETWORKS CONNECT. MEMORIES COMPOUND.`.
- Preserve the existing production domain/project and the intentional mobile composition from the previous release.
- Integrated the supplied v2 source, `image-slot.js`, 18 new web assets, local design-system assets, and the PRD/README handoff into the repository.
- Added v2-aware responsive rules for the expanded motifs, six imagery cards, imagery rules, type specimens, tagline ladder/footer stamp, palette, document carousel, channels, merch, and final footer.
- Local phone QA at 390 x 844: eight sections render; 65 images and two image slots load; no broken images, console warnings, or page-level horizontal overflow; theme control is 44px tall and switches correctly.
- Local desktop QA at 1440 x 900: original 64px hero, 64px shell padding, two-column lockup grid, three-up imagery rows, and five-column palette remain intact.
- Build verification: `npm run build` passed.
- Production deployment: `dpl_DSunxnMhyPq3temSwZ6cGJu1n1hC` (`READY`) and aliased to `https://brand.tbmc.dev`.
- Live root and new cap asset return public `200` responses from Vercel.
- Live phone QA at 390 x 844: eight sections, four motifs, six imagery treatments, six tagline entries, two image slots, no broken images, no console warnings/errors, and zero page-level horizontal overflow.
- Live desktop QA at 1440 x 900: desktop geometry is unchanged, all fonts and images load, no console warnings/errors, and the theme toggle switches to the deep-green light system correctly.
