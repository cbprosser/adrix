import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardDisplay } from '../../../components/CardDisplay';
import { APICard } from '../../../types';
import {
  mockCard,
  mockFlipCard,
  mockPlaneswalkerCard,
  mockTransformCard,
} from '../../testUtils';

const waitFor = (timeout = 1000) =>
  new Promise((res) => setTimeout(() => res(undefined), timeout));

const user = userEvent.setup();

const renderComponent = (card?: APICard) => render(<CardDisplay card={card} />);

describe('CardDisplay Suite', () => {
  it('Should match the snapshot when no card is present', () => {
    const view = renderComponent();

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when a standard card is present', () => {
    const view = renderComponent(mockCard);

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when a planeswalker card is present', () => {
    const view = renderComponent(mockPlaneswalkerCard);

    expect(view.asFragment()).toMatchSnapshot();
  });

  describe('Multi faced card tests', () => {
    const renderTransform = () => renderComponent(mockTransformCard);
    it('Should match the snapshot when a multi faced card is present', () => {
      const view = renderTransform();

      expect(view.asFragment()).toMatchSnapshot();
    });

    it('Should have a transform button', async () => {
      renderTransform();

      const buttons = await screen.findAllByRole('button');

      expect(buttons.length).toBeGreaterThan(0);

      const transformButton = buttons[0];

      const svg = await within(transformButton).findByTestId('LoopIcon');

      expect(svg).toBeInTheDocument();
    });

    it('Should flip the card when the transform button is clicked', async () => {
      const { asFragment } = renderTransform();

      const buttons = await screen.findAllByRole('button');

      expect(buttons.length).toBeGreaterThan(0);

      const transformButton = buttons[0];

      const initialFragment = asFragment();
      await user.click(transformButton);
      await waitFor();
      expect(initialFragment).toMatchDiffSnapshot(asFragment());
      await user.click(transformButton);
      await waitFor();
      expect(initialFragment).toMatchDiffSnapshot(asFragment());
    });
  });

  describe('Multi sided card test', () => {
    const renderFlip = () => render(<CardDisplay card={mockFlipCard} />);
    it('Should match the snapshot when a multi sided card is present', () => {
      const { asFragment } = renderFlip();

      expect(asFragment()).toMatchSnapshot();
    });

    it('Should have a transform button', async () => {
      renderFlip();

      const buttons = await screen.findAllByRole('button');

      expect(buttons.length).toBeGreaterThan(0);

      const transformButton = buttons[0];

      const svg = await within(transformButton).findByTestId('LoopIcon');

      expect(svg).toBeInTheDocument();
    });

    it('Should flip the card when the transform button is clicked', async () => {
      const { asFragment } = renderFlip();

      const buttons = await screen.findAllByRole('button');

      expect(buttons.length).toBeGreaterThan(0);

      const transformButton = buttons[0];

      const initialFragment = asFragment();
      await user.click(transformButton);
      await waitFor();
      expect(initialFragment).toMatchDiffSnapshot(asFragment());
      await user.click(transformButton);
      await waitFor();
      expect(initialFragment).toMatchDiffSnapshot(asFragment());
    });
  });
});
