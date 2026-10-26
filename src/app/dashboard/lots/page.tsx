import type { Metadata } from "next";
import { BoxesIcon } from "lucide-react";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Lots",
};

export default function LotsPage() {
  return (
    <PagePlaceholder
      title="Lots"
      description="Trace every lot from field to dock."
      icon={BoxesIcon}
    />
  );
}
