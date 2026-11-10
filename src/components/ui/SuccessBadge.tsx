import { CheckCircle2 } from 'lucide-react';

type SuccessBadgeProps = {
  title?: string;
  description?: string;
};

export default function SuccessBadge({
  title = 'Zgłoszenie przyjęte',
  description,
}: SuccessBadgeProps) {
  return (
    <div
      role="status"
      className="flex items-center gap-3 rounded-[18px] bg-moby-successWash p-4 text-moby-success shadow-card"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/70">
        <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[16px] font-semibold tracking-[-0.01em]">{title}</p>
        {description ? (
          <p className="mt-0.5 text-[12.5px] leading-4 text-moby-inkMuted">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
