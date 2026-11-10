import { BatteryFull, Signal, Wifi } from 'lucide-react';
import { useNow } from '../../lib/useNow';

function formatClock(date: Date) {
  return date.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
}

/** Pasek statusu, dynamic island i home indicator — widoczne tylko w ramce telefonu. */
export default function PhoneChrome() {
  const now = useNow(10_000);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[95] hidden min-[521px]:block"
    >
      <div className="absolute inset-x-0 top-0 flex h-[50px] items-center justify-between pl-10 pr-8 pt-4 text-[16px] font-semibold tracking-[-0.01em] text-moby-ink">
        <span>{formatClock(now)}</span>
        <span className="flex items-center gap-1.5">
          <Signal className="h-[13px] w-[17px]" strokeWidth={2.4} />
          <Wifi className="h-[13px] w-[16px]" strokeWidth={2.4} />
          <BatteryFull className="h-[15px] w-[24px]" strokeWidth={1.6} />
        </span>
      </div>

      <div className="absolute left-1/2 top-[11px] h-[35px] w-[122px] -translate-x-1/2 rounded-[20px] bg-black" />

      <div className="absolute bottom-[8px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-moby-ink" />
    </div>
  );
}
