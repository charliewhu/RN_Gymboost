import {FlatList, View} from 'react-native';
import WorkoutExerciseSetListItem from './WorkoutExerciseSetListItem';

export default function WorkoutExerciseSetList({
  workoutExerciseSets,
  setModalIsVisible,
  setFormValues,
}) {
  return (
    <View style={{flex: 1}}>
      {workoutExerciseSets && (
        <FlatList
          testID="workout_exercise_set_list"
          data={workoutExerciseSets}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <WorkoutExerciseSetListItem
              item={item}
              setModalIsVisible={setModalIsVisible}
              setFormValues={setFormValues}
            />
          )}
        />
      )}
    </View>
  );
}
