# hakanalemdar.com

Astro static site. `/` is the law side, `/games` the games side, `/law` redirects to `/`.

- Content: `src/data/law.ts` and `src/data/projects.ts` (campaign figures checked 2026-10-21).
- Project art: put `public/art/<slug>/cover.webp` (slugs: odsire, yatagan, crusades, wayfarer, silk-road, seekers). Add the artist under `art.credit` in projects.ts.
- `npm install && npm run dev` to work locally, `npm run build` outputs `dist/`.
- Hosting: Cloudflare Workers (static assets, see `wrangler.jsonc`). Workers Builds: build command `npm run build`, deploy command `npx wrangler deploy`.
