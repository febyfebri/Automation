import { test, expect } from '../fixtures';

test.describe('Pengumuman API', () => {
  test('Get Pengumuman', async ({ request, token }) => {
    const response = await request.get('/api/pengumuman', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    const pengumuman = body.data[0];
    
    expect(pengumuman).toHaveProperty('no');
    expect(pengumuman).toHaveProperty('id');
    expect(pengumuman).toHaveProperty('judul');
    expect(pengumuman).toHaveProperty('keterangan_preview');
    expect(pengumuman).toHaveProperty('waktu_posting');
    expect(pengumuman).toHaveProperty('waktu_posting_iso');
    expect(pengumuman).toHaveProperty('status');
    expect(pengumuman).toHaveProperty('status_value');
    expect(pengumuman).toHaveProperty('status_baca');
    expect(pengumuman).toHaveProperty('is_read');
    expect(pengumuman).toHaveProperty('type');
    expect(pengumuman).toHaveProperty('type_label');
    expect(pengumuman).toHaveProperty('priority');
    expect(pengumuman).toHaveProperty('priority_label');
    expect(pengumuman).toHaveProperty('priority_color');
    expect(pengumuman).toHaveProperty('created_by');
    expect(pengumuman).toHaveProperty('location');
  });
});
