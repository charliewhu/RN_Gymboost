import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getRoutines() {
  const response = await axiosInstance.get('/routines/');
  return response.data;
}

async function postRoutine(data) {
  const response = await axiosInstance.post('/routines/', data);
  return response.data;
}

async function deleteRoutine(id) {
  const response = await axiosInstance.delete(`/routines/${id}/`);
  return response.data;
}

const routineService = {
  getRoutines,
  postRoutine,
  deleteRoutine,
};

export default routineService;
