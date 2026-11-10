# 07 — DO NOT DO (antywzorce)

## Zakazane funkcje

- ❌ RODO, PESEL, dane medyczne, AI/LLM, Bielik, PLLuM.
- ❌ „Zastrzeż PESEL”, „Zgłoś naruszenie danych”, „Generator pism”.
- ❌ Logowanie, rejestracja, Profil Zaufany, ePUAP.
- ❌ Backend, API, baza danych, fetch do zewnętrznych serwisów.
- ❌ Płatne API, klucze, sekrety w kodzie.
- ❌ Routing poza `HashRouter` (BrowserRouter psuje GitHub Pages).
- ❌ Biblioteki UI: MUI, Ant, Chakra, Bootstrap. Tylko Tailwind + lucide-react.
- ❌ Animacje typu pulsowanie czerwieni, shake, konfetti.
- ❌ Dark mode (nie w scope).
- ❌ Wielojęzyczność (tylko polski).

## Zakazane w obsłudze współwłasności

- ❌ Wymaganie podpisu lub zgody drugiego współwłaściciela przy zgłoszeniu zbycia.
- ❌ Dodawanie wyboru „który współwłaściciel zgłasza” — zgłasza zalogowany użytkownik.
- ❌ Pokazywanie sekcji współwłaścicieli dla pojazdu z jednym właścicielem.

## Zakazane praktyki w kodzie

- ❌ `any` w TypeScript (poza uzasadnionymi wyjątkami z komentarzem).
- ❌ `style={{}}` poza animacjami, których Tailwind nie ogarnia.
- ❌ Komponenty > 200 linii — dziel.
- ❌ Logika biznesowa w komponentach UI — wydziel do `lib/` lub `state/`.
- ❌ `console.log` w kodzie produkcyjnym.
- ❌ Hardkodowane stringi UI w wielu miejscach — jeśli powtarzalne, wydziel do `lib/copy.ts` (opcjonalne).

## Zakazane w UI

- ❌ Sugerowanie, że to oficjalna aplikacja mObywatel.
- ❌ Udawanie, że dane pochodzą z realnego CEPiK (pisz „mock” / „demonstracyjne”).
- ❌ Udawanie, że UPP jest prawdziwe (etykieta „dokument demonstracyjny”).
- ❌ Obietnice typu „zgłoszenie zwalnia z obowiązku” — pisz „potwierdza przyjęcie zgłoszenia”.
- ❌ Agresywny marketing („najlepsza aplikacja”, „rewolucyjna”).

## Zakazane w demo

- ❌ Quick cases / predefiniowane scenariusze ukrywające realny flow.
- ❌ Przyciski „pomiń” w ścieżce happy path.
- ❌ Efekty specjalne odwracające uwagę od treści.
