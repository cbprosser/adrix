import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpleCardSearchBar } from '../../../components';
import {
  initialCardsState,
  searchForCard,
  useAppSelector,
} from '../../../redux';
import { CardsState } from '../../../types';
import { MOCK, mockCard, mockInitialState } from '../../testUtils';

const mockDispatch = jest.fn();

jest.mock('../../../redux/thunks');

jest.mock('../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(() => mockDispatch),
}));

jest.mock('axios');

const mockSelector = useAppSelector as jest.Mock;
const mockSearchForCard = searchForCard as unknown as jest.Mock;

describe('SimpleCardSearchBar Suite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSelector.mockReturnValue(initialCardsState);
  });

  it('Should match the snapshot', () => {
    const view = render(<SimpleCardSearchBar />);

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('Should set the proper state when a query is typed in', async () => {
    render(<SimpleCardSearchBar />);

    expect(screen.getByRole('textbox')).toBeDefined();

    await userEvent.type(screen.getByRole('textbox'), mockCard.name);

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toEqual(
      mockCard.name,
    );
  });

  it('Should call for cards when the form is submitted', async () => {
    render(<SimpleCardSearchBar />);

    expect(screen.getByRole('textbox')).toBeDefined();

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toEqual('');

    await userEvent.type(screen.getByRole('textbox'), mockCard.name);

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toEqual(
      mockCard.name,
    );

    await userEvent.type(screen.getByRole('textbox'), '{enter}');

    expect(mockDispatch).toBeCalledWith(mockSearchForCard(mockCard.name));
  });

  it('Should be able to have its value controlled by props', () => {
    const view = render(<SimpleCardSearchBar value="" />);

    expect(screen.getByRole('textbox')).toBeDefined();

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toEqual('');

    view.rerender(<SimpleCardSearchBar value={mockCard.name} />);

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toEqual(
      mockCard.name,
    );
  });

  it('Should display a message when there is an error', () => {
    mockSelector.mockReturnValue({ message: MOCK.MESSAGE });
    render(<SimpleCardSearchBar />);

    expect(screen.getByText(MOCK.MESSAGE)).toBeDefined();
  });

  it('Should not display a message when there is an error and hideError is true', () => {
    mockSelector.mockReturnValue({
      ...initialCardsState,
      requests: { searchForCard: { message: MOCK.MESSAGE } },
    } as CardsState);
    render(<SimpleCardSearchBar hideError={true} />);

    expect(screen.queryByText(MOCK.MESSAGE)).toBeNull();
  });

  it('Should call the onChange callback when the value prop changes', async () => {
    const handleChange = jest.fn();
    render(<SimpleCardSearchBar onChange={handleChange} />);

    expect(screen.getByRole('textbox')).toBeDefined();

    await userEvent.type(screen.getByRole('textbox'), mockCard.name);

    expect(handleChange).toBeCalledWith(mockCard.name);
  });

  test('[COVERAGE] The inner function of useAppSelector', () => {
    render(<SimpleCardSearchBar />);

    expect(mockSelector.mock.calls[0][0](mockInitialState)).toEqual(
      initialCardsState.requests.searchForCard,
    );
  });
});
