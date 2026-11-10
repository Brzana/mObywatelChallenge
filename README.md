# mObywatel Challenge — Zgłoszenie zbycia pojazdu

Klikalny prototyp (React + Vite + Tailwind) sprawy urzędowej:
**„Zgłoś zbycie pojazdu”** w aplikacji mObywatel.

## Cel

Prototyp konkursowy na mObywatel Challenge (finał: Sejm RP, listopad 2026).
Nie jest to oficjalna aplikacja mObywatel ani usługa administracji publicznej.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3
- lucide-react (ikony)
- react-router-dom (HashRouter)
- Hosting: GitHub Pages (statyczny build, bez backendu)

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy na GitHub Pages

Push na `main` → GitHub Actions buduje i publikuje `dist/` na gałąź `gh-pages`.

W pliku `vite.config.ts` ustaw `base` na nazwę swojego repozytorium, np.:

```ts
base: '/mobywatel-zbycie-pojazdu/',
```

Jeśli repozytorium nazywa się inaczej, zmień tę wartość przed deployem.

## Struktura repozytorium

```
/
├── README.md
├── DEMO.md
├── AI_CONTEXT/
│   ├── 00_MASTER_PROMPT.md
│   ├── 01_PROJECT_BRIEF.md
│   ├── 02_DESIGN_SYSTEM.md
│   ├── 03_ARCHITECTURE.md
│   ├── 04_USER_FLOW.md
│   ├── 05_MOCK_DATA.md
│   ├── 06_DEMO_SCRIPT.md
│   ├── 07_DO_NOT_DO.md
│   └── 08_ACCEPTANCE_CRITERIA.md
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── domain/
│   ├── screens/
│   ├── state/
│   ├── data/
│   ├── types/
│   └── lib/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── .github/workflows/deploy.yml
```

## Dokumentacja dla AI

Zobacz katalog `AI_CONTEXT/` — pliki definiują architekturę, design system,
flow użytkownika i zasady, których AI musi przestrzegać.

### Jak pracować z AI_CONTEXT

1. Wklej `AI_CONTEXT/00_MASTER_PROMPT.md` jako pierwszy prompt w nowej sesji.
2. Dołącz pliki `01`–`08` (możesz w jednej wiadomości, jeśli model ma duży kontekst).
3. Poproś: „Przeczytaj wszystkie pliki. Potwierdź zrozumienie i wypisz 5 rzeczy,
   których nie będziesz robić.” — to wymusza uważność.
4. Dopiero potem: „Zaimplementuj `ScreenLayout`, `TopBar`, `Card`, `PrimaryButton`
   zgodnie z design systemem.” — małymi krokami.
5. Po każdym kroku: „Uruchom build i pokaż wynik.”

## Uwagi

- Font Inter jest ładowany z Google Fonts. Przy braku internetu przeglądarka użyje
  `system-ui` — układ pozostaje poprawny.
- `vite.config.ts` ma `base` ustawione na `/mobywatel-zbycie-pojazdu/`. Zmień je,
  jeśli nazwa repozytorium GitHub jest inna.
- Projekt nie zawiera backendu ani zewnętrznych API. Wszystkie dane są mockowane.

## Zastrzeżenie

Prototyp konkursowy. Nie jest to oficjalna aplikacja mObywatel ani usługa
administracji publicznej. Wszystkie dane pojazdów, nabywców i urzędów są fikcyjne.
