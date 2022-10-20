import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getSetCountFromWorkoutExerciseIdList} from '../workoutExercise/workoutExerciseSlice';
import workoutExerciseSetService from './workoutExerciseSetService';

export const getWorkoutExerciseSets = createAsyncThunk(
  'workoutExerciseSet/getWorkoutExerciseSets',
  async (_, thunkAPI) => {
    try {
      const workoutExercises =
        await workoutExerciseSetService.getWorkoutExerciseSets();
      return workoutExercises;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postWorkoutExerciseSet = createAsyncThunk(
  'workoutExerciseSet/postWorkoutExerciseSet',
  async (data, thunkAPI) => {
    try {
      const workoutExercise =
        await workoutExerciseSetService.postWorkoutExerciseSet(data);
      return workoutExercise;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteWorkoutExerciseSet = createAsyncThunk(
  'workoutExerciseSet/deleteWorkoutExerciseSet',
  async (id, thunkAPI) => {
    try {
      await workoutExerciseSetService.deleteWorkoutExerciseSet(id);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  workoutExerciseSets: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const workoutExerciseSetSlice = createSlice({
  name: 'workoutExerciseSet',
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getWorkoutExerciseSets.pending, state => {
        state.isLoading = true;
      })
      .addCase(getWorkoutExerciseSets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workoutExerciseSets = action.payload;
      })
      .addCase(getWorkoutExerciseSets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postWorkoutExerciseSet.pending, state => {
        state.isLoading = true;
      })
      .addCase(postWorkoutExerciseSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workoutExerciseSets.push(action.payload);
      })
      .addCase(postWorkoutExerciseSet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteWorkoutExerciseSet.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWorkoutExerciseSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workoutExerciseSets = state.workoutExerciseSets.filter(
          set => set.id !== action.payload,
        );
      })
      .addCase(deleteWorkoutExerciseSet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = workoutExerciseSetSlice.actions;
export default workoutExerciseSetSlice.reducer;

// Selectors

export function getSetCount(state) {
  return state.workoutExerciseSet.workoutExerciseSets.length;
}

export function getTotalWeekSets(state) {
  // const today = new Date();
  // const workoutIds = state.workout.workouts
  //   .filter(
  //     item =>
  //       new Date(Date.parse(item.created_on)) >=
  //       new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
  //   )
  //   .map(o => o.id);

  const workoutIds = getWeekWorkoutIds(state);

  const workoutExercises = state.workoutExercise.workoutExercises
    .filter(o => workoutIds.includes(o.workout))
    .map(o => o.id);

  return getSetCountFromWorkoutExerciseIdList(state, workoutExercises);
}
