import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getWorkoutExerciseSets() {
  const response = await axiosInstance.get('/workoutexercisesets/');
  return response.data;
}

async function postWorkoutExerciseSet(data) {
  const response = await axiosInstance.post('/workoutexercisesets/', data);
  return response.data;
}

const workoutExerciseSetService = {
  getWorkoutExerciseSets,
  postWorkoutExerciseSet,
};

export default workoutExerciseSetService;
