import { render } from '@testing-library/react';
import { Home } from '../../../../components';
import { initialCardsState, useAppSelector } from '../../../../redux';

jest.mock('../../../../components/SimpleCardSearchBar', () => ({
  SimpleCardSearchBar: (props: any) => (
    <div {...props}>Mocked SimpleCardSearchBar</div>
  ),
}));

jest.mock('../../../../components/AdvancedSearchLinkButton', () => ({
  AdvancedSearchLinkButton: (props: any) => (
    <div {...props}>Mocked AdvancedSearchLinkButton</div>
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
