
import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../pages/HomePage";

Given("ich öffne die Startseite", () => {
    homePage.visit();
})

Given("ich bin auf der Startseite", () => {
    homePage.visit();
})

Then("sollte der Seitentitel {string} enthalten", (titlePart) => {
  cy.title().should("include", titlePart);
});

Then("das Firmenlogo sollte sichtbar sein", () => {
  homePage.logo.should("be.visible");
});

Then("sollten die Menü-Links {string}, {string} und {string} sichtbar sein", (link1, link2, link3) => {
  homePage.navBar.should("contain", link1);
  homePage.navBar.should("contain", link2);
  homePage.navBar.should("contain", link3);
});

Then("der {string} Button sollte NICHT sichtbar sein", (btnText) => {
  cy.contains('a', btnText).should('not.exist');
});