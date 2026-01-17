# ⚠️ Risikoanalyse: Completion

| ID | Risk | Effect | Mitigation |
| :--- | :--- | :--- | :--- |
| **R-16** | **Zombie Data** | Wenn "Delete" fehlschlägt, bleiben Testdaten im System. | Manueller Cleanup oder API-Cleanup Skripte (Future Scope). |
| **R-17** | **Download Check** | Cypress kann Downloads schwer validieren. | Wir prüfen vorerst nur, ob der Button klickbar ist und keine Fehler wirft. |