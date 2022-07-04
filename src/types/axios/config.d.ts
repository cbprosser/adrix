import { AxiosResponse } from 'axios';
import { APICard, APIImageVersion } from '../models';
import { APIError } from '../models/APIError';
import { APIList } from '../models/APIList';

type RandomCardQueryParams =
  | {
      q?: string;
      format?: 'text';
    }
  | (
      | {
          format?: 'image';
          face?: 'back';
          version?: APIImageVersion;
        }
      | {
          format: never;
        }
    )
  | {
      format?: 'json';
      pretty?: boolean;
    };

type SearchCardQueryParams = {
  q?: string;
};

export type APIResponse<T = unknown> = APIError | APIList<T>;

export declare function searchCard(
  props?: SearchCardQueryParams,
): Promise<AxiosResponse<APIResponse<APICard>, unknown>>;
