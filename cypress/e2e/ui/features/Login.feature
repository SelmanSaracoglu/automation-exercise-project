@Sprint2 @Login @Security
Feature: Benutzeranmeldung (Login)
  Als registrierter Benutzer möchte ich mich anmelden, 
  um auf mein Konto zuzugreifen.

  # AC-06: Valid Login (Happy Path) + API Check
  @AC_06 @API_Check
  Scenario: Erfolgreicher Login mit API Überprüfung
    Given ich bin auf der Login-Seite
    When ich mich mit ""testuser_123@qa.com" und "test1234!" einlogge und die API überwache
    Then sollte der Server mit Status 200 antworten
    And ich sollte als "selman" eingeloggt sein

  # AC-07: Invalid Login (Negative Path)
  @AC_07
  Scenario: Fehlgeschlagener Login (Falsches Passwort)
    Given ich bin auf der Login-Seite
    When ich mich mit "test_selman@test.com" und "falschesPasswort" einlogge
    Then sollte die Fehlermeldung "Email Address or Password is incorrect" sichtbar sein