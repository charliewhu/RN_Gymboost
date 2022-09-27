import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import exerciseService from './exerciseService';

export const getExercises = createAsyncThunk(
  'exercise/getExercises',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const exercises = await exerciseService.getExercises(token);
      return exercises;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  exercises: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(getExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises = action.payload;
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = exerciseSlice.actions;
export default exerciseSlice.reducer;
