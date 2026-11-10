import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { mockVehicles } from '../data/mockVehicles';
import { delay } from '../lib/delay';
import { formatDate } from '../lib/format';
import { useTransferFlow } from '../state/useTransferFlow';
import ScreenLayout from '../components/ui/ScreenLayout';
import Card from '../components/ui/Card';
import ProgressStepper from '../components/ui/ProgressStepper';
import PrimaryButton from '../components/ui/PrimaryButton';
import SummaryList from '../components/domain/SummaryList';

const editButtonClass =
  'rounded-full px-2.5 py-1 text-[13px] font-semibold text-moby-accent transition hover:bg-moby-accentWash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent';

export default function SummaryScreen() {
  const navigate = useNavigate();
  const { draft, setDraft } = useTransferFlow();
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const vehicle = mockVehicles.find((item) => item.id === draft.vehicleId);
  const buyer = draft.buyer;
  const transferDate = draft.transferDate;

  if (!vehicle || !buyer || !transferDate) {
    return <Navigate to="/" replace />;
  }

  const hasMultipleOwners = vehicle.owners.length > 1;
  const currentOwner = vehicle.owners.find((owner) => owner.isCurrentUser);

  const handleSubmit = async () => {
    if (!accepted || isSubmitting) return;

    setIsSubmitting(true);
    await delay(800);
    setDraft({ submittedAt: new Date().toISOString() });
    navigate('/sukces');
  };

  const submittingOverlay = isSubmitting ? (
    <div
      role="status"
      aria-live="polite"
      className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-moby-ink/70 p-6 text-center text-white backdrop-blur-[2px]"
    >
      <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
      <p className="text-base font-semibold">Przekazuję do Wydziału Komunikacji…</p>
      <p className="text-sm text-white/75">To symulacja — maksymalnie 800 ms.</p>
    </div>
  ) : null;

  return (
    <ScreenLayout title="Podsumowanie" back overlay={submittingOverlay}>
      <div className="space-y-4">
        <ProgressStepper current={3} />

        <Card className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">Pojazd</h2>
            <button
              type="button"
              onClick={() => navigate(`/pojazd/${vehicle.id}`)}
              className={editButtonClass}
            >
              Zmień
            </button>
          </div>
          <SummaryList
            items={[
              { label: 'Marka i model', value: `${vehicle.make} ${vehicle.model}` },
              { label: 'Numer rejestracyjny', value: vehicle.plate },
              { label: 'VIN', value: <span className="font-mono text-[13px]">{vehicle.vin}</span> },
              ...(hasMultipleOwners && currentOwner
                ? [
                    {
                      label: 'Zgłaszający',
                      value: `${currentOwner.firstName} ${currentOwner.lastName} (współwłaściciel)`,
                    },
                  ]
                : []),
            ]}
          />
        </Card>

        <Card className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">Nabywca</h2>
            <button type="button" onClick={() => navigate('/nabywca')} className={editButtonClass}>
              Zmień
            </button>
          </div>
          <SummaryList
            items={[
              { label: 'Imię i nazwisko', value: `${buyer.firstName} ${buyer.lastName}` },
              { label: 'Data zbycia', value: formatDate(transferDate) },
            ]}
          />
        </Card>

        <Card className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">Umowa</h2>
            <button type="button" onClick={() => navigate('/nabywca')} className={editButtonClass}>
              Zmień
            </button>
          </div>

          {draft.contractPhotoDataUrl ? (
            <img
              src={draft.contractPhotoDataUrl}
              alt="Miniatura zdjęcia umowy"
              className="max-h-40 w-full rounded-[14px] bg-moby-bg object-contain ring-1 ring-moby-hair"
            />
          ) : (
            <p className="rounded-[14px] bg-moby-bg p-3 text-[13px] text-moby-inkMuted">
              Brak zdjęcia umowy — dane wpisane ręcznie.
            </p>
          )}
        </Card>

        <label className="flex items-start gap-3 rounded-[18px] bg-moby-surface p-4 shadow-card">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-moby-accent focus:ring-2 focus:ring-moby-accent/30"
          />
          <span className="text-[14px] leading-[1.45] text-moby-ink">
            Oświadczam, że dane są zgodne z umową kupna-sprzedaży.
          </span>
        </label>

        <PrimaryButton onClick={() => void handleSubmit()} disabled={!accepted || isSubmitting}>
          Wyślij zgłoszenie
        </PrimaryButton>
      </div>
    </ScreenLayout>
  );
}
