import {Formik} from 'formik';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, List, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {postWorkoutExerciseSet} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';
import {
  textInputActiveOutlineColor,
  textInputOutlineColor,
} from '../../utils/sharedStyles';
import {WorkoutExerciseSetSchema} from './WorkoutExerciseSetSchema';

export default function WorkoutExerciseSetForm({route}) {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    id: '',
    weight: '',
    reps: '',
    rir: '',
  });

  const handleSubmitForm = values => {
    const data = {
      workout_exercise: route.params.workoutExerciseId,
      weight: values.weight,
      reps: values.reps,
      rir: values.rir,
    };
    dispatch(postWorkoutExerciseSet(data));
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
        }}
      >
        {({handleChange, handleSubmit, values, isValid}) => (
          <View>
            <List.Section
              testID="workoutExerciseSetForm"
              style={styles.container}
            >
              <TextInput
                mode="outlined"
                style={styles.inputContainer}
                outlineColor={textInputOutlineColor}
                activeOutlineColor={textInputActiveOutlineColor}
                keyboardType="numeric"
                testID="weightInput"
                label="Weight"
                value={values.weight}
                onChangeText={handleChange('weight')}
              />
              <TextInput
                mode="outlined"
                style={styles.inputContainer}
                outlineColor={textInputOutlineColor}
                activeOutlineColor={textInputActiveOutlineColor}
                keyboardType="numeric"
                testID="repsInput"
                label="Reps"
                value={values.reps}
                onChangeText={handleChange('reps')}
              />
              <TextInput
                mode="outlined"
                style={styles.inputContainer}
                outlineColor={textInputOutlineColor}
                activeOutlineColor={textInputActiveOutlineColor}
                keyboardType="numeric"
                testID="rirInput"
                label="RIR"
                value={values.rir}
                onChangeText={handleChange('rir')}
              />
            </List.Section>

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
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
    width: 100,
    height: 40,
    textAlign: 'center',
    borderColor: 'lightgray',
  },
  btnStyle: {
    margin: 10,
  },
});
