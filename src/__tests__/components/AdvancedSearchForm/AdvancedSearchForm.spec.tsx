import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdvancedSearchForm } from '../../../components';
import { searchForCard } from '../../../redux';

const user = userEvent.setup();

const mockDispatch = jest.fn();

jest.mock('../../../redux', () => ({
  useAppDispatch: jest.fn(() => mockDispatch),
  searchForCard: jest.fn(),
}));

const mockSearchForCard = searchForCard as unknown as jest.Mock;

const renderComponent = () => render(<AdvancedSearchForm />);

describe('AdvancedSearchForm Suite', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  describe('Input tests', () => {
    it('Should have the appropriate number of input textboxes', async () => {
      renderComponent();
      const textBoxes = await screen.findAllByRole('textbox');

      expect(textBoxes.length).toBe(4);
      const cardNameInput = await screen.findByLabelText('Card Name');
      expect(cardNameInput).toBeInTheDocument();
      const cardTextInput = await screen.findByLabelText('Card Text');
      expect(cardTextInput).toBeInTheDocument();
      const cardTypeInput = await screen.findByLabelText('Card Type');
      expect(cardTypeInput).toBeInTheDocument();
      const cardManaCostInput = await screen.findByLabelText('Card Mana Cost');
      expect(cardManaCostInput).toBeInTheDocument();
    });

    it('Should have the appropriate number of input checkboxes', async () => {
      renderComponent();
      const textBoxes = await screen.findAllByRole('checkbox');

      expect(textBoxes.length).toBe(10);
    });

    it('Should update form values when the user inputs them', async () => {
      const { asFragment } = renderComponent();

      const cardNameInput = await screen.findByLabelText('Card Name');
      const cardTextInput = await screen.findByLabelText('Card Text');
      const cardTypeInput = await screen.findByLabelText('Card Type');
      const cardManaCostInput = await screen.findByLabelText('Card Mana Cost');

      await user.click(cardNameInput);
      let initialFragment = asFragment();
      await user.keyboard('foo');
      expect(initialFragment).toMatchDiffSnapshot(asFragment());

      await user.click(cardTextInput);
      initialFragment = asFragment();
      await user.keyboard('bar');
      expect(initialFragment).toMatchDiffSnapshot(asFragment());

      await user.click(cardTypeInput);
      initialFragment = asFragment();
      await user.keyboard('baz');
      expect(initialFragment).toMatchDiffSnapshot(asFragment());

      await user.click(cardManaCostInput);
      initialFragment = asFragment();
      await user.keyboard('foobar');
      expect(initialFragment).toMatchDiffSnapshot(asFragment());
    });

    it('Should update form values when checkboxes are clicked.', async () => {
      renderComponent();

      const checkboxes = await screen.findAllByRole('checkbox');

      for (const checkbox of checkboxes) {
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
        await user.click(checkbox);
        expect(checkbox).not.toBeChecked();
      }
    });

    it('Should submit the form properly', async () => {
      renderComponent();

      const cardNameInput = await screen.findByLabelText('Card Name');
      const cardTypeInput = await screen.findByLabelText('Card Type');
      const checkboxes = await screen.findAllByRole('checkbox');
      const submitButton = await screen.findByRole('button');

      await user.click(cardNameInput);
      await user.keyboard('foo');
      await user.click(cardTypeInput);
      await user.keyboard('bar');
      await user.click(checkboxes[0]);
      await user.click(checkboxes[6]);
      await user.click(submitButton);

      expect(mockSearchForCard).toBeCalledWith('foo c:W r:C t:bar');
      expect(mockDispatch).toBeCalledWith(searchForCard('foo c:W r:C t:bar'));
    });
  });
});
