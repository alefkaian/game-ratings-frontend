import { fetchTopGames } from '@/api';
import type { Game } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface FetchState {
	games: Game[];
	isLoading: boolean;
	error: string | null;
}

const useFetchTopGames = (): FetchState => {
	const [games, setGames] = useState<Game[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadGames = async () => {
			try {
				const data = await fetchTopGames();
				setGames(data);
				setError(null);
			} catch (error) {
				let errorMessage = 'An error occurred while fetching games.';
				if (axios.isAxiosError(error)) {
					errorMessage =
						error.response?.data.message || 'HTTP error: ' + error.response?.status;
				} else if (error instanceof Error) {
					errorMessage = error.message;
				}
				setError(errorMessage);
				setGames([]);
			} finally {
				setIsLoading(false);
			}
		};
		loadGames();
	}, []);
	return { games, isLoading, error };
};

export default useFetchTopGames;