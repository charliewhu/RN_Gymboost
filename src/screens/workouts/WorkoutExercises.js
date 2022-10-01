import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import WorkoutExerciseList from '../../components/workouts/WorkoutExerciseList';

export default function WorkoutExercises({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="addExerciseBtn"
          onPress={() => console.log('addExerciseBtn pressed')}
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <WorkoutExerciseList route={route} />;
}
