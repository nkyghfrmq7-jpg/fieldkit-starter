import Link from "next/link";

import { ScaleTicket } from "@/components/scale-ticket";
import { SiteHeader } from "@/components/site-header";
import { Wordmark } from "@/components/brand";
import { buttonVariants } from "@/components/ui/button";

const kit = [
  {
    name: "App shell",
    description:
      "Sidebar navigation, a top bar with search and account menu, and a responsive inset. Delete what you don't need.",
    path: "src/app/dashboard",
  },
  {
    name: "Component library",
    description:
      "Twenty shadcn/ui components installed as source, already themed and ready to compose into screens.",
    path: "src/components/ui",
  },
  {
    name: "Theme tokens",
    description:
      "Field-green palette in OKLCH, light and dark, with type, spacing, and radius set for data-heavy screens.",
    path: "src/app/globals.css",
  },
  {
    name: "Demo data",
    description:
      "Produce-ops fixtures so the dashboard is never empty while you swap in a real data source.",
    path: "src/lib/demo-data.ts",
  },
  {
    name: "Deployment",
    description:
      "Vercel-ready as-is. Push the repo, connect the project, and every branch gets a preview URL.",
    path: "vercel deploy",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden="true"
            className="dot-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="flex flex-col gap-7">
              <h1 className="font-display max-w-xl text-5xl leading-[0.92] text-balance sm:text-6xl lg:text-7xl">
                Every pallet, accounted for.
              </h1>
              <p className="max-w-lg text-base leading-7 text-muted-foreground">
                Fieldkit is a starter kit for operations software: an app shell,
                a component library, and a theme you can live with. The demo
                here is a shipping log for a produce distributor. Keep the
                shell, replace the data.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className={buttonVariants({ size: "lg", className: "px-4" })}
                >
                  Open the dashboard
                </Link>
                <Link
                  href="/#kit"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "px-4",
                  })}
                >
                  What&apos;s inside
                </Link>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Next.js 16 · Tailwind CSS 4 · shadcn/ui · TypeScript
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <ScaleTicket />
            </div>
          </div>
        </section>

        {/* What's in the box */}
        <section id="kit" className="border-b border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl text-balance sm:text-4xl">
                What&apos;s in the box
              </h2>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Five pieces, all editable source. There is no config file to
                learn and no library to stay inside of.
              </p>
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
              {kit.map((item) => (
                <li
                  key={item.name}
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <code className="w-fit rounded-sm bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                    {item.path}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing call */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-3xl text-balance sm:text-4xl">
                Keep the shell. Replace the data.
              </h2>
              <p className="max-w-md text-sm leading-6 text-primary-foreground/75">
                The dashboard is wired with fixtures, menus, and toasts. Point it
                at your own data and it becomes a real tool.
              </p>
            </div>
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "px-4",
              })}
            >
              See the dashboard
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="text-sm [&_span]:text-sm [&_svg]:text-muted-foreground" />
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/dashboard" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/login" className="hover:text-foreground">
              Sign in
            </Link>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Next.js docs
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              shadcn/ui
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
