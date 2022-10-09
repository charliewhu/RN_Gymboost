import {combineReducers, configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';
import routineReducer from './routine/routineSlice';
import routineExerciseReducer from './routineExercise/routineExerciseSlice';
import workoutReducer from './workout/workoutSlice';
import workoutExerciseReducer from './workoutExercise/workoutExerciseSlice';
import workoutExerciseSetReducer from './workoutExerciseSet/workoutExerciseSetSlice';

const rootReducer = combineReducers({
  exercise: exerciseReducer,
  routine: routineReducer,
  routineExercise: routineExerciseReducer,
  workout: workoutReducer,
  workoutExercise: workoutExerciseReducer,
  workoutExerciseSet: workoutExerciseSetReducer,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default setupStore;
