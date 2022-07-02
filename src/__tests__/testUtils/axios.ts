import { AxiosResponse } from 'axios';

export const getMockResponse = <T, D = any>(
  data: T,
  status?: number,
  statusText?: string,
): AxiosResponse<T, D> => ({
  config: {},
  data,
  headers: {},
  status: status ?? 200,
  statusText: statusText ?? '',
});
