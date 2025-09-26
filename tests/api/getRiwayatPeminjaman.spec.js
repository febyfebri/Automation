import { test, expect } from '../fixtures';

test.describe('List Riwayat Peminjaman API', () => {
  test('Get List Riwayat Peminjama', async ({ request, token }) => {
    const response = await request.get('/api/loan-history', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
