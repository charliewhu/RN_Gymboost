import {getSetCountFromWorkoutExerciseIdList} from './workoutExerciseSlice';

describe('selectors', () => {
  describe('getSetCountFromWorkoutExerciseIdList', () => {
    it('returns 0 with no items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [],
        },
      };

      const result = getSetCountFromWorkoutExerciseIdList(state, [1]);
      expect(result).toEqual(0);
    });

    it('returns 1 with 1 item', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [{workout_exercise: 1}],
        },
      };

      const result = getSetCountFromWorkoutExerciseIdList(state, [1]);
      expect(result).toEqual(1);
    });
  });

  describe('getWorkoutExerciseSetCount', () => {
    it('returns 0 with no items', () => {
      const state = {
        workoutExerciseSet: {
          workoutExerciseSets: [],
        },
      };

      const result = getWorkoutExerciseSetCount(state, 1);
      expect(result).toEqual(0);
    });
  });
});
