# Green ForesTree — marketing website

Next.js (App Router, TypeScript, Tailwind) marketing site for the Green
ForesTree consulting arboriculture practice.

## Run it

```bash
npm install
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your final domain (used for
canonical URLs, sitemap, and Open Graph metadata). See `.env.example`.

## Structure

```
app/                     Routes (App Router, server components by default)
  layout.tsx               Shell, fonts, header/footer, default metadata
  page.tsx                 Home
  about/, services/, process/, resources/, contact/
  contact/actions.ts       Server action for the contact form (zod-validated)
  sitemap.ts, robots.ts    SEO
  icon.tsx, opengraph-image.tsx   Generated favicon and OG image
components/              UI + marketing components
  ui/                      Primitives (Button, Section, Field, …)
lib/                     Site config, service catalog, testimonials, validation
public/images/           Drop real photos here (see PLACEHOLDERS.md)
```

## Editing copy

Most copy lives in dedicated content modules so it's easy to revise without
hunting through JSX:

- `lib/site.ts` — brand, contact, credentials, top-level nav
- `lib/services.ts` — the eight consulting services (Home cards + Services page)
- `lib/testimonials.ts` — testimonial quotes
- `app/about/page.tsx` — bio paragraphs and credential explainers
- `app/process/page.tsx` — engagement steps
- `app/resources/page.tsx` — anatomy-of-a-report + FAQ

## Things to fill in before launch

Search for `[PLACEHOLDER]` and `TODO(` in the source — everything that needs
real information is flagged. Highlights:

- [ ] Real hero photo at `public/images/hero-canopy.jpg` (see Hero.tsx)
- [ ] Real portrait at `public/images/principal.jpg` (see About page)
- [ ] Confirm ASCA affiliation in `app/about/page.tsx`
- [ ] Replace placeholder testimonial attributions in `lib/testimonials.ts`
      with real names/firms once consent is in hand
- [ ] Fill in the personal-bio paragraph in `app/about/page.tsx`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production environment
- [ ] Wire the contact form to a real email provider — the integration
      stub is in `app/contact/actions.ts` (Resend recommended; instructions
      inline as a TODO comment)

## Notes

- Fonts: Fraunces (serif headings) + Inter (sans body), both via `next/font`.
- Theme: a custom Tailwind palette (forest/bark/moss/cream) — no default
  Tailwind blues or grays anywhere.
- Motion: subtle scroll reveal via `<FadeIn>`. Honors
  `prefers-reduced-motion` (see `globals.css`).
- Images: `next/image` with `picsum.photos` whitelisted in `next.config.mjs`
  for the placeholder hero/portrait. Remove that remote pattern once you've
  swapped in local files.
- Accessibility: skip-to-content link, visible focus rings, semantic
  landmarks, labeled form controls with inline error messages, honors
  reduced motion.
- Contact form: validated client-side via the same zod schema used
  server-side. A honeypot field traps bots silently.

## Tech

Next.js 14 · React 18 · TypeScript 5 · Tailwind CSS 3 · Zod 3.
