import axios from 'axios';
import type { Game, PaginatedResponse } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopGames = async (): Promise<Game[]> => {
    const response = await axios.get<PaginatedResponse<Game>>(`${API_BASE_URL}/games/top`);
    return response.data.content;
}