import RankingLayout from '@/layouts/RankingLayout';
import { useEffect, useState } from 'react';
import useFetchTopGames from '@/hooks/useFetchTopGames';

const Top100 = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { games } = useFetchTopGames();

	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => setIsLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	return <RankingLayout title='Best 100 Games of All Time' isLoading={isLoading} games={games} />;
};

export default Top100;
