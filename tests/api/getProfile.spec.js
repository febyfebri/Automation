import { test, expect } from '../fixtures';

test.describe('Profile API', () => {
  test('Get profile', async ({ request, token }) => {
    const response = await request.get('/api/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.user.informasi_pribadi).toMatchObject({
        nama: expect.any(String),
        username: expect.any(String),
        email: expect.any(String),
        no_telpon: expect.any(String),
        alamat: expect.any(String),
        tempat_lahir: expect.any(String),
        tanggal_lahir: expect.any(String),
        jenis_kelamin: expect.any(String),
        gender_label: expect.any(String),
        no_identitas: expect.any(String),
        foto_profile: expect.any(String),
    });
  });
});
