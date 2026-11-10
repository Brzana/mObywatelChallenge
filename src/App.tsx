import AppRoutes from './routes';
import DesktopShowcase from './components/ui/DesktopShowcase';
import PhoneChrome from './components/ui/PhoneChrome';
import { TransferFlowProvider } from './state/useTransferFlow';

export default function App() {
  return (
    <TransferFlowProvider>
      <div className="app-stage flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div className="flex w-full items-center justify-center min-[521px]:gap-8 min-[521px]:px-6 min-[521px]:py-3 min-[1000px]:gap-12 min-[1280px]:gap-20 min-[1000px]:px-8">
          <div className="device-frame w-full shrink-0 min-[521px]:w-auto">
            <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-moby-bg min-[521px]:h-[844px] min-[521px]:w-[390px] min-[521px]:rounded-[54px]">
              <PhoneChrome />
              <div className="relative flex min-h-0 flex-1 flex-col min-[521px]:pt-[50px]">
                <AppRoutes />
              </div>
            </div>
          </div>

          <DesktopShowcase />
        </div>
      </div>
    </TransferFlowProvider>
  );
}
