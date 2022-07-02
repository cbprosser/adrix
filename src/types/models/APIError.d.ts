export type APIError = {
  object: 'error';
  status: number;
  code: string;
  details: string;
  type?: string;
  warnings?: string[];
};
