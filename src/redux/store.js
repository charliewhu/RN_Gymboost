import {configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';
import routineReducer from './routine/routineSlice';
import routineExerciseReducer from './routineExercise/routineExerciseSlice';
import workoutReducer from './workout/workoutSlice';
import workoutExerciseReducer from './workoutExercise/workoutExerciseSlice';
import workoutExerciseSetReducer from './workoutExerciseSet/workoutExerciseSetSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    routine: routineReducer,
    routineExercise: routineExerciseReducer,
    workout: workoutReducer,
    workoutExercise: workoutExerciseReducer,
    workoutExerciseSet: workoutExerciseSetReducer,
  },
});
