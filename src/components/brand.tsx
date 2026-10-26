import { cn } from "@/lib/utils";

/**
 * Crate mark: three slats and a nail. The kit's one piece of ornament.
 */
export function CrateMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 9h13M5.5 12.5h13M5.5 16h13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="6.8" r="0.9" fill="currentColor" />
      <circle cx="16" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-foreground [&_svg]:text-primary",
        className
      )}
    >
      <CrateMark />
      <span className="text-[1.0625rem] font-semibold tracking-tight">
        Fieldkit
      </span>
    </span>
  );
}
