import { render } from '@testing-library/react';
import { AppHeader } from '../../../components/AppHeader';

jest.mock('../../../components/SimpleCardSearchBar', () => ({
  SimpleCardSearchBar: (props: any) => (
    <div {...props}>SimpleCardSearchBar</div>
  ),
}));

describe('AppHeader Suite', () => {
  it('should match the snapshot', () => {
    const view = render(<AppHeader />);

    expect(view.asFragment()).toMatchSnapshot();
  });
});
