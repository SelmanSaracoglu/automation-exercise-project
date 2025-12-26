# Teststrategie v1.0 - Automation Exercise

## 1. Einleitung (Giriş)
Dieses Dokument beschreibt die Teststrategie für das Projekt "Automation Exercise". Unser Ziel ist es, eine hybride Teststruktur (UI + API) aufzubauen.

## 2. Testumfang (Test Kapsamı) - Phase 1
In der ersten Phase konzentrieren wir uns auf die Startseite (Homepage). Wir testen aus der Sicht eines Besuchers (Visitor).

### Zu testende Bereiche:
- **Erreichbarkeit der Webseite:** Lädt die Seite erfolgreich? (Status 200)
- **Visuelle Elemente:** Sind das Logo und die Navigationsleiste sichtbar?
- **Seitentitel:** Ist der Titel der Seite korrekt?

## 3. Werkzeuge (Araçlar)
- **Framework:** Cypress + Cucumber (BDD)
- **Sprache:** JavaScript (Node.js)
- **Browser:** Chrome, Electron