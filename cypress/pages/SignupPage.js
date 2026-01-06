class SignupPage {
  // ==================================================
  // DOM SELEKTOREN (LOCATORS)
  // ==================================================

  // --- Title (Anrede) ---
  get titleMr() { return cy.get("#id_gender1"); } // Herr
  get titleMrs() { return cy.get("#id_gender2"); } // Frau

  // --- Account Information ---
  get passwordInput() { return cy.get('[data-qa="password"]'); }
  get dayDropdown() { return cy.get('[data-qa="days"]'); }
  get monthDropdown() { return cy.get('[data-qa="months"]'); }
  get yearDropdown() { return cy.get('[data-qa="years"]'); }

  // --- Checkboxen ---
  get newsletterCheckbox() { return cy.get("#newsletter"); }
  get specialOffersCheckbox() { return cy.get("#optin"); }

  // --- Address Information ---
  get firstNameInput() { return cy.get('[data-qa="first_name"]'); }
  get lastNameInput() { return cy.get('[data-qa="last_name"]'); }
  get companyInput() { return cy.get('[data-qa="company"]'); }
  get addressInput() { return cy.get('[data-qa="address"]'); }
  get address2Input() { return cy.get('[data-qa="address2"]'); }
  get countryDropdown() { return cy.get('[data-qa="country"]'); }
  get stateInput() { return cy.get('[data-qa="state"]'); }
  get cityInput() { return cy.get('[data-qa="city"]'); }
  get zipcodeInput() { return cy.get('[data-qa="zipcode"]'); }
  get mobileNumberInput() { return cy.get('[data-qa="mobile_number"]'); }

  // --- Buttons & Messages ---
  get createAccountButton() { return cy.get('[data-qa="create-account"]'); }
  get accountCreatedMessage() { return cy.get('[data-qa="account-created"]'); }
  get continueButton() { return cy.get('[data-qa="continue-button"]'); }

  // ==================================================
  // METHODEN (HELPER FUNCTIONS)
  // ==================================================

  /**
   * Füllt alle notwendigen Felder für die Registrierung aus.
   * Bu metot, Step Definition dosyasını temiz tutmak için tüm formu doldurur.
   */
  fillRegistrationForm(user) {
    // 1. Title & Password
    this.titleMr.click();
    this.passwordInput.type(user.password);

    // 2. Date of Birth (Beispielwerte)
    this.dayDropdown.select("1");
    this.monthDropdown.select("January");
    this.yearDropdown.select("2000");

    // 3. Checkboxen
    this.newsletterCheckbox.check();
    this.specialOffersCheckbox.check();

    // 4. Address Details
    this.firstNameInput.type(user.firstName);
    this.lastNameInput.type(user.lastName);
    this.companyInput.type(user.company);
    this.addressInput.type(user.address);
    this.countryDropdown.select(user.country);
    this.stateInput.type(user.state);
    this.cityInput.type(user.city);
    this.zipcodeInput.type(user.zipcode);
    this.mobileNumberInput.type(user.mobile);
  }
}

export const signupPage = new SignupPage();