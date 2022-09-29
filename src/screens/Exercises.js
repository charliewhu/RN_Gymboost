import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import ExerciseList from '../components/exercises/ExerciseList';

export default function Exercises({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="create_exercise_btn"
          onPress={() => navigation.navigate('CreateExerciseScreen')}
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <ExerciseList />;
}
