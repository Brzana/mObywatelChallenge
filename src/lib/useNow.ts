import { useEffect, useState } from 'react';

/** Zwraca aktualny czas i odświeża go, aby daty/liczniki zmieniały się same. */
export function useNow(intervalMs = 60_000): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const update = () => setNow(new Date());
    const intervalId = window.setInterval(update, intervalMs);

    document.addEventListener('visibilitychange', update);
    window.addEventListener('focus', update);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', update);
      window.removeEventListener('focus', update);
    };
  }, [intervalMs]);

  return now;
}
