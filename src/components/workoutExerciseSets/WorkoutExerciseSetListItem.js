import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteWorkoutExerciseSet} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';

import IconButton from '../utils/IconButton';

export default function WorkoutExerciseSetListItem({
  item,
  setModalIsVisible,
  setFormValues,
  setIsSetEdit,
}) {
  const dispatch = useDispatch();

  const handlePress = () => {
    setIsSetEdit(true);
    setFormValues({
      id: item.id,
      workout_exercise: item.workout_exercise,
      weight: item.weight,
      reps: item.reps,
      rir: item.rir,
    });
    setModalIsVisible(true);
  };

  const handleDelete = id => {
    dispatch(deleteWorkoutExerciseSet(id));
  };

  return (
    <ListItem
      testID="workout_exercise_set_list_item"
      onPress={() => handlePress()}
    >
      <ListItem.Content>
        <ListItem.Title>
          {`${item.id}, ${item.weight} x ${item.reps} @ ${item.rir}`}
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
