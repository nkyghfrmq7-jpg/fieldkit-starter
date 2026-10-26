import type { Metadata } from "next";

import { AttentionPanel } from "@/components/attention-panel";
import { CapacityPanel } from "@/components/capacity-panel";
import { KpiSheet } from "@/components/kpi-sheet";
import { NewShipmentButton } from "@/components/new-shipment-button";
import { ShipmentsTable } from "@/components/shipments-table";

export const metadata: Metadata = {
  title: "Overview",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="text-sm text-muted-foreground">
            Monday, October 26 · last synced 11:52 AM
          </p>
        </div>
        <NewShipmentButton />
      </div>

      <KpiSheet />

      <ShipmentsTable />

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <AttentionPanel />
        <CapacityPanel />
      </div>
    </div>
  );
}
