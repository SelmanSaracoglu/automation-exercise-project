import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signupPage } from "../../../pages/SignupPage";
import { faker } from "@faker-js/faker"; 

// ==================================================
// FORMULAR AUSFÜLLEN (AC-13, AC-14)
// ==================================================

When("der Benutzer das Registrierungsformular vollständig ausfüllt", () => {
  // Wir generieren echte, zufällige Daten mit Faker.
  // Das macht den Test realistischer.
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const testUser = {
    password: "Test1234!", // Passwort lassen wir statisch (einfacher zu merken)
    firstName: firstName,
    lastName: lastName,
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    country: "Canada", // Muss im Dropdown existieren, daher statisch
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile: faker.phone.number('###-###-####') // Format anpassen
  };

  // Loggen wir die Daten, falls wir debuggen müssen
  cy.log(`Generierter User: ${firstName} ${lastName}`);

  signupPage.fillRegistrationForm(testUser);
});

// ==================================================
// BUTTON KLICKS
// ==================================================

When(/^(?:er )?auf den Button "(.*)" klickt$/, (btnText) => {
    if (btnText === "Create Account") {
    signupPage.createAccountButton.click();
  } else if (btnText === "Continue") {
    signupPage.continueButton.click();
  }
});

// ==================================================
// ASSERTIONS
// ==================================================

Then("sollte die Nachricht {string} sichtbar sein", (msgText) => {
  if (msgText === "Account Created!") {
    signupPage.accountCreatedMessage.should("be.visible");
    // Extra Check: Enthält der Text wirklich "Account Created!"?
    signupPage.accountCreatedMessage.should("contain", "Account Created!");
  } else if (msgText === "Account Deleted!") {
    cy.contains("b", "Account Deleted!").should("be.visible");
  }
});