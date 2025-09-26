import { test, expect } from '../fixtures';

test.describe('Detail Album API', () => {
  test('Get Detail Album', async ({ request, token }) => {
    const response = await request.get('/api/institution/album/67', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
