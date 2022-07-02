import { store } from '../../redux';

describe('store Suite', () => {
  it('Should have the correct properties', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
