import { Car, ShieldCheck, Users } from 'lucide-react';
import type { Vehicle } from '../../types';
import Card from '../ui/Card';
import PrimaryButton from '../ui/PrimaryButton';

type VehicleCardProps = {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
};

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden !p-0">
      <div className="relative overflow-hidden bg-moby-inkDeep px-4 pb-4 pt-3.5 text-white">
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(220,20,60,0.45),transparent_68%)]"
        />
        <Car
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2 right-1 h-24 w-24 text-white/[0.08]"
          strokeWidth={1.2}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white/55">
              Pojazd w CEPiK
            </p>
            <p className="mt-1 truncate text-[20px] font-bold leading-tight tracking-[-0.02em]">
              {vehicle.make} {vehicle.model}
            </p>
            <p className="mt-1 text-[13px] text-white/60">
              {vehicle.year} · {vehicle.color}
            </p>
          </div>

          <span className="mt-0.5 inline-flex shrink-0 overflow-hidden rounded-[6px] bg-white text-moby-ink shadow-sm ring-1 ring-black/40">
            <span className="flex w-[18px] items-end justify-center bg-moby-plate pb-1 text-[7px] font-bold text-white">
              PL
            </span>
            <span className="px-2 py-1 text-[12px] font-bold leading-none tracking-[0.06em]">
              {vehicle.plate}
            </span>
          </span>
        </div>

        {vehicle.owners.length > 1 ? (
          <span className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[11px] font-medium text-white/75">
            <Users className="h-3 w-3" aria-hidden="true" />
            {vehicle.owners.length} współwłaścicieli
          </span>
        ) : null}
      </div>

      <div className="space-y-3 px-4 pb-4 pt-3">
        <div className="flex min-w-0 items-center gap-2 text-[12px]">
          <ShieldCheck className="h-4 w-4 shrink-0 text-moby-success" aria-hidden="true" />
          <span className="shrink-0 font-medium text-moby-inkMuted">Dane z CEPiK</span>
          <span className="ml-auto truncate font-mono text-[11px] text-moby-inkMuted">
            {vehicle.vin}
          </span>
        </div>

        <PrimaryButton onClick={() => onSelect(vehicle)}>Zgłoś zbycie</PrimaryButton>
      </div>
    </Card>
  );
}
