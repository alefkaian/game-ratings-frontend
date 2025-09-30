import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const GenresSkeleton = () => {
	return (
		<>
			<li className='p-2 h-[30px]'>
				<Skeleton className='h-full w-4/12 rounded-full' />
			</li>
			<li className='p-2 h-[30px]'>
				<Skeleton className='h-full w-6/12 rounded-full' />
			</li>
			<li className='p-2 h-[30px]'>
				<Skeleton className='h-full w-7/12 rounded-full' />
			</li>
			<li className='p-2 h-[30px]'>
				<Skeleton className='h-full w-5/12 rounded-full' />
			</li>
		</>
	);
};

function ListItem({
	title,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link to={href}>
					<div className='text-sm leading-none font-medium'>{title}</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}

interface GenresProps {
	slug: string;
	name: string;
}

const Navbar = () => {
	const [genres, setGenres] = useState<GenresProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchGenres = () => {
		const genres = [
			{ slug: 'action', name: 'Action' },
			{ slug: 'adventure', name: 'Adventure' },
			{ slug: 'arcade', name: 'Arcade' },
			{ slug: 'board', name: 'Board' },
			{ slug: 'card', name: 'Card' },
			{ slug: 'fighting', name: 'Fighting' },
			{ slug: 'puzzle', name: 'Puzzle' },
		];
		setIsLoading(false);
		setGenres(genres);
	};

	useEffect(() => {
		const timer = setTimeout(fetchGenres, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<header className='flex items-center top-0 z-50 py-2 border-b'>
			<div className='flex-none px-4'>
				<h1 className='text-destructive'>
					<span>game</span>
					<span className='font-bold'>Ratings</span>
				</h1>
			</div>

			<NavigationMenu viewport={true} className='max-w-full'>
				<NavigationMenuList className='flex flex-1 w-full'>
					<NavigationMenuItem className='flex-1 text-center'>
						<NavigationMenuLink asChild>
							<Link to='/rankings/top100'>Top 100</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className='flex-1 text-center'>
						<NavigationMenuTrigger>Genres</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid grid-cols-1 w-[50vw] gap-4 mx-auto md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{isLoading ? (
									<GenresSkeleton />
								) : (
									genres.map((genre) => (
										<ListItem
											key={genre.slug}
											title={genre.name}
											//href={'/rankings/genres/${genre.slug}'}
											href='#'
										></ListItem>
									))
								)}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

export default Navbar;
