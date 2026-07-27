# Diamond's Edge — Lovable theme (canonical)

Michelle-facing site: ivory/oxblood Lovable theme from [WalksWithASwagger/michelle-diamond](https://github.com/WalksWithASwagger/michelle-diamond), with kk-kb curated photos and documented Michelle voice.

**This is the only app to edit for Diamond’s Edge.**  
Retired Next hosts: `apps/diamonds-edge`, `apps/diamonds-edge-v2`.  
Untangle doc: [`../../content/projects/diamonds-edge-photography-website/2026-07-26-canonical-home-untangle.md`](../../content/projects/diamonds-edge-photography-website/2026-07-26-canonical-home-untangle.md).

**Raw photo drops:** [`public/gallery/_incoming/`](./public/gallery/_incoming/)

## Positioning

- Differentiator: coaching + **twenty minutes before the shutter** (not an unverified singer bio)
- Flagship proof: performance / luxury rooms (Orpheum house plate locked for home hero when binary lands)
- Portraits: Orpheum + See Mo + community; studio/family still expanding
- About: approved Michelle self album (`public/gallery/about/michelle-0*.jpg`)

## Brand visual token mapping

This app already carries the approved Michelle palette from the July 26 brand brief
without needing a redesign. The lane-24 pass is a documentation and guardrail
update, not a new art direction.

| Brand sheet | App token | Current use |
|-------------|-----------|-------------|
| Warm ivory | `--ivory` and `--paper` | Primary page background and soft editorial surfaces |
| Rich burgundy | `--oxblood` | CTAs, links, rules, and emphasis |
| Deep plum | `--aubergine` | Reserved for dark surfaces and restrained accents |
| Soft black | `--ink` | Body copy, overlays, and dark neutral structure |

- Keep the existing type stack; no new fonts in this pass.
- Use aubergine intentionally on dark surfaces only; avoid purple-glow treatments.
- Preserve the editorial/full-bleed system; no mosaic redesign or cream/terracotta restyle.

See `CURATED-IMPORT.md`.

## Develop

```bash
cd apps/michelle-diamond
npm install
npm run dev
```

Public routes work without Supabase. Commission falls back to mailto `hello@diamondsedge.ca`. Admin still needs Lovable Cloud keys.

## CI gate

Pull requests that touch `apps/michelle-diamond/**` run `.github/workflows/michelle-diamond-ci.yml`.
The gate installs dependencies in the app directory with pnpm and runs `pnpm run build`.
This branch does not yet include a `test:smoke` script, so the workflow is intentionally build-only until lane 12 lands that script.

## Ported from prior iterations

| Route | Feature |
|-------|---------|
| `/opera/leave-behind` | Unlisted VO three-frame sample (noindex) |
| `/clients` | Searchable Pixieset gallery wall |
| `/book` | UseSession + commission dual path |
| `/services` · `/services/community-rate` | Service pillars + C$200 community rate (noindex) |
| `/the-experience` | Twenty minutes + AI yes/no |
| `/session-prep` | Booked-client prep |
| `/journal` · `/journal/$slug` | Three essays (+ Christmas booking calendar) |
| `/contact` | Studio facts + FAQs → commission / book |
| Home “Studio” strip | Experience · Book · Clients · Journal |
| `public/sitemap.xml` · `robots.txt` | SEO |
| JSON-LD on root | ProfessionalService + Person |

## Upstream Lovable repo

Cloud agents cannot push `michelle-diamond` (403). Sync with write access via:

`content/projects/diamonds-edge-photography-website/APPLY-UPSTREAM-LOVABLE.md`
