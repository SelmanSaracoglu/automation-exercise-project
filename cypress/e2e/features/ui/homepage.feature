Feature: Funktionalität der Startseite

  Background:
    Given der Besucher öffnet die Startseite


  Scenario: Der Besucher ruft die Startseite auf
    Given der Besucher öffnet die Startseite
    Then sollte die Startseite erfolgreich geladen sein
    And das Logo sollte sichtbar sein

  # Detaillierte Prüfung: Sind alle Bereiche da?
  Scenario: Überprüfung der Seitenstruktur (Header, Body, Footer)
    Then sollten die Hauptbereiche wie Kopfzeile, Schieberegler und Fußzeile sichtbar sein

  # Funktionaler Test: Funktionieren die Links?
  Scenario Outline: Überprüfung der Navigationslinks
    When der Besucher auf den Link "<LinkName>" klickt
    Then sollte die URL "<UrlPart>" enthalten
    And der Seitentitel sollte "<PageTitle>" enthalten

    Examples:
      | LinkName    | UrlPart     | PageTitle           |
      | Products    | /products   | Automation Exercise |
      | Cart        | /view_cart  | Automation Exercise |
      | Test Cases  | /test_cases | Automation Practice |
      | API Testing | /api_list   | Automation Practice |
      | Contact us  | /contact_us | Automation Exercise |


  Scenario: Überprüfung des YouTube-Links
    Then sollte der Link "Video Tutorials" auf "https://www.youtube.com/c/AutomationExercise" verweisen