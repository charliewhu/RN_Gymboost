import {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AddButton from '../../components/utils/AddButton';
import WorkoutList from '../../components/workouts/WorkoutList';
import {getWorkouts, postWorkout} from '../../redux/workout/workoutSlice';
import {getWorkoutExercises} from '../../redux/workoutExercise/workoutExerciseSlice';
import {getWorkoutExerciseSets} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';

export default function Workouts({navigation}) {
  const workouts = useSelector(state => state.workout.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
    dispatch(getWorkoutExercises());
    dispatch(getWorkoutExerciseSets());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(postWorkout())
      .unwrap()
      .then(res => {
        navigation.navigate('WorkoutExercisesScreen', {id: res.id});
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton testID="createWorkoutBtn" onPress={() => handleSubmit()} />
      ),
    });
  });

  return <WorkoutList navigation={navigation} workouts={workouts} />;
}
