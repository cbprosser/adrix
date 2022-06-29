import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home Suite', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
