import GameCard from '@/components/specific/GameCard';
import GameCardSkeleton from '@/components/specific/GameCard/GameCardSkeleton';
import type { Game } from '@/types';

interface RankingLayoutProps {
	title: string;
	isLoading: boolean;
	games: Game[];
}

const SkeletonList = () => {
	return Array.from({ length: 5 }).map((_, i) => (
		<GameCardSkeleton key={i} />
	));
};

const RankingLayout = ({ title, isLoading, games }: RankingLayoutProps) => {
	return (
		<div className='container mx-auto px-4 py-6'>
			<h1 className='text-primary text-3xl leading-tight font-bold tracking-tight text-pretty mb-5'>
				{title}
			</h1>

			{isLoading ? (
				<ul className='space-y-2'>
					<SkeletonList />
				</ul>
			) : (
				<ul className='space-y-2'>
					{games.map((game, index) => (
						<li key={game.slug}>
							<GameCard game={game} index={index}></GameCard>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default RankingLayout;
