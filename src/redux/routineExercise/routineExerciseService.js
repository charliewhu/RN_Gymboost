import {CYPRESS_API_URL} from '@env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: CYPRESS_API_URL,
});

async function getRoutineExercises() {
  const response = await axiosInstance.get('/routineexercises/');
  return response.data;
}

async function postRoutineExercise(data) {
  const response = await axiosInstance.post('/routineexercises/', data);
  return response.data;
}

async function deleteRoutineExercise(id) {
  const response = await axiosInstance.delete(`/routineexercises/${id}/`);
  return response.data;
}

const routineExerciseService = {
  getRoutineExercises,
  postRoutineExercise,
  deleteRoutineExercise,
};

export default routineExerciseService;
