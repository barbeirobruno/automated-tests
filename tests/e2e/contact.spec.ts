import { test, expect} from '@playwright/test';
import config from '../../config.json'; 

test('Testar formulário de contato', async ({ page }) => {
    await page.goto(config.baseUrl);
  
    // Preencha os campos do formulário
    await page.fill('#nome', 'Seu Nome');
    await page.fill('#email', 'seu@email.com');
    await page.fill('#mensagem', 'Olá, este é um teste!');
  
    // Envie o formulário
    await page.click('button[type="submit"]');
  
    // Aguarde a mensagem de sucesso
    await expect(page.locator('.mensagem-sucesso')).toHaveText(/Mensagem enviada com sucesso!/);
 });