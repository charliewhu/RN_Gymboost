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

async function deleteWorkoutExerciseSet(id) {
  const response = await axiosInstance.delete(`/workoutexercisesets/${id}/`);
  console.log(response.data);
  return response.data;
}

async function deleteAllWorkoutExerciseSets(id) {
  const response = await axiosInstance.delete(
    `/workoutexercises/${id}/delete_sets/`,
  );
  console.log(response.data);
  return response.data;
}

const workoutExerciseSetService = {
  getWorkoutExerciseSets,
  postWorkoutExerciseSet,
  deleteWorkoutExerciseSet,
  deleteAllWorkoutExerciseSets,
};

export default workoutExerciseSetService;
