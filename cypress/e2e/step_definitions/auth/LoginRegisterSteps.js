import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../../pages/LoginPage";
import { homePage } from "../../../pages/HomePage";

// ==================================================
// BACKGROUND (NAVIGATION)
// ==================================================

Given("der Benutzer ist auf der Startseite", () => {
  homePage.visit();
});

When("er auf den Link {string} im Menü klickt", (linkText) => {
  // Wir nutzen die Methode aus der HomePage wieder. (Reusability)
  homePage.clickMenuLink(linkText);
});

Then("sollte die Login-Seite sichtbar sein", () => {
  // URL-Prüfung: Enthält sie "/login"?
  cy.url().should("include", "/login");
  // Titel-Prüfung: "Login to your account"
  loginPage.loginFormHeader.should("be.visible");
});

// ==================================================
// LOGIN SZENARIEN
// ==================================================

When("der Benutzer gibt die Login-Email {string} und das Passwort {string} ein", (email, password) => {
  // Wir rufen die Elemente aus dem Page Object auf.
  loginPage.loginEmailInput.type(email);
  loginPage.loginPasswordInput.type(password);
});

When("klickt auf den Button {string}", (btnText) => {
  // Wir entscheiden anhand des Textes, welcher Button geklickt wird.
  if (btnText === "Login") {
    loginPage.loginButton.click();
  } else if (btnText === "Signup") {
    loginPage.signupButton.click();
  }
});

Then("sollte der Header den Text {string} enthalten", (headerText) => {
  // Wir suchen den Text "Logged in as..." im Header.
  // Hinweis: Dieses Element sollte eigentlich in der HomePage definiert sein.
  cy.get("header").contains(headerText).should("be.visible");
});

Then("der Button {string} sollte sichtbar sein", (btnText) => {
  // Ist der "Delete Account" Button sichtbar?
  cy.contains("a", btnText).should("be.visible");
});

Then("sollte die Fehlermeldung {string} sichtbar sein", (errorMsg) => {
  loginPage.loginErrorMessage.should("contain", errorMsg);
});

// ==================================================
// REGISTER SZENARIEN (DYNAMIC DATA)
// ==================================================

When("der Benutzer gibt einen Namen und eine neue Email-Adresse ein", () => {
  const name = "AutoTester";

  // Wir generieren eine einzigartige Email für jeden Test mit "Date.now()" (Zeitstempel).
  // Dadurch vermeiden wir den Fehler "Email already exists".
  // Beispiel: autotest_17357483920@test.com
  const randomEmail = `autotest_${Date.now()}@test.com`;

  // Wir loggen die Email, um sie im Cypress Test Runner zu sehen.
  cy.log(`Generierte Email: ${randomEmail}`);

  loginPage.signupNameInput.type(name);
  loginPage.signupEmailInput.type(randomEmail);
});

Then("sollte die Seite {string} sichtbar sein", (pageText) => {
  // Wir prüfen den Text "Enter Account Information" nach dem Klick auf Signup.
  cy.contains(pageText).should("be.visible");
});