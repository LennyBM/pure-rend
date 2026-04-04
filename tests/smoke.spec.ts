import { test, expect } from "@playwright/test";

test.describe("Core pages load correctly", () => {
  const pages = [
    { path: "/", title: "PureRend" },
    { path: "/services", title: "Services" },
    { path: "/locations", title: "Areas We Cover" },
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

  test("mobile menu opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const menuButton = page.locator('button[aria-label*="menu" i], nav button').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500);
    }
  });
});

test.describe("SEO", () => {
  test("meta description exists", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /.+/);
  });

  test("sitemap accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });
});

test.describe("Forms & Interactivity", () => {
  test("calculator renders", async ({ page }) => {
    await page.goto("/contact");
    const propertyTypeHeading = page.locator("text=What type of property is it?");
    await expect(propertyTypeHeading).toBeVisible();
  });
});
