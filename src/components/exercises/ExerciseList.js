import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getExercises} from '../../redux/exercise/exerciseSlice';

export default function ExerciseList() {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercise.exercises);

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      {exercises && (
        <FlatList
          testID="exercise_list"
          data={exercises}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <List.Item testID="exercise_list_item" title={item.name} />
              <Divider />
            </>
          )}
        />
      )}
    </View>
  );
}
