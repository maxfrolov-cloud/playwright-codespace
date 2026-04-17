const { test, expect } = require('@playwright/test');

test('example.com has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example/);
});

test('has correct heading', async ({ page }) => {
  await page.goto('/');
  const heading = await page.locator('h1');
  await expect(heading).toContainText('Example Domain');
});