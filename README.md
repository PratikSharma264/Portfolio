# Pratik Sharma — Portfolio

A production-ready personal portfolio built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion. Covers about/skills/projects/research/education/
certifications/achievements/experience/testimonials/GitHub activity/blog/contact, with
dark & light mode, a command palette (⌘K), scroll progress, project filtering, blog
search + tags + pagination, full SEO metadata, and a working contact form.

## Before you deploy — placeholder content to edit

This was generated from your brief. Everything explicitly stated in your prompt (name,
projects, skills, research interests, contact info) is filled in for real. A few
sections had **no source data**, so they're filled with obvious bracketed placeholders
— search the codebase for `[` to find every one of them:

| File | What to replace |
|---|---|
| `lib/data.ts` → `education` | Your actual university/college name and years |
| `lib/data.ts` → `certifications` | Real certifications, or delete the array entries |
| `lib/data.ts` → `achievements` | Real competitions/hackathons, or delete |
| `lib/data.ts` → `experience` | Real internships/freelance work, or delete |
| `lib/data.ts` → `testimonials` | Real quotes, or remove `<Testimonials />` from `app/page.tsx` |
| `lib/data.ts` → `publications` | Remove if you have no publications yet |
| `lib/data.ts` → `profile.resumeUrl` | Add a real PDF at `public/resume.pdf` and update the path |
| `public/` | Drop in a real `favicon.ico` if you want to replace the default |

The skill **percentages** in `skillCategories` are reasonable starting estimates based
on the order you listed them in — adjust freely, they're just numbers in an array.

## What's fully wired up vs. stubbed

✅ Fully working out of the box: every section's layout/animation/responsiveness,
dark/light mode, command palette, project filters, blog search/tags/pagination,
contact + newsletter forms (validate and respond, see below), sitemap/robots/structured
data, GitHub contribution graph + stats (via the public, tokenless `ghchart.rshah.org`
and `github-readme-stats.vercel.app` services).

🔧 Needs a service connected before it's "live":
- **Contact form** (`app/api/contact/route.ts`) — currently logs submissions to the
  server console. Add a `RESEND_API_KEY` env var and uncomment the Resend snippet in
  that file (or swap in your own provider) to actually receive emails.
- **Newsletter form** (`app/api/newsletter/route.ts`) — same idea; currently logs to
  console. Wire it to Mailchimp/ConvertKit/Buttondown etc.
- **GitHub graph** — uses public third-party rendering services so it works with zero
  config. For first-party data, swap in the GitHub GraphQL API with a personal token.
- **Vercel Analytics** — the `<Analytics />` component is included and will start
  collecting data automatically once deployed to Vercel; no setup needed there.

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & verify

```bash
npm run build   # production build
npm run lint    # ESLint
npm start       # serve the production build locally
```

## Deployment

### Vercel (recommended — zero config)
1. Push this repo to GitHub.
2. Import it at vercel.com/new.
3. Framework preset "Next.js" is auto-detected. No env vars are required to deploy;
   add `RESEND_API_KEY` etc. later if you wire up the email integrations above.
4. Point your domain (`pratiksharma2060.com.np`) at the Vercel project in
   Project Settings → Domains.

### Netlify
A `netlify.toml` is included using the official Next.js Runtime (`@netlify/plugin-nextjs`).
Just connect the repo at app.netlify.com — build command and publish directory are
already configured.

### Docker / any VPS
```bash
docker build -t pratik-portfolio .
docker run -p 3000:3000 pratik-portfolio
```
or with Compose:
```bash
docker compose up --build
```

### Plain Node server (any VPS)
```bash
npm install
npm run build
npm start -- -p 3000   # put behind nginx/Caddy with a reverse proxy + TLS
```

> Note on static export: this project uses API routes (`/api/contact`,
> `/api/newsletter`) and dynamic OG image generation, so it's deployed as a Node
> server (the default for all options above) rather than `next export`. If you ever
> need static hosting (e.g. plain GitHub Pages with no server), remove those features
> first.

## Project structure

```
app/                  Routes (App Router): home, /blog, /blog/[slug], API routes,
                       sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx
components/
  layout/              Navbar, Footer, theme toggle, command palette, scroll progress
  sections/             One file per homepage/blog section
  ui/                   Small reusable primitives (Button, Card, Badge, Tabs, ...)
lib/
  data.ts               ALL editable content lives here
  types.ts              Shared TypeScript types for that content
  schemas.ts            Zod validation for the contact/newsletter forms
  utils.ts, use-typewriter.ts
```

Everything in `lib/data.ts` is plain TypeScript objects/arrays — editing your content
never requires touching a component file.

## Accessibility & performance notes

- Semantic landmarks, a skip-to-content link, visible focus rings, and `prefers-reduced-motion`
  support are built in.
- All interactive widgets (command palette, mobile nav, dialogs) are built on Radix UI
  primitives for correct focus-trapping and keyboard support.
- Fonts are self-hosted via `@fontsource` (no third-party font CDN request at runtime).
- Images load lazily where used; the heaviest assets are the optional GitHub stat-card
  images, which are lazy-loaded.
