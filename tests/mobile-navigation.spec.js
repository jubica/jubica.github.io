import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation', () => {
  // Only run this suite on mobile viewports
  test.skip(({ isMobile }) => !isMobile, 'Mobile navigation tests should only run on mobile viewports.');

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show the toggle button on mobile', async ({ page }) => {
    const toggleBtn = page.locator('.greedy-nav button.navicon, button[aria-label="Toggle menu"]');
    await expect(toggleBtn).toBeVisible();
    await expect(page.locator('.greedy-nav .hidden-links')).not.toBeVisible();
  });

  test('clicking toggle button should show menu links', async ({ page }) => {
    const toggleBtn = page.locator('.greedy-nav button.navicon, button[aria-label="Toggle menu"]');
    await toggleBtn.click();

    // Check for the visibility of the link itself instead of the UL to avoid potential CSS weirdness with 'hidden' class
    const navLink = page.locator('.greedy-nav .hidden-links a, .greedy-nav a', { hasText: 'Publications' });
    await expect(navLink).toBeVisible();
  });

  test('can navigate using mobile menu', async ({ page }) => {
    const toggleBtn = page.locator('.greedy-nav button.navicon, button[aria-label="Toggle menu"]');
    await toggleBtn.click();

    // click Publications inside the expanded menu
    const navLink = page.locator('.greedy-nav .hidden-links a, .greedy-nav a', { hasText: 'Publications' });
    await expect(navLink).toBeVisible();
    await navLink.click();

    await expect(page).toHaveURL(/.*\/publications\/?/);
    await expect(page.locator('h1.page__title')).toHaveText('Publications');
  });
});
