import { fetchTopGames } from '@/api';
import type { Game } from '@/types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface FetchState {
	currentPageGames: Game[];
	allGames: Game[];
	isLoading: boolean;
	hasMore: boolean;
	fetchMore: () => void;
	error: string | null;
}

const useFetchTopGames = (
	startingPage: number = 0,
	pageSize: number = 10,
	genre?: string,
	maxGames?: number
): FetchState => {
	const [currentPageGames, setCurrentPageGames] = useState<Game[]>([]);
	const [allGames, setAllGames] = useState<Game[]>([]);
	const [currentPage, setCurrentPage] = useState(startingPage);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState(true);

	const loadGames = useCallback(
		async (pageNumber: number, signal?: AbortSignal) => {
			setIsLoading(true);
			try {
				const data = await fetchTopGames(pageNumber, pageSize, genre, signal);
				setAllGames((prevAllGames) => {
					if (maxGames && prevAllGames.length >= maxGames) {
						setHasMore(false);
						return prevAllGames;
					}
					const existingSlugs = new Set(prevAllGames.map((prevGame) => prevGame.slug));
					const newUniqueGames = data.content.filter(
						(game) => !existingSlugs.has(game.slug)
					);
					if (newUniqueGames.length === 0) {
						return prevAllGames;
					}

					const updatedGames = [...prevAllGames, ...newUniqueGames];

					if (
						!newUniqueGames ||
						newUniqueGames.length < pageSize ||
						(maxGames && updatedGames.length >= maxGames)
					) {
						setHasMore(false);
					}
					return updatedGames;
				});
				setCurrentPageGames(data.content);
				setCurrentPage(pageNumber);
				setError(null);
			} catch (err) {
				if (axios.isCancel(err)) {
					console.log('Request canceled: ', err.message);
					return;
				}

				let errorMessage = 'An error occurred while fetching games. ';
				if (axios.isAxiosError(err)) {
					errorMessage =
						err.response?.data.message || 'HTTP error: ' + err.response?.status;
				} else if (err instanceof Error) {
					errorMessage = err.message;
				}
				setError(errorMessage);
			} finally {
				setIsLoading(false);
			}
		},
		[pageSize, genre, maxGames]
	);

	useEffect(() => {
		// abortController avoids strict mode double rendering
		const abortController = new AbortController();
		loadGames(startingPage, abortController.signal);
		return () => {
			abortController.abort();
		};
	}, [loadGames]);

	const fetchMore = () => {
		if (isLoading || !hasMore) return;
		loadGames(currentPage + 1);
	};

	return { allGames, currentPageGames, isLoading, hasMore, error, fetchMore };
};

export default useFetchTopGames;
