import {ListItem} from '@rneui/themed';

export default function RoutineListItem({navigation, item}) {
  return (
    <ListItem
      testID="routine_list_item"
      onPress={() =>
        navigation.navigate('RoutineExercisesScreen', {
          id: item.id,
        })
      }
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
