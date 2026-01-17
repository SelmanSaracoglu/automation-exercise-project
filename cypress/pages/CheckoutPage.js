class CheckoutPage {
    // SELECTORS
    get addressDetails() { return cy.get('#address_delivery'); }
    get commentBox() { return cy.get('textarea[name="message"]'); }
    get placeOrderBtn() { return cy.contains('a', 'Place Order'); }

    // METHODS
    verifyOnPage() {
        // Standard verification method
        cy.url().should('include', '/checkout');
        cy.contains('Address Details').should('be.visible');
    }

    enterComment(text) {
        this.commentBox.type(text);
    }

    clickPlaceOrder() {
        this.placeOrderBtn.click();
    }
}
export const checkoutPage = new CheckoutPage();