import { APIError, APIList, APIResonse } from '../types';

export const notError = <T>(data: APIResonse<T>): data is APIList<T> => {
  if ((data as APIError).status) return false;

  return true;
};
