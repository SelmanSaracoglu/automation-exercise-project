@Sprint2 @Auth
Feature: Benutzer-Anmeldung und Registrierung (Login & Register)
    Als registrierter Kunde (oder neuer Besucher)
    möchte ich über die Startseite zum Login gelangen,
    um mich sicher anzumelden oder zu registrieren.

    # ---------------------------------------------------
    # BACKGROUND: NAVIGATION
    # AC-06: Verfügbarkeit der Seite
    # ---------------------------------------------------
    Background:
        Given der Benutzer ist auf der Startseite
        When er auf den Link "Signup / Login" im Menü klickt
        Then sollte die Login-Seite sichtbar sein

    # ---------------------------------------------------
    # SZENARIO 1: ERFOLGREICHER LOGIN (HAPPY PATH)
    # Risk: R-08 | Req: REQ-14 | AC: AC-07
    # Testdaten: Sdetselman@cypress.com
    # ---------------------------------------------------
    @Smoke @Login @R-08 @REQ-14 @AC-07
    Scenario: Erfolgreicher Login mit gültigen Daten
        When der Benutzer gibt die Login-Email "Sdetselman@cypress.com" und das Passwort "Sdet1234" ein
        And klickt auf den Button "Login"
        Then sollte der Header den Text "Logged in as" enthalten
        And der Button "Delete Account" sollte sichtbar sein

    # ---------------------------------------------------
    # SZENARIO 2: FEHLGESCHLAGENER LOGIN (NEGATIVE PATH)
    # Risk: R-11 | Req: REQ-15 | AC: AC-08
    # ---------------------------------------------------
    @Regression @Login @R-11 @REQ-15 @AC-08
    Scenario: Fehlgeschlagener Login mit falschem Passwort
        When der Benutzer gibt die Login-Email "Sdetselman@cypress.com" und das Passwort "falsch123" ein
        And klickt auf den Button "Login"
        Then sollte die Fehlermeldung "Your email or password is incorrect!" sichtbar sein

    # ---------------------------------------------------
    # SZENARIO 3: REGISTRIERUNG STARTEN (REGISTER INIT)
    # Risk: R-09 | Req: REQ-17 | AC: AC-10
    # Hinweis: Hier wird eine RANDOM Email generiert.
    # ---------------------------------------------------
    @Sanity @Register @R-09 @REQ-17 @AC-10
    Scenario: Starten der Registrierung für neue Benutzer
        When der Benutzer gibt einen Namen und eine neue Email-Adresse ein
        And klickt auf den Button "Signup"
        Then sollte die Seite "Enter Account Information" sichtbar sein

    # ---------------------------------------------------
    # SZENARIO 4: REGISTRIERUNG MIT EXISTIERENDER EMAIL (NEGATIVE)
    # Risk: R-09 | Req: REQ-18 | AC: AC-11
    # Testdaten: Sdetselman@cypress.com (Bereits registriert)
    # ---------------------------------------------------
    @Regression @Register @R-09 @REQ-18 @AC-11
    Scenario: Registrierung fehlgeschlagen mit existierender Email
        When der Benutzer gibt den Namen "Sdet" und die Email "Sdetselman@cypress.com" ein
        And klickt auf den Button "Signup"
        Then sollte die Registrierungs-Fehlermeldung "Email Address already exist!" sichtbar sein

    # ---------------------------------------------------
    # SZENARIO 5: LOGOUT PROZESS
    # Risk: R-10 | Req: REQ-16 | AC: AC-09
    # Ablauf: Erst Login, dann Logout.
    # ---------------------------------------------------
    @Smoke @Logout @R-10 @REQ-16 @AC-09
    Scenario: Erfolgreicher Logout nach dem Login
        When der Benutzer gibt die Login-Email "Sdetselman@cypress.com" und das Passwort "Sdet1234" ein
        And klickt auf den Button "Login"
        Then sollte der Header den Text "Logged in as" enthalten
        When er auf den Link "Logout" im Menü klickt
        Then sollte die Login-Seite sichtbar sein
        And der Header sollte den Link "Signup / Login" enthalten