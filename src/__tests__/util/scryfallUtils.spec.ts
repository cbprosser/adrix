import { notError, spreadTypeline } from '../../util/scryfallUtils';
import { getMockCardList, mockCard, mockCardError } from '../testUtils';

describe('scryfallUtils Suite', () => {
  describe('notError Suite', () => {
    it('Should properly determine if an APIResponse is an error', () => {
      expect(notError(getMockCardList())).toBe(true);
      expect(notError(mockCardError)).toBe(false);
    });
  });

  describe('spreadTypeLine Suite', () => {
    it('Should properly split the type line', () => {
      expect(spreadTypeline(mockCard.type_line)).toEqual({
        cardTypes: ['Legendary', 'Creature'],
        types: ['Merfolk', 'Wizard'],
      });
    });
  });
});
