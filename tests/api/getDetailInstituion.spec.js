import { test, expect } from '../fixtures';

test.describe('Detail Institution API', () => {
  test('Get Detail Institution', async ({ request, token }) => {
    const response = await request.get('/api/institution/detail/2', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);
  });
});