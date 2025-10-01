import ScrollableGameList from './ScrollableGameList';

interface RankingLayoutProps {
	title: string;
	genre?: string;
}

const RankingLayout = ({ title, genre }: RankingLayoutProps) => {
	return (
		<div className='container mx-auto px-4 py-6'>
			<h1 className='text-primary text-3xl leading-tight font-bold tracking-tight text-pretty mb-5'>
				{title}
			</h1>
			<ScrollableGameList maxGames={100} genre={genre}/>
		</div>
	);
};

export default RankingLayout;
