const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 786,
  viewportWidth: 1024,
  // screenshotsFolder: "cypress/results/assets",

  reporter: "mocha-multi-reporters",
  reporterOptions: {
    mochaFile: "reporter-config.json",
  },



  setupNodeEvents(on, config) {
    registerDataSession(on, config)
    require('@cypress/grep/src/plugin')(config)
    return config
  },

  e2e: {
    baseUrl: "https://admin.qa.music.onepeloton.com/",
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,


    "video": false,
      "retries":{
        "runMode": 1,
        "openMode": 1
      },

    setupNodeEvents(on, config) {
      registerDataSession(on, config)
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
});