class DeletionPage {
    get successMessage() { return cy.get('[data-qa="account-deleted"]'); }

    verifyAccountDeleted() {
        this.successMessage.should('be.visible');
        this.successMessage.should('contain.text', 'Account Deleted!');
    }
}
export const deletionPage = new DeletionPage();