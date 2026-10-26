import { expect, test } from "@playwright/test";

test.describe("marketing page", () => {
  test("hero, ticket, and navigation render", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Every pallet"
    );
    await expect(page.getByText("Scale ticket")).toBeVisible();
    await expect(page.getByRole("link", { name: "Open dashboard" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What's in the box" })).toBeVisible();
  });
});

test.describe("dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
  });

  test("shows the KPI sheet and every shipment", async ({ page }) => {
    await expect(page.getByText("Cases shipped")).toBeVisible();
    await expect(page.getByText("On-time rate")).toBeVisible();
    await expect(page.locator("tbody tr")).toHaveCount(5);
  });

  test("filters shipments by status", async ({ page }) => {
    await page.getByRole("tab", { name: "On hold" }).click();
    await expect(page.locator("tbody tr")).toHaveCount(1);
    await expect(page.getByText("Honeydew melons")).toBeVisible();

    await page.getByRole("tab", { name: "All" }).click();
    await expect(page.locator("tbody tr")).toHaveCount(5);
  });

  test("row actions fire a toast", async ({ page }) => {
    await page
      .locator("tbody tr")
      .first()
      .getByRole("button")
      .last()
      .click();
    await page.getByRole("menuitem", { name: "Put on hold" }).click();
    await expect(page.getByText("Lot placed on hold")).toBeVisible();
  });

  test("theme toggle applies dark mode", async ({ page }) => {
    await page.getByRole("button", { name: "Change theme" }).click();
    await page.getByRole("menuitem", { name: "Dark" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("sidebar navigates to a placeholder route", async ({ page }) => {
    await page.getByRole("link", { name: "Shipments" }).click();
    await expect(page).toHaveURL(/\/dashboard\/shipments$/);
    await expect(page.getByText("Nothing here yet")).toBeVisible();
  });
});

test.describe("sign in", () => {
  test("form submits and shows the demo toast", async ({ page }) => {
    await page.goto("/login");
    await page.fill("#email", "oscar@example.com");
    await page.fill("#password", "hunter2");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("Signed in (demo)")).toBeVisible();
  });
});
