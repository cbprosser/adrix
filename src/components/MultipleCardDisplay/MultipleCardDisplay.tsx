import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { APIList, MultipleCardDisplayProps } from '../../types';
import { cardToMUIRow, muiRowToCard } from '../../util';

export const MultipleCardDisplay: React.FC<MultipleCardDisplayProps> = ({
  list,
}) => {
  const navigate = useNavigate();
  if (list) {
    const columns: GridColDef[] = [
      { field: 'rarity', headerName: 'Rarity', minWidth: 100 },
      { field: 'set', headerName: 'Set', width: 60 },
      { field: 'collector_number', headerName: 'Collector Number', width: 60 },
      { field: 'name', headerName: 'Card Name', flex: 1 },
      { field: 'type_line', headerName: 'Type', flex: 1 },
      { field: 'mana_cost', headerName: 'Mana Cost' },
      { field: 'loyalty', headerName: 'Loyalty', width: 60 },
      { field: 'power', headerName: 'Power', width: 60 },
      { field: 'toughness', headerName: 'Toughness', width: 60 },
      {
        field: 'usd',
        headerName: 'USD',
        width: 75,
        valueFormatter: ({ value }) => (value ? `$${value}` : undefined),
      },
      { field: 'tix', headerName: 'TIX', width: 75 },
      {
        field: 'eur',
        headerName: 'EUR',
        width: 75,
        valueFormatter: ({ value }) => (value ? `€${value}` : undefined),
      },
    ];

    const columnVisibilityModel: GridColumnVisibilityModel = {
      eur: false,
      loyalty: false,
      power: false,
      toughness: false,
    };

    const rows: GridRowsProp = list?.data.map(cardToMUIRow);
    return (
      <DataGrid
        {...{
          rows,
          columns,
        }}
        initialState={{
          columns: {
            columnVisibilityModel,
          },
        }}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: { printOptions: { disableToolbarButton: true } },
        }}
        disableSelectionOnClick
        onRowClick={({ row }) =>
          navigate(
            { search: `?q=${row.name}` },
            {
              state: {
                response: {
                  object: 'list',
                  total_cards: 1,
                  has_more: false,
                  data: [muiRowToCard(row)],
                } as APIList,
              },
            },
          )
        }
      />
    );
  }
  return <></>;
};
