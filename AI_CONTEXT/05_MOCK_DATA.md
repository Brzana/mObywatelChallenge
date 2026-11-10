# 05 — Mock Data

## Pojazdy (`src/data/mockVehicles.ts`)

```ts
import type { Vehicle } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: 'veh-1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2018,
    vin: 'JTDBR32E600123456',
    plate: 'WX 1234A',
    color: 'Srebrny',
    owners: [
      { firstName: 'Jan', lastName: 'Kowalski', isCurrentUser: true },
      { firstName: 'Anna', lastName: 'Kowalska', isCurrentUser: false },
    ],
  },
  {
    id: 'veh-2',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2015,
    vin: 'WVWZZZ1KZAW123456',
    plate: 'KR 5678B',
    color: 'Czarny',
    owners: [{ firstName: 'Jan', lastName: 'Kowalski', isCurrentUser: true }],
  },
];
```

- `veh-1` (Toyota) — dwóch współwłaścicieli: Jan Kowalski (użytkownik) i Anna Kowalska.
- `veh-2` (Volkswagen) — jeden właściciel: Jan Kowalski; sekcja współwłaścicieli
  nie jest pokazywana.

## Nabywca (do auto-wypełnienia po „odczycie umowy”)

```ts
// src/data/mockBuyer.ts
export const mockBuyer = {
  firstName: 'Anna',
  lastName: 'Nowak',
};
```

## Urząd (do UPP)

```ts
// src/data/mockOffice.ts
export const mockOffice = {
  name: 'Wydział Komunikacji w Warszawie',
  address: 'ul. Marszałkowska 1, 00-001 Warszawa',
};
```

## Numer UPP

Generuj deterministycznie na podstawie `submittedAt`:

```ts
// lib/upp.ts
export function makeUppNumber(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `UPP/${y}/${m}/${d}/000123`;
}
```

## Zasady

- Wszystkie dane są **fikcyjne**.
- VIN-y są poprawne formatowo (17 znaków), ale nie odpowiadają realnym pojazdom.
- Numery rejestracyjne są zgodne z polskim formatem, ale fikcyjne.
- Dane współwłaścicieli są fikcyjne; tylko `isCurrentUser: true` oznacza zalogowanego
  użytkownika i jest prezentowane z dopiskiem „(Ty)”.
- W UI nigdy nie sugeruj, że dane pochodzą z realnego CEPiK — pisz „Dane demonstracyjne (mock CEPiK)” w info-boxie na ekranie 1.
