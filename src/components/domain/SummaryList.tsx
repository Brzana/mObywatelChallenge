import type { ReactNode } from 'react';
import InfoRow from '../ui/InfoRow';

export type SummaryItem = {
  label: string;
  value: ReactNode;
};

type SummaryListProps = {
  items: SummaryItem[];
};

export default function SummaryList({ items }: SummaryListProps) {
  return (
    <dl className="divide-y divide-moby-hair">
      {items.map((item) => (
        <InfoRow key={item.label} label={item.label} value={item.value} />
      ))}
    </dl>
  );
}
