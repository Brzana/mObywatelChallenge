const STEPS = ['Pojazd', 'Nabywca', 'Podsumowanie', 'Potwierdzenie'] as const;

type ProgressStepperProps = {
  current: 1 | 2 | 3 | 4;
};

export default function ProgressStepper({ current }: ProgressStepperProps) {
  return (
    <div
      role="group"
      aria-label={`Krok ${current} z 4: ${STEPS[current - 1]}`}
      className="pb-1"
    >
      <div className="flex items-center justify-center gap-1.5">
        {STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isReached = stepNumber <= current;
          const isCurrent = stepNumber === current;
          return (
            <span
              key={step}
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isReached ? 'bg-moby-accent' : 'w-1.5 bg-moby-stepper'
              } ${isCurrent ? 'w-[18px]' : isReached ? 'w-1.5' : ''}`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-center text-xs font-medium text-moby-inkMuted">
        Krok {current} z 4 — {STEPS[current - 1]}
      </p>
    </div>
  );
}
