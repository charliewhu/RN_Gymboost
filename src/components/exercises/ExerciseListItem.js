import {View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deleteExercise} from '../../redux/exercise/exerciseSlice';
import {postRoutineExercise} from '../../redux/routineExercise/routineExerciseSlice';
import {postWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';
import {sharedStyles} from '../../utils/sharedStyles';
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
      <List.Section testID={testID} style={sharedStyles.listItemContainer}>
        <List.Item title={item.name} />
        <View style={{flexDirection: 'row'}}>
          <IconButton
            testID="deleteExerciseBtn"
            icon="trash-bin"
            onPress={() => handleDelete(item.id)}
          />
          {route.params ? addButton() : null}
        </View>
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
