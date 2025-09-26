import { test, expect } from '../fixtures';

test.describe('List Buku Rekomendasi API', () => {
  test('Get Detail Buku Rekomendasi', async ({ request, token }) => {
    const response = await request.get('/api/book-recommendations/25', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200)
  });
});
