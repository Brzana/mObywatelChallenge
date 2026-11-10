# 03 — Architektura

## Stack

- React 18 + TypeScript
- Vite (build + dev server)
- Tailwind CSS 3
- lucide-react
- react-router-dom (HashRouter — ważne dla GitHub Pages!)

## Dlaczego HashRouter?

GitHub Pages nie obsługuje fallbacku dla SPA (BrowserRouter zwróci 404 przy
odświeżeniu podścieżki). `HashRouter` działa bez konfiguracji serwera. To
najprostsza i najbezpieczniejsza opcja.

## Struktura katalogów

```
src/
├── main.tsx
├── App.tsx
├── routes.tsx
├── components/
│   ├── ui/                 # komponenty bazowe (patrz DESIGN_SYSTEM)
│   │   ├── ScreenLayout.tsx
│   │   ├── TopBar.tsx
│   │   ├── Card.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── SecondaryButton.tsx
│   │   ├── InfoRow.tsx
│   │   ├── ProgressStepper.tsx
│   │   ├── DisclaimerFooter.tsx
│   │   ├── SuccessBadge.tsx
│   │   └── PhotoUploader.tsx
│   └── domain/             # komponenty specyficzne dla sprawy
│       ├── VehicleCard.tsx
│       ├── BuyerForm.tsx
│       ├── SummaryList.tsx
│       └── UppDocument.tsx
├── screens/
│   ├── StartScreen.tsx           # lista pojazdów
│   ├── VehicleDetailsScreen.tsx  # dane pojazdu + wybór
│   ├── BuyerDataScreen.tsx       # dane nabywcy + data + umowa
│   ├── SummaryScreen.tsx         # podsumowanie + wysyłka
│   └── SuccessScreen.tsx         # UPP + licznik 30 dni
├── state/
│   └── useTransferFlow.tsx       # hook ze stanem przepływu
├── data/
│   ├── mockVehicles.ts
│   ├── mockBuyer.ts
│   └── mockOffice.ts
├── types/
│   └── index.ts                  # typy domenowe
└── lib/
    ├── delay.ts
    ├── format.ts
    └── upp.ts
```

## Stan aplikacji

Bez Reduxa, bez Zustanda. Wystarczy **jeden hook** `useTransferFlow` z
`useState` + `useContext` (jeśli potrzebny globalny dostęp).

```ts
// types/index.ts
export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  plate: string;
  color: string;
};

export type Buyer = {
  firstName: string;
  lastName: string;
  // opcjonalnie: companyName?: string;
};

export type TransferDraft = {
  vehicleId: string | null;
  buyer: Buyer | null;
  transferDate: string | null; // ISO
  contractPhotoDataUrl: string | null; // base64 z FileReader
  submittedAt: string | null;
};
```

```tsx
// state/useTransferFlow.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TransferDraft } from '../types';

const initialDraft = (): TransferDraft => ({
  vehicleId: null,
  buyer: null,
  transferDate: null,
  contractPhotoDataUrl: null,
  submittedAt: null,
});

const Ctx = createContext<{
  draft: TransferDraft;
  setDraft: (patch: Partial<TransferDraft>) => void;
  reset: () => void;
} | null>(null);

export function TransferFlowProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<TransferDraft>(initialDraft);
  const setDraft = (patch: Partial<TransferDraft>) =>
    setDraftState((current) => ({ ...current, ...patch }));
  const reset = () => setDraftState(initialDraft());
  return <Ctx.Provider value={{ draft, setDraft, reset }}>{children}</Ctx.Provider>;
}

export function useTransferFlow() {
  const context = useContext(Ctx);
  if (!context) throw new Error('useTransferFlow must be used within TransferFlowProvider');
  return context;
}
```

## Routing (HashRouter)

```tsx
// routes.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
// ...

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/pojazd/:id" element={<VehicleDetailsScreen />} />
        <Route path="/nabywca" element={<BuyerDataScreen />} />
        <Route path="/podsumowanie" element={<SummaryScreen />} />
        <Route path="/sukces" element={<SuccessScreen />} />
      </Routes>
    </HashRouter>
  );
}
```

## Mockowane opóźnienia

Jedna funkcja pomocnicza:

```ts
// lib/delay.ts
export const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
```

Używaj **tylko** w miejscach zdefiniowanych w `04_USER_FLOW.md` (np. „odczyt
umowy”, „wysyłka do urzędu”). Maks. 800 ms. Nie dodawaj opóźnień „bo tak”.

## Brak backendu — konsekwencje

- „Wysyłka do urzędu” = `await delay(800)` + ustawienie `submittedAt` + redirect na `/sukces`.
- „Odczyt umowy” = po wyborze zdjęcia `await delay(600)` + wypełnienie pól nabywcy z mocka (patrz `05_MOCK_DATA.md`).
- „Dane z CEPiK” = statyczne dane z `mockVehicles.ts`.

## Wydajność

- Lazy loading ekranów: `React.lazy` + `Suspense` (opcjonalne, ale mile widziane).
- Obrazy: max 200 KB, format WebP.
- Bundle docelowo < 300 KB gzip.

## GitHub Pages

`vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<nazwa-repo>/',
});
```

Workflow: `.github/workflows/deploy.yml` — build + deploy na `gh-pages`.
