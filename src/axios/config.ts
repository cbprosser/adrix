import axios from 'axios';
import { APICard } from '../types/APICard';

const scryfall = axios.create({
  baseURL: 'http://api.scryfall.com',
});

export class Scryfall {
  private static api = scryfall;

  static async getRandomCard() {
    return await this.api.get<APICard>('/cards/random');
  }
}
