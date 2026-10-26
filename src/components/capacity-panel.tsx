import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { capacity } from "@/lib/demo-data";

export function CapacityPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cold storage</CardTitle>
        <CardDescription>Capacity in use, by room</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {capacity.map((room) => (
          <div key={room.name} className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <p className="text-sm leading-5">{room.name}</p>
                <p className="text-xs text-muted-foreground">{room.product}</p>
              </div>
              <p className="nums text-sm text-muted-foreground">
                {room.used}%
              </p>
            </div>
            <Progress
              value={room.used}
              className="[&_[data-slot=progress-track]]:h-1.5"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
