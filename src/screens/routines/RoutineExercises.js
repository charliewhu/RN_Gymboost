import {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';

import RoutineExerciseList from '../../components/routineExercises/RoutineExerciseList';
import AddButton from '../../components/utils/AddButton';

export default function RoutineExercises({navigation, route}) {
  const routine = useSelector(state =>
    state.routine.routines.find(item => item.id === +route.params.id),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: routine ? routine.name : null,
      headerRight: () => (
        <AddButton
          testID="addExerciseBtn"
          onPress={() =>
            navigation.navigate('ExerciseScreen', {
              id: route.params.id,
              update: 'routines',
            })
          }
        />
      ),
    });
  });

  return <RoutineExerciseList route={route} />;
}
