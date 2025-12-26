@Sprint1 @HomePage
Feature: Validierung der Startseite (Home Page)
  Als nicht angemeldeter Besucher (Gast)
  möchte ich die Startseite sehen und navigieren können,
  um einen Überblick über die Produkte zu erhalten.

  # Vor jedem Szenario wird die Seite geöffnet
  Background:
    Given der Besucher öffnet die Startseite

  # ---------------------------------------------------
  # TEIL 1: KRITISCHE PRÜFUNGEN (SMOKE)
  # ---------------------------------------------------

  @Smoke @R-01 @REQ-01 @REQ-02
  Scenario: Grundlegende Elemente überprüfen (Smoke Test)
    Then sollte der Seitentitel "Automation Exercise" enthalten
    And das Firmenlogo sollte oben sichtbar sein
    And die Hauptbereiche (Header, Slider, Footer) sollten sichtbar sein

  # ---------------------------------------------------
  # TEIL 2: NAVIGATION (REGRESSION)
  # ---------------------------------------------------

  @Regression @R-02 @REQ-03
  Scenario Outline: Überprüfung der Navigationslinks im Header
    When der Besucher auf den Link "<LinkName>" im Menü klickt
    Then sollte die URL "<UrlPart>" enthalten
    And der Titel der Seite sollte "<PageTitle>" sein

    Examples:
      | LinkName       | UrlPart      | PageTitle           |
      | Products       | /products    | Automation Exercise |
      | Cart           | /view_cart   | Automation Exercise |
      | Signup / Login | /login       | Automation Exercise |
      | Test Cases     | /test_cases  | Automation Practice |
      | API Testing    | /api_list    | Automation Practice |
      | Contact us     | /contact_us  | Automation Exercise |

  # ---------------------------------------------------
  # TEIL 3: SEITENLEISTE & KATEGORIEN (SIDEBAR)
  # ---------------------------------------------------

  @Regression @R-06 @REQ-04 @REQ-05
  Scenario: Überprüfung der Seitenleiste (Sidebar) und Kategorien
    Then sollte die Kategorie-Leiste "Category" sichtbar sein
    And die Kategorien "Women", "Men" und "Kids" sollten verfügbar sein
    And der Bereich "Brands" (Marken) sollte sichtbar sein

  # ---------------------------------------------------
  # TEIL 4: PRODUKTE & BILDER (DATA DRIVEN)
  # ---------------------------------------------------

  @Sanity @R-03 @R-04 @R-05 @REQ-06 @REQ-08 @REQ-09
  Scenario: Überprüfung der Produkte und Bilder auf der Startseite
    Then sollte der Bereich "Featured Items" sichtbar sein
    And alle angezeigten Produkte sollten ein Bild haben (kein Broken Image)
    And alle Produkte sollten einen Preis und Namen haben
    And alle Produkte sollten einen "Add to cart" Button haben

  # ---------------------------------------------------
  # TEIL 5: UI-KOMPONENTEN (SEPARAT)
  # ---------------------------------------------------

  # AC-05: Nur Slider-Prüfung
  @UI @R-07 @REQ-10
  Scenario: Überprüfung des Haupt-Karussells (Slider)
    Then sollte das Haupt-Karussell (Slider) mit Pfeilen sichtbar sein

  # AC-05: Nur Footer-Prüfung
  @UI @R-06 @REQ-11
  Scenario: Überprüfung des Footer-Bereichs
    Then sollte der Footer den Text "Subscription" enthalten
    And sollte das Copyright im Footer sichtbar sein

  # AC-05: Nur Scroll-Up-Prüfung
  @UI @R-07 @REQ-12
  Scenario: Überprüfung der Scroll-Up Funktion
    When der Besucher nach unten scrollt
    Then sollte der "Scroll-Up" Pfeil (nach oben) sichtbar sein