import {useLayoutEffect} from 'react';

import ExerciseList from '../../components/exercises/ExerciseList';
import AddButton from '../../components/utils/AddButton';

export default function Exercises({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          testID="create_exercise_btn"
          onPress={() =>
            route.params
              ? navigation.navigate('CreateExerciseScreen', {
                  id: route.params.id,
                })
              : navigation.navigate('CreateExerciseScreen')
          }
        />
      ),
    });
  });

  return <ExerciseList navigation={navigation} route={route} />;
}
