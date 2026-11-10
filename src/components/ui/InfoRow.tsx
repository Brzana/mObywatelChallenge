import type { ReactNode } from 'react';

type InfoRowProps = {
  label: string;
  value: ReactNode;
};

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-[9px]">
      <dt className="shrink-0 pt-px text-sm leading-5 text-moby-inkMuted">{label}</dt>
      <dd className="max-w-[62%] break-words text-right text-sm font-medium leading-5 text-moby-ink">
        {value}
      </dd>
    </div>
  );
}
