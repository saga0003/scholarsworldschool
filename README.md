# Scholars' School, Hassan — Website Rebuild

A premium, image-first rebuild of scholarshassan.com with dedicated multi-page architecture,
the original navy & gold brand palette, and a fully working online application form.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui components
- **Animations:** Framer Motion
- **Database:** Prisma ORM + SQLite
- **Icons:** Lucide

## Quick Start

> Use **bun** (recommended) or npm/pnpm — any works.

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Environment is pre-configured (.env -> SQLite at db/custom.db)

# 3. Push the database schema (only needed if db/custom.db is missing)
bunx prisma db push

# 4. Start the dev server
bun run dev        # or: npm run dev
```

Open http://localhost:3000

### Production build

```bash
npm run build
npm start
```

## Pages (dedicated multi-page structure)

| Route | Page |
|---|---|
| `/` | Home — hero slider, program photo cards, leadership, facilities, gallery preview, testimonials |
| `/about` | About the school & Puttu Education Trust |
| `/academics` | Programs overview |
| `/academics/montessori` | Early Years — Italian-style Montessori |
| `/academics/primary` | Primary School |
| `/academics/higher-primary` | Higher Primary |
| `/academics/high-school` | High School |
| `/leadership/secretary` | Secretary's message |
| `/leadership/principal` | Principal's message |
| `/facilities` | Campus facilities |
| `/gallery` | Photo gallery with keyboard-navigable lightbox |
| `/gallery/videos` | Video gallery |
| `/apply` | Online application form (saves to database, returns Reference ID) |
| `/contact` | Contact details for both campuses + map links |

## Key Files

- `src/app/` — all routes & metadata
- `src/components/site/` — navbar, footer, hero, apply form, lightbox, CTA bands, etc.
- `src/lib/site-data.ts` — central content/nav data (edit school info, phone, programs here)
- `public/images/` — all optimized school photos & logos
- `prisma/schema.prisma` — `Application` model for the apply form
- `src/app/api/apply/route.ts` — POST endpoint with server-side validation

## Notes

- Applications submitted via `/apply` are stored in SQLite (`db/custom.db`, table `Application`).
- Test submissions can be removed directly from that table.
- Colors match the original brand: navy `#002147` family + gold `#fdc800` family
  (defined as CSS variables in `src/app/globals.css`).
- `preview-screenshots/` contains desktop & mobile QA captures of key pages.
