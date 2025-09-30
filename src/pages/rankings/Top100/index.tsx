import RankingLayout from '@/layouts/RankingLayout';
import useFetchTopGames from '@/hooks/useFetchTopGames';

const Top100 = () => {
	const { games, isLoading } = useFetchTopGames();
	
	return <RankingLayout title='Best 100 Games of All Time' isLoading={isLoading} games={games} />;
};

export default Top100;
