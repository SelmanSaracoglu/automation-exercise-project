@Sprint3 @Register @FullCycle
Feature: Vollständige Registrierung und Konto-Löschung
  Als neuer Benutzer möchte ich ein Konto mit meinen Adressdaten erstellen
  und es später löschen können, um den gesamten Prozess zu testen.

  # ---------------------------------------------------
  # BACKGROUND: VORBEREITUNG (Pre-Condition)
  # Wir starten den Prozess bis zum Registrierungsformular.
  # (Wiederverwendung der Schritte aus Sprint 2)
  # ---------------------------------------------------
  Background:
    Given der Benutzer ist auf der Startseite
    When er auf den Link "Signup / Login" im Menü klickt
    And der Benutzer gibt einen Namen und eine neue Email-Adresse ein
    And klickt auf den Button "Signup"

  # ---------------------------------------------------
  # SZENARIO: E2E REGISTRIERUNG (Happy Path)
  # Covers: AC-13, AC-14, AC-15, AC-16, AC-17
  # Req: REQ-20 bis REQ-24
  # Flow: Formular -> Create -> Login Check -> Delete
  # ---------------------------------------------------
  @Regression @E2E
  Scenario: Registrierung abschließen, Einloggen und Konto löschen
    # SCHRITT 1: Formular ausfüllen (AC-13 & AC-14)
    Then sollte die Seite "Enter Account Information" sichtbar sein
    When der Benutzer das Registrierungsformular vollständig ausfüllt
    And auf den Button "Create Account" klickt

    # SCHRITT 2: Bestätigung prüfen (AC-15)
    Then sollte die Nachricht "Account Created!" sichtbar sein

    # SCHRITT 3: Login Status prüfen (AC-16)
    When er auf den Button "Continue" klickt
    Then sollte der Header den Text "Logged in as" enthalten

    # SCHRITT 4: Konto löschen / Clean Up (AC-17)
    When er auf den Link "Delete Account" im Menü klickt
    Then sollte die Nachricht "Account Deleted!" sichtbar sein