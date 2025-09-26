// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://revamp.jogjalib.tlabdemo.com');
});

test('Title Jogjalib', async ({ page }) => {
  await expect(page).toHaveTitle("Beranda | Balai Layanan Perpustakaan Pemda DIY");
});

test('Pencarian Berdasarkan Keyword dan Filter Insitution', async ({ page }) => {
  const searchInput = page.locator('input[placeholder="Tulis kata kunci disini"]');
  await searchInput.fill('JavaScript');
  await searchInput.press('Enter');
  await expect(page).toHaveURL("https://revamp.jogjalib.tlabdemo.com/search?keyword=JavaScript");
  const text = await page.locator('p.title').first().innerText();
  expect(text).toMatch(/Java/i);
  expect(text).toMatch(/Script/i);
  const checkbox = page.locator('#institution-Universitas\\ Islam\\ Indonesia');
  await checkbox.click();
  await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  await page.getByRole('button', { name: 'Terapkan' }).click();
  const row = page.locator('tr', { hasText: 'Institusi' });
  await expect(row.locator('td').nth(2)).toHaveText('Universitas Islam Indonesia');

});