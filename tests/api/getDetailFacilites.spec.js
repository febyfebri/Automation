import { test, expect } from '../fixtures';

test.describe('Detail Facilities API', () => {
  test('Get Detail Facilities', async ({ request, token }) => {
    const response = await request.get('/api/institution/facility/71', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
  });
});
