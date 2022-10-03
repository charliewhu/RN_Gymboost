import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useSelector} from 'react-redux';

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
          )}
        />
      )}
    </View>
  );
}
