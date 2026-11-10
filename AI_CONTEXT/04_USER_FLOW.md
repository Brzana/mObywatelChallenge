# 04 — User Flow (5 ekranów)

## Ścieżka szczęśliwa (happy path) — 60 sekund

### Ekran 0: Start — lista pojazdów (`/`)

**Cel:** użytkownik widzi swoje pojazdy i wybiera ten, który zbył.

Elementy:

- TopBar: tytuł „Moje pojazdy”, ikona `Car` po lewej.
- Krótki tekst: „Wybierz pojazd, który sprzedałeś lub przekazałeś.”
- Lista kart pojazdów (`VehicleCard`):
  - Marka model, rok, numer rejestracyjny
  - Przycisk „Zgłoś zbycie” na karcie
- Disclaimer w stopce.

Akcja: klik „Zgłoś zbycie” → `/pojazd/:id`.

### Ekran 1: Dane pojazdu (`/pojazd/:id`)

**Cel:** potwierdzenie danych pojazdu z CEPiK (mockowane).

Elementy:

- TopBar z back.
- `ProgressStepper current={1}`.
- Karta „Dane pojazdu” (auto-uzupełnione, read-only):
  - `InfoRow`: Marka i model, Rok produkcji, VIN, Numer rejestracyjny, Kolor.
- `OwnersSection` — tylko gdy pojazd ma więcej niż jednego właściciela:
  - nagłówek „Współwłaściciele” i lista z oznaczeniem „(Ty)” przy koncie użytkownika,
  - info-box: wystarczy zgłoszenie zbycia jednego współwłaściciela, bez podpisu drugiego,
  - rozwijane „Dowiedz się więcej” z krótkim wyjaśnieniem i art. 78 ust. 2 Prawa
    o ruchu drogowym oraz dopiskiem „treść demonstracyjna, nie porada prawna”.
  - Sekcja jest informacyjna — nie wymaga dodatkowego kliknięcia w happy path.
- Info-box: „Dane pobrane z CEPiK. Nie możesz ich edytować — jeśli są nieprawidłowe, skontaktuj się z urzędem.”
- Przycisk „Dalej” → `/nabywca`.

### Ekran 2: Dane nabywcy (`/nabywca`)

**Cel:** użytkownik podaje dane kupującego, datę i zdjęcie umowy.

Elementy:

- TopBar z back.
- `ProgressStepper current={2}`.
- `PhotoUploader` na górze: „Zrób zdjęcie umowy lub wybierz z galerii”.
  - Po wyborze: podgląd + animacja „Odczytuję dane z umowy…” (600 ms) + auto-wypełnienie pól `firstName`, `lastName` z mocka.
- Formularz:
  - `Imię nabywcy` (input)
  - `Nazwisko nabywcy` (input)
  - `Data zbycia` (input type="date", domyślnie dzisiaj)
- Walidacja: imię i nazwisko min. 2 znaki, data ≤ dzisiaj.
- Przycisk „Dalej” (disabled, jeśli walidacja nie przechodzi) → `/podsumowanie`.

### Ekran 3: Podsumowanie (`/podsumowanie`)

**Cel:** ostatni rzut oka przed wysyłką.

Elementy:

- TopBar z back.
- `ProgressStepper current={3}`.
- Karta „Pojazd”: marka model, nr rejestracyjny, VIN; przy pojeździe z więcej niż
  jednym właścicielem dodatkowy wiersz „Zgłaszający: Jan Kowalski
  (współwłaściciel)”.
- Karta „Nabywca”: imię nazwisko, data zbycia.
- Karta „Umowa”: miniatura zdjęcia + „Zmień”.
- Checkbox: „Oświadczam, że dane są zgodne z umową kupna-sprzedaży.”
- Przycisk „Wyślij zgłoszenie” (disabled bez checkboxa).
- Po kliknięciu: overlay z `Loader2 animate-spin` + „Przekazuję do Wydziału Komunikacji…” (800 ms).
- Następnie redirect → `/sukces`.

### Ekran 4: Sukces (`/sukces`) — efekt WOW

**Cel:** potwierdzenie + edukacja + licznik 30 dni.

Elementy:

- `SuccessBadge`: „Zgłoszenie przyjęte” + ikona `CheckCircle2`.
- Karta „Urzędowe Poświadczenie Przedłożenia (UPP)”:
  - Numer UPP: `UPP/2026/11/000123` (mock)
  - Data i godzina przyjęcia
  - Organ: „Wydział Komunikacji w [miasto z mocka]”
  - Przycisk „Pobierz UPP (PDF)” — **nieaktywny** z tooltipem „Funkcja dostępna w pełnej wersji” (uczciwie: to prototyp).
- Karta „Termin 30 dni”:
  - Spokojny pasek postępu: pełny, zielony.
  - Tekst: „Zgłoszono w terminie. Twój obowiązek jako zbywcy został spełniony.”
- Karta „Co dalej?”:
  - „Kupujący ma własny obowiązek zgłoszenia nabycia. Twoje zgłoszenie jest niezależne.”
  - Link do artykułu (mock) „Dlaczego to ważne?” — rozwija krótki tekst.
- Przycisk „Wróć do Moich pojazdów” → `/` + `reset()` stanu.
- Disclaimer w stopce.

## Ścieżki alternatywne (do obsłużenia, ale nie w demo)

- **Współwłasność** → ekran 1 pokazuje `OwnersSection`; zgłoszenie składa zalogowany
  użytkownik, bez wyboru „który współwłaściciel zgłasza” i bez podpisu drugiej osoby.
- **Pojazd jednoosobowy** → `OwnersSection` nie renderuje się wcale.
- **Brak zdjęcia umowy** → można przejść dalej, ale checkbox oświadczenia wymaga potwierdzenia „Nie mam zdjęcia — dane wpisane ręcznie”. (Opcjonalne, jeśli starczy czasu.)
- **Walidacja formularza** → inline errors pod polami, `text-moby-danger text-sm`.
- **Back z ekranu 2 na 1** → stan zachowany (draft w kontekście).
- **Odświeżenie strony na `/sukces`** → jeśli `submittedAt` jest null, redirect na `/`. (Ochrona przed „pustym” sukcesem.)

## Zasady przejść

- Każde przejście: fade 200 ms.
- Back: `navigate(-1)`.
- Nie blokuj back-przycisku przeglądarki — ma działać naturalnie.
