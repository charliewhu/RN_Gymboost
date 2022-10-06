import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';

export default function RoutineList({routines}) {
  return (
    <View style={{flex: 1}}>
      {routines && (
        <FlatList
          testID="routine_list"
          data={routines}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <List.Item testID="routine_list_item" title={item.name} />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
