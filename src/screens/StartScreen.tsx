import { Car, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Vehicle } from '../types';
import { mockVehicles } from '../data/mockVehicles';
import { useTransferFlow } from '../state/useTransferFlow';
import ScreenLayout from '../components/ui/ScreenLayout';
import VehicleCard from '../components/domain/VehicleCard';

export default function StartScreen() {
  const navigate = useNavigate();
  const { setDraft } = useTransferFlow();

  const handleSelect = (vehicle: Vehicle) => {
    setDraft({ vehicleId: vehicle.id });
    navigate(`/pojazd/${vehicle.id}`);
  };

  return (
    <ScreenLayout title="Moje pojazdy" icon={Car}>
      <div className="space-y-4">
        <p className="px-1 text-[15px] leading-[21px] text-moby-inkMuted">
          Wybierz pojazd, który sprzedałeś lub przekazałeś.
        </p>

        <p className="px-1 pt-1 text-[11px] font-bold uppercase tracking-[0.06em] text-moby-inkMuted">
          {mockVehicles.length} pojazdy w CEPiK
        </p>

        <div className="space-y-4">
          {mockVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={handleSelect} />
          ))}
        </div>

        <div className="flex gap-3 rounded-[18px] bg-moby-accentWash p-4 text-moby-accentDark">
          <Timer className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-[13px] leading-5">
            Masz <strong>30 dni</strong> na zgłoszenie zbycia od daty sprzedaży. Dane pojazdów
            są demonstracyjne (mock CEPiK).
          </p>
        </div>
      </div>
    </ScreenLayout>
  );
}
