import {Button} from '@rneui/themed';
import {Formik} from 'formik';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  postWorkoutExerciseSet,
  putWorkoutExerciseSet,
} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';
import useTheme from '../../utils/useTheme';
import {WorkoutExerciseSetSchema} from './WorkoutExerciseSetSchema';

export default function WorkoutExerciseSetForm({
  setModalIsVisible,
  formValues,
  setFormValues,
  initialForm,
  isSetEdit,
  setIsSetEdit,
}) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleSubmitForm = values => {
    let data = {
      workout_exercise: values.workout_exercise,
      weight: values.weight,
      reps: values.reps,
      rir: values.rir,
    };

    if (isSetEdit) {
      data = {id: formValues.id, ...data};
      dispatch(putWorkoutExerciseSet(data));
    } else {
      dispatch(postWorkoutExerciseSet(data));
    }

    setIsSetEdit(false);
    setFormValues(initialForm);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={formValues}
        validationSchema={WorkoutExerciseSetSchema}
        validateOnMount={true}
        validateOnChange={true}
        onSubmit={(values, {resetForm, validateForm}) => {
          handleSubmitForm(values);
          resetForm();
          validateForm();
          setModalIsVisible(false);
        }}
      >
        {({handleChange, handleSubmit, values, isValid}) => (
          <View style={{backgroundColor: theme.colors.grey6}}>
            <View testID="workoutExerciseSetForm" style={{...styles.container}}>
              <TextInput
                style={{...styles.inputContainer, color: theme.colors.black}}
                keyboardType="numeric"
                testID="weightInput"
                placeholder="Weight"
                textAlign="center"
                autoFocus={Platform.OS === 'web' ? true : false}
                value={values.weight}
                onChangeText={handleChange('weight')}
              />
              <TextInput
                style={{...styles.inputContainer, color: theme.colors.black}}
                keyboardType="numeric"
                testID="repsInput"
                placeholder="Reps"
                textAlign="center"
                value={values.reps}
                onChangeText={handleChange('reps')}
              />
              <TextInput
                style={{...styles.inputContainer, color: theme.colors.black}}
                keyboardType="numeric"
                testID="rirInput"
                placeholder="RIR"
                textAlign="center"
                value={values.rir}
                onChangeText={handleChange('rir')}
              />
            </View>

            <View>
              <Button
                testID="submitBtn"
                mode="contained"
                disabled={!isValid}
                buttonColor={isValid ? '#0E7AFE' : 'lightgray'}
                style={styles.btnStyle}
                onPress={handleSubmit}
              >
                Add
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: 120,
    height: 60,
    margin: 15,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 28,
  },
  btnStyle: {
    margin: 10,
  },
});
