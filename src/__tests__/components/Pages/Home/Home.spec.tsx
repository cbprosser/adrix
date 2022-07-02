import { render } from '@testing-library/react';
import { Home } from '../../../../components';
import { initialCardsState, useAppSelector } from '../../../../redux';

jest.mock('../../../../components/SimpleCardSearchBar', () => ({
  SimpleCardSearchBar: (props: any) => (
    <div {...props}>SimpleCardSearchBar</div>
  ),
}));

const mockDispatch = jest.fn();

jest.mock('../../../../redux/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(() => mockDispatch),
}));

const mockSelector = useAppSelector as jest.Mock;

describe('Home Suite', () => {
  beforeEach(() => {
    mockSelector.mockReturnValue(initialCardsState);
  });

  it('Should match the snapshot', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
