# 📝 User Story: Authentication (Login & Security)

**Traceability:** REQ-Auth-001 to REQ-Auth-005

## US-02: Benutzeranmeldung
> Als registrierter Benutzer möchte ich mich sicher anmelden, um auf mein Konto zuzugreifen.

### Akzeptanzkriterien (AC)
* **AC-05 (Login UI):** Die Seite `/login` muss erreichbar sein. "Login to your account" Formular muss sichtbar sein.
* **AC-06 (Valid Login):** Mit korrekter Email & Passwort -> Weiterleitung zum Dashboard ("Logged in as...").
* **AC-07 (Invalid Login):** Mit falschen Daten -> Fehlermeldung "Email Address or Password is incorrect" muss rot erscheinen.
* **AC-08 (Security):** Passwort-Eingabe muss maskiert sein (Dots instead of text).