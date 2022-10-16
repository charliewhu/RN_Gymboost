import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';

import IconButton from '../utils/IconButton';

export default function WorkoutExerciseListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkoutExercise(id));
  };

  return (
    <ListItem
      testID="workout_exercise_list_item"
      onPress={() =>
        navigation.navigate('WorkoutExerciseSetsScreen', {
          id: item.workout,
          workoutExerciseId: item.id,
        })
      }
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>Sets: {item.total_sets}</ListItem.Subtitle>
      </ListItem.Content>
      <IconButton
        testID="deleteWorkoutExerciseBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
