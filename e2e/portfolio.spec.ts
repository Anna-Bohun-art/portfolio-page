import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("navigation and theme work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Software for life science/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Switch to (dark|light) mode/ })).toBeVisible();

  await page.getByRole("link", { name: "View my experience" }).click();
  await expect(page.locator("#experience")).toBeInViewport();

  const themeButton = page.getByRole("button", { name: /Switch to (dark|light) mode/ });
  await themeButton.click();
  const savedTheme = await page.evaluate(() => localStorage.getItem("anna-theme"));
  expect(savedTheme).toMatch(/dark|light/);
});

test("has no serious accessibility issues or horizontal overflow", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  const results = await new AxeBuilder({ page }).disableRules(["color-contrast"]).analyze();
  expect(results.violations).toEqual([]);
});

test("respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const behavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(behavior).toBe("auto");
});
