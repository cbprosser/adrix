import { getRandomCard, scryfall, searchCard } from '../../axios/config';
import { getMockResponse } from '../testUtils';
import { getMockCardList, mockCard } from '../testUtils/card';

jest.mock('axios');

const mockGet = scryfall.get as jest.Mock;

describe('Axios config Suite', () => {
  it('Should have the right config', () => {
    expect(scryfall.defaults.baseURL).toEqual('http://api.scryfall.com');
    Array.from(Array(500)).forEach((_, i) => {
      const statusCode = i + 100;
      expect(scryfall.defaults.validateStatus?.(statusCode)).toBe(
        statusCode < 500,
      );
    });
  });

  it('Should get a random card', async () => {
    const mockResponse = getMockResponse(mockCard);
    mockGet.mockReturnValue(
      new Promise((resolve) => {
        resolve(mockResponse);
      }),
    );
    const result = await getRandomCard();

    expect(result).toEqual(mockResponse);
  });

  it('Should fetch a specified card', async () => {
    const mockResponse = getMockResponse(getMockCardList());
    mockGet.mockReturnValue(
      new Promise((resolve) => {
        resolve(mockResponse);
      }),
    );
    const result = await searchCard({ q: mockCard.name });

    expect(result).toEqual(mockResponse);
  });
});
