# Lighting Source TX — Workspace Guide

The LSTX marketing + lead-gen website. Installation arm of the Enlightening Sales ecosystem.
Taglines: **"Certainty, Installed."** (primary) / **"Done Right. Done Once."** (secondary). Never mix or invert them.

## Stack
- Next.js 14 (App Router) + TypeScript, React 18.
- Tailwind (tokens in `tailwind.config.ts`) + a ported design-system stylesheet (`src/app/globals.css`, `src/app/pages.css`).
- Sanity CMS (optional) via `@sanity/client`; falls back to `src/lib/seed/`.
- Go High Level lead capture via `src/app/api/ghl-webhook/route.ts`.
- Deploy: Vercel. Content reads work with zero credentials (seed fallback).

## Commands
```bash
npm run dev      # local dev
npm run build    # MUST pass before committing
npm run lint
```

## Absolute design rules (audited — violations cause rework)
- **0px border-radius on every element.** Enforced globally in `globals.css` (`border-radius: 0 !important`). Never add rounded corners.
- **Navy identity palette only:** ground `#1B2138` (`--charcoal`), sections `--ink`/`--black`, raised `--navy #2C3454`, the single accent **burnt orange `#CC5500`** (`--copper`) used sparingly. Use the CSS variables / Tailwind tokens, not hex literals.
- **Montserrat only**, weights 400–800. Headings UPPERCASE, wide tracking (≥0.12em). Body 14px / 1.5.
- **Motion:** CSS transitions + IntersectionObserver only. No parallax, no spring, no bounce. Reveals fire once. All gated on `prefers-reduced-motion`.
- Buttons ghost by default; the one primary action per view is copper. 48px min touch targets; full-width buttons on mobile.

## Voice (the Craftsman)
Short sentences. Fragments welcome. **No em dashes** (use periods), no exclamation points, no corporate jargon or sales-speak, no emoji. Name the manufacturer (WAC Lighting) and system (Colorscaping®); keep the benefit human. Approved closers: "You know who to call." / "That is what we do." / "Worth telling."

## Content model
- One `project` type backs both Projects and Case Studies (case studies = `isCaseStudy: true` + a `metric`). Canonical detail URL is `detailBase` + slug (`/projects/...` or `/case-studies/...`).
- Edit built-in content in `src/lib/seed/`. Site-wide identity/contact/partners in `src/lib/site.ts`.
- Real images: set `heroImageUrl` / `media[].imageUrl` (static) or upload via Sanity. Absent images render the `.night` placeholder (`src/lib/night.ts`).

## Conventions
- Server components fetch via `src/lib/content.ts`. Client components only where interactive (`Nav`, `Estimator`, the forms, `ScrollReveal`).
- Secrets (`GHL_WEBHOOK_URL`, `SANITY_API_READ_TOKEN`) are server-only and never committed. `.env.local` is git-ignored; `.env.example` documents every var.
- Studio files (`sanity.config.ts`, `src/sanity/schemaTypes/**`) are excluded from the app build (`tsconfig` exclude) and need `npm i sanity @sanity/vision` to run.
- Run `npm run build` before every commit. Conventional commit messages.
