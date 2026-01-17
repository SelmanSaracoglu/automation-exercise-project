class PaymentPage {
    // SELECTORS
    get nameOnCard() { return cy.get('[data-qa="name-on-card"]'); }
    get cardNumber() { return cy.get('[data-qa="card-number"]'); }
    get cvc() { return cy.get('[data-qa="cvc"]'); }
    get expiryMonth() { return cy.get('[data-qa="expiry-month"]'); }
    get expiryYear() { return cy.get('[data-qa="expiry-year"]'); }
    get payButton() { return cy.get('[data-qa="pay-button"]'); }
    get successMessage() { return cy.get('[data-qa="order-placed"]'); }

    get downloadInvoiceBtn() { return cy.contains('a', 'Download Invoice'); }
    get continueBtn() { return cy.get('[data-qa="continue-button"]'); }

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

    clickDownloadInvoice() {
        this.downloadInvoiceBtn.should('be.visible').click();
    }

    clickContinue() {
        this.continueBtn.click();
    }
}
export const paymentPage = new PaymentPage();