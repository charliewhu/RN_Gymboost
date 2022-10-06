import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import RoutineExerciseList from '../../components/routines/RoutineExerciseList';

export default function RoutineExercises({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="addExerciseBtn"
          onPress={() =>
            navigation.navigate('ExerciseScreen', {id: route.params.id})
          }
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <RoutineExerciseList route={route} />;
}
