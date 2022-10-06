import {Divider, List} from 'react-native-paper';

export default function RoutineListItem({item}) {
  return (
    <>
      <List.Item testID="routine_list_item" title={item.name} />
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
