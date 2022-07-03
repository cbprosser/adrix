import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { createSearchParams } from 'react-router-dom';
import { appHistory } from '../../appHistory';
import { searchCard } from '../../axios';
import { REDUX } from '../../constants';
import { sitemap } from '../../sitemap';
import { CardsState } from '../../types';
import {
  fulfilledCaseReducer,
  notError,
  pendingCaseReducer,
  rejectedCaseReducer,
} from '../../util';

const builders: ((builder: ActionReducerMapBuilder<CardsState>) => void)[] = [];

export const searchForCard = createAsyncThunk(
  'cards/searchForCard',
  async (query: string, { rejectWithValue }) => {
    const resp = await searchCard({ q: query });
    let message: string | undefined;

    // TODO: Add response status utility
    if (resp.status >= 200 && resp.status < 300 && notError(resp.data)) {
      if (resp.data.data.length === 1) {
        appHistory.push(
          {
            pathname: sitemap.results.urls[0],
            search: `?${createSearchParams({ q: query })}`,
          },
          {
            response: resp.data,
          },
        );
        return resp.data;
      }
      message = REDUX.MESSAGE.SEARCHFORCARD.TOOMANY;
    }
    appHistory.push(
      {
        pathname: sitemap.results.urls[0],
        search: `?${createSearchParams({ q: query })}`,
      },
      {
        response: resp.data,
      },
    );
    return rejectWithValue(message ?? REDUX.MESSAGE.SEARCHFORCARD.NOTFOUND);
  },
);

builders.push((builder) =>
  builder
    .addCase(...pendingCaseReducer(searchForCard.pending))
    .addCase(
      ...fulfilledCaseReducer(searchForCard.fulfilled, (state, { payload }) => {
        state.cards = payload.data;
      }),
    )
    .addCase(
      ...rejectedCaseReducer(searchForCard.rejected, (state) => {
        state.cards = [];
      }),
    ),
);

export const loadSearch = createAsyncThunk(
  'cards/loadSearch',
  async (query: string, { rejectWithValue }) => {
    const resp = await searchCard({ q: query });
    let message: string | undefined;

    // TODO: Add response status utility
    if (resp.status >= 200 && resp.status < 300 && notError(resp.data)) {
      if (resp.data.data.length === 1) {
        appHistory.replace(
          {
            pathname: sitemap.results.urls[0],
            search: `?${createSearchParams({ q: query })}`,
          },
          {
            list: resp.data,
          },
        );
        return resp.data;
      }
      message = REDUX.MESSAGE.SEARCHFORCARD.TOOMANY;
    }
    appHistory.push(
      {
        pathname: sitemap.results.urls[0],
        search: `?${createSearchParams({ q: query })}`,
      },
      {
        response: resp.data,
      },
    );
    return rejectWithValue(message ?? REDUX.MESSAGE.SEARCHFORCARD.NOTFOUND);
  },
);

builders.push((builder) =>
  builder
    .addCase(...pendingCaseReducer(loadSearch.pending))
    .addCase(
      ...fulfilledCaseReducer(loadSearch.fulfilled, (state, { payload }) => {
        state.cards = payload.data;
      }),
    )
    .addCase(
      ...rejectedCaseReducer(loadSearch.rejected, (state) => {
        state.cards = [];
      }),
    ),
);

export const cardsBuilder = (builder: ActionReducerMapBuilder<CardsState>) => {
  builders.forEach((builderFunction) => {
    builderFunction(builder);
  });
};

export const cardThunks = { searchForCard, loadSearch };
