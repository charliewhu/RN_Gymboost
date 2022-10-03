import {useLayoutEffect} from 'react';

import RoutineList from '../../components/routines/RoutineList';
import AddButton from '../../components/utils/AddButton';

export default function Routines({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          testID="createRoutineBtn"
          onPress={() => navigation.navigate('CreateRoutineScreen')}
        />
      ),
    });
  });

  return <RoutineList />;
}
