class SignupPage {
    // ==========================================
    // 1. SELECTORS (Element Tanımları)
    // ==========================================
    
    // Initial Signup
    get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
    get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
    get signupButton() { return cy.get('[data-qa="signup-button"]'); }

    // Detailed Form
    get titleMr() { return cy.get('#id_gender1'); }
    get password() { return cy.get('[data-qa="password"]'); }
    get days() { return cy.get('[data-qa="days"]'); }
    get months() { return cy.get('[data-qa="months"]'); }
    get years() { return cy.get('[data-qa="years"]'); }
    
    // Address Info
    get firstName() { return cy.get('[data-qa="first_name"]'); }
    get lastName() { return cy.get('[data-qa="last_name"]'); }
    get address() { return cy.get('[data-qa="address"]'); }
    get country() { return cy.get('[data-qa="country"]'); }
    get state() { return cy.get('[data-qa="state"]'); }
    get city() { return cy.get('[data-qa="city"]'); }
    get zipcode() { return cy.get('[data-qa="zipcode"]'); }
    get mobileNumber() { return cy.get('[data-qa="mobile_number"]'); }
    
    get createAccountBtn() { return cy.get('[data-qa="create-account"]'); }
    get accountCreatedMsg() { return cy.get('[data-qa="account-created"]'); }
    get continueBtn() { return cy.get('[data-qa="continue-button"]'); }
    
    // Delete Account
    get deleteAccountBtn() { return cy.contains('a', 'Delete Account'); }
    get accountDeletedMsg() { return cy.get('[data-qa="account-deleted"]'); }

    // ==========================================
    // 2. METHODS (Akıllı Fonksiyonlar)
    // ==========================================

    initiateSignup(name, email) {
        this.signupNameInput.type(name);
        this.signupEmailInput.type(email);
        this.signupButton.click();
    }

    fillForm(user) {
        this.titleMr.click();
        this.password.type(user.password);
        
        this.days.select('1');
        this.months.select('January');
        this.years.select('2000');
        
        this.firstName.type(user.firstName);
        this.lastName.type(user.lastName);
        this.address.type(user.address);
        this.country.select('Canada');
        this.state.type(user.state);
        this.city.type(user.city);
        this.zipcode.type(user.zipcode);
        this.mobileNumber.type(user.mobile);
        
        this.createAccountBtn.click();
    }
}

export const signupPage = new SignupPage();