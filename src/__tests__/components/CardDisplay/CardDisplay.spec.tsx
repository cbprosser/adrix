import { render } from '@testing-library/react';
import { CardDisplay } from '../../../components';
import { mockCard, mockPlaneswalkerCard } from '../../testUtils';

describe('CardDisplay Suite', () => {
  it('Should match the snapshot when no card is present', () => {
    const view = render(<CardDisplay />);

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when a standard card is present', () => {
    const view = render(<CardDisplay card={mockCard} />);

    expect(view.asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot when a planeswalker card is present', () => {
    const view = render(<CardDisplay card={mockPlaneswalkerCard} />);

    expect(view.asFragment()).toMatchSnapshot();
  });
});
