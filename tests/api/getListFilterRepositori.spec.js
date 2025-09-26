import { test, expect } from '../fixtures';

test.describe('List Filter Repositori API', () => {
  test('Get List Filter Repositori', async ({ request, token }) => {
    const response = await request.get('/api/repository-facets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
