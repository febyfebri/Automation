import { test, expect } from '../fixtures';

test.describe('Detail Repositori API', () => {
  test('Get Detail Repositori', async ({ request, token }) => {
    const response = await request.get('/api/repository/kpdslemanlib-slims-674655', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
