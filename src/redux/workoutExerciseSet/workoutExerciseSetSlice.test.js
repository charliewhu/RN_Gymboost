import {getSetCount} from './workoutExerciseSetSlice';

describe('selectors', () => {
  describe('getTotalSets', () => {
    it('returns 0 with no items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [],
        },
      };

      const result = getSetCount(state);
      expect(result).toEqual(0);
    });

    it('returns 1 with 1 items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [{id: 1}],
        },
      };

      const result = getSetCount(state);
      expect(result).toEqual(1);
    });

    it('returns 2 with 2 items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [{id: 1}, {id: 2}],
        },
      };

      const result = getSetCount(state);
      expect(result).toEqual(2);
    });
  });
});
