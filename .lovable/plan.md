
## Scope

1. Admin panel (uploads + captions + ordering + enquiry review), email/password sign-in, gated to Michelle's account only.
2. Enhanced lightbox for the Opera portfolio: keyboard, swipe, and a subtle "stage-light" spotlight that tracks the cursor / touch.
3. About page connecting opera history to photography (placeholder lorem ipsum for now).
4. Events portfolio page (rooms, atmosphere, discretion).
5. Portrait & Publicity gallery page (editorial captions, easy viewing).

Homepage and existing Opera page stay as-is; the new gallery pages are the DB-driven surfaces.

---

## Backend (Lovable Cloud)

**New tables**

- `gallery_images` — `category` (enum: `opera` | `portrait` | `event`), `image_path` (storage path), `title`, `caption`, `alt_text`, `sort_order`, `published`, timestamps.
- `app_role` enum + `user_roles` table + `has_role(user_id, role)` SECURITY DEFINER function (per project security rules — never store role on profiles).
- `profiles` table (id → auth.users, display_name) with auto-create trigger.

**RLS**
- `gallery_images`: public `SELECT` where `published = true`; admin full write via `has_role(auth.uid(), 'admin')`.
- `user_roles`: user reads own rows; admin manages all.
- `commission_enquiries`: keep public INSERT; add admin `SELECT`/`UPDATE` (status changes).
- `profiles`: user reads/updates own; admin reads all.

**Storage**
- New public bucket `gallery` for image files. Public read; admin-only write via RLS on `storage.objects`.

**Auth**
- Enable email/password sign-in; disable public signup (Michelle's account is seeded, no self-serve admins).
- Michelle's admin account created via a one-time server function I'll run once after migration approval.

---

## Server functions (`src/lib/*.functions.ts`)

- `listGalleryImages({ category })` — public read.
- `listEnquiries()`, `updateEnquiryStatus()` — admin-only (verifies `has_role` via `context.supabase`, then may load `client.server` inside handler if needed).
- `upsertGalleryImage()`, `deleteGalleryImage()`, `reorderGalleryImages()` — admin-only.
- `createSignedUploadUrl()` — admin-only; returns a signed URL so the browser uploads directly to the `gallery` bucket.

All admin fns use `.middleware([requireSupabaseAuth])` and check `has_role(userId, 'admin')` before writing.

---

## Routes

**Public**
- `/about` — editorial single-column layout, portrait of Michelle, lorem ipsum body split into "The opera years / The turn to the lens / How I work" sections, each with pull-quotes styled with existing tokens.
- `/portraits` — portrait & publicity gallery, DB-driven, editorial captions beside each image, opens lightbox.
- `/events` — events portfolio; hero copy about rooms, atmosphere, discretion (no faces-in-crowd cliché); DB-driven grid → lightbox.
- Opera portfolio gallery on existing `/opera` page gets upgraded to use the shared lightbox.

**Auth**
- `/auth` — email/password sign-in only. No self-serve signup UI.

**Protected (`/_authenticated/admin/*`)**
- `/admin` — dashboard: counts of new enquiries + image counts per category.
- `/admin/enquiries` — table of enquiries with filter by status; row expands to full detail; status dropdown (new / reviewing / replied / archived).
- `/admin/galleries` — tabs for Opera / Portraits / Events. Each tab: drag-to-reorder list, drop-zone uploader, inline caption/alt/title editing, publish toggle, delete.

Nav header gains an "Admin" link only when the signed-in user has the `admin` role.

---

## Shared Lightbox component

`src/components/gallery-lightbox.tsx` used by all four gallery surfaces (opera, portraits, events, and any admin previews):

- Keyboard: Left/Right arrows navigate, Esc closes, Home/End jump.
- Touch: swipe left/right to navigate, swipe down to dismiss.
- **Stage-light effect**: a soft radial-gradient overlay (warm ivory→transparent) whose center follows `mousemove` / `touchmove`, so the image feels lit from a moving spotlight. Reduced-motion users get a static, centered halo instead.
- Focus trap + `aria-modal` + captions rendered below the image in the editorial serif.

---

## Imagery (new placeholders to generate)

- 1 editorial portrait of Michelle for `/about` (three-quarter, warm ink backdrop, opera-adjacent).
- 4 portrait/publicity samples for `/portraits`.
- 4 event-room samples for `/events` (empty rooms with atmosphere: chandeliers, place settings, foyer light — not crowds).

Seeded into `gallery_images` in the same migration so both pages have content on first load.

---

## Technical notes

- Admin gate: routes live under `src/routes/_authenticated/admin/*`. Managed `_authenticated/route.tsx` handles session redirect to `/auth`. Admin-only enforcement lives in the server functions via `has_role` — the client route additionally hides the UI when the role isn't present (checked via a `getMyRole` server fn cached in Query).
- Uploads use signed URLs → direct-to-Storage PUT from the browser. Server fn only records the resulting `image_path` in `gallery_images`.
- `client.server` is never imported at module scope in `.functions.ts` — always `await import(...)` inside handlers.
- Existing `/opera` page and homepage's opera sequence remain static (they're editorial layouts, not a managed gallery). The Opera *gallery* section that gets the new lightbox is the grid on `/opera`.
- SEO: each new route (`/about`, `/portraits`, `/events`, `/auth`) gets its own `head()` with unique title/description/og tags. No og:image on `__root`.

---

## Out of scope (call out explicitly)

- Public signup / password reset flow (admin is a single seeded account).
- Real bio copy — using lorem ipsum per your instruction.
- Image editing (crop/rotate) inside admin — uploads are used as-is.
- Analytics on enquiries beyond status.
