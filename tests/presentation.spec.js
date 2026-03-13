const { test, expect } = require('@playwright/test');

test('presentation initializes Reveal.js', async ({ page }) => {
  await page.goto('/');

  // Wait for reveal.js to initialize
  await expect(page.locator('.reveal')).toHaveClass(/ready/);
  await expect(page.locator('.reveal')).toBeVisible();
  await expect(page.locator('.slides')).toBeVisible();
});
