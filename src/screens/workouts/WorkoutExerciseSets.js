import {HeaderBackButton} from '@react-navigation/elements';
import {useLayoutEffect, useState} from 'react';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import ActionButton from '../../components/workoutExerciseSets/ActionButton';
import FormModal from '../../components/workoutExerciseSets/FormModal';

import WorkoutExerciseSetList from '../../components/workoutExerciseSets/WorkoutExerciseSetList';
import useTheme from '../../utils/useTheme';

export default function WorkoutExerciseSets({navigation, route}) {
  const [fabOpen, setFabOpen] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isSetEdit, setIsSetEdit] = useState(false);

  const initialForm = {
    id: '',
    workout_exercise: route.params.workoutExerciseId,
    weight: '',
    reps: '',
    rir: '',
  };
  const [formValues, setFormValues] = useState(initialForm);
  const theme = useTheme();

  const workoutExercise = useSelector(state =>
    state.workoutExercise.workoutExercises.find(
      item => item.id === +route.params.workoutExerciseId,
    ),
  );

  const workoutExerciseSets = useSelector(state =>
    state.workoutExerciseSet.workoutExerciseSets.filter(
      item => item.workout_exercise === +route.params.workoutExerciseId,
    ),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: workoutExercise ? workoutExercise.name : 'Sets',
    });
  });

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
      <WorkoutExerciseSetList
        workoutExerciseSets={workoutExerciseSets}
        setModalIsVisible={setModalIsVisible}
        setFormValues={setFormValues}
        setIsSetEdit={setIsSetEdit}
      />
      <FormModal
        route={route}
        theme={theme}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        formValues={formValues}
        setFormValues={setFormValues}
        initialForm={initialForm}
        isSetEdit={isSetEdit}
        setIsSetEdit={setIsSetEdit}
      />
      {workoutExercise && workoutExerciseSets && (
        <ActionButton
          theme={theme}
          workoutExerciseId={workoutExercise.id}
          workoutExerciseSets={workoutExerciseSets}
          fabOpen={fabOpen}
          setFabOpen={setFabOpen}
          setModalIsVisible={setModalIsVisible}
        />
      )}
    </>
  );
}
