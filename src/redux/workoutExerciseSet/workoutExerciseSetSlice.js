import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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
    reset: state => initialState,
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
      });
  },
});

export const {reset} = workoutExerciseSetSlice.actions;
export default workoutExerciseSetSlice.reducer;
