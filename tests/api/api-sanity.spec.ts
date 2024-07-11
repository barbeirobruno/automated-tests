import { test, expect } from '@playwright/test';
import config from '../../config.json'; 

test('Verifica API do WordPress', async ({ request }) => {
  const response = await request.get(config.baseUrl); 

  // Verifica se a requisição foi bem-sucedida
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe('OK');
  expect(response.headers()['content-type']).toContain('text/html; charset=UTF-8');
  expect(response.headers()['server']).toContain('Apache');
  }
);