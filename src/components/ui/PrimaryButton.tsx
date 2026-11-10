import type { ButtonHTMLAttributes } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  className = '',
  type = 'button',
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`h-12 w-full rounded-[14px] bg-moby-accent px-5 text-base font-semibold tracking-[-0.01em] text-white transition hover:bg-moby-accentDark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100 ${className}`}
      {...props}
    />
  );
}
