import { test, expect } from '../fixtures';

test.describe('List Buku Rekomendasi Dengan Pencarian API', () => {
  test('Get List Buku Rekomendasi Dengan Pencarian', async ({ request, token }) => {
    const response = await request.get('/api/book-recommendations?search=yogyakarta&per_page=5&pengarang=Ira&tahun_terbit=2015', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200)
  });
});
