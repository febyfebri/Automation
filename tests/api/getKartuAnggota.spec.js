import { test, expect } from '../fixtures';

test.describe('Kartu Anggota API', () => {
  test('Get Kartu Anggota', async ({ request, token }) => {
    const response = await request.get('/api/auth/member-card', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    const kartu = body.data.card;
    
    expect(kartu).toHaveProperty('nama_lengkap');
    expect(kartu).toHaveProperty('tempat_lahir');
    expect(kartu).toHaveProperty('tanggal_lahir');
    expect(kartu).toHaveProperty('tempat_tanggal_lahir');
    expect(kartu).toHaveProperty('alamat');
    expect(kartu).toHaveProperty('no_telepon');
    expect(kartu).toHaveProperty('email');
    expect(kartu).toHaveProperty('perpustakaan_asal');
    expect(kartu).toHaveProperty('masa_berlaku_keanggotaan');
    expect(kartu).toHaveProperty('nomor_anggota');
    expect(kartu).toHaveProperty('foto_profile');
    expect(kartu).toHaveProperty('institution_logo');
  });
});
