import { render } from '@testing-library/react';
import { Results } from './Results';

describe('Home Suite', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Results />);

    expect(asFragment()).toMatchSnapshot();
  });
});
