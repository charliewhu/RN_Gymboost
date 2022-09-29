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
    reset: state => initialState,
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
      });
  },
});

export const {reset} = routineSlice.actions;
export default routineSlice.reducer;
