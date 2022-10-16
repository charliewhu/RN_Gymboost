import {ListItem} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {deleteWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';

import IconButton from '../utils/IconButton';

export default function WorkoutExerciseListItem({navigation, item}) {
  const workoutExerciseSets = useSelector(state =>
    state.workoutExerciseSet.workoutExerciseSets.filter(
      set => set.workout_exercise === item.id,
    ),
  );

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
        <ListItem.Subtitle>
          Sets: {workoutExerciseSets.length}
        </ListItem.Subtitle>
      </ListItem.Content>
      <IconButton
        testID="deleteWorkoutExerciseBtn"
        icon="remove-circle-outline"
        onPress={() => handleDelete(item.id)}
      />
    </ListItem>
  );
}
