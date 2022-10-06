import {TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {sharedStyles} from '../../utils/sharedStyles';

export default function RoutineExerciseListItem({item}) {
  return (
    <TouchableOpacity>
      <List.Section
        testID="workout_exercise_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={item.name} />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </TouchableOpacity>
  );
}
