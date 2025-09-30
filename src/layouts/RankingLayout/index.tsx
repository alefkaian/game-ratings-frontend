import GameCard from '@/components/specific/GameCard';
import type { Game } from '@/types';

interface RankingLayoutProps {
	title: string;
	isLoading: boolean;
	games: Game[];
}

const SkeletonList = () => (
	<div className='space-y-4 animate-pulse'>
		<div className='h-8 bg-gray-300 rounded w-3/4'></div>
		<div className='h-8 bg-gray-300 rounded w-full'></div>
		<div className='h-8 bg-gray-300 rounded w-full'></div>
		<div className='h-8 bg-gray-300 rounded w-5/6'></div>
	</div>
);

const RankingLayout = ({ title, isLoading, games }: RankingLayoutProps) => {
	return (
		<div className='container mx-auto px-4 py-6'>
			<h1 className='text-foreground text-3xl leading-tight font-bold tracking-tight text-pretty mb-5'>
				{title}
			</h1>

			{isLoading ? (
				<SkeletonList />
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
