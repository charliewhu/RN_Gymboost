import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getExercises} from '../../redux/exercise/exerciseSlice';
import ExerciseListItem from './ExerciseListItem';

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
            <ExerciseListItem testID="exercise_list_item" item={item} />
          )}
        />
      )}
    </View>
  );
}
