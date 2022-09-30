import {configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';
import routineReducer from './routine/routineSlice';
import workoutReducer from './workout/workoutSlice';
import workoutExerciseReducer from './workoutExercise/workoutExerciseSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    routine: routineReducer,
    workout: workoutReducer,
    workoutExercise: workoutExerciseReducer,
  },
});
