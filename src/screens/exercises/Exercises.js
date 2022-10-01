import {useLayoutEffect} from 'react';

import ExerciseList from '../../components/exercises/ExerciseList';
import AddButton from '../../components/utils/AddButton';

export default function Exercises({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          testID="create_exercise_btn"
          onPress={() => navigation.navigate('CreateExerciseScreen')}
        />
      ),
    });
  });

  return <ExerciseList />;
}
