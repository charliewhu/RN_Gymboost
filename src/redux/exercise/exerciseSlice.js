import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import exerciseService from './exerciseService';

export const getExercises = createAsyncThunk(
  'exercise/getExercises',
  async (_, thunkAPI) => {
    try {
      const exercises = await exerciseService.getExercises();
      return exercises;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postExercise = createAsyncThunk(
  'exercise/postExercise',
  async (data, thunkAPI) => {
    try {
      const exercise = await exerciseService.postExercise(data);
      return exercise;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteExercise = createAsyncThunk(
  'exercise/deleteExercise',
  async (id, thunkAPI) => {
    try {
      await exerciseService.deleteExercise(id);
      return id;
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
    reset: () => initialState,
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
      })
      .addCase(postExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(postExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises.push(action.payload);
      })
      .addCase(postExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises = state.exercises.filter(
          ex => ex.id !== action.payload,
        );
      })
      .addCase(deleteExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = exerciseSlice.actions;
export default exerciseSlice.reducer;
