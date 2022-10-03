import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, List, TextInput} from 'react-native-paper';
import {
  textInputActiveOutlineColor,
  textInputOutlineColor,
} from '../../utils/sharedStyles';

export default function WorkoutExerciseSetForm() {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rir, setRir] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(weight !== '' && reps !== '' && rir !== '');
  }, [weight, reps, rir]);

  return (
    <>
      <List.Section style={styles.container}>
        <TextInput
          mode="outlined"
          style={styles.inputContainer}
          outlineColor={textInputOutlineColor}
          activeOutlineColor={textInputActiveOutlineColor}
          keyboardType="numeric"
          testID="weightInput"
          label="Weight"
          value={weight}
          onChangeText={text => setWeight(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.inputContainer}
          outlineColor={textInputOutlineColor}
          activeOutlineColor={textInputActiveOutlineColor}
          keyboardType="numeric"
          testID="repsInput"
          label="Reps"
          value={reps}
          onChangeText={text => setReps(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.inputContainer}
          outlineColor={textInputOutlineColor}
          activeOutlineColor={textInputActiveOutlineColor}
          keyboardType="numeric"
          testID="rirInput"
          label="RIR"
          value={rir}
          onChangeText={text => setRir(text)}
        />
      </List.Section>
      <Button
        testID="submitBtn"
        mode="contained"
        disabled={!isValid}
        buttonColor={isValid ? '#0E7AFE' : 'lightgray'}
        //style={styles.btnStyle}
        //onPress={handleSubmit}
        onPress={() => console.log(isValid)}
      >
        Create
      </Button>
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
});
