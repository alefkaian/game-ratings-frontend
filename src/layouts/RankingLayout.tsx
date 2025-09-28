interface RankingLayoutProps {
	title: string;
	isLoading: boolean;
	data: any[];
	renderItem: (item: any, index: number) => React.ReactNode;
}

const SkeletonList = () => (
	<div className='space-y-4 animate-pulse'>
		<div className='h-8 bg-gray-300 rounded w-3/4'></div>
		<div className='h-8 bg-gray-300 rounded w-full'></div>
		<div className='h-8 bg-gray-300 rounded w-full'></div>
		<div className='h-8 bg-gray-300 rounded w-5/6'></div>
	</div>
);

const RankingLayout = ({ title, isLoading, data, renderItem }: RankingLayoutProps) => {
	return (
		<div className='container mx-auto px-4 py-6'>
			<h1 className='text-3xl font-bold mb-6 text-brand-orange-light'>{title}</h1>

			{isLoading ? (
				<SkeletonList />
			) : (
				<ul className='space-y-4'>
					{data.map((item, index) => (
						<li key={index}>{renderItem(item, index)}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default RankingLayout;
