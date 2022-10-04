import {Divider, List} from 'react-native-paper';

export default function WorkoutExerciseListItem({navigation, item}) {
  return (
    <>
      <List.Item
        testID="workout_exercise_list_item"
        title={item.name}
        onPress={() =>
          navigation.navigate('WorkoutExerciseSetsScreen', {
            id: item.workout,
            workoutExerciseId: item.id,
          })
        }
      />
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
