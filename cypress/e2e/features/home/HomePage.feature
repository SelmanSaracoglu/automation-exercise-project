@Sprint1 @HomePage
Feature: Validierung der Startseite (Home Page)
  Als nicht angemeldeter Besucher (Gast)
  möchte ich die Startseite sehen und navigieren können,
  um einen Überblick über die Produkte zu erhalten.

  # AC-01 & Risk R-01: Site erişilebilirliği
  Background:
    Given der Besucher öffnet die Startseite

  # AC-01 & Risk R-01, R-02: Kritik öğelerin varlığı (Smoke Test)
  @Smoke @R-01 @REQ-01 @REQ-02
  Scenario: Grundlegende Elemente überprüfen (Smoke Test)
    Then sollte der Seitentitel "Automation Exercise" enthalten
    And das Firmenlogo sollte oben sichtbar sein
    And die Hauptbereiche (Header, Slider, Footer) sollten sichtbar sein

  # AC-02 & Risk R-02: Navigasyon linkleri
  # DÜZELTME: Signup / Login eklendi.
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

  # AC-03 & Risk R-04, R-06: Sidebar ve Kategori işlevselliği
  @Regression @R-06 @REQ-04 @REQ-05
  Scenario: Überprüfung der Seitenleiste (Sidebar) und Kategorien
    Then sollte die Kategorie-Leiste "Category" sichtbar sein
    And die Kategorien "Women", "Men" und "Kids" sollten verfügbar sein
    And der Bereich "Brands" (Marken) sollte sichtbar sein

  # AC-04 & Risk R-03, R-04, R-05: Ürünler, Resimler ve Butonlar (Dinamik Test)
  @Sanity @R-03 @R-04 @R-05 @REQ-06 @REQ-08 @REQ-09
  Scenario: Überprüfung der Produkte und Bilder auf der Startseite
    Then sollte der Bereich "Featured Items" sichtbar sein
    And alle angezeigten Produkte sollten ein Bild haben (kein Broken Image)
    And alle Produkte sollten einen Preis und Namen haben
    And alle Produkte sollten einen "Add to cart" Button haben

  # AC-05 & Risk R-07: Slider, Footer ve Scroll-Up
  @UI @R-07 @REQ-10 @REQ-11 @REQ-12
  Scenario: Überprüfung von Slider, Footer und Scroll-Funktion
    Then sollte das Haupt-Karussell (Slider) mit Pfeilen sichtbar sein
    And der Footer sollte den Text "Subscription" enthalten
    When der Besucher nach unten scrollt
    Then sollte der "Scroll-Up" Pfeil (nach oben) sichtbar sein

