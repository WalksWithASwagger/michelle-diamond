
# Diamond's Edge Photography — Build Plan

Scope: Homepage + Opera page, editorial ivory/oxblood direction, AI-generated placeholder imagery, working commission form persisted via Lovable Cloud.

## Design foundation

Set the whole visual system in `src/styles.css` before writing components. This carries across every future page.

- Colors (oklch-converted): House Ivory `#F5F0E7`, Program Paper `#E7DDCF`, Oxblood `#69243A`, Aubergine `#3C2938`, Stage Blue `#34495D`, Shell `#D8BDB4`, Aged Brass `#AF9463`, Warm Ink `#292522`, Soft White `#FBF9F5`. Background token = ivory, foreground = warm ink, primary = oxblood, muted = program paper.
- Type: sculptural editorial serif for display (Cormorant Garamond), refined serif for long copy (Cormorant / EB Garamond body), neutral sans for nav + metadata + labels (Inter, tracked-out uppercase for production credits). Loaded via `<link>` in `__root.tsx` — never `@import` in styles.css.
- Radii near-square (2–4px). No heavy shadows. Fine 1px brass or ink rules used like program-book rules. Generous margins, strong vertical rhythm.

## Route + shell changes

- `src/routes/__root.tsx`: swap Lovable placeholder meta for site meta ("Diamond's Edge Photography — Opera & Performance Photography"), add Google Fonts `<link>` for the two families. Root layout renders a shared `<SiteHeader />` (minimal nav: Opera · Portraits · Events · About · Journal · Commission Michelle, with oxblood "Commission Michelle" pill) and `<SiteFooter />` around `<Outlet />`. Portraits/Events/About/Journal nav links point to `#` placeholders for now (out of scope).
- `src/routes/index.tsx`: rewrite as the homepage (per spec).
- `src/routes/opera.tsx`: new deep Opera & Performance page.
- `src/routes/commission.tsx`: new enquiry page (form + confirmation state) — target of every "Commission Michelle" / "Begin a conversation" CTA.
- Each route defines its own `head()` with unique title, description, og:title, og:description.

## Homepage sections (order matches spec)

1. Hero — split composition, oversized image left/right, "She knows the stage from both sides of the light." Two CTAs: View the opera work → `/opera`, Discuss a production → `/commission?type=opera`.
2. Inside Perspective — "Before she anticipated the shutter, she learned to anticipate the breath." paired with a quiet rehearsal image.
3. Selected Opera Work — curated 7-image editorial sequence (empty stage → rehearsal → entrance → peak → ensemble → curtain call → aftermath), mixing full-bleed frames and diptychs. Production metadata revealed on hover (small caps, no permanent overlay). "Explore opera and performance" link.
4. Four Principles — Breath / Timing / Presence / The Room, under "The difference is not access. It is understanding."
5. Opera Commission Types — editorial rows (not cards) for Production coverage, Rehearsal & process, Artist portraits & publicity, Opening nights & patron events, Season & institutional archives. Each links to `/commission`.
6. Selected Clients — quiet text list, oxblood on ivory, fine rules, placeholder company names clearly marked as sample — no fake logos, no carousel.
7. Portraiture — secondary movement, "Portraits with the patience of rehearsal." 3-image editorial strip.
8. Events — "The room, not merely the schedule." editorial pair of images.
9. Testimonial — single pull quotation, editorial magazine style, with name/role/organization (marked as sample copy until Michelle confirms).
10. Final CTA — pale, spacious, "Tell Michelle what is being made." → `/commission`.

## Opera page

- Hero: major performance image, "Photography from inside the music.", supporting copy from spec.
- Two sample "productions" as miniature visual essays (title, company, venue, season, contextual note, curated image sequence, credits block in small caps, "Discuss this kind of work" prompt). Structured as data so more productions drop in later.
- Opera services — editorial two-column list covering all 12 service lines from spec.
- Closing CTA: "Planning a production, season, or artist campaign?" → Discuss the work.

## Commission enquiry (`/commission`)

Two-step feel on one page:

1. "What are we making?" — select from the nine categories in spec (Opera production, Rehearsal or process, Artist portraits or publicity, Season campaign, Gala or opening night, Cultural or corporate event, Private event, Portrait commission, Something else). Pre-selects from `?type=` query.
2. Details form: name, organization, email, phone (optional), production/project/occasion, dates, location/venue, coverage type, intended image use, delivery deadline, approximate scope/budget, additional context.

Client-side zod validation with clear messages, sensible max lengths. On submit calls a `createServerFn` that inserts into Lovable Cloud. Success state replaces form with gracious confirmation copy from spec. Failure shows retry toast.

## Backend (Lovable Cloud)

Enable Cloud, then create one migration:

- Table `public.commission_enquiries` (id uuid pk default gen_random_uuid(), created_at timestamptz default now(), category text not null, name text not null, organization text, email text not null, phone text, project text not null, dates text, location text, coverage text, image_use text, deadline text, budget text, context text, status text default 'new').
- Grants: `GRANT INSERT ON public.commission_enquiries TO anon, authenticated;` `GRANT ALL ON public.commission_enquiries TO service_role;` (no SELECT to anon/authenticated — enquiries are private to Michelle).
- Enable RLS. Single policy: `CREATE POLICY "anyone can submit enquiry" ON public.commission_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);`. No SELECT policy for public roles.

Server function `submitEnquiry` in `src/lib/enquiries.functions.ts` — public (no auth middleware), zod-validated inputs, uses server publishable client (`SUPABASE_URL` + `SUPABASE_PUBLISHABLE_KEY`, with the `sb_`-key fetch shim from the knowledge). Reads env inside the handler. No PII returned in response.

## Imagery

Generate 15 placeholder photos with `imagegen` in the opera brand palette (warm ivory, oxblood, warm rehearsal light, aubergine stage darks). Editorial, cinematic, film-grain, no cliché opera-mask/curtain kitsch. Saved to `src/assets/` as `.jpg` and imported per component. Breakdown:

- 1 hero opera portrait, 1 quiet backstage/rehearsal (inside perspective section), 7 for the homepage opera sequence, 3 portraits, 2 events, plus reuse in opera page + 2 fresh production hero images.

## Motion

Restrained: gentle fade-up on section reveal (Motion for React), slow crossfade between paired images, hover reveals for captions with 200–300ms ease. No parallax, no autoplay, no curtain effects. Respect `prefers-reduced-motion`.

## Out of scope for this pass

Portraits / Events / About / Journal full pages (nav links go to `#` with clear "coming next" affordance in a follow-up). Real client logos, real testimonials, pricing, turnaround times — all marked as sample copy until Michelle confirms.

## Technical notes

- Tailwind v4: tokens live in `@theme inline` in `src/styles.css`, semantic classes only (no `text-white`, `bg-black`).
- Fonts loaded via `<link>` in `__root.tsx` head, not `@import`.
- Cloud enable happens first so the migration + server function can land in the same build.
- Every new route has its own `head()`; only leaf routes with a real hero image set `og:image`.
