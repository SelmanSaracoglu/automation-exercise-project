# User Story & Akzeptanzkriterien (Sprint 1)

**Jira-ID:** AP-101
**Titel:** Validierung der Startseite für Gastbenutzer
**Status:** Ready for Dev

## 1. User Story (Benutzergeschichte)

> **Als** nicht angemeldeter Besucher (Gast),
> **möchte ich** die Startseite der Anwendung aufrufen und alle Hauptbereiche sehen,
> **damit ich** einen Überblick über die Produkte bekomme und navigieren kann.

## 2. Akzeptanzkriterien (Kabul Kriterleri - AC)

Damit dieser Task als "Erledigt" (Done) gilt, müssen folgende Kriterien erfüllt sein:

### AC-01: Verfügbarkeit & Branding

- Die Seite muss unter `https://automationexercise.com/` erreichbar sein (HTTP 200).
- Das Firmenlogo muss oben links sichtbar sein.
- Der Seitentitel (Browser Tab) muss "Automation Exercise" enthalten.

### AC-02: Header Navigation

- Das Hauptmenü muss folgende Links enthalten und funktionieren:
  - `Home` (Farbe muss aktiv sein)
  - `Products`
  - `Cart`
  - `Signup / Login`
  - `Test Cases`
  - `API Testing`
  - `Contact us`
- Es darf **kein** "Logout" Button sichtbar sein (da Gast-Status).

### AC-03: Sidebar Funktionalität

- Die Kategorie-Leiste ("Category") muss links sichtbar sein.
- Die Hauptkategorien (Women, Men, Kids) müssen aufklappbar sein (Akkordeon).
- Die Marken-Leiste ("Brands") muss sichtbar sein.

### AC-04: Produkt-Anzeige (Body)

- Der Bereich "Featured Items" muss in der Mitte sichtbar sein.
- Jedes sichtbare Produkt muss:
  - Ein Bild haben (Kein Broken Image).
  - Einen Preis und Namen haben.
  - Einen "Add to Cart" Button haben.
  - Einen "View Product" Button haben.

### AC-05: Slider & Footer

- Der Haupt-Slider (oben) muss Bilder und Navigationspfeile haben.
- Der Footer muss das "Subscription" Feld und den Copyright-Text enthalten.
- Der "Scroll-Up" Pfeil (unten rechts) muss erscheinen, wenn man scrollt.

## 3. Test Daten (Test Verileri)

- **URL:** https://automationexercise.com/
- **Browser:** Chrome / Firefox
- **User Rolle:** Gast (Nicht eingeloggt)
