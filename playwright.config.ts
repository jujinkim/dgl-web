import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4178',
    viewport: { width: 1440, height: 900 },
    launchOptions: { args: ['--no-sandbox'] },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --port 4178 --ignore-lock',
    url: 'http://127.0.0.1:4178',
    reuseExistingServer: false,
  },
});
