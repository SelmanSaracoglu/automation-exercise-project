class HomePage {
  // ==================================================
  // DOM SELEKTOREN (LOCATORS)
  // ==================================================

  /**
   * Kopf- und Fußzeile (Header & Footer)
   * Strategie: ID ist verfügbar und stabil.
   */
  get header() { return cy.get("#header"); }
  get footer() { return cy.get("#footer"); }

  /**
   * Logo
   * Strategie: Auswahl über CSS-Klasse.
   * Warum nicht Alt-Text? Die Elternklasse (.logo) ist robuster gegen Textänderungen.
   */
  get logo() { return cy.get(".logo img"); }

  /**
   * Hauptmenü-Links
   * Strategie: Gezielte Suche im ".shop-menu" Container.
   */
  get menuLinks() { return cy.get(".shop-menu a"); }

  /**
   * Seitenleiste (Sidebar)
   * Hinweis: Die ID '#accordian' enthält einen Tippfehler im Quellcode der Seite.
   * Wir müssen die vorhandene ID trotz des Fehlers nutzen.
   */
  get sidebarCategory() { return cy.get("#accordian"); }
  get sidebarBrands() { return cy.get(".brands_products"); }

  /**
   * Produkt-Container (Body)
   * Strategie: Klasse basierend auf dem Komponentennamen.
   */
  get featuredItemsContainer() { return cy.get(".features_items"); }
  
  /**
   * Einzelne Produktkarten
   * Strategie: VERMEIDE Layout-Klassen wie '.col-sm-4' (Bootstrap Grid).
   * NUTZE Komponenten-Klassen wie '.product-image-wrapper'.
   * Das stellt sicher, dass der Test besteht, auch wenn sich das Layout ändert.
   */
  get allProductCards() { return cy.get(".features_items .product-image-wrapper"); }

  /**
   * Slider Karussell
   * Strategie: ID ist verfügbar.
   */
  get slider() { return cy.get("#slider-carousel"); }

  /**
   * UI Elemente
   */
  get scrollUpButton() { return cy.get("#scrollUp"); }
  get subscriptionInput() { return cy.get("#susbscribe_email"); }


  // ==================================================
  // AKTIONEN & METHODEN (METHODS)
  // ==================================================

  /* 
  Öffnet die Startseite. 
  */
  visit() { 
    cy.visit("/"); 
  }

  /*
  Klickt auf einen Menü-Link basierend auf dem Text.
  @param {string} linkText - Der Text des Links (z.B. "Products").
   */
  clickMenuLink(linkText) {
    // Best Practice: 'contains' findet den Text innerhalb der Link-Sammlung.
    this.menuLinks.contains(linkText).click();
  }

  /**
   * Überprüft die Integrität aller sichtbaren Produktkarten.
   * Prüft: Kaputte Bilder, Preis, Name, Button-Sichtbarkeit.
   */
  verifyProductCardsIntegrity() {
    this.allProductCards.each(($card) => {
      // 1. Bild-Integrität prüfen (Best Practice für Blackbox)
      // Prüft, ob das Bild tatsächlich geladen ist (naturalWidth > 0).
      cy.wrap($card).find("img").should(($img) => {
         expect($img[0].naturalWidth).to.be.greaterThan(0); 
      });

      // 2. Inhalt prüfen
      // Wir suchen nach 'h2' für den Preis und 'p' für den Namen.
      cy.wrap($card).find("h2").should("be.visible");
      cy.wrap($card).find("p").should("be.visible");

      // 3. Button prüfen
      cy.wrap($card).find(".add-to-cart").should("be.visible");
    });
  }

  /**
   * Scrollt nach unten zum Footer.
   */
  scrollToBottom() {
    this.footer.scrollIntoView();
  }
}

export const homePage = new HomePage();