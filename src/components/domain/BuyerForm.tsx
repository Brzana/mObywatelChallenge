import { useId } from 'react';
import { todayISO } from '../../lib/format';

export type BuyerFormErrors = {
  firstName?: string;
  lastName?: string;
  transferDate?: string;
};

type BuyerFormProps = {
  firstName: string;
  lastName: string;
  transferDate: string;
  errors: BuyerFormErrors;
  onChange: (patch: { firstName?: string; lastName?: string; transferDate?: string }) => void;
};

const inputClass =
  'h-12 w-full rounded-[14px] border border-moby-hair bg-white px-3.5 text-base text-moby-ink outline-none transition placeholder:text-moby-inkMuted/80 focus:border-moby-accent focus:ring-2 focus:ring-moby-accent/20 aria-[invalid=true]:border-moby-danger';

export default function BuyerForm({
  firstName,
  lastName,
  transferDate,
  errors,
  onChange,
}: BuyerFormProps) {
  const baseId = useId();
  const firstNameId = `${baseId}-firstName`;
  const lastNameId = `${baseId}-lastName`;
  const transferDateId = `${baseId}-transferDate`;

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor={firstNameId}
          className="mb-1.5 block text-[13px] font-semibold text-moby-inkMuted"
        >
          Imię nabywcy
        </label>
        <input
          id={firstNameId}
          name="firstName"
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => onChange({ firstName: event.target.value })}
          aria-invalid={Boolean(errors.firstName)}
          aria-describedby={errors.firstName ? `${firstNameId}-error` : undefined}
          placeholder="np. Anna"
          className={inputClass}
        />
        {errors.firstName ? (
          <p id={`${firstNameId}-error`} className="mt-1 text-[12px] text-moby-danger">
            {errors.firstName}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={lastNameId}
          className="mb-1.5 block text-[13px] font-semibold text-moby-inkMuted"
        >
          Nazwisko nabywcy
        </label>
        <input
          id={lastNameId}
          name="lastName"
          type="text"
          autoComplete="family-name"
          value={lastName}
          onChange={(event) => onChange({ lastName: event.target.value })}
          aria-invalid={Boolean(errors.lastName)}
          aria-describedby={errors.lastName ? `${lastNameId}-error` : undefined}
          placeholder="np. Nowak"
          className={inputClass}
        />
        {errors.lastName ? (
          <p id={`${lastNameId}-error`} className="mt-1 text-[12px] text-moby-danger">
            {errors.lastName}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={transferDateId}
          className="mb-1.5 block text-[13px] font-semibold text-moby-inkMuted"
        >
          Data zbycia
        </label>
        <input
          id={transferDateId}
          name="transferDate"
          type="date"
          max={todayISO()}
          value={transferDate}
          onChange={(event) => onChange({ transferDate: event.target.value })}
          aria-invalid={Boolean(errors.transferDate)}
          aria-describedby={errors.transferDate ? `${transferDateId}-error` : undefined}
          className={inputClass}
        />
        {errors.transferDate ? (
          <p id={`${transferDateId}-error`} className="mt-1 text-[12px] text-moby-danger">
            {errors.transferDate}
          </p>
        ) : null}
      </div>
    </div>
  );
}
