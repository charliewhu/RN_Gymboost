import {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AddButton from '../../components/utils/AddButton';
import WorkoutList from '../../components/workouts/WorkoutList';
import {getWorkoutExercises} from '../../redux/WorkoutExercise/WorkoutExerciseSlice';
import {getWorkoutExerciseSets} from '../../redux/WorkoutExerciseSet/WorkoutExerciseSetSlice';
import {getWorkouts, postWorkout} from '../../redux/workout/workoutSlice';

export default function Workouts({navigation}) {
  const {isLoading, isUpdate} = useSelector(state => state.workout);
  const workouts = useSelector(state => state.workout.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
    dispatch(getWorkoutExercises());
    dispatch(getWorkoutExerciseSets());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && isUpdate) {
      const workoutId = workouts[workouts.length - 1].id;
      navigation.navigate('WorkoutExercisesScreen', {id: workoutId});
    }
  }, [isUpdate, isLoading, navigation, workouts]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          testID="createWorkoutBtn"
          onPress={() => dispatch(postWorkout())}
        />
      ),
    });
  });

  return <WorkoutList navigation={navigation} workouts={workouts} />;
}
