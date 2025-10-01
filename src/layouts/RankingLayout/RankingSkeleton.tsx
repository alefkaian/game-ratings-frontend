import GameCardSkeleton from '@/components/specific/GameCard/GameCardSkeleton';

const RankingSkeleton = () => {
	return Array.from({ length: 5 }).map((_, i) => <GameCardSkeleton key={i} />);
};

export default RankingSkeleton;
