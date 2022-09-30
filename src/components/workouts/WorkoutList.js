import {View, FlatList} from 'react-native';
import {useEffect} from 'react';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Divider, List} from 'react-native-paper';

import {getWorkouts} from '../../redux/workout/workoutSlice';

export default function WorkoutList() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workout.workouts);

  useEffect(() => {
    dispatch(getWorkouts());
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
              <List.Item testID="workout_list_item" title={item.name} />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
