# ⚠️ Risikoanalyse: Authentication

| ID | Risk | Effect | S | P | Mitigation |
| **R-04** | **Broken Access Control** | Unbefugter Zugriff auf Patientendaten. | 5 (Critical) | 2 | Negativ-Tests für Login (Falsches PW blockieren). |
| **R-05** | **Login Downtime** | Arzt kann sich nicht einloggen (Notfall). | 4 (High) | 2 | Smoke-Test für Login-API (Status 200). |
| **R-06** | **Session Leak** | Nach Logout kann man mit "Zurück"-Button wieder rein. | 5 (Critical) | 3 | Logout-Verifizierung & Session Clear Test. |