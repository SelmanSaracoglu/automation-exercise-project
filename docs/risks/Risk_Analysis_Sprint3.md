# ⚠️ Risikoanalyse: Registration

| ID | Risk | Effect | Mitigation |
| **R-07** | **Data Collision** | Test schlägt fehl, weil Email schon existiert. | Nutzung von `Faker.js` oder Zeitstempel für Emails. |
| **R-08** | **Form Validation** | User kann sich ohne Pflichtfelder (z.B. Passwort) anmelden. | UI-Validierungstests für leere Felder. |
| **R-09** | **Zombie Data** | Tausende Test-User verstopfen die Datenbank. | "Delete Account" Schritt am Ende jedes Tests. |