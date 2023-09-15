const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 786,
  viewportWidth: 1024,

  // screenshotsFolder: "cypress/results/assets",

  reporter: "mocha-multi-reporters",

  reporterOptions: {
    mochaFile: "reporter-config.json",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
