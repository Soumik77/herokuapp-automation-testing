const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: 'tqb3wb',
    "video": true,
    "videoFolder": "cypress/videos",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    viewportHeight: 600,
    viewportWidth: 1000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            // implement node event listeners here
        },
    },
});