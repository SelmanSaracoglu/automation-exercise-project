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
  // Wir nutzen die Methode aus der HomePage wieder (Reusability).
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
  cy.get("header").contains(headerText).should("be.visible");
});

Then("der Button {string} sollte sichtbar sein", (btnText) => {
  cy.contains("a", btnText).should("be.visible");
});

Then("sollte die Fehlermeldung {string} sichtbar sein", (errorMsg) => {
  // Wir suchen die Fehlermeldung im gesamten Login-Formular.
  loginPage.loginErrorMessage.should("contain", errorMsg);
});

// ==================================================
// REGISTER SZENARIEN (DYNAMIC & STATIC DATA)
// ==================================================

// Case: Random Email (AC-10)
When("der Benutzer gibt einen Namen und eine neue Email-Adresse ein", () => {
  const name = "AutoTester";
  // Dynamische Email mit Zeitstempel, um Duplikate zu vermeiden.
  const randomEmail = `autotest_${Date.now()}@test.com`;

  cy.log(`Generierte Email: ${randomEmail}`);

  loginPage.signupNameInput.type(name);
  loginPage.signupEmailInput.type(randomEmail);
});

// Case: Statische Email für AC-11 (Duplicate Email Test)
When("der Benutzer gibt den Namen {string} und die Email {string} ein", (name, email) => {
  cy.log(`Test mit existierender Email: ${email}`);
  loginPage.signupNameInput.type(name);
  loginPage.signupEmailInput.type(email);
});

Then("sollte die Seite {string} sichtbar sein", (pageText) => {
  cy.contains(pageText).should("be.visible");
});

// AC-11: Prüfung der Fehlermeldung bei Registrierung
Then("sollte die Registrierungs-Fehlermeldung {string} sichtbar sein", (errorMsg) => {
  loginPage.signupErrorMessage.should("contain", errorMsg);
});

// AC-09: Logout-Prüfung
Then("der Header sollte den Link {string} enthalten", (linkText) => {
  // Nach dem Logout muss "Signup / Login" wieder sichtbar sein.
  cy.get("header").contains(linkText).should("be.visible");
});

