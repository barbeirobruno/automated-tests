import { test, expect } from '@playwright/test';
import config from '../../config.json'; 

test.beforeEach(async ({ page }) => {
  await page.goto(config.baseUrl);
});
// Common setup for all tests

test('Verificar título da página', async ({ page }) => {
  await expect(page).toHaveTitle(/Giralata/); // Assumes title is dynamic; adjust regex as needed.
});

test('Testar navegação do menu', async ({ page }) => {
  const links = await page.$$('nav a');
  for (const link of links) {
    const expectedURL = await link.getAttribute('href');
    await link.click();
    // Use the URL from the link's href attribute for verification
    if (expectedURL) {
      await expect(page).toHaveURL(expectedURL);
    } else {
      throw new Error('Expected URL is null.');
    }
    // Navigate back for the next iteration if necessary
    await page.goto(config.baseUrl);
  }
});

