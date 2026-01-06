# Teststrategie für Sprint 3: Vollständige Registrierung (Full Registration)

**Datum:** 01.01.2026
**Verfasser:** QA Team
**Sprint Ziel:** Validierung des kompletten Registrierungszyklus (E2E: Signup -> Create -> Delete).

## 1. Einführung
In diesem Sprint testen wir den Prozess nach dem ersten "Signup"-Klick. Der Fokus liegt auf dem korrekten Ausfüllen der Formulare und dem erfolgreichen Abschluss der Kontoerstellung.

## 2. Geltungsbereich (Kapsam - In Scope)

### A. Detaillierte Registrierung
* **Account Information:** Anrede, Passwort, Geburtsdatum.
* **Optionen:** Checkboxen für "Newsletter" und "Special Offers".
* **Address Information:** Vorname, Nachname, Adresse, Land, Stadt, PLZ, Telefonnummer.
* **Abschluss:** Klick auf "Create Account" und Prüfung der Erfolgsmeldung.

### B. Account Löschen (Data Teardown)
* Nach der Erstellung muss das Konto sofort wieder gelöscht werden.
* **Ziel:** Das System sauber halten und sicherstellen, dass die "Delete Account" Funktion geht.

## 3. Testdaten-Strategie (Veri Stratejisi)

### A. Dynamische Email (Wiederverwendung)
* Wie in Sprint 2 nutzen wir `Date.now()` für die Email-Adresse, um Duplikate zu vermeiden.

### B. Formular-Daten (Statisch vs. Dynamisch)
* Da wir viele Felder haben (Adresse, Stadt etc.), nutzen wir ein **Fixture-File** (`registrationData.json`) oder feste Werte im Code.
* *Grund:* Wir müssen nicht jedes Mal eine neue Stadt erfinden. Wichtig ist nur, dass die Email einzigartig ist.

## 4. Risiko & Priorität
* **Kritisch (P1):** "Create Account" Button funktioniert nicht (Blocker).
* **Hoch (P2):** Pflichtfelder (z.B. Passwort) werden nicht validiert.
* **Mittel (P3):** Dropdowns (z.B. Geburtsdatum) lassen sich nicht auswählen.

## 5. Neue Page Objects
* Wir benötigen ein neues Page Object: `SignupPage.js`, da das Formular sehr lang ist und nicht in die `LoginPage.js` gehört.