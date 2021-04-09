# language: sk

Požiadavka: Prihlásenie užívateľa
  Ako užívateľ
  sa chcem prihlásiť
  aby som mohol fakturovať

  Scenár: Úspešné prihlásenie užívateľa existujúceho užívateľa
    Pokiaľ nie som prihlásený
    A navštívim základnú stránku
    Tak ma aplikácia presmeruje na prihlasovaciu stránku
    Keď vyplním prihlasovacie údaje užívateľa, email: "cypresstests@kros.sk", heslo: "12345678"
    A kliknem na tlačidlo prihlásiť
    Tak ma Identity server prihlásil
