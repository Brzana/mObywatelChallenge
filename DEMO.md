# DEMO — 3 minuty na scenę

## Link do demo

Po pierwszym deployu wpisz tutaj adres GitHub Pages:

```
https://<twoj-user>.github.io/mobywatel-zbycie-pojazdu/
```

## Pitch (skrót)

### 0:00–0:30 — Problem

„Sprzedałeś auto. Masz 30 dni na zgłoszenie zbycia. Kara: 250 zł.
Myślisz: »kupujący zgłosi, po co ja?«. Nie — obowiązki są niezależne.
Dziś gov.pl wymaga ePUAP i skanu, a w mObywatelu widać auto, ale nie ma ścieżki.”

### 0:30–2:30 — Demo

1. Ekran startowy → „Zgłoś zbycie” na Toyota Corolla.
2. Dane pojazdu (mock CEPiK) → „Dalej”.
3. Dane nabywcy → dodaj zdjęcie umowy → „Odczytuję…” → Anna Nowak → „Dalej”.
4. Podsumowanie → checkbox → „Wyślij zgłoszenie” → loader 800 ms → sukces.
5. Sukces: UPP, licznik 30 dni, karta „Co dalej?”.

### 2:30–3:00 — Domknięcie

„To wszystko w mObywatelu, w 60 sekund. Bez ePUAP, bez wizyty.
Prototyp jest w 100% client-side i działa na GitHub Pages.”

## Checklista przed wejściem na scenę

- [ ] Build działa: `npm run build`.
- [ ] Demo otwarte w Chrome i Safari.
- [ ] Upload zdjęcia wypełnia dane nabywcy.
- [ ] Checkbox odblokowuje wysyłkę.
- [ ] Ekran sukcesu pokazuje numer UPP.
- [ ] Drugi tab z ekranem sukcesu jako backup.
- [ ] Telefon w trybie „nie przeszkadzać”.
