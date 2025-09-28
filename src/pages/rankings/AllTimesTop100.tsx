import RankingLayout from '@/layouts/RankingLayout';
import { useEffect, useState } from 'react';

const AllTimesTop100 = () => {
	const [games, setGames] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const fetchGames = () => {
			const gamesFetched = [
				{ id: 1, name: 'Super Mario World', rating: 8.5 },
				{ id: 2, name: "Baldur's Gate III", rating: 8.2 },
				{ id: 3, name: 'Elden Ring', rating: 9.5 },
			];
			setGames(gamesFetched);
			setIsLoading(false);
		};
		const timer = setTimeout(fetchGames, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<RankingLayout
			title='All Times Top 100'
			isLoading={isLoading}
			data={games}
			renderItem={(game, index) => (
				<div className='flex justify-between'>
					<span>
						{index + 1}. {game.name}
					</span>
					<span className='font-bold'>{game.rating}</span>
				</div>
			)}
		/>
	);
};

export default AllTimesTop100;
