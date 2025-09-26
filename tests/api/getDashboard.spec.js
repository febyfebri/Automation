import { test, expect } from '../fixtures';

test.describe('List Cart API', () => {
  test('Get Cart', async ({ request, token }) => {
    const response = await request.get('/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
