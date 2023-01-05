import {
  APIError,
  APIList,
  APIResponse,
  FormValueKeys,
  FormValues,
} from '../types';

export const notError = <T>(data: APIResponse<T>): data is APIList<T> => {
  if ((data as APIError).status) return false;

  return true;
};

export const spreadTypeline = (typeline: string) => {
  const [cardTypes, types] = typeline
    .split(' — ')
    .map((type) => type.split(' '));
  return {
    cardTypes,
    types,
  };
};

const keyToQueryMap = {
  color: 'c:',
  rarity: 'r:',
  cardName: '',
  text: 'o:',
  type: 't:',
  manaCost: 'm:',
};

export const convertValuesToQuery = (values: FormValues) => {
  return (
    Object.entries(values) as [FormValueKeys, FormValues[keyof FormValues]][]
  ).reduce((acc, cur) => {
    const [key, value] = cur;
    let searchParam = keyToQueryMap[key];
    if (value.length === 0) {
      searchParam = '';
    }
    if (Array.isArray(value)) {
      searchParam += value.join('');
    } else {
      searchParam += value;
    }
    return `${acc}${
      searchParam.length > 0 ? `${acc.length > 0 ? ' ' : ''}${searchParam}` : ''
    }`;
  }, '');
};
