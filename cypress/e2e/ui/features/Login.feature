
@Sprint2 @Login @Security
Feature: Benutzeranmeldung (Login)
  Als registrierter Benutzer möchte ich mich anmelden, 
  um auf mein Konto zuzugreifen.

  # Happy Path + API Spying
  @REQ_Auth_006 @API_Check
  Scenario: Erfolgreicher Login mit API Überprüfung
    Given ich bin auf der Login-Seite
    When ich mich mit "test_selman@test.com" und "test1234" einlogge und die API überwache
    Then sollte der Server mit Status 200 antworten
    And ich sollte als "selman" eingeloggt sein

  # Negative Path
  @REQ_Auth_007
  Scenario: Fehlgeschlagener Login (Falsches Passwort)
    Given ich bin auf der Login-Seite
    When ich mich mit "test_selman@test.com" und "falschesPasswort" einlogge
    Then sollte die Fehlermeldung "Your email or password is incorrect!" sichtbar sein