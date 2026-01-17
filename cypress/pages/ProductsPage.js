class ProductsPage {
    // ==========================================
    // 1. SELECTORS
    // ==========================================
    
    // Navigation
    get productsLink() { return cy.contains('a', 'Products'); }
    
    // Product List Page
    get allProductsTitle() { return cy.get('.features_items > h2'); } // "ALL PRODUCTS" başlığı
    get productList() { return cy.get('.features_items .col-sm-4'); } // Her bir ürün kartı
    get viewProductBtns() { return cy.get('.choose a'); } // "View Product" butonları
    
    // Product Detail Page
    get productInfo() { return cy.get('.product-information'); }
    get productName() { return cy.get('.product-information h2'); }
    get productPrice() { return cy.contains('span', 'Rs.'); }
    get availability() { return cy.contains('b', 'Availability'); }

    // ==========================================
    // 2. METHODS
    // ==========================================

    navigateToProducts() {
        this.productsLink.click();
    }

    viewFirstProduct() {
        // Listede gördüğün ilk ürünün detay butonuna tıkla
        this.viewProductBtns.first().click();
    }
}

export const productsPage = new ProductsPage();