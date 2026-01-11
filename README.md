# 🏥 E2E Test Automation Framework (Cypress & Cucumber)

Dieses Repository demonstriert ein modernes, skalierbares Test-Framework für Webanwendungen. Der Fokus liegt auf **Wartbarkeit**, **Lesbarkeit** und **Traceability**, orientiert an Standards für regulierte Umgebungen (wie Medizintechnik).

> 📘 **Engineering Standards:**
> Die Architektur und Richtlinien dieses Projekts basieren auf meinem persönlichen **[QA Automation Playbook] https://github.com/SelmanSaracoglu/test-automation-guidelines**.

## 🎯 Projektziele

Das Ziel dieses Projekts ist die Automatisierung kritischer Benutzerpfade (User Journeys) einer E-Commerce-Plattform unter Verwendung von **Behavior Driven Development (BDD)**.

Abgedeckte Szenarien:
- ✅ **Registrierung:** Validierung komplexer Formulare mit dynamischen Daten.
- ✅ **Authentifizierung:** Login/Logout Prozesse.
- ✅ **Datenmanagement:** Automatische Erstellung und Löschung von Testdaten ("Delete Account" Flow).
- ✅ **Edge Cases:** Fehlerbehandlung bei ungültigen Eingaben.

## 🛠 Tech Stack

Dieses Framework nutzt modernste Tools für stabile E2E-Tests:

| Tool                          | Zweck                                                     |
| **Cypress**                   | Test Engine (Schnell, stabil, im Browser laufend)         |
| **Cucumber (Gherkin)**        | BDD Layer für "Lebende Dokumentation"                     |
| **Page Object Model (POM)**   | Design Pattern zur Trennung von Testlogik und Selektoren  |
| **Faker.js**                  | Generierung dynamischer, realistischer Testdaten          |
| **Node.js**                   | Laufzeitumgebung                                          |

## 🏗 Architektur & Highlights

### 1. Page Object Model (POM)
Jede Seite (z.B. `SignupPage`, `LoginPage`) hat eine eigene Klasse im Ordner `/pages`.
* **Vorteil:** Ändert sich ein UI-Element (Selektor), muss dies nur an *einer* Stelle angepasst werden.

### 2. Dynamische Daten (Faker)
Statt statischer Daten ("Test User") werden bei jedem Durchlauf neue Identitäten generiert.
* **Code:** `faker.person.firstName()`
* **Vorteil:** Verhindert Datenkollisionen und macht Tests realistischer.

### 3. Traceability (Rückverfolgbarkeit)
Feature-Dateien sind mit Tags versehen, um die Verbindung zu Anforderungen zu simulieren (simuliert Jira/Xray Integration).
* **Tags:** `@Regression`, `@Smoke`, `@Register`

## 🚀 Installation & Ausführung

Stellen Sie sicher, dass **Node.js** installiert ist.

### 1. Installation
git clone [REPO_URL]
cd [ORDNER_NAME]
npm install

### 2. Tests Ausführen
Headless Mode (CI/CD Simulation): npx cypress run
Interaktiver Modus (GUI): npx cypress open

**Ordnerstruktur**

cypress/
  ├── e2e/
  │   ├── features/           # Gherkin Szenarien (.feature)
  │   └── step_definitions/   # Step Implementierung (.js)
  ├── pages/                  # Page Objects (Selektoren & Methoden)
  ├── fixtures/               # Statische Daten
  └── support/                # Globale Konfigurationen (e2e.js)

