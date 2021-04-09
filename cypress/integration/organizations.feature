# language: sk

Požiadavka: Manažment organizácií

  # Scenár: Pridanie organizácie
  #   Pokiaľ som prihlásený
  #   A navštívim stránku best practices
  #   Keď kliknem na tlačidlo organizácií
  #   A kliknem na tlačidlo pridať organizáciu
  #   A zadám názov firmy "Moja firm222" a IČO "5698741"
  #   A kliknem na tlačidlo uložiť
  #   Tak v zozname sa zobrazí novo pridaná firma

  # Scenár: Pridanie organizecie bez ICO
  #   Keď kliknem na tlačidlo pridať organizáciu
  #   A zadám názov firmy "Moja organizacia" a Ulicu "Hlavna"
  #   Tak danú firmu neuložím



  # Scenár: Pridanie organizácie s korektnými údajmi
  #   Keď kliknem na tlačidlo pridať organizáciu
  #   A zadám údaje
  #     | Názov              | IČO     | Ulica     | Číslo | PSČ   | Mesto       |
  #     | Moja organizacia 2 | 9588884 | Dlhocizna | 7     | 01001 | Žilina      |
  #   A kliknem na tlačidlo uložiť
  #   Tak v zozname sa zobrazí novo pridaná firma

  # Scenár: Pridanie organizácie s nekorektnými údajmi
  #   Keď kliknem na tlačidlo pridať organizáciu
  #   A zadám údaje
  #     | Názov              | IČO     | Ulica     | Číslo | PSČ   | Mesto       |
  #     | Moja organizacia 3 |         | Kratka    | 9     | 95801 | Partizánske |
  #   Tak danú firmu neuložím

  Pozadie:
    Pokiaľ som prihlásený
    A navštívim stránku best practices
    A vymažem všetky organizácie

  Náčrt Scenáru: Pridanie organizácie s nekorektnými údajmi
    A zadám "<Názov>" "<IČO>" "<Ulica>" "<Číslo>" "<PSČ>" "<Mesto>"
    Tak danú firmu neuložím

    Príklady:
      | Názov              | IČO     | Ulica     | Číslo | PSČ   | Mesto       |
      |                    | 9588884 | Dlhocizna | 7     | 01001 | Žilina      |
      | Moja organizacia 3 |         | Kratka    | 9     | 95801 | Partizánske |

  Scenár: Pridanie organizácie s korektnými údajmi
    A zadám údaje
      | Názov              | IČO     | Ulica     | Číslo | PSČ   | Mesto       |
      | Moja organizacia 2 | 9588884 | Dlhocizna | 7     | 01001 | Žilina      |
    A kliknem na tlačidlo uložiť
    Tak v zozname sa zobrazí novo pridaná firma