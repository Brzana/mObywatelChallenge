const DAY_MS = 24 * 60 * 60 * 1000;

export const STATUTORY_DEADLINE_DAYS = 30;

export type DeadlineInfo = {
  deadlineDate: Date;
  daysRemaining: number;
  remainingPercent: number;
  submittedOnTime: boolean;
};

function atStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseDateOnly(value: string): Date {
  const [year, month, day] = value.slice(0, 10).split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Termin ustawowy liczymy od daty zbycia pojazdu — zmiana tej daty
 * automatycznie przesuwa termin widoczny na ekranie sukcesu.
 */
export function getDeadlineInfo(
  transferDate: string,
  submittedAt: string,
  now: Date = new Date(),
): DeadlineInfo {
  const deadlineDate = parseDateOnly(transferDate);
  deadlineDate.setDate(deadlineDate.getDate() + STATUTORY_DEADLINE_DAYS);

  const submittedDate = atStartOfDay(new Date(submittedAt));
  const today = atStartOfDay(now);

  const daysRemaining = Math.round((deadlineDate.getTime() - today.getTime()) / DAY_MS);
  const remainingPercent = Math.max(
    0,
    Math.min(100, (daysRemaining / STATUTORY_DEADLINE_DAYS) * 100),
  );

  return {
    deadlineDate,
    daysRemaining,
    remainingPercent,
    submittedOnTime: submittedDate.getTime() <= deadlineDate.getTime(),
  };
}

export function formatDaysRemaining(daysRemaining: number): string {
  if (daysRemaining > 0) {
    return daysRemaining === 1 ? 'Pozostał 1 dzień' : `Pozostało ${daysRemaining} dni`;
  }

  if (daysRemaining === 0) {
    return 'Termin mija dziś';
  }

  const overdueDays = Math.abs(daysRemaining);
  return overdueDays === 1
    ? 'Termin minął 1 dzień temu'
    : `Termin minął ${overdueDays} dni temu`;
}
