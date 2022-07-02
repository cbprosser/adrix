/* eslint-disable @typescript-eslint/no-explicit-any */
export const mockAComponent = (name: string) => (props: any) =>
  <div {...props}>{name}</div>;
