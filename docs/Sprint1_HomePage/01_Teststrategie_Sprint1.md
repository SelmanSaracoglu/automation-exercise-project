# Teststrategie für Sprint 1: Startseite (Home Page)

**Datum:** 27.12.2025
**Verfasser:** QA Team
**Sprint Ziel:** Validierung der Benutzererfahrung für einen nicht angemeldeten Besucher (Gast).

## 1. Einführung (Giriş)
Das Ziel dieses Dokuments ist es, die Qualität der Startseite von "https://automationexercise.com/" sicherzustellen.
In diesem Sprint fokussieren wir uns auf die Perspektive eines **"Gast-Benutzers"** (Besucher, der noch nicht registriert ist). Wir wollen sicherstellen, dass der erste Eindruck der Webseite fehlerfrei ist.

## 2. Geltungsbereich (Kapsam - In Scope)

Wir testen die folgenden Komponenten (Komponenten-Test):

### A. Header & Navigation (Kopfzeile)
* Sichtbarkeit des Logos.
* Funktionalität der Hauptmenü-Links (Home, Products, Cart, Signup/Login, Contact).
* Überprüfung des Status "Nicht angemeldet" (Kein "Logout"-Button sichtbar).

### B. Hauptinhalt (Main Body & Sidebar)
* **Slider (Karussell):** Bilder und Texte müssen sichtbar sein.
* **Seitenleiste (Sidebar):** Die Kategorie-Liste (Category) muss sich öffnen und schließen lassen (Akkordeon-Funktion).
* **Produkte:** Die "Featured Items" müssen sichtbar sein und Preise/Namen enthalten.

### C. Footer (Fußzeile)
* Der "Subscription" (Abonnement) Bereich muss sichtbar sein (Funktion wird später getestet).
* Copyright-Texte müssen vorhanden sein.

### D. Usability & UI-Funktionen (Kullanılabilirlik)
* **Scroll-Up-Pfeil:** Wenn der Benutzer nach unten scrollt, muss der Pfeil erscheinen. Ein Klick muss die Seite nach oben bringen.
* Responsives Design: Die Elemente dürfen sich nicht überlappen.

## 3. Außerhalb des Umfangs (Out of Scope - Neler Hariç?)
* **Kaufprozess:** Wir klicken auf "Add to Cart", testen aber nicht den Checkout.
* **Registrierung:** Das Testen des Formulars gehört zu Sprint 2.
* **Externe Links:** Youtube-Videos werden nicht abgespielt, nur die URL wird geprüft.

## 4. Testarten (Test Türleri)
* **Smoke Test:** Grundlegende Verfügbarkeit (Startseite lädt unter 5 Sekunden).
* **Functional Testing:** Links, Kategorien und Scroll-Funktion.
* **UI/Regression Testing:** Sicherstellen, dass neue Änderungen das Layout nicht zerstören.

## 5. Risiko & Priorität
* **Kritisch:** Wenn die Seite nicht lädt oder das Menü defekt ist -> **GO/NO-GO Entscheidung.**
* **Hoch:** Wenn Produktkategorien nicht klickbar sind.