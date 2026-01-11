
@Sprint1 @Smoke
Feature: Homepage Validierung (Gast)
  Als nicht-angemeldeter Benutzer möchte ich die Startseite sehen, 
  um sicherzustellen, dass das System verfügbar ist.

  # AC-01: Availability & AC-02: Branding
  @REQ_AC01 @REQ_AC02
  Scenario: Startseite lädt korrekt mit Branding
    Given ich öffne die Startseite
    Then sollte der Seitentitel "Automation Exercise" enthalten
    And das Firmenlogo sollte sichtbar sein

  # AC-03: Navigation Links
  @REQ_AC03
  Scenario: Hauptmenü Links sind sichtbar
    Given ich bin auf der Startseite
    Then sollten die Menü-Links "Home", "Products" und "Signup / Login" sichtbar sein
    And der "Logout" Button sollte NICHT sichtbar sein