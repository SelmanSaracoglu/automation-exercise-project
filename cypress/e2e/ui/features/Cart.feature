@Sprint5 @Cart
Feature: Warenkorb-Funktionalität
  Als Benutzer möchte ich Produkte in den Warenkorb legen 
  und sicherstellen, dass sie korrekt gespeichert werden.

  # AC-17, AC-18, AC-19
  @AC_17 @AC_19
  Scenario: Produkte in den Warenkorb legen und überprüfen
    Given ich bin auf der "All Products" Seite
    When ich das erste Produkt in den Warenkorb lege
    And ich klicke auf "Continue Shopping" im Modal
    And ich das zweite Produkt in den Warenkorb lege
    And ich klicke auf "View Cart" im Modal
    Then sollte ich auf die "Warenkorb" Seite weitergeleitet werden
    And sollten 2 Produkte im Warenkorb sichtbar sein
    And die Preise und Mengen sollten korrekt sein