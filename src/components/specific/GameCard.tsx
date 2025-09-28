import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import type { GameProps } from '@/types';
import { getMetacriticColor } from '@/styles/scoreCalculator';

interface GameCardProps {
	game: GameProps;
	index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
	return (
		<Card className='flex flex-row items-center min-h-min p-2'>
			<div className='w-1/4 h-30 overflow-hidden rounded items-center'>
				<img
					className='h-full w-full object-cover object-center'
					src='https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg'
					alt='logo'
				></img>
			</div>
			<div className='flex flex-col flex-1'>
				<CardContent className='px-0 py-2'>
					<div>
						<CardTitle className='flex font-extrabold text-sm'>
							<p>
								{index + 1}. {game.name}
							</p>
						</CardTitle>
						<CardDescription className='font-extralight text-foreground/70 text-xs'>
							{game.year}
						</CardDescription>
					</div>
					<div className='my-1 text-xs space-y-1 text-foreground/70'>
						<p>
							Rating <Badge className='text-center' variant={'outline'}>{game.rating}</Badge>
						</p>
						<p>
							Metacritic <Badge className={`text-center ${getMetacriticColor(game.metacritic)}`}>{game.metacritic}</Badge>
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
