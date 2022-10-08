import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getWorkouts() {
  const response = await axiosInstance.get('/workouts/');
  return response.data;
}

async function postWorkout() {
  const response = await axiosInstance.post('/workouts/');
  return response.data;
}

async function deleteWorkout(id) {
  const response = await axiosInstance.delete(`/workouts/${id}/`);
  return response.data;
}

async function postRoutineWorkout(id) {
  const response = await axiosInstance.post(`/routines/${id}/workout/`);
  return response.data;
}

const workoutService = {
  getWorkouts,
  postWorkout,
  deleteWorkout,
  postRoutineWorkout,
};

export default workoutService;
