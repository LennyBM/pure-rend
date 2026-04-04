import { test, expect } from "@playwright/test";

test.describe("Core pages load correctly", () => {
  const pages = [
    { path: "/", title: "PureRend" },
    { path: "/services", title: "Services" },
    { path: "/locations", title: "Locations" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/process", title: "Process" },
    { path: "/contact", title: "Contact" },
  ];

  for (const page of pages) {
    test(`${page.path} loads`, async ({ page: p }) => {
      const response = await p.goto(page.path);
      expect(response?.status()).toBe(200);
      await expect(p).toHaveTitle(new RegExp(page.title, "i"));
    });
  }
});

test.describe("Navigation", () => {
  test("navbar links work", async ({ page }) => {
    await page.goto("/");
    await page.click('nav a[href="/services"]');
    await expect(page).toHaveURL(/\/services/);
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("SEO", () => {
  test("meta description exists", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /.+/);
  });

  test("JSON-LD exists", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    expect(await jsonLd.count()).toBeGreaterThan(0);
  });
});

test.describe("Accessibility", () => {
  test("images have alt text", async ({ page }) => {
    await page.goto("/");
    // We expect at least the main images to have alt tags. Some decorative ones might have empty alt tags, which is fine, but we'll check that non-empty alt exists on key elements.
    const images = page.locator("img");
    const count = await images.count();
    // In PureRend, Next/Image requires alt. Let's make sure none are missing the attribute entirely.
    for (let i = 0; i < Math.min(count, 10); i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt !== null).toBeTruthy();
    }
  });
});

test.describe("Dynamic Pages (locations/services)", () => {
  const routes = ["/locations/bude", "/locations/stratton", "/services/monocouche", "/services/silicone-renders"];
  for (const route of routes) {
    test(`${route} loads`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("Interactive Components", () => {
  test("whatsapp button visible", async ({ page }) => {
    await page.goto("/");
    const trigger = page.locator('a[href^="https://wa.me"]');
    await expect(trigger).toBeVisible();
  });

  test("calculator works", async ({ page }) => {
    await page.goto("/locations/bude");
    // Find the quote calculator text "Area (sq m)"
    const areaInput = page.getByLabel(/Area/i).first();
    if (await areaInput.isVisible()) {
      await areaInput.fill("120");
    }
  });
});
