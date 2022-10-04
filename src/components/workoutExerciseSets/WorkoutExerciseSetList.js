import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

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
              <List.Section
                testID="workout_exercise_set_list_item"
                style={sharedStyles.listItemContainer}
              >
                <List.Item
                  title={`${item.weight} x ${item.reps} @ ${item.rir}`}
                />
                <IconButton
                  testID="deleteWorkoutExerciseSetBtn"
                  icon="trash-bin"
                  onPress={() => console.log('pressed')}
                />
              </List.Section>
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
