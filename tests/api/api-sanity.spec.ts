import { test, expect } from '@playwright/test';
import config from '../../config.json'; 

test('Verifica API do WordPress', async ({ request }) => {
  const response = await request.get(config.baseUrl); 

  // Verifica se a requisição foi bem-sucedida
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Analisa o conteúdo da resposta
  // const posts = await response.json();
  //expect(posts).toBeArray(); // Verifica se a resposta é um array
  }
);