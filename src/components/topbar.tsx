"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, LogOutIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { toast } from "sonner";

import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const titles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/shipments": "Shipments",
  "/dashboard/lots": "Lots",
  "/dashboard/cold-chain": "Cold chain",
  "/dashboard/settings": "Settings",
};

export function Topbar() {
  const pathname = usePathname();
  const current = titles[pathname] ?? "Overview";

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="text-muted-foreground" />
      <Separator orientation="vertical" className="h-5" />

      <Breadcrumb className="min-w-0">
        <BreadcrumbList>
          <BreadcrumbItem className="hidden sm:block">
            <BreadcrumbLink render={<Link href="/dashboard" />}>
              Operations
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden sm:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{current}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground"
          onClick={() =>
            toast("Search isn't wired up", {
              description: "Add the Command component to build a ⌘K palette.",
            })
          }
          aria-label="Search"
        >
          <SearchIcon data-icon="inline-start" />
          <span className="hidden text-sm sm:inline">Search</span>
          <kbd className="hidden rounded-xs border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground sm:inline">
            ⌘K
          </kbd>
        </Button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 pr-1.5 pl-1.5"
                aria-label="Account menu"
              />
            }
          >
            <Avatar className="size-6">
              <AvatarFallback className="bg-secondary text-[0.65rem] font-medium text-secondary-foreground">
                OG
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm sm:inline">Oscar</span>
            <ChevronDownIcon className="text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>
              <span className="block text-sm font-medium">Oscar Garcia</span>
              <span className="block text-xs font-normal text-muted-foreground">
                oscar@odrcapitalpartners.com
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/dashboard/settings" />}>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" render={<Link href="/login" />}>
              <LogOutIcon />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
