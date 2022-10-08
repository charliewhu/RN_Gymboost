import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteWorkout} from '../../redux/workout/workoutSlice';

import IconButton from '../utils/IconButton';

export default function WorkoutListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkout(id));
  };

  return (
    <ListItem
      testID="workout_list_item"
      onPress={() =>
        navigation.navigate('WorkoutExercisesScreen', {
          id: item.id,
        })
      }
    >
      <ListItem.Content>
        <ListItem.Title>
          {new Date(Date.parse(item.created_on)).toUTCString()}
        </ListItem.Title>
        <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
      </ListItem.Content>
      <IconButton
        testID="deleteWorkoutBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
