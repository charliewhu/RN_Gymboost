import {useLayoutEffect} from 'react';
import AddButton from '../../components/utils/AddButton';

import WorkoutExerciseList from '../../components/workoutExercises/WorkoutExerciseList';

export default function WorkoutExercises({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          testID="addExerciseBtn"
          onPress={() =>
            navigation.navigate('ExerciseScreen', {
              id: route.params.id,
              update: 'workouts',
            })
          }
        />
      ),
    });
  });

  return <WorkoutExerciseList navigation={navigation} route={route} />;
}
