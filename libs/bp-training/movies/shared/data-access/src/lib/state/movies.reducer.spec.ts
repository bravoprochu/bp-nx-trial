import { featureReducer, initialState } from './movies.reducer';

describe('Movies Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = featureReducer.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
