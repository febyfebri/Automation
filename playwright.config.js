// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'frontend',
      testDir: './tests/ui',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: process.env.BASE_URL_API || 'http://localhost:4000',
      },
    },

    // // 🔹 Browser lain (opsional, tetap bisa pakai BASE_URL_FE)
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], baseURL: process.env.BASE_URL_FE },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], baseURL: process.env.BASE_URL_FE },
    // },
  ],
});
