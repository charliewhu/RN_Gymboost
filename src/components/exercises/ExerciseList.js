import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import {getExercises} from '../../redux/exercise/exerciseSlice';
import {useEffect} from 'react';

export default function ExerciseList() {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercise.exercises);

  useEffect(() => {
    dispatch(getExercises());
  }, []);

  return (
    <View>
      <Text>ExerciseList</Text>
      {exercises && (
        <FlatList
          testID="exercise_list"
          data={exercises}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <List.Item testID="exercise_list_item" title={item.name} />
          )}
        />
      )}
    </View>
  );
}
