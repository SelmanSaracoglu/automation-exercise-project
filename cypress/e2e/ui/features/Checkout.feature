@Sprint6 @Checkout
Feature: Checkout und Zahlungsprozess
  Als registrierter Benutzer möchte ich den Kauf abschließen.

  Background: Benutzer ist eingeloggt
    Given ich bin auf der Login-Seite
    And ich logge mich mit "testuser_123@qa.com" und "Test1234!" ein

  @AC_21 @AC_22 @AC_23
  Scenario: Produkte im Warenkorb bezahlen und Bestellung abschließen
    Given ich habe Produkte im Warenkorb
    And ich bin auf der "Warenkorb" Seite
    When ich den "Proceed To Checkout" Button klicke
    Then sollte ich auf die "Checkout" Seite weitergeleitet werden
    And die Lieferadresse und Rechnungsadresse sollten sichtbar sein
    When ich einen Kommentar "Test Order Sprint 6" eingebe und auf "Place Order" klicke
    Then sollte ich auf die "Payment" Seite weitergeleitet werden
    When ich meine Kreditkartendaten eingebe und bestätige
    Then sollte die Bestellbestätigung "Order Placed!" sichtbar sein