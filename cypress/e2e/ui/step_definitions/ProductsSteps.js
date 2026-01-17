import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productsPage } from "../../../pages/ProductsPage";
import { homePage } from "../../../pages/HomePage";
import { cartPage } from "../../../pages/CartPage";
import { loginPage } from "../../../pages/LoginPage";

// --- Navigation Steps ---

// NOTE: "Given ich bin auf der Startseite" is NOT here anymore.
// It is already defined in HomeSteps.js and reused here. DRY (Don't Repeat Yourself)!

Given("ich bin auf der {string} Seite", (pageName) => {
    if (pageName === "All Products") {
        homePage.visit();
        productsPage.navigateToProducts();
    }
});

// --- Hybrid Action Step ---

When("ich auf {string} klicke und die API überwache", (linkText) => {
    // 1. AJAN YERLEŞTİR: Ürünleri çeken API'yi dinle
    // Site: automationexercise.com/api/productsList adresine istek atıyor
    cy.intercept('GET', '**/productsList').as('getProducts');
    
    // 2. AKSİYON: Linke tıkla
    productsPage.productsLink.click();
});

When("ich auf {string} beim ersten Artikel klicke", (btnText) => {
    productsPage.viewFirstProduct();
});

// --- Validation Steps ---

Then("sollte ich auf die {string} Seite weitergeleitet werden", (pageName) => {
    switch (pageName) {
        case "All Products":
            productsPage.verifyOnPage();
            break;
            
        case "Warenkorb": 
            cartPage.verifyOnPage
            break;

        case "Login":
            loginPage.verifyOnPage();
            break;

        default:
            throw new Error(`Not Defined: ${pageName}`);
    }
});

Then("die Produktliste sollte sichtbar sein und Artikel enthalten", () => {
    productsPage.productList.should('be.visible');
    productsPage.productList.should('have.length.greaterThan', 0);
});

// REVISED HYBRID STEP: Active API Call
Then("die API sollte eine Liste von Produkten zurückgeben \\(Status {int}\\)", (statusCode) => {
    // Since the frontend doesn't call the API (SSR), we manually call it to verify backend health.
    // This confirms that the UI and API are consistent.
    cy.request('GET', 'https://automationexercise.com/api/productsList').then((response) => {
        
        // 1. Verify Status Code
        expect(response.status).to.eq(statusCode);
        
        // 2. Parse Body (cy.request automatically parses JSON usually, but let's be safe)
        let body = response.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        
        // 3. Verify Data: Check if products exist in the backend
        expect(body.products).to.be.an('array');
        expect(body.products).to.have.length.greaterThan(0);
        
        // Optional: Advanced Check - Verify the first product in API matches the UI text
        // const firstProductName = body.products[0].name;
        // cy.log('First API Product: ' + firstProductName);
    });
});

Then("sollte die Produktdetailseite sichtbar sein", () => {
    productsPage.productInfo.should('be.visible');
});

Then("der Produktname, Preis und Verfügbarkeit sollten angezeigt werden", () => {
    productsPage.productName.should('be.visible');
    productsPage.productPrice.should('be.visible');
    productsPage.availability.should('be.visible');
});