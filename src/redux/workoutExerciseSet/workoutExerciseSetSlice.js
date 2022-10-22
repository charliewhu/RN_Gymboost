import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getWeekWorkoutIds} from '../workout/workoutSlice';
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

export const putWorkoutExerciseSet = createAsyncThunk(
  'workoutExerciseSet/putWorkoutExerciseSet',
  async (data, thunkAPI) => {
    try {
      const workoutExercise =
        await workoutExerciseSetService.putWorkoutExerciseSet(data);
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

export const deleteAllWorkoutExerciseSets = createAsyncThunk(
  'workoutExerciseSet/deleteAllWorkoutExerciseSets',
  async (workoutExerciseId, thunkAPI) => {
    try {
      await workoutExerciseSetService.deleteAllWorkoutExerciseSets(
        workoutExerciseId,
      );
      return workoutExerciseId;
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
      .addCase(putWorkoutExerciseSet.pending, state => {
        state.isLoading = true;
      })
      .addCase(putWorkoutExerciseSet.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.workoutExerciseSets.findIndex(
          set => set.id === action.payload.id,
        );
        state.workoutExerciseSets[index] = action.payload;
      })
      .addCase(putWorkoutExerciseSet.rejected, (state, action) => {
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
      })
      .addCase(deleteAllWorkoutExerciseSets.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteAllWorkoutExerciseSets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workoutExerciseSets = state.workoutExerciseSets.filter(
          set => set.workout_exercise !== action.payload,
        );
      })
      .addCase(deleteAllWorkoutExerciseSets.rejected, (state, action) => {
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
  const workoutIds = getWeekWorkoutIds(state);

  const workoutExercises = state.workoutExercise.workoutExercises
    .filter(o => workoutIds.includes(o.workout))
    .map(o => o.id);

  return getSetCountFromWorkoutExerciseIdList(state, workoutExercises);
}
