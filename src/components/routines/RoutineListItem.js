import {TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {sharedStyles} from '../../utils/sharedStyles';

export default function RoutineListItem({navigation, item}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RoutineExercisesScreen', {
          id: item.id,
        })
      }
    >
      <List.Section
        testID="routine_list_item"
        style={sharedStyles.listItemContainer}
      >
        <List.Item title={item.name} />
      </List.Section>
      <Divider style={{backgroundColor: 'lightgray'}} />
    </TouchableOpacity>
  );
}
