import { test, expect } from '../fixtures';

test.describe('Bookmark API', () => {
  test('Get Detail Bookmark', async ({ request, token }) => {
    const response = await request.get('/api/bookmarks/MTg2MDN8bG9jXzRfb2FpX2VwcmludHMudWFkLmFjLmlkXzYyMjE1fDQ=', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        "id_buku": "loc_4_oai_eprints.uad.ac.id_62215"
        }
    });

    expect(response.status()).toBe(200)
  });
});
