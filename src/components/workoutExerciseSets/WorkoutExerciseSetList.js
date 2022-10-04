import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import WorkoutExerciseSetListItem from './WorkoutExerciseSetListItem';

export default function WorkoutExerciseSetList({route}) {
  const workoutExerciseSets = useSelector(state =>
    state.workoutExerciseSet.workoutExerciseSets.filter(
      item => item.workout_exercise == route.params.workoutExerciseId,
    ),
  );

  return (
    <View style={{flex: 1}}>
      {workoutExerciseSets && (
        <FlatList
          testID="workout_exercise_set_list"
          data={workoutExerciseSets}
          keyExtractor={item => item.id}
          renderItem={({item}) => <WorkoutExerciseSetListItem item={item} />}
        />
      )}
    </View>
  );
}
