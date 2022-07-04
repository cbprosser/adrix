/* eslint-disable testing-library/no-node-access */
import { DataGridProps } from '@mui/x-data-grid';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import { MultipleCardDisplay } from '../../../components';
import { MultipleCardDisplayProps } from '../../../types';
import { getMockCardList, mockCard } from '../../testUtils';

jest.mock('react-router-dom');
jest.mock('@mui/x-data-grid', () => {
  const { DataGrid } = jest.requireActual('@mui/x-data-grid');
  return {
    ...jest.requireActual('@mui/x-data-grid'),
    DataGrid: (props: DataGridProps) => {
      return <DataGrid {...props} disableVirtualization />;
    },
  };
});

const mockNavigate = useNavigate as jest.Mock;

const DimensionWrapped = (props: MultipleCardDisplayProps) => (
  <div style={{ height: 1920, width: 1080 }}>
    <MultipleCardDisplay {...props} />
  </div>
);

describe('MultipleCardDisplay Suite', () => {
  it('Should match the snapshot with no list', () => {
    const { asFragment } = render(<DimensionWrapped />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match the snapshot', () => {
    const { asFragment } = render(
      <DimensionWrapped list={getMockCardList(true)} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should be able to show all columns', async () => {
    const { asFragment } = render(
      <DimensionWrapped list={getMockCardList(true)} />,
    );

    await userEvent.click(screen.getByText('Columns'));
    await userEvent.click(screen.getByText('Show all'));

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should navigate with the appropriate state and params', async () => {
    const navigate = jest.fn();
    mockNavigate.mockReturnValueOnce(navigate);
    render(<DimensionWrapped list={getMockCardList(true)} />);

    await userEvent.click(screen.getByText(mockCard.name));

    expect(navigate).toBeCalledWith(
      { search: `?q=${mockCard.name}` },
      {
        state: {
          response: {
            object: 'list',
            total_cards: 1,
            has_more: false,
            data: [mockCard],
          },
        },
      },
    );
  });
});
