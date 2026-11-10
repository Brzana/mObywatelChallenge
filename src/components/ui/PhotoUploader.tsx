import { useId, type ChangeEvent } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

type PhotoUploaderProps = {
  value: string | null;
  onChange: (dataUrl: string) => void;
  disabled?: boolean;
};

export default function PhotoUploader({ value, onChange, disabled = false }: PhotoUploaderProps) {
  const inputId = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="sr-only"
        disabled={disabled}
        onChange={handleFileChange}
      />

      {value ? (
        <div className="space-y-3">
          <img
            src={value}
            alt="Podgląd zdjęcia umowy"
            className="max-h-56 w-full rounded-[14px] bg-moby-bg object-contain ring-1 ring-moby-hair"
          />
          <label
            htmlFor={inputId}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-[12px] bg-moby-bg px-4 py-2.5 text-sm font-semibold text-moby-ink transition hover:bg-moby-ghostHover focus-within:ring-2 focus-within:ring-moby-accent/40"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Zmień
          </label>
        </div>
      ) : (
        <label
          htmlFor={inputId}
          className="flex cursor-pointer flex-col items-center gap-2.5 rounded-[18px] border border-dashed border-moby-hair bg-moby-bg/60 p-5 text-center transition hover:border-moby-accent hover:bg-moby-accentWash/50 focus-within:ring-2 focus-within:ring-moby-accent/40"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-moby-accentWash text-moby-accent">
            <Camera className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold leading-5 text-moby-ink">
            Zrób zdjęcie umowy lub wybierz z galerii
          </span>
          <span className="text-[11.5px] leading-4 text-moby-inkMuted">
            Dane z umowy wypełnią się automatycznie (demo)
          </span>
        </label>
      )}
    </div>
  );
}
