import { Badge } from "@/components/ui/badge";
import { ticketLines } from "@/lib/demo-data";

/**
 * A produce scale ticket, built from real components. Used on the landing page
 * to show what the theme looks like with dense, tabular content.
 */
export function ScaleTicket() {
  const total = ticketLines.reduce((sum, line) => sum + line.cases, 0);

  return (
    <div className="relative w-full max-w-sm">
      <div className="stamp absolute -right-4 -bottom-5 z-10 rounded-xs bg-card px-3 py-1.5 text-center">
        <span className="block text-[0.6rem] font-semibold uppercase">
          Field packed
        </span>
        <span className="block text-[0.9rem] leading-tight font-semibold">
          Grade A
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Scale ticket
            </p>
            <p className="mt-2 font-mono text-sm font-medium">Lot 24-1190</p>
            <p className="text-xs text-muted-foreground">
              Monday, October 26 · Dock 2
            </p>
          </div>
          <Badge variant="outline">In transit</Badge>
        </div>

        <div className="perforation mx-5" />

        <div className="px-5 py-1">
          {ticketLines.map((line) => (
            <div
              key={line.product}
              className="flex items-baseline justify-between gap-4 border-b border-dashed border-border py-2.5 last:border-b-0"
            >
              <div className="min-w-0">
                <p className="truncate text-sm">{line.product}</p>
                <p className="text-xs text-muted-foreground">{line.pack}</p>
              </div>
              <p className="nums text-sm text-muted-foreground">{line.cases}</p>
            </div>
          ))}
        </div>

        <div className="perforation mx-5" />

        <div className="p-5 pb-7">
          <p className="text-xs text-muted-foreground">Total</p>
          <p className="nums font-display text-4xl leading-none">
            {total}{" "}
            <span className="font-sans text-sm tracking-normal text-muted-foreground">
              cases
            </span>
          </p>
          <p className="mt-1.5 text-xs text-muted-foreground">
            3 pallets · 2 stops
          </p>
        </div>
      </div>
    </div>
  );
}
