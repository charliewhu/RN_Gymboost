import {configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';
import routineReducer from './routine/routineSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    routine: routineReducer,
  },
});
