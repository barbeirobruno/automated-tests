import { test, expect } from '@playwright/test';
import config from '../../config.json'; 

test('Verificar erro 404 para post inexistente', async ({ request }) => {
    const response = await request.get(`${config.baseUrl}/posts`); // ID inexistente
    expect(response.status()).toBe(404);
  });