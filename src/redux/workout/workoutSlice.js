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

export const postWorkout = createAsyncThunk(
  'workout/postWorkout',
  async (_, thunkAPI) => {
    try {
      const workout = await workoutService.postWorkout();
      return workout;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteWorkout = createAsyncThunk(
  'workout/deleteWorkout',
  async (id, thunkAPI) => {
    try {
      await workoutService.deleteWorkout(id);
      return id;
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
  isUpdate: false,
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
      })
      .addCase(postWorkout.pending, state => {
        state.isLoading = true;
      })
      .addCase(postWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdate = true;
        state.workouts.push(action.payload);
      })
      .addCase(postWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isUpdate = false;
        state.message = action.payload;
      })
      .addCase(deleteWorkout.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workouts = state.workouts.filter(
          workout => workout.id !== action.payload,
        );
      })
      .addCase(deleteWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = workoutSlice.actions;
export default workoutSlice.reducer;
