import axios from 'axios';
import type { Game, PaginatedResponse } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopGames = async (
	pageNumber: number = 1,
	pageSize: number = 10,
	genre?: string,
	signal?: AbortSignal
): Promise<PaginatedResponse<Game>> => {
	const url =
		`${API_BASE_URL}/games/top?page=${pageNumber}&size=${pageSize}` +
		(genre ? `&genre=${genre}` : '');
	const response = await axios.get<PaginatedResponse<Game>>(url, { signal });
	console.log('API CALLED WITH URL: ' + url);
	return response.data;
};
