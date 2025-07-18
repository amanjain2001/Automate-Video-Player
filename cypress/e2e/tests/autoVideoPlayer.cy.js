/// <reference types="cypress" />
require('cypress-xpath');

import * as selectors from "./objSelectors.json"
import * as utils from "./utils/utilities.js"

describe('Login using cookies', () => {
  beforeEach(() => {
    cy.fixture('cscpassporttoearning.myp2e.org_13-07-2025 7853939244.json').then((cookieData) => {
      cy.visit(cookieData.url);

      cookieData.cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          path: cookie.path,
          secure: cookie.secure,
          httpOnly: cookie.httpOnly,
          expiry: cookie.expirationDate,
          sameSite: cookie.sameSite === 'unspecified' ? undefined : cookie.sameSite
        });
      });
      cy.reload();
    });
  });

  it('should have logged in successfully', () => {
    cy.visit('https://cscpassporttoearning.myp2e.org');
    cy.xpath(selectors.courseLibrary).click();
    cy.get(selectors.aiCourse).click({ force: true });

    // complete Module 1
    utils.completeModule1();

    // complete Module 2
    utils.completeModule2();

    // complete Module 3
    utils.completeModule3();

    // complete Module 4
    utils.completeModule4();

    // complete additional modules
    cy.xpath(selectors.nextButton).click();
    utils.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    utils.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    utils.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();

  });
});
