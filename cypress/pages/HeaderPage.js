class HeaderPage {
    // SELECTORS
    get deleteAccountBtn() { return cy.contains('a', 'Delete Account'); }
    get logoutBtn() { return cy.contains('a', 'Logout'); }

    // METHODS
    clickDeleteAccount() {
        this.deleteAccountBtn.should('be.visible').click();
    }
    
    clickLogout() {
        this.logoutBtn.click();
    }
}
export const headerPage = new HeaderPage();