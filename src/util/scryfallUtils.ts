import { APIResonse } from '../types/axios';
import { APIError } from '../types/models/APIError';
import { APIList } from '../types/models/APIList';

export const notError = <T>(data: APIResonse<T>): data is APIList<T> => {
  if ((data as APIError).status) return false;

  return true;
};
