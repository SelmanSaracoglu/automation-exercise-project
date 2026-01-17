# ⚠️ Risikoanalyse: Products

| ID | Risk | Effect | Mitigation |
| **R-10** | **Sync Lag** | UI zeigt Preis 50€, Datenbank sagt 60€. | Hybrid-Test: UI-Preis gegen API-Response prüfen. |
| **R-11** | **Empty State** | Keine Produkte geladen (Spinner dreht ewig). | Timeout-Check für Produktliste. |