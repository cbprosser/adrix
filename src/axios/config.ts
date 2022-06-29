import axios from 'axios';
import { APICard } from '../types/models/APICard';

export const scryfall = axios.create({
  baseURL: 'http://api.scryfall.com',
});

export const getRandomCard = async () => {
  return await scryfall.get<APICard>('/cards/random');
};
