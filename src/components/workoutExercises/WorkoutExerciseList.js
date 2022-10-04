import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import WorkoutExerciseListItem from './WorkoutExerciseListItem';

export default function WorkoutExerciseList({navigation, route}) {
  const workoutExercises = useSelector(state =>
    state.workoutExercise.workoutExercises.filter(
      item => item.workout == route.params.id,
    ),
  );

  return (
    <View style={{flex: 1}}>
      {workoutExercises && (
        <FlatList
          testID="workout_exercise_list"
          data={workoutExercises}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <WorkoutExerciseListItem navigation={navigation} item={item} />
          )}
        />
      )}
    </View>
  );
}
