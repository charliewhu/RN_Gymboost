import {HeaderBackButton} from '@react-navigation/elements';
import {useLayoutEffect, useState} from 'react';
import {Platform} from 'react-native';
import ActionButton from '../../components/workoutExerciseSets/ActionButton';
import FormModal from '../../components/workoutExerciseSets/FormModal';

import WorkoutExerciseSetList from '../../components/workoutExerciseSets/WorkoutExerciseSetList';
import useTheme from '../../utils/useTheme';

export default function WorkoutExerciseSets({navigation, route}) {
  const [fabOpen, setFabOpen] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const theme = useTheme();

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
      <WorkoutExerciseSetList route={route} />
      <FormModal
        theme={theme}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <ActionButton
        theme={theme}
        fabOpen={fabOpen}
        setFabOpen={setFabOpen}
        setModalIsVisible={setModalIsVisible}
      />
    </>
  );
}
