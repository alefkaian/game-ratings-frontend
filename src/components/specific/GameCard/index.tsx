import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Game } from '@/types';
import { getMetacriticColor } from '@/styles/scoreCalculator';

interface GameCardProps {
	game: Game;
	index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
	return (
		<Card className='flex flex-row items-center min-h-min p-2'>
			<div className='w-1/4 h-32 overflow-hidden rounded items-center'>
				<img
					className='h-full w-full object-cover object-center'
					src={game.backgroundImage}
					alt={`${game.slug}-background`}
				></img>
			</div>
			<div className='flex flex-col flex-1'>
				<CardContent className='p-0'>
					<div>
						<CardTitle className='font-extrabold text-sm'>
							{index + 1}. {game.name}
						</CardTitle>
						<CardDescription className='font-extralight text-foreground/70 text-xs'>
							{game.releaseYear}
						</CardDescription>
					</div>
					<div className='my-1 text-xs space-y-1 text-foreground/70'>
						<p>
							Rating{' '}
							<Badge className='text-center' variant={'outline'}>
								{game.rating}
							</Badge>
						</p>
						<p>
							Metacritic{' '}
							<Badge className={`text-center ${getMetacriticColor(game.metacritic)}`}>
								{game.metacritic}
							</Badge>
						</p>
					</div>
					<CardFooter className='flex justify-start gap-4 p-0 mt-2'>
						{game.genres.map((genre) => (
							<Badge key={genre.slug} variant={'secondary'} className='text-xs'>
								{genre.name}
							</Badge>
						))}
					</CardFooter>
				</CardContent>
			</div>
		</Card>
	);
};

export default GameCard;
