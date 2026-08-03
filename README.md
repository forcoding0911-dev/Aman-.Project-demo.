# Ghion Hotel Addis Ababa — Redesign Concept

A full production-quality redesign concept for **Ghion Hotel Addis Ababa**, a
historic state-owned hotel whose legacy website is non-functional and
whose Booking.com channel is currently disabled. This project is a
**portfolio case study**: a from-scratch Next.js rebuild demonstrating
modern frontend architecture, accessible UI, and conversion-focused
hospitality UX.

> **Note:** This is an independent redesign concept built for demonstration
> purposes. It is not affiliated with or endorsed by Ghion Hotel. All
> imagery is sourced from Unsplash (free license) as placeholder art
> directed at the brief — swap for licensed property photography before
> any real deployment. Booking, contact, and event forms are demo-only
> (client-side simulated); see "Wiring up a real backend" below.

---

## 1. Problems identified in the legacy site

| Area | Issue |
|---|---|
| Booking | No functioning reservation engine; blocked on Booking.com — zero digital booking channel |
| Mobile | Non-responsive, desktop layout scaled down, requires pinch-zoom |
| Performance | Estimated mobile Lighthouse score < 25/100; uncompressed images, render-blocking scripts |
| Accessibility | No semantic HTML, no alt text, failing WCAG contrast, no ARIA labels |
| SEO | No metadata, no schema markup, poor URL structure |
| Visual design | Table-based 2010s layout, inconsistent branding, pixelated assets |
| Conversion | No CTAs, no "Book Now" button anywhere in navigation |

## 2. Design system

Brand direction: **"Historic Oasis, Modernized"** — the hotel's genuine,
decades-old botanical gardens as the core visual asset, presented through
clean international hospitality design language.

- **Color**
  - Imperial Emerald `#064e3b` — primary (the gardens)
  - Warm Gold `#d97706` — accent (heritage, CTAs)
  - Cream `#fdfbf7` — background
  - Charcoal `#1f2937` — text
- **Type**
  - Display: *Playfair Display* (serif, headings — classical luxury)
  - Body: *Inter* (sans-serif — mobile-legible)
- **Signature element**: a single continuous line-art garden frond
  (`GardenDivider`) used sparingly as a section transition — a direct,
  understated reference to the brand's one truly unique asset, instead of a
  generic gradient rule.
- Full token set (spacing, radii, shadows, breakpoints, motion easing) lives
  in `tailwind.config.ts`.

## 3. Tech stack

- **Next.js 15** (App Router) — SSG for marketing pages, ready for SSR on a
  real-time availability route
- **TypeScript**, strict mode
- **Tailwind CSS** — utility-first styling driven entirely by the design
  tokens above (no ad-hoc magic numbers)
- **lucide-react** — icon set
- **next/image** — automatic AVIF/WebP output, responsive `sizes`, blur-safe
  loading
- No state management library, no CMS, no auth — kept deliberately lean per
  brief ("avoid unnecessary dependencies")

## 4. Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, global SEO metadata, JSON-LD Hotel schema
    page.tsx             Homepage
    sitemap.ts / robots.ts
    error.tsx / not-found.tsx / loading.tsx
    rooms/page.tsx        Rooms & Suites overview
    rooms/[slug]/page.tsx Dynamic room detail (SSG via generateStaticParams)
    amenities/page.tsx    Gardens & Amenities + gallery
    events/page.tsx       Conferences & Weddings + lead form
    contact/page.tsx      Contact + map + form
  components/
    layout/    Header, Footer, MobileBookingBar, WhatsAppButton
    sections/  Hero, BrandStory, RoomsShowcase, EventsPreview, TrustSignals,
               ContactCTA, BookingSearchBar, GalleryGrid, ContactForm, EventLeadForm
    ui/        Button, SectionHeading, RoomCard, GardenDivider
  data/        site.ts (business identity), rooms.ts (room catalog)
  lib/         utils.ts (class merging)
