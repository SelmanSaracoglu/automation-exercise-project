# 🛡️ Teststrategie: Sprint 2 (Login)

## Ansatz
Wir verfolgen einen **Hybrid-Ansatz**:
1.  **UI Testing:** Benutzer gibt Daten ein und klickt Buttons.
2.  **API Spying (Interceptor):** Wir hören im Hintergrund auf den `POST /login` Request, um sicherzustellen, dass der Server mit `200 OK` antwortet.

## Testdaten
* **Valid User:** `test_selenium@test.com` (Static)
* **Invalid User:** `wrong@test.com`