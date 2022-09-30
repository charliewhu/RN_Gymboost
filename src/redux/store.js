import {configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';
import routineReducer from './routine/routineSlice';
import workoutReducer from './workout/workoutSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    routine: routineReducer,
    workout: workoutReducer,
  },
});
