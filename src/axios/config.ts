import axios from 'axios';
import {
  APIResonse,
  RandomCardQueryParams,
  SearchCardQueryParams,
} from '../types/axios';
import { APICard } from '../types/models/APICard';

export const scryfall = axios.create({
  baseURL: 'http://api.scryfall.com',
  validateStatus: (status) => status < 500,
});

export const getRandomCard = async (params?: RandomCardQueryParams) => {
  return await scryfall.get<APICard>('/cards/random', { params });
};

export const searchCard = async (params: SearchCardQueryParams) => {
  return await scryfall.get<APIResonse<APICard>>('/cards/search', { params });
};
