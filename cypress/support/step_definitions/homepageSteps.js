import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";

Given("der Besucher öffnet die Startseite", () => {
  homePage.visit();
});

Then("sollte die Startseite erfolgreich geladen sein", () => {
  // URL und Titel überprüfen
  cy.url().should("include", "automationexercise.com");
  cy.title().should("eq", "Automation Exercise");
});

Then("das Logo sollte sichtbar sein", () => {
  homePage.verifyPageVisible();
});

// --- LAYOUT TEST STEPS ---

Then("sollten die Hauptbereiche wie Kopfzeile, Schieberegler und Fußzeile sichtbar sein", () => {
  homePage.verifyLayout();
});

// --- NAVIGATION TEST STEPS ---

When("der Besucher auf den Link {string} klickt", (linkName) => {
  homePage.clickMenuLink(linkName);
});

Then("sollte die URL {string} enthalten", (urlPart) => {
  cy.url().should("include", urlPart);
});

Then("der Seitentitel sollte {string} enthalten", (pageTitle) => {
  cy.title().should("include", pageTitle);
});

Then("sollte der Link {string} auf {string} verweisen", (linkText, expectedUrl) => {
  // Linke tıklamadan, sadece 'href' özelliğinin doğru adrese gidip gitmediğine bakıyoruz
  cy.contains('a', linkText).should('have.attr', 'href', expectedUrl);
});