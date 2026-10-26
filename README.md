# Fieldkit — web app starter

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

## What is not wired

- **Authentication.** `/login` is a layout demo; the form shows a toast.
- **Database.** No ORM, no schema, no migrations.
- **Search / command palette.** The top-bar search button is a placeholder.
- **Tests.** No test runner is configured yet; add Vitest or Playwright.

## Deploy

The project is Vercel-ready with zero config. From this directory:

```bash
export VERCEL_TOKEN=...        # token from vercel.com/account/tokens
vercel deploy -y --no-wait     # preview deployment
vercel deploy --prod -y        # production, when you mean it
```

Or push to a Git repo and connect it in the Vercel dashboard so every branch
gets a preview URL.
