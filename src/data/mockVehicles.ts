import type { Vehicle } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: 'veh-1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2018,
    vin: 'JTDBR32E600123456',
    plate: 'WX 1234A',
    color: 'Srebrny',
    owners: [
      { firstName: 'Jan', lastName: 'Kowalski', isCurrentUser: true },
      { firstName: 'Anna', lastName: 'Kowalska', isCurrentUser: false },
    ],
  },
  {
    id: 'veh-2',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2015,
    vin: 'WVWZZZ1KZAW123456',
    plate: 'KR 5678B',
    color: 'Czarny',
    owners: [{ firstName: 'Jan', lastName: 'Kowalski', isCurrentUser: true }],
  },
];