```

Each page composes small, reusable section/UI components rather than
inlining markup — every visual element used more than once (buttons, room
cards, headings) is a single source of truth.

## 5. Motion system

Animation is used to communicate hierarchy, feedback, and navigation — never
as decoration. Rules followed throughout:

- **GPU-accelerated properties only**: every animation moves `transform`
  and/or `opacity`. Nothing animates `width`, `height`, `margin`, or
  `padding` (caught and fixed during review — the header's scroll state
  briefly animated `padding`; corrected to snap instantly instead).
- **Durations stay in a 120–450ms band**: button press 120ms, hover 180ms,
  dialogs 220ms, success confirmations 250ms, page transitions 300ms,
  scroll reveals 450ms. Nothing runs longer than that.
- **One scroll-reveal pattern, used consistently**: `<Reveal>` (fade + 20px
  rise, decelerate curve, fires once per element) is the only scroll
  animation in the project, applied with an 80ms stagger between sibling
  sections and a 40ms stagger inside lists (room cards, gallery grid,
  reviews).
- **No decorative auto-play**: an earlier draft had a 1.8s hand-drawn SVG
  animation on the garden-divider motif that ran automatically on every
  page load — removed. The divider is now static and enters through the
  same scroll-reveal system as everything else.
- **`prefers-reduced-motion` is respected globally** (`globals.css`), and
  no animation is required to understand or use any part of the site.
- **No animation library dependency.** `Reveal` is ~30 lines on top of
  native `IntersectionObserver`; everything else is CSS transitions/
  keyframes defined once in `tailwind.config.ts`. This was a deliberate
  simplification from a broader native-app motion spec (material ripples,
  directional page slides, count-up statistics) that would add real
  complexity without matching benefit on a six-page marketing site.

## 6. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) throughout
- Skip-to-content link
- Visible 3px focus ring on all interactive elements (`:focus-visible`)
- All icons paired with `aria-label` or `aria-hidden` as appropriate
- Forms use associated `<label>`, `aria-invalid`, and `aria-describedby` for
  inline errors
- `prefers-reduced-motion` respected globally
- Modal gallery lightbox uses `role="dialog"` and `aria-modal`

## 7. SEO

- Per-page `metadata` exports (title template, description, canonical)
- `Hotel` JSON-LD schema in the root layout
- Dynamic `sitemap.xml` and `robots.txt`
- Descriptive, keyword-relevant `alt` text on every image

## 8. Performance

- All imagery via `next/image` (automatic WebP/AVIF, lazy loading below the
  fold, `priority` only on the hero)
- Google Fonts loaded via `next/font` (self-hosted, zero layout shift)
- No client-side state libraries; forms use local component state only
- Horizontal carousels use native scroll-snap instead of a JS carousel
  dependency

## 9. Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start
```

## 10. Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the current prototype — see `.env.example`.
4. Deploy. Vercel's Edge Network handles image optimization and static
   asset caching automatically.

**Netlify** alternative: use the official `@netlify/plugin-nextjs` build
plugin; no additional config needed for this project.

## 11. Wiring up a real backend (next steps, out of scope for this concept)

The brief calls for a real-time booking engine and payment processing.
This concept ships the full frontend and UX flow with **simulated
submissions** so it can be evaluated with zero setup. To make it
production-real:

1. **Reservations**: add a `rooms_availability` table (Postgres/Supabase)
   and an API route under `src/app/api/availability` that the
   `BookingSearchBar` posts to instead of the current `setTimeout` stub.
2. **Payments**: integrate Chapa (Telebirr, CBE Birr, and card support for
   the Ethiopian market) — add `CHAPA_SECRET_KEY` per `.env.example`.
3. **Contact/Events leads**: swap the demo submit handlers in
   `ContactForm.tsx` and `EventLeadForm.tsx` for a real POST to a
   transactional email service (e.g., Resend) or CRM webhook.
4. **Channel sync**: once Booking.com access is restored, add a nightly
   sync job so direct bookings and OTA bookings can't double-book a room.

## 12. Image credits

All placeholder photography is sourced from Unsplash under its free-to-use
license, selected to match the brief's "cinematic golden-hour" and
"botanical garden" direction. Replace with licensed property photography
before production use.

## 13. License

This codebase is provided as-is for portfolio/demonstration purposes.
Build freely on it — swap in real brand assets, real backend integrations,
and real photography before deploying for an actual client.
