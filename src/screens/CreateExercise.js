import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';

export default function CreateExercise() {
  const [text, setText] = React.useState('');

  return (
    <>
      <TextInput
        testID="nameInput"
        label="Name"
        mode="outlined"
        style={styles.textInput}
        outlineColor={textInputOutlineColor}
        activeOutlineColor={textInputActiveOutlineColor}
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button
        testID="exerciseSubmitBtn"
        mode="contained"
        style={styles.btnStyle}
        onPress={() => console.log('Pressed')}
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
    color: 'red',
    borderRadius: 0,
  },
});
