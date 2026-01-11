# 📝 User Stories & Acceptance Criteria

**Traceability:** Diese Anforderungen decken Risiken R-01 und R-02 ab.

## US-01: Portal Einstieg (Gast)
> Als nicht-angemeldeter Benutzer möchte ich die Startseite sehen, um mich zu orientieren.

### Akzeptanzkriterien (AC)
* **AC-01 (Availability):** Die Seite muss unter `base_url` in < 3 Sekunden laden. Titel muss "Automation Exercise" sein.
* **AC-02 (Branding):** Das Firmenlogo muss oben links sichtbar sein.
* **AC-03 (Navigation):** Das Hauptmenü muss "Home", "Products" und "Signup/Login" enthalten.
* **AC-04 (Status):** Es darf **kein** "Logout" Button sichtbar sein (da Gast-Modus).