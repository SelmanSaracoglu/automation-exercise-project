
class HomePage {

    // 1. SELECTORS 

    get logo() {
        return cy.get('img[alt="Website for automation practice"]');
    } 

    get navBar() {
        return cy.get('.shop-menu .nav');
    }

    get loginLink() {
        return cy.contains('a', 'Signup / Login');
    }

    get logoutLink() {
        return cy.contains('a', 'Logout');
    }


    // 2. METHODS (Aksiyonlar)

    visit() {
        cy.visit("/"); // cypress.config.js --> baseUrl
        this.acceptCookies();
    }

    acceptCookies() {
    cy.get('body').then(($body) => {
      if ($body.find('.fc-primary-button').length > 0) {
        cy.get('.fc-primary-button').click();
            }
        });
    }
}

export const homePage = new HomePage();



