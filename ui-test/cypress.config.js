const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 786,
  viewportWidth: 1024,
  projectId: "qnond9",


  // screenshotsFolder: "cypress/results/assets",

  reporter: "mocha-multi-reporters",

  reporterOptions: {
    mochaFile: "reporter-config.json",
  },

  e2e: {

    baseUrl: "https://example.cypress.io/todo",
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    "video": false,
      "retries":{
        "runMode": 1,
        "openMode": 1
      },


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
