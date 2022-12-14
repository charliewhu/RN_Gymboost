import {HeaderBackButton} from '@react-navigation/elements';
import {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import AddButton from '../../components/utils/AddButton';

import WorkoutExerciseList from '../../components/workoutExercises/WorkoutExerciseList';

export default function WorkoutExercises({navigation, route}) {
  const workout = useSelector(state =>
    state.workout.workouts.find(item => item.id === +route.params.id),
  );

  const getTitle = () => {
    if (workout.routine_name !== null) {
      return workout.routine_name;
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
      headerLeft: props => (
        <HeaderBackButton
          {...props}
          testID="goBackBtn"
          label="Workouts"
          truncatedLabel="Back"
          labelVisible={true}
          onPress={() => {
            navigation.pop();
            navigation.navigate('WorkoutsScreen');
          }}
        />
      ),
    });
  });

  return <WorkoutExerciseList navigation={navigation} route={route} />;
}
