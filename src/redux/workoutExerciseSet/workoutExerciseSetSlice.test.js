import {getSetCountFromWorkoutExerciseIdList} from './workoutExerciseSetSlice';

describe('selectors', () => {
  describe('getSetCountFromWorkoutExerciseIdList', () => {
    it('returns 0 with no items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [],
        },
      };

      const result = getSetCountFromWorkoutExerciseIdList(state, [1]);
      expect(result).toEqual([]);
    });
  });
});
