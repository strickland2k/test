const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 786,
  viewportWidth: 1024,
  // screenshotsFolder: "cypress/results/assets",

  reporter: "mocha-multi-reporters",
  reporterOptions: {
    mochaFile: "reporter-config.json",
  },


});