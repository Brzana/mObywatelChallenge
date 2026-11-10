import { formatDaysRemaining, getDeadlineInfo } from '../../lib/deadline';
import { formatDate } from '../../lib/format';
import { useNow } from '../../lib/useNow';
import Card from '../ui/Card';

type DeadlineCardProps = {
  transferDate: string;
  submittedAt: string;
};

export default function DeadlineCard({ transferDate, submittedAt }: DeadlineCardProps) {
  const now = useNow();
  const { deadlineDate, daysRemaining, remainingPercent, submittedOnTime } = getDeadlineInfo(
    transferDate,
    submittedAt,
    now,
  );

  const isLate = !submittedOnTime;
  const isDueSoon = submittedOnTime && daysRemaining <= 7;
  const countdownColor = isLate
    ? 'text-moby-danger'
    : isDueSoon
      ? 'text-moby-warning'
      : 'text-moby-success';

  const barWidth = isLate ? 100 : remainingPercent;
  const barLabel = isLate
    ? 'Termin ustawowy przekroczony'
    : formatDaysRemaining(daysRemaining);

  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">
          Termin 30 dni
        </h2>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            isLate
              ? 'bg-moby-dangerWash text-moby-danger'
              : 'bg-moby-successWash text-moby-success'
          }`}
        >
          {isLate ? 'Po terminie' : 'W terminie'}
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="Pozostały czas do terminu 30 dni"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(barWidth)}
        aria-valuetext={barLabel}
        className="h-2 w-full overflow-hidden rounded-full bg-moby-ghostHover"
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${
            isLate ? 'bg-moby-danger' : 'bg-moby-success'
          }`}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      <p className="text-[13.5px] leading-[1.5] text-moby-ink">
        {isLate
          ? 'Zgłoszono po terminie ustawowym. Termin 30 dni liczy się od daty zbycia pojazdu.'
          : 'Zgłoszono w terminie. Twój obowiązek jako zbywcy został spełniony.'}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p className="text-[12px] text-moby-inkMuted">
          Termin ustawowy mija:{' '}
          <span className="font-medium text-moby-ink">
            {formatDate(deadlineDate.toISOString())}
          </span>
        </p>
        <p className={`text-[12px] font-semibold ${countdownColor}`}>
          {formatDaysRemaining(daysRemaining)}
        </p>
      </div>
    </Card>
  );
}
