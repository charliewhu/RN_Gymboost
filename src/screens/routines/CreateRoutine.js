import {StackActions} from '@react-navigation/native';
import {Button, Input} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {postRoutine} from '../../redux/routine/routineSlice';

export default function CreateRoutine({navigation}) {
  const dispatch = useDispatch();

  // form input fields
  const [name, setName] = useState('');

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // set isValid based on fields being completed
    name !== '' ? setIsValid(true) : setIsValid(false);
  }, [name]);

  const handleSubmit = () => {
    dispatch(postRoutine({name}))
      .unwrap()
      .then(res => {
        navigation.dispatch(
          StackActions.replace('RoutineExercisesScreen', {id: res.id}),
        );
      });
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
        mode="contained"
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
