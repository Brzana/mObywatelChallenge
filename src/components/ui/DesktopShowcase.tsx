import { ArrowLeft, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    title: 'Wybierz pojazd',
    description: 'Dane auta pobieramy z CEPiK — bez wpisywania VIN-u.',
  },
  {
    title: 'Dodaj zdjęcie umowy',
    description: 'Odczytujemy dane nabywcy. Możesz też wpisać je ręcznie.',
  },
  {
    title: 'Potwierdź zgłoszenie',
    description: 'Sprawdź podsumowanie i wyślij je do wydziału komunikacji.',
  },
  {
    title: 'Odbierz UPP',
    description: 'Potwierdzenie przyjęcia i licznik 30 dni od daty zbycia.',
  },
];

export default function DesktopShowcase() {
  return (
    <aside className="hidden max-h-[calc(100dvh-40px)] w-[min(400px,36vw)] overflow-y-auto [scrollbar-width:none] min-[1000px]:block">
      <a
        href="#/"
        className="mb-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-moby-inkMuted transition hover:text-moby-accent"
      >
        <ArrowLeft className="h-4 w-4 text-moby-accent" aria-hidden="true" />
        mObywatel Challenge
      </a>

      <div>
        <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-moby-accentWash px-3 py-1.5 text-[12.5px] font-bold tracking-[0.02em] text-moby-accentDark">
          <span className="h-[7px] w-[7px] rounded-full bg-moby-accent" aria-hidden="true" />
          Prototyp konkursowy
        </span>

        <h1 className="text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] text-moby-ink">
          Zgłoś zbycie pojazdu w 60 sekund
        </h1>
        <p className="mt-3 text-[15.5px] leading-[1.5] text-moby-inkMuted">
          Sprzedałeś lub przekazałeś auto? Masz 30 dni na zgłoszenie zbycia. W mObywatelu
          załatwisz to bez ePUAP, skanu umowy i wizyty w urzędzie.
        </p>
      </div>

      <p className="mb-2 mt-6 text-[12px] font-bold uppercase tracking-[0.06em] text-moby-inkMuted">
        Jak to działa
      </p>
      <ol className="m-0 list-none p-0 text-[14.5px] text-moby-inkMuted">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-3 border-t border-moby-ink/10 py-2.5 first:border-t-0"
          >
            <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[7px] bg-white text-[12px] font-bold text-moby-accent shadow-card">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-5 text-moby-ink">{step.title}</p>
              <p className="mt-0.5 text-[13.5px] leading-[1.45] text-moby-inkMuted">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="relative mt-6 overflow-hidden rounded-[20px] bg-moby-inkDeep p-5 text-white">
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,#DC143C_0,rgba(220,20,60,0)_70%)] opacity-60"
        />
        <p className="relative text-[12px] font-bold uppercase tracking-[0.06em] text-moby-accentSoft">
          Twój obowiązek
        </p>
        <p className="relative mt-1.5 text-[18px] font-semibold leading-[1.25]">
          Masz 30 dni na zgłoszenie zbycia.
        </p>
        <p className="relative mt-1.5 text-[14px] leading-[1.45] text-white/75">
          Zgłoś zbycie w telefonie. Bez papierów, bez kolejki i bez Profilu Zaufanego.
        </p>
        <a
          href="#/"
          className="relative mt-3 inline-flex items-center gap-2 rounded-[12px] bg-moby-accent px-3.5 py-2.5 text-[14px] font-bold text-white transition hover:bg-moby-accentDark"
        >
          Przejdź do demo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 text-[12px] leading-[1.5] text-moby-inkMuted">
        Prototyp demonstracyjny. Nie jest to oficjalna aplikacja mObywatel ani usługa
        administracji publicznej. Dane pojazdów są fikcyjne.
      </p>
    </aside>
  );
}
