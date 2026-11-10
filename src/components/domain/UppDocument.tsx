import { FileText } from 'lucide-react';
import { formatDateTime } from '../../lib/format';
import Card from '../ui/Card';
import SecondaryButton from '../ui/SecondaryButton';
import SummaryList, { type SummaryItem } from './SummaryList';

type UppDocumentProps = {
  uppNumber: string;
  submittedAt: string;
  officeName: string;
  officeAddress: string;
};

export default function UppDocument({
  uppNumber,
  submittedAt,
  officeName,
  officeAddress,
}: UppDocumentProps) {
  const items: SummaryItem[] = [
    {
      label: 'Numer UPP',
      value: <span className="font-mono text-[13px]">{uppNumber}</span>,
    },
    {
      label: 'Data i godzina przyjęcia',
      value: formatDateTime(submittedAt),
    },
    {
      label: 'Organ',
      value: (
        <span>
          {officeName}
          <span className="mt-0.5 block text-[12px] font-normal leading-4 text-moby-inkMuted">
            {officeAddress}
          </span>
        </span>
      ),
    },
  ];

  return (
    <Card className="space-y-3">
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-moby-accentWash text-moby-accent">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-moby-inkMuted">
            Dokument demonstracyjny
          </p>
          <h2 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-moby-ink">
            Urzędowe Poświadczenie Przedłożenia (UPP)
          </h2>
        </div>
      </div>

      <SummaryList items={items} />

      <div title="Funkcja dostępna w pełnej wersji">
        <SecondaryButton disabled>Pobierz UPP (PDF)</SecondaryButton>
      </div>
      <p className="text-center text-[11px] text-moby-inkMuted">
        Funkcja dostępna w pełnej wersji
      </p>
    </Card>
  );
}
