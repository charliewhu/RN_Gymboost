import {TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deleteWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

export default function WorkoutExerciseListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkoutExercise(id));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WorkoutExerciseSetsScreen', {
          id: item.workout,
          workoutExerciseId: item.id,
        })
      }
    >
      <List.Section
        testID="workout_exercise_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={item.name} />
        <IconButton
          testID="deleteWorkoutExerciseBtn"
          icon="trash-bin"
          onPress={() => handleDelete(item.id)}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </TouchableOpacity>
  );
}
