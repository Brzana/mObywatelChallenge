# 01 — Project Brief

## Nazwa projektu

**mObywatel — Zgłoś zbycie pojazdu** (prototyp konkursowy)

## Kontekst konkursu

- Konkurs: mObywatel Challenge
- Finał: Sejm RP, listopad 2026
- Patronat: wicemarszałek Sejmu Marcin Horała
- Wymóg: klikalny prototyp, działa bez logowania
- Serwis mobywatel.ai NIE jest oficjalną aplikacją mObywatel

## Problem użytkownika

Sprzedający pojazd ma **30 dni** na zgłoszenie zbycia w wydziale komunikacji.
Kara za brak: **250 zł**. Współcześnie:

- mObywatel pokazuje pojazd, ale nie ma pełnej ścieżki zgłoszenia zbycia.
- gov.pl wymaga ePUAP/Profilu Zaufanego i skanu umowy.
- Użytkownicy mylą „auto zniknęło z mObywatela” z „zgłosiłem zbycie”.
- Współwłasność pojazdu budzi wątpliwości — wiele osób nie wie, czy do zgłoszenia
  potrzebny jest podpis drugiego współwłaściciela.

## Rozwiązanie w prototypie

Ścieżka mobilna w mObywatelu:

1. Wybór pojazdu z listy (dane z CEPiK — mockowane).
2. Dane nabywcy + data + zdjęcie umowy (mockowane „odczytanie”).
3. Potwierdzenie i wysyłka.
4. Ekran sukcesu z UPP (Urzędowe Poświadczenie Przedłożenia) i licznikiem 30 dni.

Dla pojazdu ze współwłaścicielami ekran danych pokazuje ich listę i wyjaśnia, że
wystarczy zgłoszenie jednego współwłaściciela — bez podpisu drugiego. Sekcja jest
wyłącznie informacyjna i nie wydłuża happy path.

## Grupa docelowa demo

- Jury konkursu (3 minuty na pitch)
- Osoby, które sprzedały lub kupiły auto
- Osoby, które nie wiedzą, że obowiązek zgłoszenia jest niezależny od kupującego
- Osoby sprzedające pojazd będący współwłasnością

## Kluczowe przesłanie na scenę

„Sprzedałeś auto? Twój obowiązek nie znika dlatego, że kupujący zgłosił nabycie.
Zgłoś zbycie w 30 dni — w mObywatelu, w 60 sekund.”

## Metryki sukcesu prototypu

- Cała ścieżka przechodzi w ≤ 60 sekund klikania.
- Demo działa na GitHub Pages bez logowania.
- Każdy ekran ma disclaimer.
- Brak zewnętrznych zależności runtime (poza statycznymi assetami).
