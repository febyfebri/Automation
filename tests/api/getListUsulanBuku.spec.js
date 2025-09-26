import { test, expect } from '../fixtures';

test.describe('List Usulan Buku API', () => {
  test('Get List Usulan buku', async ({ request, token }) => {
    const response = await request.get('/api/usulan-buku', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
