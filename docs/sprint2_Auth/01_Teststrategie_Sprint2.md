# Teststrategie für Sprint 2: Authentifizierung (Login & Register)

**Verfasser:** QA Team
**Sprint Ziel:** Validierung der Anmelde- und Registrierungsprozesse (E2E).

## 1. Einführung
In diesem Sprint fokussieren wir uns auf die Sicherheit und Funktionalität des Zugangsmoduls. Ziel ist es, robuste Tests für Login, Registrierung und Logout zu erstellen, die auch bei wiederholter Ausführung stabil bleiben.

## 2. Geltungsbereich (Kapsam - In Scope)

### A. Funktionale Tests (Functional Testing)
* **Login Happy Path:** Anmeldung mit korrekten Daten und Verifizierung des "Logged in as..." Status.
* **Login Negative Path:** Prüfung von Fehlermeldungen bei falschen Daten ("Email Address or Password is incorrect").
* **Logout Prozess:** * Erfolgreiches Abmelden.
    * Sicherstellen, dass der Benutzer zur Login-Seite zurückgeleitet wird.
    * Verifizierung, dass die Session beendet ist (Login-Button wieder sichtbar).
* **Input Validation:**
    * Wie reagiert das System auf leere Felder?
    * Wie reagiert das System auf ungültige Email-Formate (z.B. fehlendes "@")?

### B. End-to-End Zyklus (Register -> Delete)
* **Register-to-Delete:** Ein Benutzer registriert sich, prüft den Login und löscht das Konto sofort wieder.
* **Ziel:** Das System sauber halten ("Data Teardown").

## 3. Testdaten-Strategie (Veri Stratejisi)

Wir nutzen eine **"Self-Cleaning"** Strategie, um Datenmüll zu vermeiden:

1.  **Statische Daten (Login):**
    * Für reine Login-Tests nutzen wir einen permanenten Test-User (`test_selenium@test.com`).
    * *Grund:* Schneller Smoke-Test, da keine Registrierung nötig ist.

2.  **Dynamische Daten (Register):**
    * Wir nutzen dynamische Email-Adressen mittels Zeitstempel (z.B. `user_1735260000@test.com`).
    * *Grund:* Vermeidung des Fehlers "Email already exists" bei wiederholten Tests.

3.  **Data Cleanup:**
    * Tests, die einen Benutzer erstellen (Register), müssen diesen am Ende des Szenarios löschen ("Delete Account").

## 4. Testwerkzeuge
* **Cypress:** Für UI Automation.
* **JavaScript Utilities:** `Date.now()` für einzigartige Testdaten.

## 5. Außerhalb des Umfangs (Out of Scope)
* **OWASP ZAP / Pen-Testing:** Wir führen keine Sicherheits-Scans durch.
* **Social Login:** Google/Facebook Login wird nicht getestet.
* **Password Reset:** "Forgot Password" Funktion ist Teil eines späteren Sprints.