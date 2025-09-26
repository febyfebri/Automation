import { test, expect } from '../fixtures';

test.describe('List Book By Institution API', () => {
  test('Get List Book By Institution', async ({ request, token }) => {
    const response = await request.get('/api/institution/2/books?page=1&per_page=15', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
