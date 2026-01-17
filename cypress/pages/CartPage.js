class CartPage {
    // SELECTORS
    get cartRows() { return cy.get('#cart_info_table tbody tr'); } 
    get productPrices() { return cy.get('.cart_price'); }
    get productQuantities() { return cy.get('.cart_quantity button'); }
    
    // METHODS
    verifyProductCount(count) {
        this.cartRows.should('have.length', count);
    }

    verifyOnPage() {
        cy.url().should('include', '/view_cart');
        this.cartRows.should('be.visible');
    }
}

export const cartPage = new CartPage();