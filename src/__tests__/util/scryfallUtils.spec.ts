import { notError } from '../../util/scryfallUtils';
import { getMockCardList, mockCardError } from '../testUtils';

describe('scryfallUtils Suite', () => {
  describe('notError Suite', () => {
    it('Should properly determine if an APIResponse is an error', () => {
      expect(notError(getMockCardList())).toBe(true);
      expect(notError(mockCardError)).toBe(false);
    });
  });
});
