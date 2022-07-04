import { APIError, APIList, APIResponse } from '../types';

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
