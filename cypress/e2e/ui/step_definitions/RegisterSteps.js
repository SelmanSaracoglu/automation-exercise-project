import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signupPage } from "../../../pages/SignupPage";
import { loginPage } from "../../../pages/LoginPage"; 
import { faker } from '@faker-js/faker';

// Variable to store dynamic test data
let testUser = {};

When("ich den Registrierungsprozess mit zufälligen Daten starte", () => {
    // 1. DATA GENERATION: Generate random user data using Faker
    testUser = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 10 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobile: faker.phone.number()
    };

    // 2. ACTION: Start initial signup
    signupPage.initiateSignup(testUser.name, testUser.email);
});

When("ich das Formular mit persönlichen Daten ausfülle und abschicke", () => {
    // Use the smart method from Page Object to fill the entire form
    signupPage.fillForm(testUser);
});

Then("sollte die Nachricht {string} sichtbar sein", (message) => {
    // Generic step for validation messages
    switch (message) {
        case "ACCOUNT CREATED!":
            signupPage.accountCreatedMsg.should('be.visible');
            break;
        case "ACCOUNT DELETED!":
            signupPage.accountDeletedMsg.should('be.visible');
            break;
        default:
            throw new Error(`This message was not defined: ${message}`);
            
    }
});

When("ich auf {string} klicke", (btnText) => {
    // Generic click step for links/buttons
    signupPage.continueBtn.click();
});

Then("ich sollte als registrierter Benutzer eingeloggt sein", () => {
    // Verify login status using the generated name
    loginPage.loggedInAs.should('contain', testUser.name);
});

When("ich den Account lösche", () => {
    signupPage.deleteAccountBtn.click();
});