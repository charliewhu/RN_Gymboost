import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {getWorkoutExercises} from '../../redux/workoutExercise/workoutExerciseSlice';

export default function WorkoutExerciseList() {
  const dispatch = useDispatch();
  const workoutExercises = useSelector(
    state => state.workoutExercise.workoutExercises,
  );

  useEffect(() => {
    dispatch(getWorkoutExercises());
  }, [dispatch]);

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
              />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
