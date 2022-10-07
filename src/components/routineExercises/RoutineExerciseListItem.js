import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteRoutineExercise} from '../../redux/routineExercise/routineExerciseSlice';
import IconButton from '../utils/IconButton';

export default function RoutineExerciseListItem({item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteRoutineExercise(id));
  };

  return (
    <ListItem testID="routine_exercise_list_item">
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <IconButton
        testID="deleteRoutineExerciseBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
