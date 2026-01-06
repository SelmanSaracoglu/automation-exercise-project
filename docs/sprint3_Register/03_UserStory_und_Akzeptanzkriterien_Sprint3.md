# User Story & Akzeptanzkriterien (Sprint 3)

**Jira-ID:** AP-301
**Titel:** Vollständiger Registrierungsprozess (E2E)
**Status:** Ready for QA

## 1. User Story

> **Als** neuer Besucher,
> **möchte ich** ein vollständiges Konto mit Adresse anlegen und es bei Bedarf wieder löschen können,
> **damit ich** Bestellungen aufgeben kann, ohne meine Daten jedes Mal neu einzugeben.

## 2. Akzeptanzkriterien (AC)

### AC-13: Account Informationen (REQ-20)
- Nach dem ersten Signup-Schritt (Name/Email) erscheint die Seite "Enter Account Information".
- **Pflichtfelder:**
  - Title (Mr. / Mrs.)
  - Password (maskiert)
  - Date of Birth (Tag, Monat, Jahr Dropdowns)
- **Checkboxen:** "Sign up for our newsletter" und "Receive special offers" müssen auswählbar sein.

### AC-14: Adress-Informationen (REQ-21)
- Folgende Felder müssen ausgefüllt werden können:
  - First Name, Last Name
  - Company, Address, Address 2
  - Country (Dropdown: India, USA, Canada, Australia, Israel, New Zealand, Singapore)
  - State, City, Zipcode, Mobile Number

### AC-15: Konto Erstellung Abschluss (REQ-22)
- Klick auf "Create Account".
- **Ergebnis:** Die Seite "Account Created!" muss sichtbar sein.
- Ein Button "Continue" muss sichtbar sein.

### AC-16: Automatische Anmeldung (REQ-23)
- Nach Klick auf "Continue":
  - Der Header muss "Logged in as [Username]" anzeigen.

### AC-17: Konto Löschen (REQ-24)
- Klick auf "Delete Account".
- **Ergebnis:** Die Seite "Account Deleted!" muss sichtbar sein.
- Das System ist wieder im Gast-Modus (nach Klick auf Continue).

## 3. Test Daten

- **Email:** `autotest_[TIMESTAMP]@test.com` (Dynamisch)
- **Password:** `Test1234!`
- **Address:** Dummy Daten (z.B. "Test Street 1", "Berlin", "12345")