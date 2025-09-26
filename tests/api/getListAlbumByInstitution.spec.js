import { test, expect } from '../fixtures';

test.describe('List Album By Institution API', () => {
  test('Get List Album By Institution ', async ({ request, token }) => {
    const response = await request.get('/api/institution/15/albums', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
