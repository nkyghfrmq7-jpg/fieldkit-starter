"use client";

import * as React from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shipments, statusLabel, type ShipmentStatus } from "@/lib/demo-data";

type Filter = "all" | ShipmentStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "in-transit", label: "In transit" },
  { value: "packed", label: "Packed" },
  { value: "delivered", label: "Delivered" },
  { value: "hold", label: "On hold" },
];

const badgeVariant: Record<
  ShipmentStatus,
  "default" | "secondary" | "outline" | "destructive"
> = {
  "in-transit": "secondary",
  packed: "outline",
  delivered: "outline",
  hold: "destructive",
};

export function ShipmentsTable() {
  const [filter, setFilter] = React.useState<Filter>("all");

  const rows =
    filter === "all"
      ? shipments
      : shipments.filter((shipment) => shipment.status === filter);

  return (
    <Card className="gap-0 overflow-hidden pb-0">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <CardTitle>Recent shipments</CardTitle>
            <CardDescription>
              Every lot that left the dock today.
            </CardDescription>
          </div>
          <Tabs
            value={filter}
            onValueChange={(value) => setFilter(value as Filter)}
          >
            <TabsList variant="line">
              {filters.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-5">Lot</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="hidden md:table-cell">
                Destination
              </TableHead>
              <TableHead className="hidden text-right sm:table-cell">
                Cases
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Updated</TableHead>
              <TableHead className="w-10 pr-4">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-24 text-center text-sm text-muted-foreground"
                >
                  No shipments match this filter.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((shipment) => (
                <TableRow key={shipment.lot}>
                  <TableCell className="pl-5 font-mono text-xs">
                    {shipment.lot}
                  </TableCell>
                  <TableCell className="font-medium">
                    {shipment.product}
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">
                    {shipment.destination}
                  </TableCell>
                  <TableCell className="nums hidden text-right sm:table-cell">
                    {shipment.cases}
                  </TableCell>
                  <TableCell>
                    <Badge variant={badgeVariant[shipment.status]}>
                      {statusLabel[shipment.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {shipment.updated}
                  </TableCell>
                  <TableCell className="pr-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label={`Actions for lot ${shipment.lot}`}
                          />
                        }
                      >
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                          onClick={() =>
                            toast(`Lot ${shipment.lot}`, {
                              description: `${shipment.product} · ${shipment.cases} cases`,
                            })
                          }
                        >
                          View lot
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            toast("Packing list queued", {
                              description: `Lot ${shipment.lot} will print at the dock printer.`,
                            })
                          }
                        >
                          Print packing list
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() =>
                            toast("Lot placed on hold", {
                              description: `Lot ${shipment.lot} is held for inspection.`,
                            })
                          }
                        >
                          Put on hold
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
