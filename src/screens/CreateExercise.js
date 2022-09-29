import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

export default function CreateExercise({navigation}) {
  const [exerciseName, setExerciseName] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // set isValid based on fields being completed
    exerciseName !== '' ? setIsValid(true) : setIsValid(false);
  }, [exerciseName]);

  return (
    <>
      <TextInput
        testID="nameInput"
        label="Name"
        mode="outlined"
        autoCapitalize="words"
        style={styles.textInput}
        outlineColor={textInputOutlineColor}
        activeOutlineColor={textInputActiveOutlineColor}
        value={exerciseName}
        onChangeText={text => setExerciseName(text)}
      />
      <Button
        testID="exerciseSubmitBtn"
        mode="contained"
        disabled={!isValid}
        buttonColor={isValid ? '#0E7AFE' : 'lightgray'}
        style={styles.btnStyle}
        onPress={() => navigation.navigate('ExerciseScreen')}
      >
        Create
      </Button>
    </>
  );
}

const textInputOutlineColor = 'lightgray';
const textInputActiveOutlineColor = 'black';

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
  },
  btnStyle: {
    margin: 10,
    borderRadius: 0,
  },
});
