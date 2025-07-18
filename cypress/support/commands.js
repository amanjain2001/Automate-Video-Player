const XLSX = require('xlsx');

Cypress.Commands.add('readExcel', (filePath, sheetName) => {
    return cy.task('parseExcel', { filePath, sheetName });
});
