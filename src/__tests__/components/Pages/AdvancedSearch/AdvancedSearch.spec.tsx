import { render } from '@testing-library/react';
import { AdvancedSearch } from '../../../../components';

jest.mock('../../../../components/AdvancedSearchForm', () => ({
  AdvancedSearchForm: () => <div>AdvancedSearchForm Mocked</div>,
}));

describe('AdvancedSearch', () => {
  it('should match the snapshot', () => {
    const { container } = render(<AdvancedSearch />);
    expect(container).toMatchSnapshot();
  });
});
