import {TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {deleteWorkout} from '../../redux/workout/workoutSlice';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

export default function WorkoutListItem({navigation, item}) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteWorkout(id));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WorkoutExercisesScreen', {
          id: item.id,
        })
      }
    >
      <List.Section
        testID="workout_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item
          title={new Date(Date.parse(item.created_on)).toUTCString()}
        />
        <IconButton
          testID="deleteWorkoutBtn"
          icon="trash-bin"
          onPress={() => handleDelete(item.id)}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </TouchableOpacity>
  );
}
