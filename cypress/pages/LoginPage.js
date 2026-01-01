class LoginPage {
  // ==================================================
  // DOM SELEKTOREN (LOCATORS)
  // ==================================================

  /**
   * Login Formular Elemente
   * Bezieht sich auf AC-06, AC-07, AC-08
   */
  get loginFormHeader() { return cy.get(".login-form h2"); } // "Login to your account"
  get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
  get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
  get loginButton() { return cy.get('[data-qa="login-button"]'); }
  
  // Fehlermeldung im Login-Bereich (AC-08)
  // Hinweis: Diese Meldung erscheint, wenn Email/Passwort falsch ist.
  get loginErrorMessage() { return cy.get('.login-form form p'); }

  /**
   * Signup (Registrierung) Formular Elemente
   * Bezieht sich auf AC-06, AC-10, AC-11
   */
  get signupFormHeader() { return cy.get(".signup-form h2"); } // "New User Signup!"
  get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
  get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
  get signupButton() { return cy.get('[data-qa="signup-button"]'); }

  // Fehlermeldung im Signup-Bereich (AC-11)
  // Hinweis: Erscheint, wenn die Email bereits existiert.
  get signupErrorMessage() { return cy.get('.signup-form form p'); }

  // ==================================================
  // AKTIONEN & METHODEN (METHODS)
  // ==================================================

  /**
   * Öffnet die Login-Seite direkt.
   * AC-06
   */
  visit() {
    cy.visit("/login");
  }

  /**
   * Führt den Login-Prozess durch.
   * @param {string} email 
   * @param {string} password 
   */
  login(email, password) {
    this.loginEmailInput.type(email);
    this.loginPasswordInput.type(password);
    this.loginButton.click();
  }

  /**
   * Startet den Registrierungsprozess (Teil 1).
   * @param {string} name 
   * @param {string} email 
   */
  signup(name, email) {
    this.signupNameInput.type(name);
    this.signupEmailInput.type(email);
    this.signupButton.click();
  }
}

export const loginPage = new LoginPage();