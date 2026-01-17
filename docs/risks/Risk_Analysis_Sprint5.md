# ⚠️ Risikoanalyse: Cart

| ID | Risk | Effect | Mitigation |
| **R-12** | **Hover State** | "Add to cart" Button ist nur sichtbar bei Mouseover. | Cypress `.click({force: true})` oder `.trigger('mouseover')` nutzen. |
| **R-13** | **Modal Timing** | Test klickt zu schnell, bevor Modal erscheint/verschwindet. | Explizite `should('be.visible')` Checks für das Modal. |