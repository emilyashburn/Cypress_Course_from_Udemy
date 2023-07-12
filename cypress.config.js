const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.js',
    defaultCommandTimeout: 5000,
    supportFile: 'cypress/support/e2e.js',
    "chromeWebSecurity": false                //this setting allows Swag Labs to load via CypressRunner
    },
});
