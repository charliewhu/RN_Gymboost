import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {getRoutines} from '../../redux/routine/routineSlice';

export default function RoutineList() {
  const dispatch = useDispatch();
  const routines = useSelector(state => state.routine.exercises);

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

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
              <Divider />
            </>
          )}
        />
      )}
    </View>
  );
}
