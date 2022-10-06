import {FlatList, View} from 'react-native';
import RoutineListItem from './RoutineListItem';

export default function RoutineList({navigation, routines}) {
  return (
    <View style={{flex: 1}}>
      {routines && (
        <FlatList
          testID="routine_list"
          data={routines}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RoutineListItem navigation={navigation} item={item} />
          )}
        />
      )}
    </View>
  );
}
