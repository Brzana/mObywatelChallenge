# 02 — Design System (mObywatel Challenge)

## Kierunek wizualny

Prototyp odwzorowuje język wizualny demo konkursowego `mobywatel.ai`: jasne tło, białe
karty z delikatnym cieniem, czerwony akcent, ciemny atrament oraz telefon w ramce iPhone
na desktopie. Bez granatowego top-baru i bez ciężkich obramowań.

## Kolory (Tailwind tokens)

Zdefiniowane w `tailwind.config.js` pod `theme.extend.colors.moby`:

| Token | Hex | Użycie |
|---|---|---|
| `moby.accent` | `#DC143C` | Przyciski primary, linki, aktywne kroki, ikony akcentowe |
| `moby.accentDark` | `#B30F30` | Hover przycisków, tekst na `accentWash` |
| `moby.accentWash` | `#FDECEF` | Tła informacyjne, ikony w kafelkach |
| `moby.ink` | `#111216` | Nagłówki i tekst primary |
| `moby.inkDeep` | `#14161C` | Ciemne karty pojazdu i CTA |
| `moby.inkMuted` | `#5F6270` | Tekst secondary, etykiety |
| `moby.inkFaint` | `#8B8E9A` | Dekoracyjne metadane (nie dla ważnego tekstu) |
| `moby.bg` | `#F2F3F7` | Tło aplikacji i pól pomocniczych |
| `moby.surface` | `#FFFFFF` | Karty, modale |
| `moby.ghostHover` | `#E9EBF0` | Hover przycisków ghost i tła postępu |
| `moby.stepper` | `#C9CCD6` | Nieaktywne kropki steppera |
| `moby.plate` | `#0B3FA8` | Niebieski pasek tablicy rejestracyjnej |
| `moby.accentSoft` | `#FF8DA3` | Etykiety na ciemnym CTA |
| `moby.hair` | `#E3E5EB` | Hairline dividers i obramowania inputów |
| `moby.success` | `#2E7D32` | Potwierdzenia, status OK |
| `moby.successWash` | `#E9F5EA` | Tło badge'a sukcesu |
| `moby.warning` | `#9A5A00` | Ostrzeżenia (np. „zostało 5 dni”) |
| `moby.warningWash` | `#FFF3DF` | Tło ostrzeżeń |
| `moby.danger` | `#B30F30` | Błędy walidacji, status po terminie |
| `moby.dangerWash` | `#FDECEF` | Tło błędów/statusu po terminie |

Tokeny zgodności wstecznej: `moby.navy` → `#111216`, `moby.blue` → `#DC143C`,
`moby.text` → `#111216`, `moby.textMuted` → `#5F6270`, `moby.border` → `#E3E5EB`.

## Typografia

- Font: system/SF Pro first, Inter fallback:
  `-apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, system-ui, sans-serif`.
- Skala:
  - `text-[22px] font-bold tracking-[-0.015em]` — tytuł w TopBarze,
  - `text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em]` — H1 panelu desktopowego,
  - `text-[17px] font-semibold tracking-[-0.01em]` — nagłówek karty (H2),
  - `text-[15px] leading-[21px]` — treść wprowadzająca,
  - `text-[14px] leading-[1.45]` — treść w kartach,
  - `text-[13px]` — helper text,
  - `text-[11px]` — stopka i metadane.

## Spacing i promienie

- Padding ekranu: `px-4 pt-2`.
- Odstęp sekcji: `space-y-4`.
- Karta: `rounded-[20px] bg-white p-4 shadow-card` — bez borderu.
- Listy w kartach: `divide-y divide-moby-hair`, wiersze `py-[9px]`.
- Inputy: wysokość `h-12`, `rounded-[14px]`, border `moby-hair`, focus `ring-moby-accent/20`.
- Przyciski: wysokość `h-12`, `rounded-[14px]`, `text-base font-semibold`.

Cień karty: `0 1px 2px rgba(15,25,60,0.06)` (`shadow-card`).
Cień uniesienia: `0 10px 30px -10px rgba(15,25,60,0.22)` (`shadow-lift`).

## Layout telefonu i desktopu

- Mobile (≤520 px): pełny ekran `100dvh`, bez ramki i bez status bara; TopBar respektuje
  `env(safe-area-inset-top)`.
- Desktop (≥521 px): scena `app-stage` z gradientem
  `radial-gradient(1200px 800px at 30% 20%, #EEF0F5 0, #DFE2EA 55%, #D3D7E1 100%)`.
