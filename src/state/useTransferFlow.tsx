/* eslint-disable react-refresh/only-export-components -- provider i hook współdzielą ten sam kontekst */
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { TransferDraft } from '../types';

const initialDraft = (): TransferDraft => ({
  vehicleId: null,
  buyer: null,
  transferDate: null,
  contractPhotoDataUrl: null,
  submittedAt: null,
});

type TransferFlowContextValue = {
  draft: TransferDraft;
  setDraft: (patch: Partial<TransferDraft>) => void;
  reset: () => void;
};

const TransferFlowContext = createContext<TransferFlowContextValue | null>(null);

export function TransferFlowProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<TransferDraft>(initialDraft);

  const setDraft = (patch: Partial<TransferDraft>) =>
    setDraftState((current) => ({ ...current, ...patch }));

  const reset = () => setDraftState(initialDraft());

  return (
    <TransferFlowContext.Provider value={{ draft, setDraft, reset }}>
      {children}
    </TransferFlowContext.Provider>
  );
}

export function useTransferFlow() {
  const context = useContext(TransferFlowContext);
  if (!context) throw new Error('useTransferFlow must be used within TransferFlowProvider');
  return context;
}
