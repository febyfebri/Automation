import { test as base } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export const test = base.extend({
  token: async ({ request }, use) => {
    const res = await request.post(`${process.env.BASE_URL_API}/api/auth/login/member`, {
      data: {
        username: 'wowok',
        password: '123456789',
      },
      headers: { 'Content-Type': 'application/json' },
    });
    const body = await res.json();
    await use(body.data.token);
  },
});

export const expect = test.expect;
