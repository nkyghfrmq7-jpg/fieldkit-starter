/**
 * Demo data for the starter kit.
 *
 * Everything here is fake. Replace these fixtures with a real data source
 * (API route, server action, database) and delete this file.
 */

export type ShipmentStatus = "in-transit" | "packed" | "delivered" | "hold";

export type Shipment = {
  lot: string;
  product: string;
  destination: string;
  cases: number;
  status: ShipmentStatus;
  updated: string;
};

export const statusLabel: Record<ShipmentStatus, string> = {
  "in-transit": "In transit",
  packed: "Packed",
  delivered: "Delivered",
  hold: "On hold",
};

export const shipments: Shipment[] = [
  {
    lot: "24-1190",
    product: "Heirloom tomatoes",
    destination: "Whole Foods · Austin",
    cases: 96,
    status: "in-transit",
    updated: "7:40 AM",
  },
  {
    lot: "24-1188",
    product: "Sugar snap peas",
    destination: "H-E-B · Houston",
    cases: 120,
    status: "packed",
    updated: "6:55 AM",
  },
  {
    lot: "24-1186",
    product: "Green leaf lettuce",
    destination: "Central Market · Dallas",
    cases: 84,
    status: "delivered",
    updated: "5:20 AM",
  },
  {
    lot: "24-1183",
    product: "Honeydew melons",
    destination: "Sysco · San Antonio",
    cases: 60,
    status: "hold",
    updated: "Yesterday",
  },
  {
    lot: "24-1179",
    product: "Red seedless grapes",
    destination: "Trader Joe's · Oklahoma City",
    cases: 72,
    status: "in-transit",
    updated: "Yesterday",
  },
];

export const kpis = [
  {
    label: "Cases shipped",
    value: "1,284",
    change: "+8.2%",
    direction: "up" as const,
    note: "Against same day last week",
  },
  {
    label: "On-time rate",
    value: "97.4%",
    change: "+1.1 pt",
    direction: "up" as const,
    note: "42 of 43 trucks",
  },
  {
    label: "Cold-chain alerts",
    value: "3",
    change: "−2",
    direction: "down" as const,
    note: "2 open, 1 resolved",
  },
  {
    label: "Open orders",
    value: "27",
    change: "+4",
    direction: "up" as const,
    note: "6 due today",
  },
];

export const alerts = [
  {
    severity: "high" as const,
    title: "Lot 24-1183 is 2.1°F above target",
    body: "Honeydew is reading 41.0°F in Dock 2. Pull it for inspection before the Sysco truck loads.",
    time: "8 min ago",
  },
  {
    severity: "medium" as const,
    title: "Packing list missing for lot 24-1190",
    body: "Print and attach the list before the Whole Foods truck leaves at 10:00.",
    time: "26 min ago",
  },
  {
    severity: "low" as const,
    title: "Invoice 4821 is 14 days past due",
    body: "Oakridge Grocers owes $4,180. Send a reminder or flag it for accounting.",
    time: "1 hr ago",
  },
];

export const capacity = [
  { name: "Cooler A", product: "Tomatoes", used: 62 },
  { name: "Cooler B", product: "Peas & greens", used: 81 },
  { name: "Cooler C", product: "Melons", used: 34 },
  { name: "Dock 2", product: "Staging", used: 48 },
];

export const ticketLines = [
  { product: "Heirloom tomatoes", pack: "12 × 1 lb clamshell", cases: 96 },
  { product: "Sugar snap peas", pack: "24 × 8 oz bag", cases: 120 },
  { product: "Green leaf lettuce", pack: "24 ct case", cases: 84 },
  { product: "Honeydew melons", pack: "6 ct case", cases: 18 },
];
