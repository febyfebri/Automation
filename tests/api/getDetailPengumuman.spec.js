import { test, expect } from '../fixtures';

test.describe('Pengumuman API', () => {
  test('Get Pengumuman', async ({ request, token }) => {
    const response = await request.get('/api/pengumuman/1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    const detail = body.data;
    
    expect(detail).toHaveProperty('id');
    expect(detail).toHaveProperty('judul');
    expect(detail).toHaveProperty('keterangan');
    expect(detail).toHaveProperty('waktu_posting');
    expect(detail).toHaveProperty('waktu_posting_iso');
    expect(detail).toHaveProperty('waktu_posting_formatted');
    expect(detail).toHaveProperty('status');
    expect(detail).toHaveProperty('status_value');
    expect(detail).toHaveProperty('status_baca');
    expect(detail).toHaveProperty('is_read');
    expect(detail).toHaveProperty('type');
    expect(detail).toHaveProperty('type_label');
    expect(detail).toHaveProperty('priority');
    expect(detail).toHaveProperty('priority_label');
    expect(detail).toHaveProperty('priority_color');
    expect(detail).toHaveProperty('created_by');
    expect(detail).toHaveProperty('created_by_id');
    expect(detail).toHaveProperty('location');
    expect(detail).toHaveProperty('location_id');
    expect(detail).toHaveProperty('data');
    expect(detail).toHaveProperty('created_at');
    expect(detail).toHaveProperty('updated_at');
  });
});
