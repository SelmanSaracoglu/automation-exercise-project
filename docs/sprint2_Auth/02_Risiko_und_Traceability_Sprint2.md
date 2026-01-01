# Risikoanalyse und Traceability Matrix (Sprint 2)

**Fokus:** Authentication (Login, Register, Logout)
**Status:** Draft

## 1. Risikoanalyse (Risk Analizi)

| ID       | Risiko (Risk)                                                           | Auswirkung   | Wahrscheinlichkeit | Priorität | Gegenmaßnahme (Mitigation)                                    |
| :------- | :---------------------------------------------------------------------- | :----------- | :----------------- | :-------- | :------------------------------------------------------------ |
| **R-08** | **Login Block:** "Login" Button reagiert nicht oder Server Error.       | Kritisch (5) | Gering (1)         | **P1**    | Automatisierter Smoke-Test (Login verification).              |
| **R-09** | **Data Conflict:** Registrierung schlägt fehl ("Email already exists"). | Hoch (4)     | Hoch (5)           | **P1**    | Nutzung von dynamischen Emails (Timestamp).                   |
| **R-10** | **Session Zombie:** Logout funktioniert nicht, User bleibt eingeloggt.  | Kritisch (5) | Gering (2)         | **P1**    | Validierung der UI-Elemente nach Logout.                      |
| **R-11** | **Unklare Fehler:** Fehlermeldungen sind verwirrend oder fehlen.        | Mittel (3)   | Mittel (3)         | **P2**    | Prüfung der exakten Textnachrichten (Correct Error Messages). |
| **R-12** | **Input Vulnerability:** Formular stürzt bei Sonderzeichen ab.          | Mittel (3)   | Gering (2)         | **P3**    | Functional Input Validation Tests.                            |

---

## 2. Traceability Matrix (İzlenebilirlik Matrisi)

| Req ID     | Anforderung (Gereksinim)  | Test Szenario                                  | Test Case ID  | Risk ID |
| :--------- | :------------------------ | :--------------------------------------------- | :------------ | :------ |
| **REQ-13** | Login UI Availability.    | Formularfelder (Email/Passwort) sichtbar?      | `TC_AUTH_001` | R-08    |
| **REQ-14** | Valid Login (Happy Path). | Login -> Check "Logged in as...".              | `TC_AUTH_002` | R-08    |
| **REQ-15** | Invalid Login (Negative). | Falsches Passwort -> Rote Fehlermeldung.       | `TC_AUTH_003` | R-11    |
| **REQ-16** | Logout Functionality.     | Logout -> Redirect Login Page.                 | `TC_AUTH_004` | R-10    |
| **REQ-17** | Register Init (New User). | Name/Email eingeben -> Signup Formular.        | `TC_AUTH_005` | R-09    |
| **REQ-18** | Register Duplicate Email. | Existierende Email -> Fehler "Already exists". | `TC_AUTH_006` | R-09    |
| **REQ-19** | Delete Account Cycle.     | Registrieren -> Login -> Löschen (Clean Up).   | `TC_AUTH_007` | R-09    |
