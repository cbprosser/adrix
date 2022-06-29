import { AxiosResponse } from 'axios';
import { mockCard } from '../constants/mocks/card';
import { APICard } from '../types';
import { getRandomCard, scryfall } from './config';

jest.mock('axios', () => ({
  create: jest
    .fn((arg) => ({
      defaults: arg,
      get: jest.fn(),
    }))
    .mockName('TEST'),
}));

const mockGet = scryfall.get as jest.Mock;

describe('Axios config Suite', () => {
  it('Should have the right config', () => {
    expect(scryfall.defaults.baseURL).toEqual('http://api.scryfall.com');
  });

  it('Should get a random card', async () => {
    const mockResponse = {
      status: 200,
      data: mockCard,
    } as AxiosResponse<APICard>;
    mockGet.mockReturnValue(
      new Promise((resolve) => {
        resolve(mockResponse);
      }),
    );
    const result = await getRandomCard();

    expect(result).toEqual(mockResponse);
  });
});
