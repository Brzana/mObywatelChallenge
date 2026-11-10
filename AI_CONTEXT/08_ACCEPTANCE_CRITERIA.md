# 08 — Acceptance Criteria (Definicja „gotowe”)

## Funkcjonalne

- [ ] Ekran startowy pokazuje min. 2 pojazdy z mocka.
- [ ] Klik „Zgłoś zbycie” prowadzi do `/pojazd/:id` z danymi wybranego pojazdu.
- [ ] Toyota (veh-1) na ekranie 1 pokazuje „Współwłaściciele”: Jana Kowalskiego z „(Ty)” i Annę Kowalską, info-box o wystarczającym zgłoszeniu jednego właściciela oraz rozwijane „Dowiedz się więcej”.
- [ ] Volkswagen (veh-2) na ekranie 1 nie pokazuje sekcji współwłaścicieli.
- [ ] Podsumowanie Toyoty pokazuje wiersz „Zgłaszający: Jan Kowalski (współwłaściciel)”; podsumowanie Volkswagena go nie pokazuje.
- [ ] Ekran nabywcy: upload zdjęcia → (mock 600 ms) → auto-wypełnienie imienia i nazwiska.
- [ ] Walidacja: „Dalej” disabled, jeśli imię/nazwisko < 2 znaki lub data > dzisiaj.
- [ ] Podsumowanie pokazuje wszystkie dane + miniaturę zdjęcia.
- [ ] Checkbox odblokowuje „Wyślij zgłoszenie”.
- [ ] Wysyłka: loader 800 ms → redirect `/sukces`.
- [ ] Sukces: UPP z numerem, datą, organem; licznik 30 dni; karta „Co dalej?”.
- [ ] „Wróć do Moich pojazdów” resetuje stan i wraca na `/`.
- [ ] Odświeżenie `/sukces` bez `submittedAt` → redirect `/`.
- [ ] Back działa naturalnie na każdym ekranie.

## Wizualne

- [ ] Layout 390x844 wyśrodkowany, na desktopie ramka telefonu (opcjonalnie).
- [ ] Kolory zgodne z `02_DESIGN_SYSTEM.md`.
- [ ] Font Inter załadowany.
- [ ] Ikony lucide-react.
- [ ] Disclaimer w stopce każdego ekranu.
- [ ] Kontrast WCAG AA (sprawdź w DevTools).
- [ ] Focus states widoczne na przyciskach i inputach.

## Techniczne

- [ ] `npm run build` przechodzi bez błędów i ostrzeżeń TypeScript.
- [ ] Bundle < 300 KB gzip.
- [ ] Brak `console.log` w buildzie.
- [ ] Brak zewnętrznych fetchy (sprawdź Network w DevTools — tylko assety lokalne).
- [ ] HashRouter — odświeżenie podścieżki działa na GitHub Pages.
- [ ] `base` w `vite.config.ts` ustawione na nazwę repo.
- [ ] Workflow GitHub Actions publikuje na `gh-pages`.

## Demo

- [ ] Cała ścieżka przechodzi w ≤ 60 sekund klikania.
- [ ] Sekcja współwłaścicieli jest informacyjna i nie wymaga dodatkowego kliknięcia przed „Dalej”.
- [ ] Demo działa na GitHub Pages bez logowania.
- [ ] Demo działa w Chrome i Safari (mobile + desktop).
- [ ] Backup: drugi tab z ekranem sukcesu.

## Dokumentacja

- [ ] `README.md` aktualny.
- [ ] `AI_CONTEXT/` kompletny.
- [ ] W repo krótki `DEMO.md` z linkiem do GitHub Pages i instrukcją 3-minutowego pitchu.
