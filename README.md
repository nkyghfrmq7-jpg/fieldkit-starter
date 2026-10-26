# Fieldkit — web app starter

**Live:** https://fieldkit-ruby.vercel.app — deployed on Vercel (project `fieldkit`, team `Oscar`).

A Next.js starter for internal operations apps. It ships with a marketing page,
an app shell (sidebar + top bar), a dashboard wired to demo data, and a sign-in
layout — all as editable source you can keep, delete, or replace.

## Stack

| Piece      | Version |
| ---------- | ------- |
| Next.js    | 16.4 (App Router, Turbopack) |
| React      | 19.3 |
| Tailwind   | 4.3 |
| shadcn/ui  | base-nova style, Base UI primitives |
| TypeScript | 5.9 |
| Extras     | next-themes, sonner, lucide-react |

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build
pnpm start      # production build on port 3000
pnpm lint
pnpm test:e2e   # Playwright smoke suite
```

## Routes

| Route                   | What it shows |
| ----------------------- | ------------- |
| `/`                     | Marketing page with a scale-ticket panel |
| `/dashboard`            | Overview: KPI strip, shipments table, alerts, capacity |
| `/dashboard/shipments`  | Placeholder route (empty state) |
| `/dashboard/lots`       | Placeholder route (empty state) |
| `/dashboard/cold-chain` | Placeholder route (empty state) |
| `/dashboard/settings`   | Placeholder route (empty state) |
| `/login`                | Split-screen sign-in layout |

## Layout

```
src/
  app/
    layout.tsx            fonts, theme provider, toaster
    page.tsx              marketing page
    globals.css           design tokens and small utilities
    dashboard/
      layout.tsx          sidebar + inset shell
      page.tsx            overview screen
      */page.tsx          placeholder routes
    login/page.tsx        sign-in screen
  components/
    ui/                   shadcn/ui components (source)
    app-sidebar.tsx       dashboard navigation
    topbar.tsx            breadcrumb, search, account menu
    kpi-sheet.tsx         ledger-style metric strip
    shipments-table.tsx   filtered table with row actions and toasts
    attention-panel.tsx   alert list
    capacity-panel.tsx    progress bars
    login-form.tsx        form pattern with Field components
    page-placeholder.tsx  shared empty state
  lib/
    demo-data.ts          fake produce-ops fixtures
    utils.ts              cn()
```

## Add a component

```bash
pnpm dlx shadcn@latest add dialog sheet command
```

Components land in `src/components/ui` as source, so edit them freely.

## Theme

Tokens live in `src/app/globals.css` as OKLCH CSS variables (light in `:root`,
dark in `.dark`) and are exposed to Tailwind through `@theme inline`. Change
`--primary`, `--background`, `--radius`, and friends to rebrand the whole app.

Typefaces are loaded with `next/font` in `src/app/layout.tsx`:
Instrument Serif for display, Instrument Sans for UI, IBM Plex Mono for codes.

Small utilities defined in `globals.css`: `.font-display`, `.nums` (tabular
figures), `.dot-grid`, `.stamp`, `.perforation`, `.rise`.

## Demo data

Everything on the dashboard comes from `src/lib/demo-data.ts`. Replace those
exports with a real data source — a server component can fetch directly, or add
a route handler / server action for writes. Delete the file once it's unused.

## Tests

`pnpm test:e2e` runs Playwright against a dev server on port 3000. It covers the
marketing page, KPI sheet and shipments table, status filtering, row-action
toasts, the theme switch, sidebar routing, the sign-in form, and two mobile
checks (menu sheet and no horizontal scroll).

Config lives in `playwright.config.ts`; specs in `tests/`. Add `--ui` for the
interactive runner, or `--project chromium --headed` to watch it run.

## What is not wired

- **Authentication.** `/login` is a layout demo; the form shows a toast.
- **Database.** No ORM, no schema, no migrations.
- **Search / command palette.** The top-bar search button is a placeholder.

## Deploy

The project is Vercel-ready with zero config, and builds in about 15 seconds.

With a Vercel account connected:

```bash
export VERCEL_TOKEN=...        # token from vercel.com/account/tokens
vercel deploy -y --no-wait     # preview deployment
vercel deploy --prod -y        # production, when you mean it
```

Without logging in, create a temporary deployment and claim it later:

```bash
vercel deploy --temporary -y --verify
```

Temporary deployments expire after 60 minutes unless claimed. The CLI prints a
preview URL and a one-time claim URL; claiming moves the deployment into a
Vercel account.

Or push to a Git repo and connect it in the Vercel dashboard so every branch
gets a preview URL.

## Screenshots

Captured from the production build with Playwright:

- `docs/screenshots/landing.png`
- `docs/screenshots/dashboard.png`
- `docs/screenshots/dashboard-dark.png`
- `docs/screenshots/sign-in.png`
