import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'http://localhost:1212/',
  },
});
