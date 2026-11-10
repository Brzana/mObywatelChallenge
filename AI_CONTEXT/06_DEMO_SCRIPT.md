# 06 — Demo Script (3 minuty na scenę)

## Cel

Jury musi w 3 minuty zobaczyć **całą ścieżkę** i zrozumieć **problem + rozwiązanie**.

## Struktura pitchu (sugerowana)

### 0:00–0:30 — Problem

„Sprzedałeś auto. Masz 30 dni na zgłoszenie zbycia. Kara: 250 zł.
Myślisz: »kupujący zgłosi, po co ja?«. Nie — obowiązki są niezależne.
Dziś: gov.pl wymaga ePUAP i skanu. W mObywatelu widać auto, ale nie ma ścieżki.
A przy współwłasności wielu sprzedających nie wie, czy potrzebny jest podpis drugiej osoby.”

### 0:30–2:30 — Demo (klikamy na żywo)

1. Ekran startowy → klik „Zgłoś zbycie” na Toyota Corolla.
2. Dane pojazdu (auto z CEPiK) → pokaż sekcję „Współwłaściciele” → „Dalej”.
3. Dane nabywcy → klik „Dodaj zdjęcie umowy” → (mock) „Odczytuję…” → pola wypełniają się: Anna Nowak → „Dalej”.
4. Podsumowanie → checkbox → „Wyślij zgłoszenie” → (mock 800 ms) → ekran sukcesu.
5. Na sukcesie: pokaż UPP, licznik 30 dni, kartę „Co dalej?”.

### 2:30–3:00 — Domknięcie

„To wszystko w mObywatelu, w 60 sekund. Bez ePUAP, bez skanu, bez wizyty.
Dane z CEPiK, zdjęcie z galerii, potwierdzenie UPP.
Prototyp jest w 100% client-side — można go hostować na GitHub Pages.”

## Wariant B — współwłasność (opcjonalny)

Po głównym demo wróć do ekranu startowego i wybierz Toyotę:

1. Na ekranie danych pojazdu pokaż listę współwłaścicieli i oznaczenie „(Ty)”.
2. Wskaż info-box: wystarczy zgłoszenie jednego współwłaściciela, bez podpisu drugiego.
3. Opcjonalnie rozwiń „Dowiedz się więcej” i pokaż art. 78 ust. 2 Prawa o ruchu drogowym.
4. Dla kontrastu wskaż Volkswagena — przy jednym właścicielu sekcja się nie pojawia.

Wariant B nie wymaga dodatkowych kliknięć przed „Dalej” i nie wydłuża happy path
powyżej 60 sekund.

## Co musi zadziałać bezbłędnie

- [ ] Klik „Zgłoś zbycie” prowadzi do ekranu pojazdu.
- [ ] Dane pojazdu są wypełnione.
- [ ] Sekcja współwłaścicieli pokazuje się tylko dla Toyoty (2 właścicieli).
- [ ] Upload zdjęcia (dowolny plik graficzny) uruchamia „odczyt” i wypełnia imię/nazwisko.
- [ ] Checkbox odblokowuje przycisk wysyłki.
- [ ] Wysyłka pokazuje loader i przechodzi na sukces.
- [ ] Sukces pokazuje UPP z numerem, datą i organem.
- [ ] „Wróć do Moich pojazdów” resetuje stan.

## Co może pójść nie tak (i jak zapobiec)

| Ryzyko | Zapobieganie |
|---|---|
| Wolne Wi-Fi w Sejmie | Build statyczny, assety lokalne, brak CDN |
| Przeglądarka bez dostępu do plików | Fallback: przycisk „Użyj zdjęcia demo” |
| Przypadkowe odświeżenie | HashRouter + ochrona `/sukces` (redirect na `/` jeśli brak `submittedAt`) |
| Jury klika „back” | Stan w kontekście, back działa naturalnie |
| Za mały ekran rzutnika | Layout 390x844 wyśrodkowany, duże fonty (`text-lg` min. w treści) |

## Wskazówki prezentera

- Nie tłumacz kodu — pokazuj efekt.
- Po sukcesie zatrzymaj się na 5 sekund — pozwól jury przeczytać UPP.
- Miej otwarty drugi tab z ekranem sukcesu jako backup.
- Współwłasność pokazuj jako krótki, opcjonalny wariant B — nie przerywaj happy path.
