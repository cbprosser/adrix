import * as scryfallTypesObjects from '../../../util/typeUtils/scryfall';

describe('scryfall types objects Suite', () => {
  it("Should match what's expected", () => {
    expect(scryfallTypesObjects).toMatchSnapshot();
  });
});
