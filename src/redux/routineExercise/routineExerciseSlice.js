import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import routineExerciseService from './routineExerciseService';

export const getRoutineExercises = createAsyncThunk(
  'routineExercise/getRoutineExercises',
  async (_, thunkAPI) => {
    try {
      const routineExercises =
        await routineExerciseService.getRoutineExercises();
      return routineExercises;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postRoutineExercise = createAsyncThunk(
  'routineExercise/postRoutineExercise',
  async (data, thunkAPI) => {
    try {
      const routineExercise = await routineExerciseService.postRoutineExercise(
        data,
      );
      return routineExercise;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteRoutineExercise = createAsyncThunk(
  'routineExercise/deleteRoutineExercise',
  async (id, thunkAPI) => {
    try {
      await routineExerciseService.deleteRoutineExercise(id);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  routineExercises: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const routineExerciseSlice = createSlice({
  name: 'routineExercise',
  initialState: initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getRoutineExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRoutineExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routineExercises = action.payload;
      })
      .addCase(getRoutineExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postRoutineExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(postRoutineExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routineExercises.push(action.payload);
      })
      .addCase(postRoutineExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRoutineExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteRoutineExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routineExercises = state.routineExercises.filter(
          routineExercise => routineExercise.id !== action.payload,
        );
      })
      .addCase(deleteRoutineExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = routineExerciseSlice.actions;
export default routineExerciseSlice.reducer;
