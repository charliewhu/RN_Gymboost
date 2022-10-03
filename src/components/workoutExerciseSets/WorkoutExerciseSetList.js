import {FlatList, Text, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useSelector} from 'react-redux';

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
          renderItem={({item}) => (
            <>
              <List.Item
                testID="workout_exercise_set_list_item"
                title={
                  <Text>
                    {item.weight} x {item.reps} @ {item.rir}
                  </Text>
                }
                onPress={() => console.log('pressed')}
              />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
