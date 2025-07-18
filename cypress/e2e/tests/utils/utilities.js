import * as selectors from "../objSelectors.json"
const filePath = 'cypress/fixtures/CHEK_P2E.xlsx';
const sheetName = 'Sheet1';

export function registerInCourse() {
    cy.xpath(selectors.registerInCourse).click();
  }  

export function playVideo() {
    cy.wait(3000);
    cy.get('.shaka-video-container').trigger('mouseover');
    cy.get('button.shaka-small-play-button').click({ force: true });
    console.log("Video play button clicked");
}

export function waitTillVideoEnds()
{
    console.log("Waiting for video to end");
    cy.wait(3000);
    cy.get('video.shaka-video', { timeout: 0 }).then(($video) => {
        const video = $video[0];
        video.playbackRate = 2;

        return new Cypress.Promise((resolve) => {
            video.onended = () => resolve();
        });
    });
}

export function pauseVideo() {
    cy.get('.shaka-video-container').trigger('mouseover');
    cy.get('button.shaka-small-play-button').click({ force: true });
    cy.get('video.shaka-video').should('have.prop', 'paused', true);
}

export function updateProfile()
{
    cy.get(selectors.profile).click();
    cy.xpath(selectors.myProfile).click();
    cy.readExcel(filePath, sheetName).then((rows) => {
      const firstRow = rows[0];
      cy.log(`FirstName: ${firstRow.FirstName}, LastName: ${firstRow.LastName}, Contact: ${firstRow.Contact}, Gender: ${firstRow.Gender}`);
      cy.wait(2000);
      cy.xpath(selectors.firstName).clear().type(firstRow.FirstName);
      cy.xpath(selectors.lastName).clear().type(firstRow.LastName);
      cy.xpath(selectors.gender).first().click();
      cy.contains(selectors.selectGender, firstRow.Gender).click();
      cy.xpath(selectors.confirmButton).click();
      cy.xpath(selectors.doneButton).click();
  });
}

export function completeModule1()
{
    this.playVideo();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.startTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.submitButtonInTest).click();
    cy.xpath(selectors.submitButtonOnPopUp).click();
    cy.xpath(selectors.backtoCourse).click();
}

export function completeModule2()
{
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.startTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.submitButtonInTest).click();
    cy.xpath(selectors.submitButtonOnPopUp).click();
    cy.xpath(selectors.backtoCourse).click();
}

export function completeModule3()
{
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.startTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.submitButtonInTest).click();
    cy.xpath(selectors.submitButtonOnPopUp).click();
    cy.xpath(selectors.backtoCourse).click();
}

export function completeModule4()
{
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    this.waitTillVideoEnds();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.nextButton).click();
    cy.xpath(selectors.startTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.nextButtonInTest).click();
    cy.xpath(selectors.submitButtonInTest).click();
    cy.xpath(selectors.submitButtonOnPopUp).click();
    cy.xpath(selectors.backtoCourse).click();
}