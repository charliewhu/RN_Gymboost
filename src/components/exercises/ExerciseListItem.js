import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {postWorkoutExercise} from '../../redux/workoutExercise/workoutExerciseSlice';
import AddButton from '../utils/AddButton';

export default function ExerciseListItem({testID, route, item}) {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(
      postWorkoutExercise({
        workout: route.params.id,
        exercise: item.id,
      }),
    );
  };

  return (
    <>
      <List.Item
        testID={testID}
        title={item.name}
        right={props => (
          <AddButton
            {...props}
            testID="add_exercise_to_workout_btn"
            onPress={() => pressHandler(item)}
          />
        )}
      />
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
