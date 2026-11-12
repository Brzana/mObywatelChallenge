import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { formatDaysRemaining, getDeadlineInfo } from "../../lib/deadline";
import { formatDate } from "../../lib/format";
import { useNow } from "../../lib/useNow";

/** Stan terminowy karty. `due-soon` = ≤ 7 dni do końca, `overdue` = po terminie. */
export type DeadlineStatus = "on-time" | "due-soon" | "overdue";

export type DeadlineStatusCardProps = {
  status: DeadlineStatus;
  /** Ustawowa długość terminu w dniach (np. 30). */
  totalDays: number;
  /** Pozostałe dni; ujemne = po terminie. */
  daysLeft: number;
  /** Data końca terminu ustawowego. */
  deadlineDate: string | Date;
  /** Krótki komunikat o spełnieniu obowiązku. */
  message?: string;
};

const STATUS_META: Record<
  DeadlineStatus,
  { label: string; Icon: typeof CheckCircle2; badge: string; bar: string }
> = {
  "on-time": {
    label: "W terminie",
    Icon: CheckCircle2,
    badge: "bg-moby-successWash text-moby-success",
    bar: "bg-moby-success",
  },
  "due-soon": {
    label: "Zbliża się termin",
    Icon: AlertTriangle,
    badge: "bg-moby-warningWash text-moby-warning",
    bar: "bg-moby-warning",
  },
  overdue: {
    label: "Po terminie",
    Icon: XCircle,
    badge: "bg-moby-dangerWash text-moby-danger",
    bar: "bg-moby-danger",
  },
};

function pluralizeDays(n: number): string {
  const abs = Math.abs(n);
  if (abs === 1) return "dzień";
  const mod10 = abs % 10;
  const mod100 = abs % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "dni";
  return "dni";
}

function toDateOnly(value: string | Date): Date {
  if (value instanceof Date) return value;
  return value.includes("T") ? new Date(value) : new Date(`${value}T12:00:00`);
}

/**
 * Prezentacyjna karta statusu terminu.
 *
 * Hierarchia: nagłówek (długość terminu + pojedynczy status) → hero
 * (pozostałe dni + data) → komunikat → pasek z jawną etykietą
 * "wykorzystano X z Y dni" (czas, który upłynął).
 */
export function DeadlineStatusCard({
  status,
  totalDays,
  daysLeft,
  deadlineDate,
  message,
}: DeadlineStatusCardProps) {
  const meta = STATUS_META[status];
  const { Icon } = meta;

  const clampedLeft = Math.max(0, daysLeft);
  const date = toDateOnly(deadlineDate);
  const dateLabel = formatDate(date.toISOString());

  const heroText =
    status === "overdue"
      ? formatDaysRemaining(daysLeft)
      : daysLeft === 0
        ? "Termin mija dziś"
        : daysLeft === 1
          ? "Pozostał 1 dzień"
          : `Pozostało ${clampedLeft} ${pluralizeDays(clampedLeft)}`;

  return (
    <section
      aria-labelledby="deadline-status-heading"
      className="bg-moby-surface shadow-card p-4 rounded-[20px]"
    >
      {/* 1 — kontekst + JEDEN status (koniec redundancji) */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <p
          id="deadline-status-heading"
          className="font-semibold text-moby-inkMuted text-xs uppercase tracking-[0.06em]"
        >
          Termin ustawowy · {totalDays} dni od zbycia
        </p>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.badge}`}
        >
          <Icon className="w-3.5 h-3.5" aria-hidden="true" />
          {meta.label}
        </span>
      </div>
      {/* 2 — hero: najważniejsze dane (dni + data) */}
      <div className="flex min-[360px]:flex-row flex-col min-[360px]:justify-between min-[360px]:items-baseline gap-1 min-[360px]:gap-3 mt-3">
        <p className="font-bold text-[28px] text-moby-ink leading-none tracking-[-0.02em]">
          {status === "overdue" ? (
            <>
              Po terminie
              <span className="block mt-1 font-semibold text-sm leading-snug">
                {heroText}
              </span>
            </>
          ) : (
            heroText
          )}
        </p>
        <p className="font-semibold text-moby-ink text-base shrink-0">
          do {dateLabel}
        </p>
      </div>
      {/* 3 — komunikat (opcjonalny, domyślny tylko dla on-time) */}
      {message ? (
        <p className="mt-2 text-moby-inkMuted text-sm leading-relaxed">
          {message}
        </p>
      ) : null}
    </section>
  );
}

// ── Adapter: dotychczasowe ekrany liczą status z dat ────────────────────────

type DeadlineCardProps = {
  transferDate: string;
  submittedAt: string;
};

function resolveStatus(daysLeft: number, onTime: boolean): DeadlineStatus {
  if (!onTime || daysLeft < 0) return "overdue";
  if (daysLeft <= 7) return "due-soon";
  return "on-time";
}

export default function DeadlineCard({
  transferDate,
  submittedAt,
}: DeadlineCardProps) {
  const now = useNow();
  const { deadlineDate, daysRemaining, submittedOnTime } = getDeadlineInfo(
    transferDate,
    submittedAt,
    now,
  );

  const status = resolveStatus(daysRemaining, submittedOnTime);

  const message =
    status === "overdue"
      ? "Zgłoszenie wpłynęło po terminie ustawowym. Termin 30 dni liczy się od daty zbycia pojazdu."
      : status === "due-soon"
        ? "Zgłoszono w terminie. Twój obowiązek jako zbywcy został spełniony. Do końca terminu zostało 7 lub mniej dni."
        : "Zgłoszono w terminie. Twój obowiązek jako zbywcy został spełniony.";

  return (
    <DeadlineStatusCard
      status={status}
      totalDays={30}
      daysLeft={daysRemaining}
      deadlineDate={deadlineDate}
      message={message}
    />
  );
}
