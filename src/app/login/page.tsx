import type { Metadata } from "next";
import Link from "next/link";

import { CrateMark } from "@/components/brand";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-primary p-10 text-primary-foreground lg:flex">
        <Link href="/" className="relative flex w-fit items-center gap-2">
          <CrateMark className="size-6" />
          <span className="text-base font-semibold tracking-tight">
            Fieldkit
          </span>
        </Link>

        <div className="relative flex max-w-md flex-col gap-5">
          <p className="font-display text-4xl leading-[1.05] text-balance">
            The shortest distance between the field and the shelf.
          </p>
          <p className="text-sm leading-6 text-primary-foreground/70">
            A starter kit for the software in between: shipments, lots, cold
            chain, and the paperwork that holds it together.
          </p>
        </div>

        <p className="relative font-mono text-xs text-primary-foreground/60">
          Next.js 16 · Tailwind CSS 4 · shadcn/ui
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-sm flex-col gap-8">
          <Link
            href="/"
            className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm leading-6 text-muted-foreground">
              Use your work account. Authentication is not connected in the
              starter, so this form only shows the pattern.
            </p>
          </div>

          <LoginForm />

          <p className="text-xs leading-5 text-muted-foreground">
            Need an account?{" "}
            <Link
              href="/dashboard"
              className="text-foreground underline underline-offset-4"
            >
              Request access
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
