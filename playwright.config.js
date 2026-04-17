const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    baseURL: 'https://example.com'
  }
});