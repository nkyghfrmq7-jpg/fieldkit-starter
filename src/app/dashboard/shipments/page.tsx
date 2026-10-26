import type { Metadata } from "next";
import { TruckIcon } from "lucide-react";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Shipments",
};

export default function ShipmentsPage() {
  return (
    <PagePlaceholder
      title="Shipments"
      description="Book, track, and close out loads."
      icon={TruckIcon}
    />
  );
}
