import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { productsPage } from "../../../pages/ProductsPage";
import { cartPage } from "../../../pages/CartPage";
import { checkoutPage } from "../../../pages/CheckoutPage";
import { paymentPage } from "../../../pages/PaymentPage";
import { loginPage } from "../../../pages/LoginPage";

// --- Preconditions ---

When("ich logge mich mit {string} und {string} ein", (email, password) => {
    loginPage.login(email, password);
});

Given("ich habe Produkte im Warenkorb", () => {
    // Ensure we are on products page to add items
    productsPage.navigateToProducts();
    // Add first product to cart
    productsPage.addProductToCart(0);
    productsPage.clickContinueShopping();
});

// --- Checkout Actions ---

When("ich den {string} Button klicke", (btnText) => {
    if (btnText === "Proceed To Checkout") {
        cartPage.clickProceedToCheckout();
    }
});

When("ich einen Kommentar {string} eingebe und auf {string} klicke", (comment, btnText) => {
    checkoutPage.enterComment(comment);
    
    if (btnText === "Place Order") {
        checkoutPage.clickPlaceOrder();
    }
});

// --- Payment Actions ---

When("ich meine Kreditkartendaten eingebe und bestätige", () => {
    // Using dummy data for testing purposes
    paymentPage.fillPaymentDetails(
        "Test User",
        "4100 0000 0000 0000",
        "123",
        "01",
        "2030"
    );
    paymentPage.submitPayment();
});

// --- Validations ---

Then("die Lieferadresse und Rechnungsadresse sollten sichtbar sein", () => {
    // Verify address details section is present
    checkoutPage.addressDetails.should('be.visible');
});

Then("sollte die Bestellbestätigung {string} sichtbar sein", (message) => {
    // Verify success message (e.g. "ORDER PLACED!")
    // We use match case insensitive just in case, or exact text
    paymentPage.successMessage.should('contain.text', message);
});