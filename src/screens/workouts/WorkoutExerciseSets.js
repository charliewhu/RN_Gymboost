import {HeaderBackButton} from '@react-navigation/elements';
import {useLayoutEffect} from 'react';
import {Platform} from 'react-native';
import WorkoutExerciseSetForm from '../../components/workoutExerciseSets/WorkoutExerciseSetForm';
import WorkoutExerciseSetList from '../../components/workoutExerciseSets/WorkoutExerciseSetList';

export default function WorkoutExerciseSets({navigation, route}) {
  useLayoutEffect(() => {
    Platform.OS === 'web'
      ? navigation.setOptions({
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              testID="goBackBtn"
              onPress={() => {
                navigation.pop();
                navigation.navigate('WorkoutExercisesScreen', {
                  id: route.params.id,
                });
              }}
            />
          ),
        })
      : null;
  });

  return (
    <>
      <WorkoutExerciseSetForm route={route} />
      <WorkoutExerciseSetList route={route} />
    </>
  );
}
