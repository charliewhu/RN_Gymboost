import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deleteExercise} from '../../redux/exercise/exerciseSlice';
import {postWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';
import {sharedStyles} from '../../utils/sharedStyles';
import AddButton from '../utils/AddButton';
import IconButton from '../utils/IconButton';

export default function ExerciseListItem({testID, navigation, route, item}) {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(
      postWorkoutExercise({
        workout: route.params.id,
        exercise: item.id,
      }),
    );
    navigation.goBack();
  };

  const handleDelete = id => {
    dispatch(deleteExercise(id));
  };

  return (
    <>
      <List.Section testID={testID} style={sharedStyles.listItemContainer}>
        <List.Item title={item.name} />
        {route.params ? (
          <AddButton
            testID="addExerciseToWorkoutBtn"
            onPress={() => pressHandler(item)}
          />
        ) : null}
        <IconButton
          testID="deleteExerciseBtn"
          icon="trash-bin"
          onPress={() => handleDelete(item.id)}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
