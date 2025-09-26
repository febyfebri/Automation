import { test, expect } from '../fixtures';

test.describe('List Facilities By Institution API', () => {
  test('Get List Facilities By Institution', async ({ request, token }) => {
    const response = await request.get('/api/institution/15/facilities?per_page=3&page=1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
