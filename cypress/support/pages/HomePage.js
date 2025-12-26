class HomePage {
  // DOM Selektoren definieren

  // Hauptbereiche (Main Areas)
  get header() {
    return cy.get("#header");
  }

  get footer() {
    return cy.get("#footer");
  }

  get slider() {
    return cy.get("#slider-carousel");
  }

  get logo() {
    return cy.get("img[alt='Website for automation practice']");
  }

  get homeButton() {
    return cy.contains('a', 'Home');
  }

  // Navigation (Navbar)
  get navbarLinks() {
    return cy.get(".shop-menu .nav li a");
  }
  // Aktionen und Methoden
  /**
   * Die Seite besuchen
   */
  visit() {
    cy.visit("/");
  }

  /**
   * Überprüfen, ob die Hauptelemente sichtbar sind
   */
  verifyPageVisible() {
    this.logo.should("be.visible");
    this.slider.should("be.visible");
  }

  /**
   * Überprüft die Sichtbarkeit der Hauptlayout-Bereiche
   */
  verifyLayout() {
    this.header.should("be.visible");
    this.slider.should("be.visible");
    this.footer.should("be.visible");
  }

  /**
   * Klickt auf einen bestimmten Menü-Link.
   * Verwendet eine präzise Suche nach dem 'a'-Tag (Anker), um Klickprobleme zu vermeiden.
   */
  clickMenuLink(linkText) {
    // Strateji: ".shop-menu" içindeki "a" taglarını bul ve metni içereni filtrele.
    // Bu yöntem ikonları, boşlukları ve HTML yapısını delip geçer, direkt linke odaklanır.
    cy.get('.shop-menu .nav li a').contains(linkText).click();  
}

}

export const homePage = new HomePage();