# Portfolio preview

This folder contains two simple preview pages demonstrating two visual variants for the projects side-scroller component.

Files
- `variant-warm.html` — Uses the site's coral accent (#E85D44) and pale background to feel warm and friendly.
- `variant-muted.html` — Uses a softer teal accent and a slightly cooler background for a calmer, more minimal tone.
- `styles/portfolio-preview.css` — Shared styles and CSS variables; the two variants toggle colors using body classes (`warm` / `muted`).

How to preview
1. Open the `Real/preview/variant-warm.html` or `variant-muted.html` in your browser (double-click or File → Open).
2. The previews reference the images from `../images/` — make sure those image files exist (they do in your repo).

Notes & next steps
- These are mockups only; no changes were made to `index.html`.
- If you like a variant, I can integrate the chosen styles into your main stylesheet or create a separate CSS file and wire the scroller into the `Projects` section.
- Accessibility: the previews include keyboard focus, aria-labels, and reduced-motion respects the user preference.

If you'd like changes to spacing, tag styles, or a denser card layout, tell me which variant to iterate on and I'll implement it into `index.html` (or create separate CSS/JS files) and run a quick smoke check.
