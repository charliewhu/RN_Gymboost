const {defineConfig} = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:19006',
  },
});
