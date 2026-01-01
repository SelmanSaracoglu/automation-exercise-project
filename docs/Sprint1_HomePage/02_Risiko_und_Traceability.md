# Risikoanalyse und Traceability Matrix (Sprint 1)

**Fokus:** Startseite & Navigation (Final Scope)
**Status:** Approved

## 1. Risikoanalyse (Risk Analizi)

Hier bewerten wir die potenziellen Fehler und deren Auswirkungen auf den Benutzer.

| ID       | Risiko (Risk)                                              | Auswirkung   | Wahrscheinlichkeit | Priorität | Gegenmaßnahme                                            |
| :------- | :--------------------------------------------------------- | :----------- | :----------------- | :-------- | :------------------------------------------------------- |
| **R-01** | **White Screen:** Seite lädt nicht oder stürzt ab.         | Kritisch (5) | Gering (1)         | **P1**    | Automatisierter Smoke-Test (Visit & Verify).             |
| **R-02** | **Navigation Dead End:** Header-Links sind defekt (404).   | Hoch (4)     | Mittel (2)         | **P1**    | Alle Links durchklicken & URL prüfen.                    |
| **R-03** | **Content Missing:** Produkte (Body) werden nicht geladen. | Hoch (4)     | Mittel (3)         | **P1**    | "Featured Items" Container Sichtbarkeit prüfen.          |
| **R-04** | **Broken Images:** Produktbilder laden nicht (X-Icon).     | Mittel (3)   | Mittel (3)         | **P2**    | Automatischer Check: `naturalWidth > 0` für alle Bilder. |
| **R-05** | **Functional Gap:** "Add to Cart" Buttons fehlen.          | Hoch (4)     | Gering (2)         | **P2**    | Dynamische Prüfung aller sichtbaren Produkte.            |
| **R-06** | **Sidebar/Footer Defekt:** Elemente reagieren nicht.       | Mittel (3)   | Mittel (3)         | **P2**    | Accordion-Funktion & Footer-Input validieren.            |
| **R-07** | **UX Glitch:** Scroll-Up oder Slider Probleme.             | Niedrig (2)  | Mittel (3)         | **P3**    | UI-Checks für Slider-Pfeile und Scroll-Button.           |

---

## 2. Traceability Matrix (İzlenebilirlik Matrisi)

Hier mappen wir die Anforderungen auf konkrete Testfälle.

| Req ID     | Anforderung (Gereksinim)                              | Test Szenario (Was wir testen)                       | Test Case ID | Risk ID |
| :--------- | :---------------------------------------------------- | :--------------------------------------------------- | :----------- | :------ |
| **REQ-01** | Startseite Verfügbarkeit (Performance & HTTP 200).    | Seite laden, Title prüfen.                           | `TC_HP_001`  | R-01    |
| **REQ-02** | Header: Logo & Branding Sichtbarkeit.                 | Logo-Element prüfen.                                 | `TC_HP_002`  | R-01    |
| **REQ-03** | Navigation: Interne Links (Products, Cart, Login...). | Durchklicken aller Links & URL validieren.           | `TC_HP_003`  | R-02    |
| **REQ-04** | Sidebar: Kategorie (Women/Men) Funktionalität.        | "Women" anklicken -> Untermenü muss sichtbar sein.   | `TC_HP_004`  | R-06    |
| **REQ-05** | Sidebar: "Brands" Bereich Sichtbarkeit.               | Prüfen, ob die Markenliste vorhanden ist.            | `TC_HP_005`  | R-06    |
| **REQ-06** | Body: "Featured Items" Inhalt.                        | Container muss sichtbar sein und Produkte enthalten. | `TC_HP_006`  | R-03    |
| **REQ-07** | Body: "Recommended Items" (Empfohlene Produkte).      | Am Seitenende prüfen, ob diese Sektion sichtbar ist. | `TC_HP_007`  | R-03    |
| **REQ-08** | Body: Produkt-Interaktion (Dynamisch).                | Haben alle Produkte einen "Add to Cart" Button?      | `TC_HP_008`  | R-05    |
| **REQ-09** | Body: Bilder-Integrität (Alle Bilder).                | Prüfen, ob alle `img` Tags korrekt geladen sind.     | `TC_HP_009`  | R-04    |
| **REQ-10** | Slider: Haupt-Carousel und Pfeile.                    | Prüfen, ob Slider & Navigationspfeile sichtbar sind. | `TC_HP_010`  | R-07    |
| **REQ-11** | Footer: Subscription & Copyright.                     | Input-Feld & Copyright-Text prüfen.                  | `TC_HP_011`  | R-06    |
| **REQ-12** | UX: Scroll-Up Pfeil Funktion.                         | Runterscrollen -> Pfeil sichtbar -> Klick -> Oben.   | `TC_HP_012`  | R-07    |
