import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getExercises} from '../../redux/exercise/exerciseSlice';

export default function ExerciseList() {
  const dispatch = useDispatch();
  dispatch(getExercises);

  return (
    <View>
      <Text testID="exercise_list_item">ExerciseList</Text>
      <Text testID="exercise_list_item">ExerciseList</Text>
    </View>
  );
}
