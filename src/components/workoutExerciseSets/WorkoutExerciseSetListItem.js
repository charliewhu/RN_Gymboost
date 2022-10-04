import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deleteWorkoutExerciseSet} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

export default function WorkoutExerciseSetListItem({item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkoutExerciseSet(id));
  };

  return (
    <>
      <List.Section
        testID="workout_exercise_set_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={`${item.weight} x ${item.reps} @ ${item.rir}`} />
        <IconButton
          testID="deleteWorkoutExerciseSetBtn"
          icon="trash-bin"
          onPress={() => handleDelete(item.id)}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
