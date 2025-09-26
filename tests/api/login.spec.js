import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Login API', () => {
  const baseURL = process.env.BASE_URL_API;

  test('Login success', async ({ request }) => {
    const response = await request.post(`${baseURL}/api/auth/login/member`, {
      data: {
        username: 'wowok',
        password: '123456789',
      },
      headers: { 'Content-Type': 'application/json' },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('data.token');
    expect(typeof body.data.token).toBe('string');
  });
});
