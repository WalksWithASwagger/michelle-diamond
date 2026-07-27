# Curated import notes (kk-kb → Lovable)

## Positioning (locked for Michelle review)

- **Brand:** Diamond's Edge Photography / Michelle Diamond
- **Differentiator:** coaching + “the twenty minutes before the shutter” — not an unverified “former opera singer” biography
- **Deer Lake:** Symphony & Opera in the Park · **Vancouver Opera + Vancouver Symphony** — craft proof for houses
- **Portraits gallery:** meetup-derived community / founder stand-ins until studio Pixieset lands — copy says so honestly
- **About face:** no false Michelle portrait. Hero uses a Deer Lake craft plate explicitly labeled as work, not Michelle

## Assets

| Path | Role |
|------|------|
| `src/assets/hero-soprano.jpg` | Was home hero = `opera-03` (red gown). **Retire from hero** — identity confusion (may read as Michelle). See product feedback revision spec. |
| `public/gallery/about/michelle-0{1..8}.jpg` | Approved Michelle-as-subject album (`somefavsmusicandluxurycopy`). About lead + strips; light home peek. Not home hero. |
| `public/gallery/_incoming/` | **Only** raw drop folder for new photos. Do not use `apps/diamonds-edge/public/images/`. See canonical-home-untangle doc. |
| `src/assets/rehearsal-quiet.jpg` | Home inside = `opera-06` (once) |
| `src/assets/opera-*-*.jpg` | Opening sequence: 11, symphony-02, **02**, 04, 01, 12, **05** |
| `src/assets/about-craft.jpg` | About craft plate = `opera-02` (not Michelle) |
| `public/gallery/opera/` | Full Deer Lake 12 |
| `public/gallery/events/` | Tipalti, hangar, symphony, lambo, proposal, KTL detail (no duplicate opera copies) |
| `public/gallery/portraits/` | Meetup stand-ins (21 wired on `/portraits`) |
| `public/gallery/community/` | 8 meetup room/stage/fashion/cultural frames (wired on `/events`) |
| `public/gallery/events/catering-01.jpg` | Meetup food detail (was mis-filed as branding-07) |

Re-audit: `content/projects/diamonds-edge-photography-website/2026-07-24-pixieset-portfolio-reaudit.md`

## Removed / avoided

- Sample home testimonial
- Tipalti “Elevate” misname → **Holiday Party 2025**
- Invented cast credits (Principal / Soprano)
- `michelle-portrait.jpg` identity error (= ceremonial `opera-04`)
- Lovable leftover `gallery-portrait-*`, `gallery-event-*`, `opera-production-*`

## Public pages without Supabase

Header skips auth when keys are missing. Commission falls back to mailto `hello@diamondsedge.ca`.

## Gallery UX (2026-07-25)

- Default gallery variant is **mosaic** (dense 2/3/4-col wall) on `/opera`, `/portraits`, `/events`
- Home: full-bleed hero + compact gallery peeks (less scroll)
- Motion: staggered tile reveal, hover scale + caption, lightbox enter/figure swap
