import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { kpis } from "@/lib/demo-data";

/**
 * A ledger-style KPI strip: one sheet, hairline rules, no floating cards.
 * The 1px grid comes from a gap-px parent with card-coloured children.
 */
export function KpiSheet() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border xl:grid-cols-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="flex flex-col gap-3 bg-card p-5">
          <p className="text-xs font-medium text-muted-foreground">
            {kpi.label}
          </p>
          <div className="flex items-baseline gap-2">
            <p className="nums font-display text-[2.5rem] leading-none">
              {kpi.value}
            </p>
            <Badge variant="secondary" className="nums gap-0.5">
              {kpi.direction === "up" ? (
                <ArrowUpRightIcon />
              ) : (
                <ArrowDownRightIcon />
              )}
              {kpi.change}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">{kpi.note}</p>
        </div>
      ))}
    </div>
  );
}
