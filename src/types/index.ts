export interface GameProps {
	slug: string;
	name: string;
	rating: number;
	metacritic: number;
	genres: {
		slug: string;
		name: string;
	}[];
	year: number;
	image: string;
}