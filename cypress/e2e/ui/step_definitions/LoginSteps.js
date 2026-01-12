import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../../pages/LoginPage";

Given("ich bin auf der Login-Seite", () => {
    loginPage.visit();
});

When("ich mich mit {string} und {string} einlogge", (email, password) => {
    loginPage.login(email, password);
});

When("ich mich mit {string} und {string} einlogge und die API überwache", (email, password) => {
    cy.intercept('POST', '**/login').as('loginRequest');
    loginPage.login(email, password);
});

Then("sollte der Server mit Status {int} antworten", (statusCode) => {
    cy.wait('@loginRequest').then((interception) => {
        const acceptableCodes = [statusCode, 302];
        expect(acceptableCodes).to.include(interception.response.statusCode);
    });
});

Then("ich sollte als {string} eingeloggt sein", (username) => {
    loginPage.loggedInAs.should('contain', username);
});

Then("sollte die Fehlermeldung {string} sichtbar sein", (message) => {
    loginPage.errorMessage.should('have.text', message);
});