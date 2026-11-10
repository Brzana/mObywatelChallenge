import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Info } from 'lucide-react';
import { mockVehicles } from '../data/mockVehicles';
import { useTransferFlow } from '../state/useTransferFlow';
import ScreenLayout from '../components/ui/ScreenLayout';
import Card from '../components/ui/Card';
import ProgressStepper from '../components/ui/ProgressStepper';
import PrimaryButton from '../components/ui/PrimaryButton';
import OwnersSection from '../components/domain/OwnersSection';
import SummaryList from '../components/domain/SummaryList';

export default function VehicleDetailsScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setDraft } = useTransferFlow();
  const vehicle = mockVehicles.find((item) => item.id === id);

  if (!vehicle) {
    return <Navigate to="/" replace />;
  }

  const handleNext = () => {
    setDraft({ vehicleId: vehicle.id });
    navigate('/nabywca');
  };

  return (
    <ScreenLayout title="Dane pojazdu" back>
      <div className="space-y-4">
        <ProgressStepper current={1} />

        <Card className="space-y-2">
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">
            Dane pojazdu
          </h2>
          <SummaryList
            items={[
              { label: 'Marka i model', value: `${vehicle.make} ${vehicle.model}` },
              { label: 'Rok produkcji', value: String(vehicle.year) },
              { label: 'VIN', value: <span className="font-mono text-[13px]">{vehicle.vin}</span> },
              { label: 'Numer rejestracyjny', value: vehicle.plate },
              { label: 'Kolor', value: vehicle.color },
            ]}
          />
        </Card>

        <OwnersSection owners={vehicle.owners} />

        <div className="flex gap-3 rounded-[16px] bg-moby-bg p-3.5 text-[13px] leading-[1.5] text-moby-inkMuted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-moby-inkFaint" aria-hidden="true" />
          <p>
            Dane demonstracyjne (mock CEPiK). Nie możesz ich edytować — jeśli są
            nieprawidłowe, skontaktuj się z urzędem.
          </p>
        </div>

        <PrimaryButton onClick={handleNext}>Dalej</PrimaryButton>
      </div>
    </ScreenLayout>
  );
}
