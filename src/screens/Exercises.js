import {useLayoutEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

  return (
    <View>
      <ExerciseList />
    </View>
  );
}
