import {configureStore} from '@reduxjs/toolkit';

import exerciseReducer from './exercise/exerciseSlice';

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
