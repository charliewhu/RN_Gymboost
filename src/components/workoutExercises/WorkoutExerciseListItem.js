import {TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

export default function WorkoutExerciseListItem({navigation, item}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WorkoutExerciseSetsScreen', {
          id: item.workout,
          workoutExerciseId: item.id,
        })
      }
    >
      <List.Section
        testID="workout_exercise_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={item.name} />
        <IconButton
          testID="deleteWorkoutExerciseBtn"
          icon="trash-bin"
          onPress={() => console.log('pressed')}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </TouchableOpacity>
  );
}
