import {ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteExercise} from '../../redux/exercise/exerciseSlice';
import {postRoutineExercise} from '../../redux/routineExercise/routineExerciseSlice';
import {postWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';
import AddButton from '../utils/AddButton';
import IconButton from '../utils/IconButton';

export default function ExerciseListItem({testID, navigation, route, item}) {
  const dispatch = useDispatch();
  const handleWorkoutPress = () => {
    dispatch(
      postWorkoutExercise({
        workout: route.params.id,
        exercise: item.id,
      }),
    );
    navigation.goBack();
  };

  const handleRoutinePress = () => {
    dispatch(
      postRoutineExercise({
        routine: route.params.id,
        exercise: item.id,
      }),
    );
    navigation.goBack();
  };

  const handleDelete = id => {
    dispatch(deleteExercise(id));
  };

  const addButton = () => {
    if (route.params.update === 'routines') {
      return (
        <AddButton
          testID="addExerciseToRoutineBtn"
          onPress={() => handleRoutinePress(item)}
        />
      );
    } else if (route.params.update === 'workouts') {
      return (
        <AddButton
          testID="addExerciseToWorkoutBtn"
          onPress={() => handleWorkoutPress(item)}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <ListItem testID={testID}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <IconButton
          testID="deleteExerciseBtn"
          icon="remove-circle-outline"
          onPress={() => handleDelete(item.id)}
        />
        {route.params ? addButton() : null}
      </ListItem>
    </>
  );
}
