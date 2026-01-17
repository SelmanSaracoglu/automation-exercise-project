# 📝 User Story: Produktkatalog & Warenkorb

**Traceability:** REQ-Prod-001 bis REQ-Prod-003

## US-04: Produkte ansehen und suchen
> Als Benutzer möchte ich Produkte durchsuchen, um Details zu sehen.

### Akzeptanzkriterien (AC)
* **AC-14 (Product List):** Die Seite `/products` muss eine Liste von verfügbaren Produkten anzeigen.
* **AC-15 (Product Detail):** Klick auf "View Product" öffnet die Detailseite mit Preis, Verfügbarkeit und Marke.
* **AC-16 (API Consistency):** Die angezeigten Produkte müssen mit der API-Antwort (`GET /api/productsList`) übereinstimmen.