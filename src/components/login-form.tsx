"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function LoginForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast("Signed in (demo)", {
      description:
        "Authentication isn't connected yet. Add NextAuth, Clerk, or Supabase Auth here.",
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          toast("Google sign-in (demo)", {
            description: "Wire this to your auth provider's OAuth flow.",
          })
        }
      >
        Continue with Google
      </Button>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">or</span>
        <Separator className="flex-1" />
      </div>

      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between gap-2">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <button
                type="button"
                onClick={() =>
                  toast("Password reset", {
                    description:
                      "Connect an auth provider to send reset emails.",
                  })
                }
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Forgot password?
              </button>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </Field>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
