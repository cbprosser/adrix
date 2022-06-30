export type APIError = {
  status: number;
  code: string;
  details: string;
  type?: string;
  warnings?: string[];
};
