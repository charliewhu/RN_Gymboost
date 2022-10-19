import {getSetCount, getTotalWeekSets} from './workoutExerciseSetSlice';

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

  describe('getTotalWeekSets', () => {
    it('returns 0 with no items', () => {
      const state = {
        workout: {
          workouts: [
            {id: 1, created_on: '2022-09-02T10:49:07.982317Z'},
            {id: 2, created_on: '2022-09-03T10:49:07.982317Z'},
          ],
        },
        workoutExercise: {
          workoutExercises: [
            {
              id: 1,
              workout: 1,
            },
          ],
        },
        workoutExerciseSet: {
          workoutExerciseSets: [
            {
              id: 1,
              workout_exercise: 1,
            },
          ],
        },
      };

      const result = getTotalWeekSets(state);
      expect(result).toEqual(0);
    });

    it('returns 1 with 1 items', () => {
      const state = {
        workout: {
          workouts: [
            {id: 1, created_on: new Date().toISOString()},
            {id: 2, created_on: '2022-09-03T10:49:07.982317Z'},
            {id: 3, created_on: '2022-09-03T10:49:07.982317Z'},
          ],
        },
        workoutExercise: {
          workoutExercises: [
            {
              id: 1,
              workout: 1,
            },
          ],
        },
        workoutExerciseSet: {
          workoutExerciseSets: [
            {
              id: 1,
              workout_exercise: 1,
            },
          ],
        },
      };

      const result = getTotalWeekSets(state);
      expect(result).toEqual(1);
    });
  });
});
