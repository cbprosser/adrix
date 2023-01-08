import {
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  TextFieldProps,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FormEventHandler, useState } from 'react';
import { mtgConstants } from '../../constants';
import { searchForCard, useAppDispatch } from '../../redux';
import { AdvancedSearchFormState, FormValueKeys } from '../../types';
import { convertSymbols, convertValuesToQuery } from '../../util';

const initialState: AdvancedSearchFormState = {
  values: {
    cardName: '',
    color: [],
    manaCost: '',
    rarity: [],
    text: '',
    type: '',
  },
  feedback: {},
};

export const AdvancedSearchForm = () => {
  const [{ values }, setState] = useState(initialState);
  const dispatch = useAppDispatch();

  const handleTextFieldChange: TextFieldProps['onChange'] = ({
    target: { id, value },
  }) => {
    setState((s) => ({
      ...s,
      values: { ...s.values, [id as FormValueKeys]: value },
    }));
  };

  const handleCheckboxChange: CheckboxProps['onChange'] = ({
    target: { id, checked },
  }) => {
    const [key, value] = id.split('_') as [FormValueKeys, string];
    setState((s) => ({
      ...s,
      values: {
        ...s.values,
        [key]: checked
          ? [...s.values[key], value]
          : (s.values[key] as []).filter((val) => val !== value),
      },
    }));
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(searchForCard(convertValuesToQuery(values)));
  };

  const getCommonProps = (id: FormValueKeys): TextFieldProps => ({
    id,
    value: values[id],
    onChange: handleTextFieldChange,
  });

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={2}>
        <Grid container flexGrow={1}>
          <Grid flexGrow={1}>
            <TextField
              fullWidth
              {...getCommonProps('cardName')}
              label="Card Name"
            />
          </Grid>
          <Grid flexGrow={1}>
            <TextField
              fullWidth
              {...getCommonProps('text')}
              label="Card Text"
            />
          </Grid>
          <Grid flexGrow={1}>
            <TextField
              fullWidth
              {...getCommonProps('type')}
              label="Card Type"
            />
          </Grid>
          <Grid flexGrow={1}>
            <TextField
              fullWidth
              {...getCommonProps('manaCost')}
              label="Card Mana Cost"
            />
          </Grid>
        </Grid>
        <Grid container flexGrow={1}>
          <Grid flexGrow={1}>
            <FormGroup>
              <FormLabel component="legend">Color</FormLabel>
              <Grid container spacing={1}>
                {mtgConstants.colorAbbreviations.map((abbr) => (
                  <Grid key={`${abbr}_checkbox_grid`}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id={`color_${abbr}`}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={
                        <span>
                          {convertSymbols(`{${abbr}}`)}
                          {` ${mtgConstants.colorAbbreviationMap[abbr]}`}
                        </span>
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>
          <Grid flexGrow={1}>
            <FormGroup>
              <FormLabel component="legend">Rarity</FormLabel>
              <Grid container spacing={1}>
                {mtgConstants.rarityAbbreviations.map((abbr) => (
                  <Grid key={`${abbr}_checkbox_grid`}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id={`rarity_${abbr}`}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={mtgConstants.rarityAbbreviationMap[abbr]}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>
        </Grid>
        <Grid
          flexGrow={1}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};
