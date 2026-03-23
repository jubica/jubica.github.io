import { test, expect } from '@playwright/test';

test.describe('Desktop Navigation', () => {
  // Only run this suite on desktop viewports
  test.skip(({ isMobile }) => isMobile, 'Desktop navigation tests should not run on mobile viewports.');

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main navigation menu', async ({ page }) => {
    const nav = page.locator('.greedy-nav');
    await expect(nav).toBeVisible();
  });

  test('should navigate to Publications page via menu', async ({ page }) => {
    const navLink = page.locator('.greedy-nav a', { hasText: 'Publications' }).first();
    await expect(navLink).toBeVisible();
    await navLink.click();
    await expect(page).toHaveURL(/.*\/publications\/?/);
    await expect(page.locator('h1.page__title')).toHaveText('Publications');
  });

  test('should navigate to Posts page via menu', async ({ page }) => {
    const navLink = page.locator('.greedy-nav a', { hasText: 'Posts' }).first();
    await expect(navLink).toBeVisible();
    await navLink.click();
    await expect(page).toHaveURL(/.*\/year-archive\/?/);
    await expect(page.locator('h1.page__title')).toHaveText('Blog posts');
  });
});
