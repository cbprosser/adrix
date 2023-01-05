import { FormControlProps } from '@mui/material';
import { advancedSearch } from '../../../constants';
import { MTGColorAbbreviation, MTGRarityAbbreviation } from '../MTGStaticTypes';

export type AdvancedSearchFormState = {
  values: FormValues;
  feedback: Partial<Record<keyof FormValues, FormFeedback>>;
};

export type FormValues = {
  [K in FormValueKeys]: K extends FormValueColorAbbreviations
    ? MTGColorAbbreviation[]
    : K extends FormValueRarityAbbreviations
    ? MTGRarityAbbreviation[]
    : K extends FormValueStrings
    ? string
    : never;
};

export type FormValueKeys = typeof advancedSearch.formFields[number];

type FormValueColorAbbreviations = 'color';

type FormValueRarityAbbreviations = 'rarity';

type FormValueStrings = Exclude<
  FormValueKeys,
  FormValueColorAbbreviations | FormValueRarityAbbreviations
>;

export type FormFeedback = {
  status: Omit<FormControlProps['color'], 'primary' | string>;
  message: string;
};
