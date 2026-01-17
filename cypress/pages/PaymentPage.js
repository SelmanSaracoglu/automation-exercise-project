class PaymentPage {
    // SELECTORS
    get nameOnCard() { return cy.get('[data-qa="name-on-card"]'); }
    get cardNumber() { return cy.get('[data-qa="card-number"]'); }
    get cvc() { return cy.get('[data-qa="cvc"]'); }
    get expiryMonth() { return cy.get('[data-qa="expiry-month"]'); }
    get expiryYear() { return cy.get('[data-qa="expiry-year"]'); }
    get payButton() { return cy.get('[data-qa="pay-button"]'); }
    get successMessage() { return cy.get('[data-qa="order-placed"]'); }

    // METHODS
    verifyOnPage() {
        cy.url().should('include', '/payment');
        cy.contains('Payment').should('be.visible');
    }

    fillPaymentDetails(name, number, cvc, month, year) {
        this.nameOnCard.type(name);
        this.cardNumber.type(number);
        this.cvc.type(cvc);
        this.expiryMonth.type(month);
        this.expiryYear.type(year);
    }

    submitPayment() {
        this.payButton.click();
    }
}
export const paymentPage = new PaymentPage();