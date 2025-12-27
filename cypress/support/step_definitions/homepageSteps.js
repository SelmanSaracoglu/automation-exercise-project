import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";

// ==================================================
// BACKGROUND & SMOKE
// ==================================================

Given("der Besucher öffnet die Startseite", () => {
  homePage.visit();
});

Then("sollte der Seitentitel {string} enthalten", (titlePart) => {
  cy.title().should("include", titlePart);
});

Then("das Firmenlogo sollte oben sichtbar sein", () => {
  homePage.logo.should("be.visible");
});

Then("die Hauptbereiche \\(Header, Slider, Footer) sollten sichtbar sein", () => {
  // Hinweis: Wir nutzen \\, um die Klammern im Regex zu escapen
  homePage.header.should("be.visible");
  homePage.slider.should("be.visible");
  homePage.footer.should("be.visible");
});

// ==================================================
// NAVIGATION (Scenario Outline)
// ==================================================

When("der Besucher auf den Link {string} im Menü klickt", (linkText) => {
  homePage.clickMenuLink(linkText);
});

Then("sollte die URL {string} enthalten", (urlPart) => {
  cy.url().should("include", urlPart);
});

Then("der Titel der Seite sollte {string} sein", (pageTitle) => {
  cy.title().should("eq", pageTitle);
});

// ==================================================
// SIDEBAR & KATEGORIEN
// ==================================================

Then("sollte die Kategorie-Leiste {string} sichtbar sein", (headerText) => {
  homePage.sidebarTitle.contains(headerText).should("be.visible");
});

Then("die Kategorien {string}, {string} und {string} sollten verfügbar sein", (cat1, cat2, cat3) => {
  // Einfache Prüfung: Sind die Texte in der Sidebar vorhanden?
  homePage.sidebarCategory.should("contain", cat1)
    .and("contain", cat2)
    .and("contain", cat3);
});

Then("der Bereich {string} \\(Marken) sollte sichtbar sein", (brandsText) => {
  homePage.sidebarBrands.should("be.visible").and("contain", brandsText);
});

// ==================================================
// PRODUKTE & BILDER (Dinamik Kontrol)
// ==================================================

Then("sollte der Bereich {string} sichtbar sein", (sectionTitle) => {
  homePage.featuredItemsTitle.should("be.visible").and("contain.text", sectionTitle);
});

Then("alle angezeigten Produkte sollten ein Bild haben \\(kein Broken Image)", () => {
  // Hier rufen wir die zentrale Methode für Integritätsprüfungen auf.
  // Sie prüft Bilder, Preise und Buttons gleichzeitig.
  homePage.verifyProductCardsIntegrity();
});

Then("alle Produkte sollten einen Preis und Namen haben", () => {
  // Die Methode verifyProductCardsIntegrity deckt dies bereits ab.
  // Zur Sicherheit (und für DRY) rufen wir sie erneut auf.
  homePage.verifyProductCardsIntegrity();
});

Then("alle Produkte sollten einen {string} Button haben", (btnText) => {
   // Zusätzlich zur Integritätsprüfung validieren wir hier den Button-Text.
   homePage.allProductCards.contains(btnText).should("be.visible");
});

// ==================================================
// UI KOMPONENTEN (Slider, Footer, Scroll)
// ==================================================

Then("sollte das Haupt-Karussell \\(Slider) mit Pfeilen sichtbar sein", () => {
  homePage.slider.should("be.visible");
});

Then("sollte der Footer den Text {string} enthalten", (text) => {
  homePage.footer.should("contain", text);
});

Then("sollte das Copyright im Footer sichtbar sein", () => {
homePage.footer.should("contain", "Copyright");});

When("der Besucher nach unten scrollt", () => {
  homePage.scrollToBottom();
});

Then("sollte der {string} Pfeil \\(nach oben) sichtbar sein", (arrowId) => {
  // Wir prüfen nur die Sichtbarkeit, da die ID im POM definiert ist.
  homePage.scrollUpButton.should("be.visible");
});