import { store } from '.';

describe('store Suite', () => {
  it('Should have the correct properties', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
