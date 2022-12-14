import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import routineService from './routineService';

export const getRoutines = createAsyncThunk(
  'routine/getRoutines',
  async (_, thunkAPI) => {
    try {
      const routines = await routineService.getRoutines();

      return routines;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postRoutine = createAsyncThunk(
  'routine/postRoutine',
  async (data, thunkAPI) => {
    try {
      const routine = await routineService.postRoutine(data);
      return routine;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteRoutine = createAsyncThunk(
  'routine/deleteRoutine',
  async (id, thunkAPI) => {
    try {
      await routineService.deleteRoutine(id);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  routines: [],
  isLoading: true,
  isError: false,
  message: '',
};

export const routineSlice = createSlice({
  name: 'routine',
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getRoutines.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRoutines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routines = action.payload;
      })
      .addCase(getRoutines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postRoutine.pending, state => {
        state.isLoading = true;
      })
      .addCase(postRoutine.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routines.push(action.payload);
      })
      .addCase(postRoutine.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRoutine.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteRoutine.fulfilled, (state, action) => {
        state.isLoading = false;
        state.routines = state.routines.filter(
          routine => routine.id !== action.payload,
        );
      })
      .addCase(deleteRoutine.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = routineSlice.actions;
export default routineSlice.reducer;
