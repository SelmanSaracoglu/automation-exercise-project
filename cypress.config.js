const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationexercise.com",
    async setupNodeEvents(on, config) {
      // 1. Initialize Cucumber Plugin
      await addCucumberPreprocessorPlugin(on, config);

      // 2. Initialize Esbuild Preprocessor
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // 3. Return the modified config object
      return config;
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },
});