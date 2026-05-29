# Image placeholders

The site uses `https://picsum.photos/...` URLs in two visible spots until you
drop real photographs in this folder. Both locations have a `TODO(real photo)`
comment in the code.

Replace as follows:

| File (drop here) | Used by | Recommended size | Notes |
| --- | --- | --- | --- |
| `hero-canopy.jpg` (or `.webp`) | `components/Hero.tsx` | 2400×1600 | Mature South Florida canopy — live oak, banyan, or similar. Avoid loud color casts; the dark forest gradient overlays it. |
| `principal.jpg` (or `.webp`) | `app/about/page.tsx` | 1200×1500 portrait | Professional portrait of Quatisha. Outdoors near a tree is ideal but a clean studio shot works too. |

After dropping files in `/public/images/`, swap each `Image` `src` from the
`picsum.photos` URL to `/images/hero-canopy.jpg` (or whatever you name it).
The `remotePatterns` entry in `next.config.mjs` can be removed once neither
component points at picsum anymore.

Optional additional photography slots, in priority order:

1. Services page — header photo per service (currently text-only by design).
2. Process page — a single landscape photo of fieldwork in progress.
3. Testimonial cards — small headshots if clients consent.
