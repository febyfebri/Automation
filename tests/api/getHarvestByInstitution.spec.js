import { test, expect } from '../fixtures';

test.describe('List Harvest Session By Institution API', () => {
  test('Get List Harvest Session By Institution', async ({ request, token }) => {
    const response = await request.get('/api/institution/2/harvest-sessions?page=1&per_page=20', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
