import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import TopBar from './TopBar';
import DisclaimerFooter from './DisclaimerFooter';

type ScreenLayoutProps = {
  title: string;
  back?: boolean;
  icon?: LucideIcon;
  iconTone?: 'accent' | 'success';
  children: ReactNode;
  overlay?: ReactNode;
};

export default function ScreenLayout({
  title,
  back,
  icon,
  iconTone,
  children,
  overlay,
}: ScreenLayoutProps) {
  return (
    <div className="relative flex h-full min-h-0 flex-1 animate-fade flex-col overflow-hidden bg-moby-bg">
      <TopBar title={title} back={back} icon={icon} tone={iconTone} />
      <main className="app-scroll min-h-0 flex-1 overflow-y-auto">
        <div className="flex min-h-full flex-col px-4 pb-2 pt-2">
          <div className="flex-1">{children}</div>
          <DisclaimerFooter />
        </div>
      </main>
      {overlay}
    </div>
  );
}
