import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-[20px] bg-moby-surface p-4 shadow-card ${className}`}>
      {children}
    </section>
  );
}
