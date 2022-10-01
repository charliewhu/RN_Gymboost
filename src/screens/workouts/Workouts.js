import Ionicons from '@expo/vector-icons/Ionicons';
import {useEffect, useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import WorkoutList from '../../components/workouts/WorkoutList';
import {postWorkout} from '../../redux/workout/workoutSlice';

export default function Workouts({navigation}) {
  const {isLoading, isUpdate} = useSelector(state => state.workout);
  const workouts = useSelector(state => state.workout.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && isUpdate) {
      const workoutId = workouts[workouts.length - 1].id;
      navigation.navigate('WorkoutExercisesScreen', {id: workoutId});
    }
  }, [isUpdate, isLoading, navigation, workouts]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="createWorkoutBtn"
          onPress={() => dispatch(postWorkout())}
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <WorkoutList navigation={navigation} workouts={workouts} />;
}
