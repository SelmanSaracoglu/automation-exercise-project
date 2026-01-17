const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,             
    reportPageTitle: 'QA Reis Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,      
    saveAllAttempts: false,
  },

  e2e: {

    supportFile: 'cypress/support/e2e.js',

    baseUrl: "https://automationexercise.com",
    specPattern: "**/*.feature", 
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,

    async setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});