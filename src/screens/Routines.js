import Ionicons from '@expo/vector-icons/Ionicons';
import {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import RoutineList from '../components/routines/RoutineList';

export default function Routines({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          testID="createRoutineBtn"
          onPress={() => navigation.navigate('CreateRoutineScreen')}
        >
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  return <RoutineList />;
}
