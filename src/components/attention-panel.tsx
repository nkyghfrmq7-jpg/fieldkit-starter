import { TriangleAlertIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { alerts } from "@/lib/demo-data";

const accent: Record<string, string> = {
  high: "border-l-destructive",
  medium: "border-l-stamp",
  low: "border-l-border",
};

const iconColor: Record<string, string> = {
  high: "text-destructive",
  medium: "text-stamp",
  low: "text-muted-foreground",
};

export function AttentionPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Needs attention</CardTitle>
        <CardDescription>Three things before the last truck</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className={`flex gap-3 border-l-2 bg-muted/40 py-2.5 pr-3 pl-3 ${accent[alert.severity]}`}
          >
            <TriangleAlertIcon
              className={`mt-0.5 size-4 shrink-0 ${iconColor[alert.severity]}`}
            />
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-sm leading-5 font-medium">{alert.title}</p>
              <p className="text-xs leading-5 text-muted-foreground">
                {alert.body}
              </p>
              <p className="text-[0.6875rem] text-muted-foreground">
                {alert.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
