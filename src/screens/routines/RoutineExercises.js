import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import RoutineExerciseList from '../../components/routineExercises/RoutineExerciseList';

export default function RoutineExercises({navigation, route}) {
  const routine = useSelector(state =>
    state.routine.routines.find(item => item.id == route.params.id),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: routine ? routine.name : null,
      headerRight: () => (
        <TouchableOpacity
          testID="addExerciseBtn"
          onPress={() =>
            navigation.navigate('ExerciseScreen', {
              id: route.params.id,
              update: 'routines',
            })
          }
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <RoutineExerciseList route={route} />;
}