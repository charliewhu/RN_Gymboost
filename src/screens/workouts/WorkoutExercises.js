import {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import AddButton from '../../components/utils/AddButton';

import WorkoutExerciseList from '../../components/workoutExercises/WorkoutExerciseList';

export default function WorkoutExercises({navigation, route}) {
  const workout = useSelector(state =>
    state.workout.workouts.find(item => item.id == route.params.id),
  );

  const getTitle = () => {
    if (workout.name !== null) {
      return workout.name;
    } else {
      return 'Workout Exercises';
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: workout ? getTitle() : 'Workout Exercises',
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
