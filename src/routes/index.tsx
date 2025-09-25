import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AllTimesTop100 from '../pages/rankings/AllTimesTop100';
import GameDetails from '../pages/games/GameDetails';

export default function AppRoutes() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/rankings/top100" element={<AllTimesTop100 />} />
        <Route path="/" element={<Navigate to="/rankings/top100" replace />} />
        <Route path="/rankings" element={<Navigate to="/rankings/top100" replace />} />
        <Route path="/games/:slug" element={<GameDetails />} />
        <Route path="/games" element={<Navigate to="/rankings/top100" replace />} />
      </Routes>
    </BrowserRouter>
  );
}