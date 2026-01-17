@Sprint4 @Products
Feature: Produktkatalog und Details
  Als Benutzer möchte ich die Produktliste einsehen, 
  um verfügbare Artikel zu prüfen und Details zu sehen.

  # AC-14 (List UI) & AC-16 (API Check)
  @AC_14 @AC_16 @Hybrid
  Scenario: Produktliste wird korrekt geladen (UI & API Hybrid)
    Given ich bin auf der Startseite
    When ich auf "Products" klicke und die API überwache
    Then sollte ich auf die "All Products" Seite weitergeleitet werden
    And die Produktliste sollte sichtbar sein und Artikel enthalten
    And die API sollte eine Liste von Produkten zurückgeben (Status 200)

  # AC-15 (Detail Page)
  @AC_15
  Scenario: Produktdetails anzeigen
    Given ich bin auf der "ALL PRODUCTS" Seite
    When ich auf "View Product" beim ersten Artikel klicke
    Then sollte die Produktdetailseite sichtbar sein
    And der Produktname, Preis und Verfügbarkeit sollten angezeigt werden