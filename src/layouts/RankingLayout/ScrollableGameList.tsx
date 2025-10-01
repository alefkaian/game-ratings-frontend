import useFetchTopGames from '@/hooks/useFetchTopGames';
import InfiniteScroll from 'react-infinite-scroll-component';
import RankingSkeleton from './RankingSkeleton';
import GameCard from '@/components/specific/GameCard';

interface ScrollableGameListProps {
	maxGames?: number;
	genre?: string;
}

const ScrollableGameList = ({
	maxGames = 100,
	genre,
	...props
}: ScrollableGameListProps & React.ComponentPropsWithoutRef<'ul'>) => {
	const { allGames, hasMore, fetchMore, error } = useFetchTopGames(0, 10, genre, maxGames); // Removido currentPageGames

	if (error && allGames.length === 0) {
		return <p className='text-red-500'>Error: {error}</p>;
	}

	return (
		<InfiniteScroll
			dataLength={allGames.length}
			next={fetchMore}
			hasMore={hasMore}
			loader={<RankingSkeleton />}
		>
			<ul className='space-y-2' {...props}>
				{allGames.map((game, index) => (
					<li key={`${game.slug}`}>
						<GameCard game={game} index={index}></GameCard>
					</li>
				))}
			</ul>
		</InfiniteScroll>
	);
};

export default ScrollableGameList;
