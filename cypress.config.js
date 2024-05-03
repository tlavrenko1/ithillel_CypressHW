import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    apiUrl: 'https://qauto2.forstudy.space/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
