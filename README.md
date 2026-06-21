# Lighting Source TX — Website

The main marketing and lead-generation site for **Lighting Source TX** (`www.lightingsourcetx.com`).
Built to the *LSTX Website Build Executive Playbook*: Next.js 14 (App Router) + TypeScript + Tailwind, Sanity CMS, and Go High Level lead capture, deploying to Vercel.

> Certainty, Installed. · Done Right. Done Once.

It launches **today** with zero external accounts: project content ships as built-in seed data and the forms work in a safe development mode. Wire in Sanity and GHL whenever you are ready — nothing breaks in the meantime.

---

## What's built

Eleven pages, pixel-matched to the design handoff (navy identity palette, Montserrat, 0px corners, the Craftsman voice):

| Route | Page |
|---|---|
| `/` | Home — hero, services, expertise, featured projects, take-off entry, partners, consultation form |
| `/projects` | Project gallery with category filters |
| `/projects/[slug]` | Project detail (Stardust Ranch, Comal Landa Annex, Private Estates) |
| `/case-studies` | Case study index with metrics |
| `/case-studies/[slug]` | Case study detail (Ways2Well, Sts. Peter & Paul) |
| `/about` | Story, stats, the team, partners |
| `/estimator` | The 4-step Take-Off Tool (the primary conversion) |
| `/giveaway` | Weekly Modern Forms fan giveaway |
| `/api/ghl-webhook` | Server route that forwards every lead to Go High Level |
| `/sitemap.xml`, `/robots.txt` | SEO |

---

## Quick start (run it locally)

