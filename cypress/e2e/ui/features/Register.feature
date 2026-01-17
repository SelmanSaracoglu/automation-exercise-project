@Sprint3 @Register @DataTeardown
Feature: Neukundenregistrierung
  Als neuer Besucher möchte ich ein Konto erstellen, 
  um das System als registrierter Benutzer zu nutzen.

  # Traceability: REQ-Reg-001 to REQ-Reg-005
  @REQ_Reg_01 @HappyPath
  Scenario: Vollständiger Registrierungszyklus mit Account-Löschung (E2E)
    Given ich bin auf der Login-Seite
    When ich den Registrierungsprozess mit zufälligen Daten starte
    And ich das Formular mit persönlichen Daten ausfülle und abschicke
    Then sollte die Nachricht "ACCOUNT CREATED!" sichtbar sein
    
    When ich auf "Continue" klicke
    Then ich sollte als registrierter Benutzer eingeloggt sein
    
    # Clean Up / Teardown
    When ich den Account lösche
    Then sollte die Nachricht "ACCOUNT DELETED!" sichtbar sein