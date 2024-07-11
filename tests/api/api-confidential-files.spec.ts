import { test, expect } from '@playwright/test';
import config from '../../config.json'; 
import confidentialFiles from '../../confidentialFiles';

// Os arquivos a serem validados devem ser inseridos no array confidentialFiles.ts
for (const file of confidentialFiles) {
  test(`Verificar inacessibilidade de ${file}`, async ({ page }) => {
      try {
          const response = await page.goto(`${config.baseUrl}/${file}`);
          expect(response?.status()).toBe(403); 
      } catch (error) {
          console.error(`Erro ao acessar ${file}:`, error);
      }
  });
}