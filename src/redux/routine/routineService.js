import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getRoutines() {
  const response = await axiosInstance.get('/routines/');
  return response.data;
}

const routineService = {
  getRoutines,
};

export default routineService;
