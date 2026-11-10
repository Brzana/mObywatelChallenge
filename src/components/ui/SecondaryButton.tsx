import type { ButtonHTMLAttributes } from 'react';

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton({
  className = '',
  type = 'button',
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`h-12 w-full rounded-[14px] bg-moby-bg px-5 text-base font-semibold tracking-[-0.01em] text-moby-ink transition hover:bg-moby-ghostHover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moby-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 ${className}`}
      {...props}
    />
  );
}
