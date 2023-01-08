import { render } from '@testing-library/react';
import { AdvancedSearchLinkButton } from '../../../components/AdvancedSearchLinkButton';

jest.mock('react-router-dom', () => ({
  Link: (props: any) => (
    <div data-testingid="router-link-mock" {...props}>
      {props.children}
    </div>
  ),
}));

describe('AdvancedSearchLinkButton Suite', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<AdvancedSearchLinkButton />);

    expect(asFragment()).toMatchSnapshot();
  });
});
