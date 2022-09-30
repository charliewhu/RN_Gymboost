import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import workoutExerciseService from './workoutExerciseService';

export const getWorkoutExercises = createAsyncThunk(
  'workoutExercise/getWorkoutExercises',
  async (_, thunkAPI) => {
    try {
      const workoutExercises =
        await workoutExerciseService.getWorkoutExercises();
      return workoutExercises;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  workoutExercises: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const workoutExerciseSlice = createSlice({
  name: 'workoutExercise',
  initialState: initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getWorkoutExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(getWorkoutExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workoutExercises = action.payload;
      })
      .addCase(getWorkoutExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = workoutExerciseSlice.actions;
export default workoutExerciseSlice.reducer;
