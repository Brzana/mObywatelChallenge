import { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { mockOffice } from '../data/mockOffice';
import { mockVehicles } from '../data/mockVehicles';
import { makeUppNumber } from '../lib/upp';
import { useTransferFlow } from '../state/useTransferFlow';
import ScreenLayout from '../components/ui/ScreenLayout';
import ProgressStepper from '../components/ui/ProgressStepper';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SuccessBadge from '../components/ui/SuccessBadge';
import Card from '../components/ui/Card';
import DeadlineCard from '../components/domain/DeadlineCard';
import UppDocument from '../components/domain/UppDocument';

export default function SuccessScreen() {
  const navigate = useNavigate();
  const { draft, reset } = useTransferFlow();
  const [showWhy, setShowWhy] = useState(false);

  if (!draft.submittedAt || !draft.transferDate) {
    return <Navigate to="/" replace />;
  }

  const submittedAt = draft.submittedAt;
  const transferDate = draft.transferDate;
  const submittedDate = new Date(submittedAt);
  const vehicle = mockVehicles.find((item) => item.id === draft.vehicleId);
  const uppNumber = makeUppNumber(submittedDate);

  const handleCorrectData = () => {
    navigate(-1);
  };

  const handleReturn = () => {
    reset();
    navigate('/');
  };

  return (
    <ScreenLayout title="Zgłoszenie przyjęte" icon={CheckCircle2} iconTone="success">
      <div className="space-y-4">
        <ProgressStepper current={4} />

        <SuccessBadge
          description={
            vehicle ? `${vehicle.make} ${vehicle.model} · ${vehicle.plate}` : 'Pojazd demonstracyjny'
          }
        />

        <UppDocument
          uppNumber={uppNumber}
          submittedAt={submittedAt}
          officeName={mockOffice.name}
          officeAddress={mockOffice.address}
        />

        <DeadlineCard transferDate={transferDate} submittedAt={submittedAt} />

        <Card className="space-y-3">
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">Co dalej?</h2>
          <p className="text-[14px] leading-[1.45] text-moby-ink">
            Kupujący ma własny obowiązek zgłoszenia nabycia. Twoje zgłoszenie jest niezależne.
          </p>
          <button
            type="button"
            onClick={() => setShowWhy((current) => !current)}
            aria-expanded={showWhy}
            className="rounded-lg text-sm font-semibold text-moby-accent underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent"
          >
            Dlaczego to ważne?
          </button>
          {showWhy ? (
            <p className="rounded-[14px] bg-moby-bg p-3 text-[13px] leading-[1.5] text-moby-inkMuted">
              Zgłoszenie zbycia chroni Cię przed skutkami, których nie powinieneś ponosić jako
              były właściciel — m.in. przed mandatami czy opłatami za pojazd, którym już nie
              jeździsz. To materiał demonstracyjny.
            </p>
          ) : null}
        </Card>

        <SecondaryButton
          onClick={handleCorrectData}
          className="flex items-center justify-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Wróć i popraw dane
        </SecondaryButton>

        <PrimaryButton onClick={handleReturn}>Wróć do Moich pojazdów</PrimaryButton>
      </div>
    </ScreenLayout>
  );
}
