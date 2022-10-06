import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getRoutineExercises() {
  const response = await axiosInstance.get('/routineexercises/');
  return response.data;
}

const routineExerciseService = {
  getRoutineExercises,
};

export default routineExerciseService;
