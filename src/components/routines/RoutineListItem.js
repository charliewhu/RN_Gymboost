import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteRoutine} from '../../redux/routine/routineSlice';
import {postRoutineWorkout} from '../../redux/workout/workoutSlice';

import IconButton from '../utils/IconButton';

export default function RoutineListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteRoutine(id));
  };

  const handleStartWorkout = id => {
    dispatch(postRoutineWorkout(id))
      .unwrap()
      .then(res => {
        navigation.navigate('Workouts', {
          screen: 'WorkoutExercisesScreen',
          params: {
            id: res.id,
          },
        });
      });
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
      <IconButton
        testID="startWorkoutBtn"
        icon="pulse-outline"
        onPress={() => handleStartWorkout(item.id)}
      />
    </ListItem>
  );
}
