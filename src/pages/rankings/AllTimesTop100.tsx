import RankingLayout from '@/layouts/RankingLayout';
import { useEffect, useState } from 'react';
import type { GameProps } from '@/types';

const AllTimesTop100 = () => {
	const [games, setGames] = useState<GameProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchGames = () => {
		const gamesFetched: GameProps[] = [
			{
				slug: 'test-slug-1',
				name: 'Grand Theft Auto V',
				rating: 4.9,
				metacritic: 95,
				genres: [
					{ slug: 'action', name: 'Action' },
					{ slug: 'shooter', name: 'Shooter' },
				],
				year: 2013,
				image: 'image-url-1',
			},
			{
				slug: 'test-slug-2',
				name: 'The Last of Us Part II',
				rating: 5.0,
				metacritic: 60,
				genres: [
					{ slug: 'action', name: 'Action' },
					{ slug: 'adventure', name: 'Adventure' },
				],
				year: 2020,
				image: 'image-url-2',
			},
			{
				slug: 'test-slug-3',
				name: 'The Legend of Zelda: Breath of the Wild',
				rating: 4.9,
				metacritic: 10,
				genres: [
					{ slug: 'rpg', name: 'RPG' },
					{ slug: 'adventure', name: 'Adventure' },
				],
				year: 2017,
				image: 'image-url-3',
			},
		];
		setGames(gamesFetched);
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(fetchGames, 1000);
		return () => clearTimeout(timer);
	}, []);

	return <RankingLayout title='Best 100 Games of All Time' isLoading={isLoading} games={games} />;
};

export default AllTimesTop100;
