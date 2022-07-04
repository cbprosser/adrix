import { render } from '@testing-library/react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { Results } from '../../../../components';
import {
  getMockCardList,
  mockAComponent,
  mockCardError,
} from '../../../testUtils';

jest.mock('../../../../components/CardDisplay', () => ({
  CardDisplay: (props: any) => mockAComponent('CardDisplay')(props),
}));

jest.mock('../../../../components/MultipleCardDisplay', () => ({
  MultipleCardDisplay: (props: any) =>
    mockAComponent('MultipleCardDisplay')(props),
}));

const mockDispatch = jest.fn();

jest.mock('../../../../redux/thunks');

jest.mock('../../../../redux/hooks', () => ({
  useAppDispatch: jest.fn(() => mockDispatch),
}));

jest.mock('axios');

jest.mock('react-router-dom');

const location = useLocation as jest.Mock;
const search = useSearchParams as jest.Mock;

describe('Home Suite', () => {
  beforeEach(() => {
    search.mockReturnValue([new URLSearchParams('q=adrix%20and%20nev')]);
  });

  it('Should match the snapshot when there is no card in the history', () => {
    location.mockReturnValue({
      pathname: '/search/results',
      search: 'q=adrix%20and%20nev',
    });
    const { asFragment } = render(<Results />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when a card is found', () => {
    location.mockReturnValue({
      pathname: '/search/results',
      search: 'q=adrix%20and%20nev',
      state: {
        response: getMockCardList(),
      },
    });
    const { asFragment } = render(<Results />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when no card is found', () => {
    location.mockReturnValue({
      pathname: '/search/results',
      search: 'q=adrix%20and%20nev',
      state: {
        response: mockCardError,
      },
    });
    const { asFragment } = render(<Results />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when more than one card is found', () => {
    location.mockReturnValue({
      pathname: '/search/results',
      search: 'q=adrix%20and%20nev',
      state: {
        response: getMockCardList(true),
      },
    });
    const { asFragment } = render(<Results />);

    expect(asFragment()).toMatchSnapshot();
  });
});
