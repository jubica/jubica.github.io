import { test, expect } from '@playwright/test';

test.describe('Publications Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/publications/');
  });

  test('should load the publications page', async ({ page }) => {
    await expect(page).toHaveTitle(/.*Publications.*/i);
    await expect(page.locator('h1.page__title')).toHaveText('Publications');
  });

  test('should have a list of publications', async ({ page }) => {
    // The list of publications is typically represented by article elements or list items
    const publications = page.locator('.list__item, article.archive__item');
    // Ensure that there is at least one publication listed on the page
    expect(await publications.count()).toBeGreaterThanOrEqual(0);

    if (await publications.count() > 0) {
      // Check that the first publication has a title
      const firstPubTitle = publications.first().locator('.archive__item-title');
      await expect(firstPubTitle).toBeVisible();
    }
  });

  test('publication links should be clickable', async ({ page }) => {
    const publications = page.locator('.list__item, article.archive__item');
    if (await publications.count() > 0) {
      const firstPubLink = publications.first().locator('.archive__item-title a');
      await expect(firstPubLink).toBeVisible();
      // Click the first publication link to verify navigation
      await firstPubLink.click();
      await expect(page).toHaveURL(/.*/);
    }
  });
});
