# 🛒 E-Commerce Cypress Automatisierungs-Framework

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cucumber](https://img.shields.io/badge/Cucumber-232F3E?style=for-the-badge&logo=cucumber&logoColor=23B96E)
![Faker](https://img.shields.io/badge/Faker.js-232F3E?style=for-the-badge&logo=code&logoColor=white)

## 🚀 Projektübersicht

Dieses Projekt ist ein robustes **Testautomatisierungs-Framework**, das für die [Automation Exercise](https://automationexercise.com/) E-Commerce-Plattform entwickelt wurde. Es simuliert ein reales Einkaufserlebnis unter Verwendung von **Behavior Driven Development (BDD)** Prinzipien.

Das Framework ist skalierbar, wartbar und für die Integration in CI/CD-Pipelines optimiert.

**Hauptmerkmale:**

- **End-to-End Ablauf (E2E):** Validierung der kompletten User Journey: Registrierung -> Einkauf -> Checkout -> Bezahlung -> Rechnungsdownload -> Account-Löschung.
- **Hybrider Ansatz:** Kombination von UI-Tests mit API-Validierungen für schnellere und zuverlässigere Ergebnisse.
- **Page Object Model (POM):** Modulare Code-Struktur zur Trennung von Selektoren und Logik (Wartbarkeit & Wiederverwendbarkeit).
- **Data Driven Testing:** Nutzung von `Faker.js` zur Generierung dynamischer Testdaten (Namen, E-Mails, Adressen) bei jedem Durchlauf, um Datenkonflikte zu vermeiden.
- **Cucumber/Gherkin:** Verwendung von `.feature` Dateien für menschlich lesbare Testszenarien, die die Brücke zwischen technischen und nicht-technischen Stakeholdern schlagen.
- **Reporting:** Integration von `mochawesome` zur Erstellung detaillierter HTML-Berichte inkl. eingebetteter Screenshots bei fehlgeschlagenen Tests.

## 📂 Ordnerstruktur

```text
cypress
├── e2e
│   └── ui
│       ├── features          # Gherkin Szenarien (.feature Dateien)
│       └── step_definitions  # JavaScript Logik (Step Definitions)
├── pages                     # Page Object Klassen (Selektoren & Methoden)
├── support                   # Cypress Commands & E2E Konfiguration
│   ├── e2e.js                # Globale Setups & Hooks
│   └── commands.js           # Benutzerdefinierte Befehle
└── utils                     # Hilfsprogramme
    └── DataGenerator.js      # Zufallsdatengenerator mit Faker.js
```

## 🛠️ Voraussetzungen

Bevor Sie das Projekt ausführen, stellen Sie sicher, dass folgende Tools installiert sind:

- **Node.js** (v14 oder höher)
- **Visual Studio Code** (Empfohlen)
- **Git**

## ⚙️ Installation

1.  **Repository klonen:**

    ```bash
    git clone https://github.com/DEIN_USERNAME/cypress-ecommerce-project.git
    ```

2.  **In das Projektverzeichnis wechseln:**

    ```bash
    cd cypress-ecommerce-project
    ```

3.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

## ▶️ Tests Ausführen

### 1. Test Runner (Visueller Modus)

Öffnet die interaktive Cypress-Benutzeroberfläche, in der spezifische Feature-Dateien ausgewählt werden können.

```bash
npx cypress open
```

### 2. Headless Modus (Kommandozeile)

Führt alle Tests im Hintergrund (Chrome/Electron) aus und generiert Berichte. Ideal für CI/CD.

```bash
npx cypress run
```

### 3. Spezifisches Szenario ausführen

Führt gezielt das finale End-to-End Szenario aus.

```bash
npx cypress run --spec "cypress/e2e/ui/features/EndToEnd.feature"
```

## 📊 Reporting (Berichterstattung)

Das Framework verwendet `mochawesome`, um umfassende Testberichte zu generieren.

- **HTML-Bericht:** Nach Ausführung der Tests wird der Bericht hier erstellt:
  `cypress/reports/html/index.html`
- **Features:**
  - Interaktive Diagramme (Pass/Fail Statistiken).
  - Ausführungsdauer pro Schritt.
  - **Eingebettete Screenshots** bei fehlgeschlagenen Schritten zur Fehleranalyse.

## 👤 Autor

**Selman Saracoglu** - _Test Automation Engineer_