You need [Node.js](https://nodejs.org) 18.17+ (20 LTS recommended — see `.nvmrc`).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. That's the whole site, running on seed content.

Other commands:

```bash
npm run build   # production build (must pass before deploy)
npm start       # serve the production build locally
npm run lint    # lint
```

---

## Where your project images go

The site currently shows color-aware **"after dark" placeholders** wherever real photography belongs (hero, project galleries, team photos). Two ways to drop in the real images from the **WAC JUNE 2026 MARKETING** Drive folder:

**A. Quick way — static files (no CMS):**
1. Put images in `public/media/` (e.g. `public/media/ways2well-facade.jpeg`).
2. In `src/lib/seed/projects.ts`, give the project a `heroImageUrl` and add `imageUrl` to its `media` cells. The placeholders disappear automatically.
   ```ts
   heroImageUrl: '/media/ways2well-facade.jpeg',
   media: [{ label: 'Facade · Blue & Purple', imageUrl: '/media/ways2well-1.jpeg' }, ...]
   ```
3. Team photos: add `photoUrl: '/team/sam.jpeg'` in `src/lib/seed/team.ts`.

**B. Proper way — Sanity CMS** (lets you manage content without editing code): see *Sanity* below. Once configured, you upload images in Sanity Studio and they flow through automatically.

The hero is designed for a **full-viewport autoplay video**. To use one, drop `public/media/hero.mp4` and tell me — I'll swap the hero placeholder for the `<video>` element (kept as a follow-up so the build stays light until the file exists).

---

## Deploy: GitHub → Vercel → GoDaddy

### 1. Push to GitHub
This folder is already a git repo with an initial commit. Create an empty GitHub repo (no README), then:

```bash
git remote add origin https://github.com/<your-username>/lightingsourcetx-web.git
git push -u origin main
```

### 2. Import into Vercel
1. <https://vercel.com> → **Add New → Project** → import the GitHub repo.
2. Framework preset auto-detects **Next.js**. Leave build settings default.
3. Add environment variables (Project Settings → Environment Variables) — all optional to start:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.lightingsourcetx.com`
   - `GHL_WEBHOOK_URL` = *(your GHL inbound webhook — see below)*
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` *(only if using Sanity)*
4. **Deploy.** Every push to `main` redeploys; pull requests get preview URLs.

### 3. Point the GoDaddy domain at Vercel
1. In Vercel: Project → **Settings → Domains** → add `www.lightingsourcetx.com` **and** `lightingsourcetx.com`. Set `www` as primary and redirect the apex to it (Vercel offers this in one click).
2. In **GoDaddy** (Domain → DNS → Manage DNS), set the records Vercel shows you. Standard values:
   - **CNAME** · Name `www` · Value `cname.vercel-dns.com`
   - **A** · Name `@` · Value `76.76.21.21`
   - Delete any GoDaddy "parked" / forwarding A records that conflict.
3. DNS propagates in minutes to a couple hours. Vercel auto-issues the HTTPS certificate.

> **Landing pages → main domain.** Point your campaign landing pages (also on Vercel) at this site with absolute links to `https://www.lightingsourcetx.com` — the estimator deep-links work too, e.g. `https://www.lightingsourcetx.com/estimator?type=commercial`.

---

## Go High Level (lead capture)

All three forms — the Take-Off estimator, the homepage consultation, and the giveaway — POST to `/api/ghl-webhook`, which forwards the lead to GHL server-side (the webhook URL is never exposed to the browser).

1. In GHL, create a workflow with an **Inbound Webhook** trigger and copy its URL.
2. Set `GHL_WEBHOOK_URL` to that value in Vercel (and `.env.local` for local testing).
3. Until it's set, leads are validated and logged server-side, and the form still shows its success state — so nothing looks broken in preview.

Payloads are tagged by `leadSource`: `take-off-tool`, `consultation-request`, `weekly-fan-giveaway`. The estimator payload includes the full room-by-room `estimate` object.

---

## Sanity CMS (optional, manage content without code)

Schemas (`project`, `teamMember`) and Studio config are included. The site reads from Sanity when configured and falls back to seed content otherwise.

```bash
# 1. Create a project at https://sanity.io, then:
npm i sanity @sanity/vision        # Studio-only deps (kept out of the main build)
# 2. Set NEXT_PUBLIC_SANITY_PROJECT_ID + NEXT_PUBLIC_SANITY_DATASET in .env.local
npx sanity dev                     # local Studio at http://localhost:3333
npx sanity deploy                  # or host it at <name>.sanity.studio
```

`sanity.config.ts` is at the repo root. The case studies are projects with **Show in Case Studies** enabled.

---

## Project structure

```
src/
  app/
    layout.tsx            root layout: Montserrat, metadata, Organization JSON-LD
    page.tsx              home
    projects/ case-studies/ about/ estimator/ giveaway/
    api/ghl-webhook/      server lead forwarder
    globals.css           design tokens + shared component classes
    pages.css             page-specific styles (estimator/giveaway scoped)
  components/             Nav, Footer, ProjectDetail, Estimator, forms, etc.
  lib/
    content.ts            data access (Sanity → seed fallback)
    seed/                 built-in projects + team content
    site.ts types.ts night.ts
  sanity/                 client, image helper, schemas
```

Design rules enforced throughout: **0px border radius everywhere**, Montserrat only, navy ground (`#1B2138`) with the single burnt-orange accent (`#CC5500`), scroll-reveal via IntersectionObserver, no parallax/bounce, `prefers-reduced-motion` respected.

---

## Notes & follow-ups

- **Placeholder media** stands in for real photos/video. The fan giveaway uses real product images; everything else uses the atmospheric night placeholders until you add images.
- The two giveaway fan JPEGs are large (~4 MB). Re-export them compressed (or move to Sanity / `next/image`) before launch for best Core Web Vitals.
- A few lines of the supplied copy contain em dashes, which the Craftsman voice guide technically forbids. Left verbatim from the approved design — say the word and I'll do a voice-compliance pass.
- Contact details (`214-675-6244`, `info@lightingsourcetx.com`, Austin TX) come from the prototype — confirm or update in `src/lib/site.ts`.
