import { test, expect } from '../fixtures';

test.describe('List Berita API', () => {
  test('Get List Berita', async ({ request, token }) => {
    const response = await request.get('/api/berita?search=buku&sort=terbaru&per_page=5&page=1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
