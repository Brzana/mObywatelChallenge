import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { mockBuyer } from '../data/mockBuyer';
import { mockVehicles } from '../data/mockVehicles';
import { delay } from '../lib/delay';
import { todayISO } from '../lib/format';
import { useTransferFlow } from '../state/useTransferFlow';
import ScreenLayout from '../components/ui/ScreenLayout';
import Card from '../components/ui/Card';
import ProgressStepper from '../components/ui/ProgressStepper';
import PrimaryButton from '../components/ui/PrimaryButton';
import PhotoUploader from '../components/ui/PhotoUploader';
import BuyerForm, { type BuyerFormErrors } from '../components/domain/BuyerForm';

type TouchedFields = {
  firstName: boolean;
  lastName: boolean;
  transferDate: boolean;
};

export default function BuyerDataScreen() {
  const navigate = useNavigate();
  const { draft, setDraft } = useTransferFlow();
  const vehicle = mockVehicles.find((item) => item.id === draft.vehicleId);

  const [firstName, setFirstName] = useState(draft.buyer?.firstName ?? '');
  const [lastName, setLastName] = useState(draft.buyer?.lastName ?? '');
  const [transferDate, setTransferDate] = useState(draft.transferDate ?? todayISO());
  const [touched, setTouched] = useState<TouchedFields>({
    firstName: false,
    lastName: false,
    transferDate: false,
  });
  const [isReading, setIsReading] = useState(false);

  if (!vehicle) {
    return <Navigate to="/" replace />;
  }

  const errors: BuyerFormErrors = {
    firstName: firstName.trim().length < 2 ? 'Imię musi mieć co najmniej 2 znaki.' : undefined,
    lastName: lastName.trim().length < 2 ? 'Nazwisko musi mieć co najmniej 2 znaki.' : undefined,
    transferDate: !transferDate
      ? 'Podaj datę zbycia.'
      : transferDate > todayISO()
        ? 'Data nie może być z przyszłości.'
        : undefined,
  };
  const isValid = !errors.firstName && !errors.lastName && !errors.transferDate;
  const visibleErrors: BuyerFormErrors = {
    firstName: touched.firstName ? errors.firstName : undefined,
    lastName: touched.lastName ? errors.lastName : undefined,
    transferDate: touched.transferDate ? errors.transferDate : undefined,
  };

  const handleChange = (patch: {
    firstName?: string;
    lastName?: string;
    transferDate?: string;
  }) => {
    if (patch.firstName !== undefined) {
      setFirstName(patch.firstName);
      setTouched((current) => ({ ...current, firstName: true }));
    }
    if (patch.lastName !== undefined) {
      setLastName(patch.lastName);
      setTouched((current) => ({ ...current, lastName: true }));
    }
    if (patch.transferDate !== undefined) {
      setTransferDate(patch.transferDate);
      setTouched((current) => ({ ...current, transferDate: true }));
    }
  };

  const handlePhotoChange = (dataUrl: string) => {
    setDraft({ contractPhotoDataUrl: dataUrl });
    setIsReading(true);

    void (async () => {
      await delay(600);
      setFirstName(mockBuyer.firstName);
      setLastName(mockBuyer.lastName);
      setTouched({ firstName: true, lastName: true, transferDate: true });
      setIsReading(false);
    })();
  };

  const handleNext = () => {
    setDraft({
      buyer: { firstName: firstName.trim(), lastName: lastName.trim() },
      transferDate,
    });
    navigate('/podsumowanie');
  };

  return (
    <ScreenLayout title="Dane nabywcy" back>
      <div className="space-y-4">
        <ProgressStepper current={2} />

        <Card className="space-y-3">
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">
            Umowa kupna-sprzedaży
          </h2>
          <PhotoUploader
            value={draft.contractPhotoDataUrl}
            onChange={handlePhotoChange}
            disabled={isReading}
          />
          {isReading ? (
            <div
              role="status"
              className="flex items-center gap-2 rounded-[14px] bg-moby-accentWash p-3 text-sm font-medium text-moby-accentDark"
            >
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Odczytuję dane z umowy…
            </div>
          ) : (
            <p className="text-[12px] leading-[1.5] text-moby-inkMuted">
              Możesz pominąć zdjęcie i wpisać dane ręcznie. Odczyt jest symulacją (demo).
            </p>
          )}
        </Card>

        <Card className="space-y-4">
          <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-moby-ink">
            Dane nabywcy
          </h2>
          <BuyerForm
            firstName={firstName}
            lastName={lastName}
            transferDate={transferDate}
            errors={visibleErrors}
            onChange={handleChange}
          />
        </Card>

        <PrimaryButton onClick={handleNext} disabled={!isValid || isReading}>
          Dalej
        </PrimaryButton>
      </div>
    </ScreenLayout>
  );
}
