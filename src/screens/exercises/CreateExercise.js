import {Button, Input} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {postExercise} from '../../redux/exercise/exerciseSlice';

export default function CreateExercise({navigation, route}) {
  const dispatch = useDispatch();

  // form input fields
  const [name, setName] = useState('');

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // set isValid based on fields being completed
    name !== '' ? setIsValid(true) : setIsValid(false);
  }, [name]);

  const handleSubmit = () => {
    dispatch(postExercise({name}));
    route.params
      ? navigation.navigate('ExerciseScreen', {
          id: route.params.id,
          update: route.params.update,
        })
      : navigation.goBack();
  };

  return (
    <ScrollView>
      <Input
        testID="nameInput"
        placeholder="Name"
        autoCapitalize="words"
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button
        testID="submitBtn"
        disabled={!isValid}
        style={styles.btnStyle}
        onPress={handleSubmit}
      >
        Create
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    outlineWidth: 0,
  },
  btnStyle: {
    marginHorizontal: 10,
  },
});
