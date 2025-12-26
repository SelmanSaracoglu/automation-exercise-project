
# Best Practices: Locator-Strategien (Cypress)

**Zweck:** Dieses Dokument erklärt, wie wir Webelemente auswählen, um stabile Tests zu schreiben.

## 1. Die Hierarchie der Selektoren 

Wir wählen die Selektoren in dieser Reihenfolge aus:

1.  **`data-cy` / `data-testid`** (Am besten)
    * **Warum?** Diese Attribute sind speziell für Tests gedacht. Sie ändern sich nicht, wenn sich das Design ändert.
    * *Beispiel:* `cy.get('[data-cy="submit-btn"]')`
    * *Status:* Leider auf "Automation Exercise" nicht verfügbar.

2.  **`ID` (#)** (Sehr gut)
    * **Warum?** IDs sind einzigartig (unique) und schnell.
    * *Beispiel:* `cy.get('#header')`
    * *Vorsicht:* Manchmal generieren Entwickler dynamische IDs (z.B. `#user-12345`). Diese sollten wir vermeiden.

3.  **Spezifische CSS-Klassen** (Gut)
    * **Warum?** Wenn keine ID vorhanden ist, nutzen wir Klassen, die das Element beschreiben.
    * *Gut:* `.product-image-wrapper` (Beschreibt die Komponente).
    * *Schlecht:* `.col-sm-4` oder `.btn-blue` (Beschreibt das Design/Layout. Das kann sich ändern!).

4.  **Attribute & Text** (Okay)
    * **Warum?** Nützlich für Formulare oder Buttons.
    * *Beispiel:* `cy.get('input[name="email"]')` oder `cy.contains("Login")`.

