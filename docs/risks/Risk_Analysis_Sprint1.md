# ⚠️ Risikoanalyse (ISO 14971 Style)

**System:** Web Portal (Automation Exercise)
**Modul:** Homepage

| ID | Gefährdung | Auswirkung | Schweregrad (S) | Wahrscheinlichkeit (P) | Risiko Prio | Mitigation |
| **R-01** | **White Screen of Death** (Server Down) | Benutzer kann das Portal nicht betreten. Service nicht verfügbar. | 5 (Kritisch) | 2 (Gering) | **Hoch** | Automatisierter Smoke-Test bei jedem Deployment. |
| **R-02** | **Broken Navigation** (Tote Links) | Benutzer findet Login/Produkte nicht. Frustration/Abbruch. | 3 (Mittel) | 3 (Mittel) | **Mittel** | Testen aller Header-Links auf HTTP 200. |
| **R-03** | **Responsive Fail** | Menü auf Mobile nicht nutzbar. | 3 (Mittel) | 4 (Hoch) | **Hoch** | Viewport-Tests (iPhone/Desktop). |

