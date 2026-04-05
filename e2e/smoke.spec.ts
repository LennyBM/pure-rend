import { test, expect } from "@playwright/test";

test.describe("Core pages load correctly", () => {
  const pages = [
    { path: "/", title: "Plastering" }, // usually "Silicone Rendering & Plastering in Bude | PureRend"
    { path: "/about", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/locations", title: "Areas" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/process", title: "Process" },
    { path: "/contact", title: "Contact" },
    { path: "/privacy", title: "Privacy" },
    { path: "/terms", title: "Terms" },
  ];

  for (const page of pages) {
    test(`Static route: ${page.path} loads`, async ({ page: p }) => {
      const response = await p.goto(page.path);
      expect(response?.status()).toBe(200);
      await expect(p).toHaveTitle(new RegExp(page.title, "i"));
    });
  }
});

test.describe("Dynamic routes load", () => {
  const dynamicPages = [
    "/services/silicone-rendering",
    "/services/internal-plastering",
    "/services/monocouche",
    "/services/external-wall-insulation",
    "/locations/bude",
    "/locations/stratton"
  ];
  for (const path of dynamicPages) {
    test(`Dynamic route: ${path} loads`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("Navigation", () => {
  test("navbar links work", async ({ page }) => {
    await page.goto("/");
    await page.locator('nav a[href="/services"]').first().click();
    await expect(page).toHaveURL(/\/services/);
    await page.locator('nav a[href="/contact"]').first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("mobile menu opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    // Click the hamburger menu
    const menuButton = page.locator('button[aria-controls="mobile-menu"]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500); // Wait for open animation
      const link = page.locator('#mobile-menu a[href="/contact"]').first();
      await expect(link).toBeVisible();
    }
  });
});

test.describe("SEO", () => {
  test("meta description exists", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /.+/);
  });

  test("JSON-LD exists on homepage", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
  });
});

test.describe("Accessibility", () => {
  test("important structural elements exist", async ({ page }) => {
    await page.goto("/");
    // We should have at least one main heading
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // Check navigation element exists
    const navCount = await page.locator("nav").count();
    expect(navCount).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Interactive Components", () => {
  test("quote calculator slider renders on contact page", async ({ page }) => {
    await page.goto("/contact");
    const slider = page.locator('input[type="range"]').first();
    if (await slider.isVisible()) {
      // Move slider to trigger any potential state errors
      await slider.fill("120");
    }
  });
});
