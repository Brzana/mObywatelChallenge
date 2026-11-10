import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import type { Owner } from '../../types';
import Card from '../ui/Card';

type OwnersSectionProps = {
  owners: Owner[];
};

function initials(owner: Owner) {
  return `${owner.firstName.charAt(0)}${owner.lastName.charAt(0)}`.toUpperCase();
}

export default function OwnersSection({ owners }: OwnersSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (owners.length <= 1) {
    return null;
  }

  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">
          Współwłaściciele
        </h2>
        <span className="rounded-full bg-moby-bg px-2.5 py-1 text-[11px] font-semibold text-moby-inkMuted">
          {owners.length}
        </span>
      </div>

      <ul className="divide-y divide-moby-hair rounded-[14px] bg-moby-bg/70 px-3">
        {owners.map((owner, index) => (
          <li
            key={`${owner.firstName}-${owner.lastName}-${index}`}
            className="flex items-center gap-3 py-2.5"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[11px] font-bold text-moby-accentDark shadow-card">
              {initials(owner)}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-moby-ink">
              {owner.firstName} {owner.lastName}
            </span>
            {owner.isCurrentUser ? (
              <span className="shrink-0 rounded-full bg-moby-accentWash px-2 py-0.5 text-[11px] font-semibold text-moby-accentDark">
                Ty
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 rounded-[14px] bg-moby-accentWash p-3 text-[13px] leading-[1.5] text-moby-accentDark">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p>
          Wystarczy Twoje zgłoszenie zbycia. Nie potrzebujesz podpisu drugiego współwłaściciela
          — tak stanowią przepisy.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        aria-expanded={isExpanded}
        aria-controls="owners-more-info"
        className="flex items-center gap-1 rounded-lg text-[13px] font-semibold text-moby-accent underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent"
      >
        Dowiedz się więcej
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id="owners-more-info"
        hidden={!isExpanded}
        className="space-y-2 rounded-[14px] bg-moby-bg p-3 text-[13px] leading-[1.5] text-moby-inkMuted"
      >
        <p>
          Przy współwłasności zgłoszenia zbycia może dokonać każdy ze współwłaścicieli — nie
          jest potrzebna zgoda ani podpis pozostałych osób. Twoje zgłoszenie zostanie przyjęte
          niezależnie od tego, czy drugi współwłaściciel złoży własne oświadczenie.
        </p>
        <p className="font-medium text-moby-ink">
          Podstawa prawna: art. 78 ust. 2 Prawa o ruchu drogowym.
        </p>
        <p className="text-[11px] text-moby-inkMuted">treść demonstracyjna, nie porada prawna</p>
      </div>
    </Card>
  );
}
