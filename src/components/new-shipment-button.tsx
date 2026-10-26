"use client";

import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function NewShipmentButton() {
  return (
    <Button
      onClick={() =>
        toast("New shipment", {
          description:
            "Starter kit: wire this button to a form or a server action.",
        })
      }
    >
      <PlusIcon data-icon="inline-start" />
      New shipment
    </Button>
  );
}
