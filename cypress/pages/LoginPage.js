
class LoginPage {
    // 1. SELECTORS
    get loginForm() { return cy.get('.login-form'); }
    get emailInput() { return cy.get('[data-qa="login-email"]'); }
    get passwordInput() { return cy.get('[data-qa="login-password"]'); }
    get loginButton() { return cy.get('[data-qa="login-button"]'); }
    get errorMessage() { return cy.get('.login-form form p'); }
    get loggedInAs() { return cy.contains('Logged in as'); }

    get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
    get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
    get signupBtn() { return cy.get('[data-qa="signup-button"]'); }

    // 2. METHODS
    visit() {
        cy.visit('/login');
        cy.get('body').then(($body) => {
            if ($body.find('.fc-primary-button').length > 0) {
                cy.get('.fc-primary-button').click();
            }
        });
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    signup(name, email) {
        this.signupNameInput.type(name);
        this.signupEmailInput.type(email);
        this.signupBtn.click();
    }

    verifyOnPage() {
        cy.url().should('include', '/login');
        cy.contains('h2', 'Login to your account').should('be.visible'); 
    }
}

export const loginPage = new LoginPage();