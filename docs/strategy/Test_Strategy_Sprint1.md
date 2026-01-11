
# 🛡️ Teststrategie: Sprint 1 (Homepage & Navigation)

**Ziel:** Validierung der grundlegenden Systemstabilität (Smoke Test) und der Navigation für Gastbenutzer.

## 1. Scope (Kapsam)
**In Scope:** Erreichbarkeit der URL (HTTP 200).
  * Sichtbarkeit kritischer UI-Elemente (Logo, Menü).
  * Navigation zu Unterseiten (Login, Products).
**Out of Scope:** Funktionalität des Warenkorbs (Cart).
  * Benutzerregistrierung (folgt in Sprint 2).

## 2. Testebenen (Test Seviyeleri)
* **Smoke Testing:** Lädt die Seite? (Prio: Critical)
* **Sanity Testing:** Funktionieren die Links? (Prio: High)

## 3. Umgebung
* **Browser:** Chrome (Headless im CI/CD), UI Mode lokal.
* **URL:** https://automationexercise.com
