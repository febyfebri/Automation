import { test, expect } from '../fixtures';

test.describe('List Buku Rekomendasi API', () => {
  test('Get List Buku Rekomendasi', async ({ request, token }) => {
    const response = await request.get('/api/book-recommendations', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200)
  });
});
