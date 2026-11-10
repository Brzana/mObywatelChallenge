import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import VehicleDetailsScreen from './screens/VehicleDetailsScreen';
import BuyerDataScreen from './screens/BuyerDataScreen';
import SummaryScreen from './screens/SummaryScreen';
import SuccessScreen from './screens/SuccessScreen';

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/pojazd/:id" element={<VehicleDetailsScreen />} />
        <Route path="/nabywca" element={<BuyerDataScreen />} />
        <Route path="/podsumowanie" element={<SummaryScreen />} />
        <Route path="/sukces" element={<SuccessScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
