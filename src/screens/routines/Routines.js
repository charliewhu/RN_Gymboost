import {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import RoutineList from '../../components/routines/RoutineList';
import AddButton from '../../components/utils/AddButton';
import {getRoutines} from '../../redux/routine/routineSlice';

export default function Routines({navigation}) {
  const dispatch = useDispatch();
  const routines = useSelector(state => state.routine.routines);

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

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

  return <RoutineList routines={routines} />;
}
