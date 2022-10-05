import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getExercises() {
  const response = await axiosInstance.get('/exercises/');
  return response.data;
}

async function postExercise(data) {
  const response = await axiosInstance.post('/exercises/', data);
  return response.data;
}

async function deleteExercise(id) {
  const response = await axiosInstance.delete(`/exercises/${id}/`);
  return response.data;
}

const exerciseService = {
  getExercises,
  postExercise,
  deleteExercise,
};

export default exerciseService;
