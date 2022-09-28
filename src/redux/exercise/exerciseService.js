import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getExercises() {
  const response = await axiosInstance.get('/exercises/');
  return response.data;
}

const exerciseService = {
  getExercises,
};

export default exerciseService;
