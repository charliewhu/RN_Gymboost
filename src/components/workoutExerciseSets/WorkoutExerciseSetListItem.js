import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteWorkoutExerciseSet} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';

import IconButton from '../utils/IconButton';

export default function WorkoutExerciseSetListItem({item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkoutExerciseSet(id));
  };

  return (
    <ListItem testID="workout_exercise_set_list_item">
      <ListItem.Content>
        <ListItem.Title>
          {`${item.weight} x ${item.reps} @ ${item.rir}`}
        </ListItem.Title>
      </ListItem.Content>
      <IconButton
        testID="deleteWorkoutExerciseSetBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
