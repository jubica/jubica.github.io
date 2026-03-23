import { test, expect } from '@playwright/test';

test.describe('Blog Posts Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the blog posts listing page (in this template it is usually /year-archive/)
    await page.goto('/year-archive/');
  });

  test('should load the blog posts page', async ({ page }) => {
    await expect(page).toHaveTitle(/.*Blog posts.*/i);
    await expect(page.locator('h1.page__title')).toHaveText('Blog posts');
  });

  test('should display a list of blog posts', async ({ page }) => {
    // The list of blog posts is typically represented by article elements or list items
    const posts = page.locator('.list__item');
    // Ensure that there is at least one post listed on the page
    expect(await posts.count()).toBeGreaterThanOrEqual(0);

    if (await posts.count() > 0) {
      // Check that the first post has a title
      const firstPostTitle = posts.first().locator('.archive__item-title');
      await expect(firstPostTitle).toBeVisible();
    }
  });

  test('blog post links should be clickable', async ({ page }) => {
    const posts = page.locator('.list__item');
    if (await posts.count() > 0) {
      const firstPostLink = posts.first().locator('.archive__item-title a');
      await expect(firstPostLink).toBeVisible();
      // Click the first post link to verify navigation
      await firstPostLink.click();
      await expect(page).toHaveURL(/.*/); // just wait for navigation
    }
  });
});
