# User Story & Akzeptanzkriterien (Sprint 2)

**Jira-ID:** AP-201
**Titel:** Benutzer Authentifizierung (Login, Register & Security)
**Status:** Ready for QA

## 1. User Story

> **Als** registrierter Kunde (oder neuer Besucher),
> **möchte ich** mich sicher anmelden, registrieren und abmelden können,
> **damit ich** meine persönlichen Daten schützen und auf Bestellungen zugreifen kann.

## 2. Akzeptanzkriterien (AC)

Damit dieser Task als "Done" gilt, müssen folgende Kriterien erfüllt sein:

### AC-06: Verfügbarkeit der Login-Seite (REQ-13)

- Die Seite unter `/login` muss erreichbar sein.
- Es müssen zwei getrennte Formulare sichtbar sein:
  - Links: "Login to your account"
  - Rechts: "New User Signup!"

### AC-07: Erfolgreicher Login (Happy Path) (REQ-14)

- Eingabe von gültiger `Email` und `Passwort`.
- Klick auf "Login".
- **Ergebnis:**
  - Weiterleitung zur Startseite (oder Account-Seite).
  - Der Header-Link ändert sich zu: "Logged in as [Username]".
  - Der Button "Delete Account" wird sichtbar.

### AC-08: Login-Fehlerbehandlung (Negative Path) (REQ-15)

- Eingabe von falscher Email oder falschem Passwort.
- **Ergebnis:**
  - Der Benutzer bleibt auf der Login-Seite.
  - Eine rote Fehlermeldung erscheint: _"Your email or password is incorrect!"_.

### AC-09: Logout-Prozess (REQ-16)

- Klick auf "Logout".
- **Ergebnis:**
  - Sofortige Weiterleitung zur Login-Seite.
  - Der Header zeigt wieder "Signup / Login" an (Session beendet).
  - Browser "Zurück"-Button darf nicht wieder in den Account führen.

### AC-10: Registrierung Starten (REQ-17)

- Eingabe von `Name` und neuer `Email` im Signup-Formular.
- Klick auf "Signup".
- **Ergebnis:** Weiterleitung zur Seite "Enter Account Information".

### AC-11: Registrierung mit Duplikat (REQ-18)

- Versuch, sich mit einer Email zu registrieren, die bereits existiert.
- **Ergebnis:** Fehlermeldung _"Email Address already exist!"_.

### AC-12: Input Validierung & Sicherheit (REQ-13, R-12)

- **Pflichtfelder:** Login ohne Email oder Passwort darf nicht möglich sein (HTML5 Validation oder Fehlermeldung).
- **Email-Format:** Eingaben ohne "@" Zeichen sollten abgelehnt werden.
- **Passwort-Sicherheit:**
  - _Soll:_ Mindestens 8 Zeichen (Best Practice).
  - _Ist:_ Das Test-System akzeptiert auch schwache Passwörter, aber wir testen, ob das Feld maskiert ist (`type="password"`), damit das Passwort nicht im Klartext sichtbar ist.

## 3. Test Daten (Test Verileri)

- **Static Login User:** `test_selenium@test.com` / `test1234`
- **Dynamic Register User:** `autotest_[TIMESTAMP]@test.com`
