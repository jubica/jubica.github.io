import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should render the home page correctly', async ({ page }) => {
    await page.goto('/');

    // Check if the page title exists (academic pages defaults to user's name or site title)
    await expect(page).toHaveTitle(/.+/);

    // Ensure the main content area is present
    const mainContent = page.locator('#main');
    await expect(mainContent).toBeVisible();

    // Check author profile sidebar is visible
    const authorSidebar = page.locator('.author__urls-wrapper');
    await expect(authorSidebar).toBeVisible();
  });

  test('should have working buttons and links', async ({ page }) => {
    await page.goto('/');

    // Check if there are any buttons or links on the homepage
    const links = page.locator('a');
    expect(await links.count()).toBeGreaterThan(0);
  });

  test('routing from home to other pages works', async ({ page }) => {
    await page.goto('/');

    // Navigate to Publications
    await page.getByRole('link', { name: 'Publications' }).click();
    await expect(page).toHaveURL(/.*\/publications\/?/);
    await expect(page.locator('h1.page__title')).toHaveText('Publications');
  });
});
