import {getSetCountFromWorkoutId} from './workoutSlice';

describe('selectors', () => {
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

      const result = getSetCountFromWorkoutId(state, 1);
      expect(result).toEqual(1);
    });
  });
});