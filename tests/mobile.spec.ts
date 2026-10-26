import { expect, test } from "@playwright/test";

test.use({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});

test.describe("mobile", () => {
  test("menu sheet opens and routes", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByText("Menu", { exact: true })).toBeVisible();

    await page.getByRole("link", { name: "Dashboard" }).click();
    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByText("Cases shipped")).toBeVisible();
  });

  test("dashboard does not scroll horizontally", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page.getByText("Cases shipped")).toBeVisible();

    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    );
    expect(scrollWidth).toBeLessThanOrEqual(391);
  });
});
