export type RequestStatus =
  | {
      message?: string;
      requestId?: string;
      status: 'idle' | 'calling';
      success?: boolean;
    }
  | {
      success: false;
      message: string;
    };

export type APISlice<T extends string = string> = {
  requests: Record<T, RequestStatus>;
};
