import { expect, test, type Locator, type Page } from "@playwright/test";

type SmokeRoute = {
  path: string;
  landmark: (page: Page) => Locator;
};

/**
 * Heading copy moves with brand passes — assert brand + page landmark only.
 */
const smokeRoutes: SmokeRoute[] = [
  {
    path: "/",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/luxury",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/opera",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/portraits",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/christmas",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/events",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/food",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/community",
    landmark: (page) => page.locator(".gallery-mosaic").first(),
  },
  {
    path: "/book",
    landmark: (page) => page.getByRole("link", { name: /Open UseSession|UseSession|Book/i }).first(),
  },
  {
    path: "/clients",
    landmark: (page) => page.getByRole("textbox").first(),
  },
  {
    path: "/opera/leave-behind",
    landmark: (page) => page.getByRole("link", { name: /opera|archive|gallery/i }).first(),
  },
];

for (const route of smokeRoutes) {
  test(`smoke: ${route.path}`, async ({ page }) => {
    const response = await page.goto(route.path);

    expect(response, `Expected a document response for ${route.path}`).not.toBeNull();
    expect(response?.ok(), `Expected ${route.path} to return a successful response`).toBeTruthy();

    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("header").getByText("Diamond's Edge").first()).toBeVisible();
    await expect(page.getByText("This page didn't load")).toHaveCount(0);
    await expect(page.getByText("This page is not part of the current programme.")).toHaveCount(
      0,
    );
    await expect(page.getByRole("heading").first()).toBeVisible();
    await expect(route.landmark(page)).toBeVisible();
  });
}
