import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import RoutineExerciseListItem from './RoutineExerciseListItem';

export default function RoutineExerciseList({route}) {
  const routineExercises = useSelector(state =>
    state.routineExercise.routineExercises.filter(
      item => item.routine === +route.params.id,
    ),
  );

  return (
    <View style={{flex: 1}}>
      {routineExercises && (
        <FlatList
          testID="routine_exercise_list"
          data={routineExercises}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RoutineExerciseListItem item={item} />}
        />
      )}
    </View>
  );
}
