import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteWorkout} from '../../redux/routine/routineSlice';

import IconButton from '../utils/IconButton';

export default function RoutineListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkout(id));
  };

  return (
    <ListItem
      testID="routine_list_item"
      onPress={() =>
        navigation.navigate('RoutineExercisesScreen', {
          id: item.id,
        })
      }
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <IconButton
        testID="deleteRoutineBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
