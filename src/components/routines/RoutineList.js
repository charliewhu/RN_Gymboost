import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import RoutineListItem from './RoutineListItem';

export default function RoutineList({routines}) {
  return (
    <View style={{flex: 1}}>
      {routines && (
        <FlatList
          testID="routine_list"
          data={routines}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RoutineListItem item={item} />}
        />
      )}
    </View>
  );
}
