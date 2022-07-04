export type RequestStatus =
  | {
      message?: string;
      requestId?: string;
      status: 'idle' | 'calling';
      success?: boolean;
    }
  | {
      message: string;
      requestId?: string;
      status: 'idle' | 'calling';
      success: false;
    };

export type APISlice<T extends string = string> = {
  requests: Record<T, RequestStatus>;
};
