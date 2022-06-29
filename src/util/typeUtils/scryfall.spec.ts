import * as scryfallTypesObjects from './scryfall';

describe('scryfall types objects Suite', () => {
  it("Should match what's expected", () => {
    expect(scryfallTypesObjects).toMatchSnapshot();
  });
});
