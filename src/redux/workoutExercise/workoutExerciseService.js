import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getWorkoutExercises() {
  const response = await axiosInstance.get('/workoutexercises/');
  return response.data;
}

async function postWorkoutExercise(data) {
  const response = await axiosInstance.get('/workoutexercises/', data);
  return response.data;
}

const workoutExerciseService = {
  getWorkoutExercises,
  postWorkoutExercise,
};

export default workoutExerciseService;
