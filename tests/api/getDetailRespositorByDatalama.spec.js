import { test, expect } from '../fixtures';

test.describe('Detail Repositori By Id Lama API', () => {
  test('Get Detail Repositori By Id Lama', async ({ request, token }) => {
    const response = await request.get('/api/repository/oai:jogjalib.com:100BKE004255', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
