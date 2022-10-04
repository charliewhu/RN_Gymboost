import {Divider, List} from 'react-native-paper';
import {sharedStyles} from '../../utils/sharedStyles';
import IconButton from '../utils/IconButton';

export default function WorkoutExerciseSetListItem({item}) {
  return (
    <>
      <List.Section
        testID="workout_exercise_set_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={`${item.weight} x ${item.reps} @ ${item.rir}`} />
        <IconButton
          testID="deleteWorkoutExerciseSetBtn"
          icon="trash-bin"
          onPress={() => console.log('pressed')}
        />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
