const { defineConfig } = require('cypress');
const XLSX = require('xlsx');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        parseExcel({ filePath, sheetName }) {
          const workbook = XLSX.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return XLSX.utils.sheet_to_json(worksheet);
        }
      });
    },
    defaultCommandTimeout: 800000,
    testTimeout: 3600000,
  }
});
