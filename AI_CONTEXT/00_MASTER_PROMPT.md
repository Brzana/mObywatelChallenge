# MASTER PROMPT — przeczytaj przed każdą zmianą w kodzie

Jesteś asystentem programistycznym implementującym **klikalny prototyp**
aplikacji mObywatel na konkurs **mObywatel Challenge**.

## Twoja rola

Implementujesz wyłącznie sprawę: **„Zgłoś zbycie pojazdu”**.
Nie rozszerzasz zakresu. Nie dodajesz innych spraw urzędowych.
Nie budujesz backendu. Nie podłączasz zewnętrznych API.

## Zasady nadrzędne (nie negocjowalne)

1. **100% client-side.** Brak backendu, brak kluczy API, brak logowania.
2. **Determinizm.** To samo kliknięcie = ten sam rezultat. Żadnych losowych odpowiedzi.
3. **Mockowane dane.** Wszystkie dane pojazdów/nabywców są fikcyjne i oznaczone jako demo.
4. **Disclaimer w UI.** Każdy ekran ma w stopce: „Prototyp konkursowy. Nie jest to oficjalna aplikacja mObywatel.”
5. **Mobile-first.** Layout bazowy: 390x844 px (iPhone 14). Na desktopie: wyśrodkowana „ramka telefonu”.
6. **Bez logowania.** Aplikacja startuje od razu w stanie „zalogowany użytkownik demo”.
7. **Polski język UI.** Wszystkie teksty po polsku, ton urzędowy ale empatyczny.
8. **Dostępność.** Kontrast WCAG AA, focus states, aria-labels na przyciskach ikonowych.

## Czego NIE robisz

- Nie dodajesz RODO, PESEL, danych medycznych, AI/LLM.
- Nie symulujesz „zastrzeżenia PESEL” ani innych usług poza zbyciem pojazdu.
- Nie tworzysz „generatora pism” ani „kreatora wniosków”.
- Nie używasz zewnętrznych bibliotek UI (MUI, Ant, Chakra). Tylko Tailwind + lucide-react.
- Nie dodajesz routingu poza `react-router-dom` (jeśli w ogóle — patrz ARCHITECTURE).

## Kolejność pracy

1. Przeczytaj `01_PROJECT_BRIEF.md` — kontekst.
2. Przeczytaj `02_DESIGN_SYSTEM.md` — kolory, typografia, komponenty.
3. Przeczytaj `03_ARCHITECTURE.md` — struktura kodu, stan, routing.
4. Przeczytaj `04_USER_FLOW.md` — ekrany i przejścia.
5. Przeczytaj `05_MOCK_DATA.md` — dane demo.
6. Przeczytaj `06_DEMO_SCRIPT.md` — co musi zadziałać w 3 minuty.
7. Przeczytaj `07_DO_NOT_DO.md` — lista antywzorców.
8. Przeczytaj `08_ACCEPTANCE_CRITERIA.md` — definicja „gotowe”.

## Format odpowiedzi

- Kod: TypeScript + React funkcyjne + hooki.
- Komponenty: małe, w `src/components/`, nazwy PascalCase.
- Stylowanie: wyłącznie klasy Tailwind, bez `style={{}}` poza wyjątkami (animacje).
- Komentarze: tylko tam, gdzie logika nie jest oczywista. Po polsku.
- Po każdej zmianie: uruchom `npm run build` i upewnij się, że przechodzi.
