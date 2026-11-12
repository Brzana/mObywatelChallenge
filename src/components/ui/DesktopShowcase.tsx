import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    title: "Wybierz pojazd",
    description: "Dane auta pobieramy z CEPiK — bez wpisywania VIN-u.",
  },
  {
    title: "Dodaj zdjęcie umowy",
    description: "Odczytujemy dane nabywcy. Możesz też wpisać je ręcznie.",
  },
  {
    title: "Potwierdź zgłoszenie",
    description: "Sprawdź podsumowanie i wyślij je do wydziału komunikacji.",
  },
  {
    title: "Odbierz UPP",
    description: "Potwierdzenie przyjęcia i licznik 30 dni od daty zbycia.",
  },
];

export default function DesktopShowcase() {
  return (
    <aside className="hidden min-[1000px]:block w-[min(400px,36vw)] max-h-[calc(100dvh-40px)] overflow-y-auto [scrollbar-width:none]">
      <div>
        <span className="inline-flex items-center gap-2 bg-moby-accentWash mb-3.5 px-3 py-1.5 rounded-full font-bold text-[12.5px] text-moby-accentDark tracking-[0.02em]">
          <span
            className="bg-moby-accent rounded-full w-[7px] h-[7px]"
            aria-hidden="true"
          />
          Prototyp konkursowy
        </span>

        <h1 className="font-extrabold text-[34px] text-moby-ink leading-[1.06] tracking-[-0.03em]">
          Zgłoś zbycie pojazdu w 60 sekund
        </h1>
        <p className="mt-3 text-[15.5px] text-moby-inkMuted leading-[1.5]">
          Sprzedałeś lub przekazałeś auto? Masz 30 dni na zgłoszenie zbycia. W
          mObywatelu załatwisz to bez ePUAP, skanu umowy i wizyty w urzędzie.
        </p>
      </div>

      <p className="mt-6 mb-2 font-bold text-[12px] text-moby-inkMuted uppercase tracking-[0.06em]">
        Jak to działa
      </p>
      <ol className="m-0 p-0 text-[14.5px] text-moby-inkMuted list-none">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-3 py-2.5 border-moby-ink/10 border-t first:border-t-0"
          >
            <span className="place-items-center grid bg-white shadow-card mt-0.5 rounded-[7px] w-[22px] h-[22px] font-bold text-[12px] text-moby-accent shrink-0">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-moby-ink leading-5">
                {step.title}
              </p>
              <p className="mt-0.5 text-[13.5px] text-moby-inkMuted leading-[1.45]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="relative bg-moby-inkDeep mt-6 p-5 rounded-[20px] overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="-top-10 -right-10 absolute bg-[radial-gradient(circle,#DC143C_0,rgba(220,20,60,0)_70%)] opacity-60 rounded-full w-[140px] h-[140px]"
        />
        <p className="relative font-bold text-[12px] text-moby-accentSoft uppercase tracking-[0.06em]">
          Twój obowiązek
        </p>
        <p className="relative mt-1.5 font-semibold text-[18px] leading-[1.25]">
          Masz 30 dni na zgłoszenie zbycia.
        </p>
        <p className="relative mt-1.5 text-[14px] text-white/75 leading-[1.45]">
          Zgłoś zbycie w telefonie. Bez papierów, bez kolejki i bez Profilu
          Zaufanego.
        </p>
        <a
          href="#/"
          className="inline-flex relative items-center gap-2 bg-moby-accent hover:bg-moby-accentDark mt-3 px-3.5 py-2.5 rounded-[12px] font-bold text-[14px] text-white transition"
        >
          Przejdź do demo
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 text-[12px] text-moby-inkMuted leading-[1.5]">
        Prototyp demonstracyjny. Nie jest to oficjalna aplikacja mObywatel ani
        usługa administracji publicznej. Dane pojazdów są fikcyjne.
      </p>
    </aside>
  );
}
