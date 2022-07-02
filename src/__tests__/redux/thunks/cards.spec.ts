import { scryfall } from '../../../axios';
import { REDUX } from '../../../constants';
import { cardsSlice, initialCardsState } from '../../../redux/slices';
import { searchForCard } from '../../../redux/thunks/cards';
import { CardsState } from '../../../types';
import {
  getMockCardList,
  getMockResponse,
  MOCK,
  mockCard,
  mockCardError,
  mockFulfilledAction,
  mockPendingAction,
  mockRejectedAction,
} from '../../testUtils';

jest.mock('axios');

const mockGet = scryfall.get as jest.Mock;

describe('Card thunks Suite', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const params = [dispatch, getState, undefined] as const;

  beforeEach(() => {
    jest.clearAllMocks();
    getState.mockReturnValue(initialCardsState);
  });

  describe('Thunks', () => {
    const mockSingleCardList = getMockCardList();
    const mockMultiCardList = getMockCardList(true);
    describe('searchForCard suite', () => {
      it('Should succeed', async () => {
        mockGet.mockReturnValue(
          new Promise((resolve) => {
            resolve(getMockResponse(mockSingleCardList));
          }),
        );

        const resp = await searchForCard(mockCard.name)(...params);

        expect(resp.meta.requestStatus).toEqual('fulfilled');
        expect(resp.payload).toEqual(mockSingleCardList);
      });

      it('Should reject when axios returns an error', async () => {
        mockGet.mockReturnValue(
          new Promise((resolve) => {
            resolve(getMockResponse(mockCardError));
          }),
        );

        const resp = await searchForCard(mockCard.name)(...params);

        expect(resp.meta.requestStatus).toEqual('rejected');
        expect(resp.payload).toEqual(REDUX.MESSAGE.SEARCHFORCARD.NOTFOUND);
      });

      it('Should reject when axios returns a list', async () => {
        mockGet.mockReturnValue(
          new Promise((resolve) => {
            resolve(getMockResponse(mockMultiCardList));
          }),
        );

        const resp = await searchForCard(mockCard.name)(...params);

        expect(resp.meta.requestStatus).toEqual('rejected');
        expect(resp.payload).toEqual(REDUX.MESSAGE.SEARCHFORCARD.TOOMANY);
      });

      describe('Reducer builders', () => {
        it('Should set the state appropriately when pending', () => {
          const initialState: CardsState = {
            ...initialCardsState,
            cards: [mockCard],
          };
          const expectedState: CardsState = {
            ...initialCardsState,
            requests: {
              searchForCard: {
                status: 'calling',
                requestId: MOCK.REQUEST_ID,
              },
            },
          };
          const newState = cardsSlice.reducer(
            initialState,
            mockPendingAction(searchForCard, MOCK.REQUEST_ID, 'card'),
          );

          expect(newState).toEqual(expectedState);
        });

        it('Should set the state appropriately when fulfilled', () => {
          const initialState: CardsState = {
            ...initialCardsState,
            requests: {
              searchForCard: {
                requestId: MOCK.REQUEST_ID,
                status: 'calling',
              },
            },
          };
          const expectedState: CardsState = {
            ...initialCardsState,
            cards: mockSingleCardList.data,
            requests: {
              searchForCard: {
                requestId: MOCK.REQUEST_ID,
                status: 'idle',
                success: true,
              },
            },
          };
          const newState = cardsSlice.reducer(
            initialState,
            mockFulfilledAction(
              searchForCard,
              MOCK.REQUEST_ID,
              'card',
              mockSingleCardList,
            ),
          );

          expect(newState).toEqual(expectedState);
        });

        it('Should set the state appropriately when rejected', () => {
          const initialState: CardsState = {
            ...initialCardsState,
            requests: {
              searchForCard: {
                requestId: MOCK.REQUEST_ID,
                status: 'calling',
              },
            },
          };
          const expectedState: CardsState = {
            ...initialCardsState,
            requests: {
              searchForCard: {
                message: MOCK.MESSAGE,
                requestId: MOCK.REQUEST_ID,
                status: 'idle',
                success: false,
              },
            },
          };
          const newState = cardsSlice.reducer(
            initialState,
            mockRejectedAction(
              searchForCard,
              MOCK.REQUEST_ID,
              'card',
              MOCK.MESSAGE,
            ),
          );

          expect(newState).toEqual(expectedState);
        });
      });
    });
  });
});
