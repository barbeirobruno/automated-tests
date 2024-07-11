import { test, expect } from '@playwright/test';
import config from '../../config.json'; 
import confidentialFiles from '../../confidentialFiles';

for (const file of confidentialFiles) {
  test(`Verificar inacessibilidade de ${file}`, async ({ page }) => {
    const response = await page.goto(`${config.baseUrl}/${file}`);
    expect(response?.status()).toBe(403); // 403 Forbidden indica acesso negado
  });
}