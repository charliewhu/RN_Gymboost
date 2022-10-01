import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import WorkoutList from '../../components/workouts/WorkoutList';

export default function Workouts({navigation}) {
  const dispatch = useDispatch();

  const handleCreateWorkout = async () => {
    await dispatch(postWorkout());
    navigation.navigate('WorkoutExercisesScreen');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="createWorkoutBtn"
          onPress={handleCreateWorkout}
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <WorkoutList navigation={navigation} />;
}
