import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import workoutService from './workoutService';

export const getWorkouts = createAsyncThunk(
  'workout/getWorkouts',
  async (_, thunkAPI) => {
    try {
      const workouts = await workoutService.getWorkouts();
      return workouts;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  workouts: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getWorkouts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getWorkouts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workouts = action.payload;
      })
      .addCase(getWorkouts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = workoutSlice.actions;
export default workoutSlice.reducer;
