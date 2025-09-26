import { test, expect } from '../fixtures';

test.describe('List Bookmark API', () => {
  test('Get List Bookmark', async ({ request, token }) => {
    const response = await request.get('/api/bookmarks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    const bookmark = body.data.bookmarks[0];

    expect(bookmark).toHaveProperty('id');
    expect(bookmark).toHaveProperty('tanggal_ditandai');
    expect(bookmark).toHaveProperty('waktu_ditandai');
    expect(bookmark).toHaveProperty('book');
    expect(bookmark).toHaveProperty('location');
    expect(bookmark.book).toHaveProperty('id');
    expect(bookmark.book).toHaveProperty('title');
    expect(bookmark.book).toHaveProperty('author');
    expect(bookmark.book).toHaveProperty('publisher');
    expect(bookmark.book).toHaveProperty('publication_year');
    expect(bookmark.book).toHaveProperty('cover_url');
    expect(bookmark.book).toHaveProperty('description');
    expect(bookmark.book).toHaveProperty('availability');
    expect(bookmark.book).toHaveProperty('category');
    expect(bookmark.book).toHaveProperty('institution');
    expect(bookmark.book).toHaveProperty('format');
    expect(bookmark.book).toHaveProperty('language');
    expect(bookmark.book).toHaveProperty('publish_date');
    expect(bookmark.book).toHaveProperty('url');
    expect(bookmark.book).toHaveProperty('file_url');
    expect(bookmark.location).toHaveProperty('id');
    expect(bookmark.location).toHaveProperty('name');
  });
});