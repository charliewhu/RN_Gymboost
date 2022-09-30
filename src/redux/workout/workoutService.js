import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getWorkouts() {
  const response = await axiosInstance.get('/workouts/');
  return response.data;
}

const workoutService = {
  getWorkouts,
};

export default workoutService;
