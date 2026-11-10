export type Owner = {
  firstName: string;
  lastName: string;
  isCurrentUser: boolean;
};

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  plate: string;
  color: string;
  owners: Owner[];
};

export type Buyer = {
  firstName: string;
  lastName: string;
  // opcjonalnie: companyName?: string;
};

export type TransferDraft = {
  vehicleId: string | null;
  buyer: Buyer | null;
  transferDate: string | null; // ISO
  contractPhotoDataUrl: string | null; // base64 z FileReader
  submittedAt: string | null;
};
