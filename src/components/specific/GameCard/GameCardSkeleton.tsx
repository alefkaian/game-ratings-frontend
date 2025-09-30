import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const GameCardSkeleton = () => {
	return (
		<Card className='flex flex-row items-center min-h-min p-2'>
			<div className='w-1/4 h-32 rounded items-center'>
				<Skeleton className='h-full w-full rounded' />
			</div>
			<div className='flex flex-col flex-1'>
				<CardContent className='px-0 pt-1 items-center space-y-2.5'>
					<CardTitle className='space-y-1.5 items-center'>
						<Skeleton className='h-3 w-10/12' />
						<Skeleton className='h-3 w-1/5' />
					</CardTitle>
					<CardDescription className='space-y-3.5'>
						<Skeleton className='h-3 w-2/5' />
						<Skeleton className='h-3 w-1/2' />
					</CardDescription>
					<CardFooter className='flex justify-start gap-4 p-0 mt-3.5'>
						<Skeleton className='h-5 w-12' />
						<Skeleton className='h-5 w-16' />
						<Skeleton className='h-5 w-14' />
					</CardFooter>
				</CardContent>
			</div>
		</Card>
	);
};

export default GameCardSkeleton;