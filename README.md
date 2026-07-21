# mAh⚡fuse OS

UX that holds charge under pressure. Portfolio OS for **Abdullah Al Mahfuz** — UX designer at United International University, Dhaka.

A cyberpunk command-deck portfolio built with Next.js, React 19, Tailwind v4, Framer Motion, and Resend. Dark-first theme, terminal UI, gated resume download, animated boot sequence.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | redirects to `/boot` |
| `/boot` | hero + animated boot sequence + quick-launch tiles |
| `/sys` | about, manifesto, skills matrix, uptime log, gated resume |
| `/work` | file-tree case-study explorer (+ lab experiments + archive tabs) |
| `/signal` | contact, terminal form, mocked live signal feed |

## Stack

- **Next.js 16** App Router · **React 19** · **TypeScript**
- **Tailwind v4** (via `@theme inline` + HSL CSS variables)
- **Framer Motion** for animation (60–160 ms, eased `cubic-bezier(.2,.8,.2,1)`)
- **Zod** runtime validation on forms + project content
- **Resend** SDK for `/api/contact` and `/api/resume-gate`
- **`react-hook-form`** + `@hookform/resolvers/zod` for the terminal form
- **Lucide React** icons
- **`next/font/google`** for JetBrains Mono (mono) + Inter (display)

## Setup

```bash
npm install
cp .env.example .env.local    # fill in RESEND_API_KEY etc.
npm run dev
```

Open <http://localhost:3000>. The app boots straight into `/boot`.

## Environment Variables

| Variable | Required? | What it does |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes for production mail | Resend SDK key. Without it, both routes log only. |
| `CONTACT_TO_EMAIL` | Yes | Where contact-form submissions are sent. |
| `RESUME_FILE_PATH` | Yes | Path to your resume PDF (e.g. `./public/resume.pdf`). |
| `RESEND_FROM` | Recommended | "From" address. Must be on a Resend-verified domain for cross-account delivery. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Used for OG metadata + sitemap. Defaults to `https://mahfuse.os`. |

> **Resend sandbox tip:** the default `onboarding@resend.dev` sender can only mail to the address that owns your Resend account. Once you verify a custom domain, update `RESEND_FROM` (e.g. `"mAh⚡fuse OS <hello@mahfuse.os>"`) and resume-gate will deliver to any inbox.

## Editing content

Almost all visible copy lives in `src/content/`:

- `src/content/profile.ts` — bio, education, skills, social links
- `src/content/boot-log.ts` — the 12-line boot sequence
- `src/content/projects/*.ts` — five case studies (Tasker Pro, EduLearn, Calculators, UXcellence, City Fish)
- `src/content/lab-experiments.ts` — four lab experiments
- `src/content/archive.ts` — three-era archive
- `src/content/signal-feed.ts` — mocked incoming signals for `/signal`

Add a new case study:

1. Create `src/content/projects/my-project.ts` exporting a `Project` object (`satisfies Project` from `@/lib/schemas`).
2. Add it to the `projects` array in `src/content/projects/index.ts`.

Zod parses each project at module-load time, so a malformed entry breaks the build immediately.

## Editing design tokens

All colors live in `src/app/globals.css` under `:root` (dark) and `:root.light` (light). Tailwind exposes them as utilities: `bg-bg`, `text-accent`, `border-line`, etc.

## Deploy

The easiest path is **Vercel**:

1. Push this repo to GitHub.
2. Import in Vercel — framework auto-detected.
3. Copy `.env.local` values into Project Settings → Environment Variables.
4. Add a custom domain when ready.

## Accessibility & motion

- Skip-to-content link in `<body>` top.
- Focus rings via `:focus-visible` outlined in `globals.css`.
- All animations respect `prefers-reduced-motion` (durations collapse to ~0 ms).
- `Magnetic` cursor effect capped at 8 px.
- Boot sequence renders all lines + title instantly under reduced-motion.

## Definitions of done

- [x] All 4 routes resolve
- [x] Dark + light themes toggleable, persisted to `localStorage`, no FOUC
- [x] Boot sequence plays once per page load (refresh replays)
- [x] Contact form sends real email via Resend when `RESEND_API_KEY` is set
- [x] Resume gate emails PDF attachment back to the visitor
- [x] Responsive: panels stack on small screens
- [x] JSON-LD `Person` schema in `<head>` via `components/seo/JsonLd.tsx`
- [x] Open Graph image (1200×630) generated via `app/opengraph-image.tsx`
- [x] `sitemap.xml` + `robots.txt` auto-generated
- [x] Manifest + video so the site ships clean to Vercel

## License

Personal portfolio. Code is yours to fork; copy and case studies are Abdullah Al Mahfuz's.
