import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DefaultPageLayout from '../layouts/DefaultPageLayout';
import Top100 from '@/pages/rankings/Top100';
import GameDetails from '../pages/games/GameDetails';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultPageLayout />}>
					<Route path='/rankings/top100' element={<Top100 />} />
					<Route path='/games/:slug' element={<GameDetails />} />
				</Route>
				<Route path='/' element={<Navigate to='/rankings/top100' replace />} />
				<Route path='/*' element={<Navigate to='/rankings/top100' replace />} />
			</Routes>
		</BrowserRouter>
	);
}
