// playwright.config.js

import { defineConfig } from '@playwright/test';
export default defineConfig({
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },
  reporter: [['list'], ['html', { outputFolder: 'reports/html-report' }]]
});
