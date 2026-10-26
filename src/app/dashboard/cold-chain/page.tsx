import type { Metadata } from "next";
import { SnowflakeIcon } from "lucide-react";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Cold chain",
};

export default function ColdChainPage() {
  return (
    <PagePlaceholder
      title="Cold chain"
      description="Watch temperatures and catch excursions early."
      icon={SnowflakeIcon}
    />
  );
}
