import { test, expect } from '../fixtures';

test.describe('List Insitution API', () => {
  test('Get List Instituion', async ({ request, token }) => {
    const response = await request.get('/api/institution/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});