import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {List, TextInput} from 'react-native-paper';
import {
  textInputActiveOutlineColor,
  textInputOutlineColor,
} from '../../utils/sharedStyles';

export default function WorkoutExerciseSetForm() {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rir, setRir] = useState('');

  return (
    <List.Section style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.inputContainer}
        outlineColor={textInputOutlineColor}
        activeOutlineColor={textInputActiveOutlineColor}
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
        testID="rirInput"
        label="RIR"
        value={rir}
        onChangeText={text => setRir(text)}
      />
    </List.Section>
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
