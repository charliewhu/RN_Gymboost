import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getExercises} from '../../redux/exercise/exerciseSlice';
import AddButton from '../utils/AddButton';

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
              <List.Item
                testID="exercise_list_item"
                title={item.name}
                right={props => (
                  <AddButton
                    {...props}
                    testID="add_exercise_to_workout_btn"
                    onPress={() => console.log('add pressed')}
                  />
                )}
              />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
