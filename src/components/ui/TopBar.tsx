import { ChevronLeft, type LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type TopBarProps = {
  title: string;
  back?: boolean;
  icon?: LucideIcon;
  tone?: 'accent' | 'success';
};

export default function TopBar({ title, back = false, icon: Icon, tone = 'accent' }: TopBarProps) {
  const navigate = useNavigate();
  const tileClass =
    tone === 'success'
      ? 'bg-moby-successWash text-moby-success'
      : 'bg-moby-accentWash text-moby-accent';

  return (
    <header className="relative z-10 flex min-h-[calc(52px_+_env(safe-area-inset-top))] shrink-0 items-center gap-2.5 px-4 pt-[env(safe-area-inset-top)]">
      {back ? (
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Wróć"
          className="-ml-2 grid h-9 w-9 shrink-0 place-items-center rounded-full text-moby-accent transition hover:bg-moby-accentWash active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent"
        >
          <ChevronLeft className="h-[26px] w-[26px]" strokeWidth={2.2} aria-hidden="true" />
        </button>
      ) : Icon ? (
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-[11px] ${tileClass}`}>
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </span>
      ) : (
        <span className="h-9 w-9 shrink-0" aria-hidden="true" />
      )}

      <h1 className="min-w-0 truncate text-[22px] font-bold leading-10 tracking-[-0.015em] text-moby-ink">
        {title}
      </h1>
    </header>
  );
}
