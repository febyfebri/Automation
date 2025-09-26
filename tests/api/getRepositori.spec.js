import { test, expect } from '../fixtures';

test.describe('Repositori API', () => {
  test('Get Repositori', async ({ request, token }) => {
    const response = await request.post('/api/repository', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body:{
            "start":0,
            "rows": 2,
            "author": [
                "Triwibowo Yuwono",
                "Darmawan Triwibowo",
            ]
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
