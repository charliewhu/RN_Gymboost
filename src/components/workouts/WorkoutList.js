import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {getWorkouts} from '../../redux/workout/workoutSlice';
import {getWorkoutExercises} from '../../redux/workoutExercise/workoutExerciseSlice';

export default function WorkoutList({navigation, workouts}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
    dispatch(getWorkoutExercises());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      {workouts && (
        <FlatList
          testID="workout_list"
          data={workouts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <List.Item
                testID="workout_list_item"
                title={new Date(Date.parse(item.created_on)).toUTCString()}
                onPress={() =>
                  navigation.navigate('WorkoutExercisesScreen', {id: item.id})
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
