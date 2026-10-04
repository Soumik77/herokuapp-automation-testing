const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  viewportHeight: 720,
  viewportWidth: 1280,
  retries: 0,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'index',
    reportPageTitle: 'Herokuapp regression results',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
  },
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    testIsolation: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
