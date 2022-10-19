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

  describe('getSetCountFromWorkoutId', () => {
    it('returns 0 with no items', () => {
      const state = {
        workoutExercise: {
          workoutExercises: [],
        },
        workoutExerciseSet: {
          workoutExerciseSets: [],
        },
      };

      const result = getSetCountFromWorkoutId(state, 1);
      expect(result).toEqual(0);
    });

    it('returns 1 with 1 item', () => {
      const state = {
        workoutExercise: {
          workoutExercises: [{id: 1, workout: 1}],
        },
        workoutExerciseSet: {
          workoutExerciseSets: [{workout_exercise: 1}],
        },
      };

      const result = getSetCountFromWorkoutId(state, [1]);
      expect(result).toEqual(1);
    });
  });
});