- `.device-frame`: padding 13 px, radius 67 px, ciemny gradient, przyciski boczne.
- Telefon: `390×844`, radius 54 px, tło `moby-bg`.
- `PhoneChrome`: pasek statusu 50 px (zegar z `useNow`, `Signal`, `Wifi`, `BatteryFull`),
  dynamic island `122×35` i home indicator `134×5`.
- Ramka jest skalowana przez `zoom` przy niższych oknach (`0.94 / 0.84 / 0.78 / 0.7`).
- Panel prezentacyjny (`DesktopShowcase`) pojawia się od `1000 px`: badge, H1, 4 kroki,
  ciemna karta CTA z czerwonym glow i disclaimer. Szerokość `min(400px, 36vw)`.

## Komponenty bazowe (`src/components/ui/`)

### `<ScreenLayout>`

TopBar + przewijalna treść + disclaimer w stopce treści. Stopka nie jest przypięta nad
kartami — przewija się razem z ekranem i przy krótkiej treści jest dociągana do dołu
(`min-h-full` + `flex-1`).

### `<TopBar title back? icon? tone? />`

- Tło: `bg-moby-bg`, bez cienia.
- Wysokość: `min-h-[52px]` + safe area.
- Tytuł: 22 px, bold, `moby-ink`.
- Back: czerwona strzałka `ChevronLeft`, hover `bg-moby-accentWash`.
- Ikona: kafelek `36×36`, radius 11 px, `accentWash`/`accent` lub `successWash`/`success`.

### `<Card>`

- `rounded-[20px] bg-moby-surface p-4 shadow-card`.

### `<PrimaryButton>`

- `h-12 rounded-[14px] bg-moby-accent text-white font-semibold`
- Hover: `bg-moby-accentDark`; active: `scale-[0.98]`.
- Disabled: `opacity-40 cursor-not-allowed`.

### `<SecondaryButton>`

- `h-12 rounded-[14px] bg-moby-bg text-moby-ink font-semibold`
- Hover: `#E9EBF0`; bez obramowania.

### `<InfoRow label value />`

- Label: 14 px `moby-inkMuted`.
- Value: 14 px `font-medium` `moby-ink`, wyrównanie do prawej.
- Separator: `divide-y divide-moby-hair`.

### `<ProgressStepper current={1|2|3|4} />`

- 4 pill-dots: aktywny `w-[18px] bg-moby-accent`, pozostałe `w-1.5 bg-[#C9CCD6]`.
- Pod spodem 12 px `text-moby-inkMuted`: „Krok X z 4 — …”.

### `<DisclaimerFooter>`

- 11 px, `text-moby-inkMuted`, wyśrodkowany, `pb-[max(1rem,env(safe-area-inset-bottom))]`.
- Treść: „Prototyp konkursowy. Nie jest to oficjalna aplikacja mObywatel ani usługa administracji publicznej.”

### `<SuccessBadge />`

- `bg-moby-successWash text-moby-success rounded-[18px] p-4 shadow-card`.
- Ikona `CheckCircle2` w białym kółku 40 px.

### `<PhotoUploader value onChange />`

- Obszar `border border-dashed border-moby-hair rounded-[18px] bg-moby-bg/60 p-5`.
- Ikona `Camera` w czerwonym kółku 44 px.
- Po wyborze: podgląd `rounded-[14px] ring-1 ring-moby-hair` + ghost „Zmień”.

## Ikony

Wyłącznie `lucide-react`. Domyślnie 16–20 px; w TopBarze 20 px, back 26 px.

## Animacje

- Przejście ekranu: `animate-fade` 260 ms.
- Przyciski: `active:scale-[0.98]`.
- Loader: `Loader2 animate-spin`, maks. 800 ms.
- Bez pulsującej czerwieni, confetti i dramatycznych efektów.
- `prefers-reduced-motion` skraca animacje do 0.01 ms.

## Dostępność

- Ważny drobny tekst (stopka, kroki, VIN) używa `moby-inkMuted`, nie `moby-inkFaint`.
- Focus widoczny na przyciskach, linkach i inputach (`ring-moby-accent`).
- Kontrast przycisków primary: biały tekst na `#DC143C`; hover `#B30F30`.
- Checkbox ma `accent-moby-accent`; cały wiersz zgody jest klikalny.
