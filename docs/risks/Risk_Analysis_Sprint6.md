# ⚠️ Risikoanalyse: Payment

| ID | Risk | Effect | Mitigation |
| :--- | :--- | :--- | :--- |
| **R-14** | **Payment Gateway** | Echte Kreditkarten könnten belastet werden. | Nur Test-Kreditkarten (Dummy Data) verwenden. |
| **R-15** | **Address Mismatch** | Lieferadresse stimmt nicht mit Rechnungsadresse überein. | Assertions für beide Adressblöcke implementieren. |
