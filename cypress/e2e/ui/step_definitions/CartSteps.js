import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productsPage } from "../../../pages/ProductsPage";
import { cartPage } from "../../../pages/CartPage";

// --- Actions ---

When("ich das erste Produkt in den Warenkorb lege", () => {
    // Add the first product (index 0) from the list
    // This triggers the overlay and the 'Added!' modal
    productsPage.addProductToCart(0);
});

When("ich das zweite Produkt in den Warenkorb lege", () => {
    // Add the second product (index 1)
    productsPage.addProductToCart(1);
});

When("ich klicke auf {string} im Modal", (buttonText) => {
    if (buttonText === "Continue Shopping") {
        // Close the modal to continue
        productsPage.clickContinueShopping();
    } else if (buttonText === "View Cart") {
        // Navigate to the cart page via modal
        productsPage.clickViewCartFromModal();
    }
});

// --- Validations ---


Then("sollten {int} Produkte im Warenkorb sichtbar sein", (count) => {
    // Verify that the table has exactly 'count' rows
    cartPage.verifyProductCount(count);
});

Then("die Preise und Mengen sollten korrekt sein", () => {
    // Basic verification: Ensure price and quantity elements exist
    cartPage.productPrices.should('be.visible');
    cartPage.productQuantities.should('be.visible');
});