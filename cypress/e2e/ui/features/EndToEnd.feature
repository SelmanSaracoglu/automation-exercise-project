@Sprint7 @E2E
Feature: Kompletter Einkaufszyklus (E2E)
  Als Benutzer möchte ich mich registrieren, einkaufen, bezahlen 
  und am Ende meinen Account löschen.

  Scenario: Registrierung, Einkauf, Rechnung und Löschung
    # --- PHASE 1: Registration ---
    Given ich bin auf der Login-Seite
    When ich einen neuen Benutzer mit zufälligen Daten registriere
    And ich das Formular mit "Test1234!" ausfülle und abschicke
    Then sollte die Nachricht "ACCOUNT CREATED!" sichtbar sein
    
    # --- PHASE 2: Add to Cart ---
    When ich auf "Continue" klicke
    Given ich bin auf der "ALL PRODUCTS" Seite
    When ich das erste Produkt in den Warenkorb lege
    And ich klicke auf "Continue Shopping" im Modal
    
    # --- PHASE 3: Checkout ---
    Given ich bin auf der "Warenkorb" Seite
    When ich den "Proceed To Checkout" Button klicke
    Then sollte ich auf die "Checkout" Seite weitergeleitet werden
    When ich einen Kommentar "Final Sprint Order" eingebe und auf "Place Order" klicke
    
    # --- PHASE 4: Payment ---
    When ich meine Kreditkartendaten eingebe und bestätige
    Then sollte die Bestellbestätigung "Order Placed!" sichtbar sein
    
    # --- PHASE 5: Invoice & Cleanup (SPRINT 7 NEW) ---
    When ich auf den "Download Invoice" Button klicke
    And ich auf den "Continue" Button klicke
    And ich auf den "Delete Account" Button klicke
    Then sollte die Nachricht "ACCOUNT DELETED!" sichtbar sein