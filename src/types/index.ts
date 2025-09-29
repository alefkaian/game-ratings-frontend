export interface Game {
	slug: string;
	name: string;
	rating: number;
	metacritic: number;
	genres: {
		slug: string;
		name: string;
	}[];
	year: number;
	backgroundImage: string;
}

export interface PaginatedResponse<T> {
	currentPage: number;
	pageSize: number;
	totalElements: number;
    totalPages: number;
    isLast: boolean;
	content: T[];
}