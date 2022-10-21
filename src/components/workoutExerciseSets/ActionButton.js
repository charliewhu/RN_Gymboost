import {SpeedDial} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {deleteAllWorkoutExerciseSets} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';

export default function ActionButton({
  theme,
  workoutExerciseId,
  fabOpen,
  setFabOpen,
  setModalIsVisible,
}) {
  const dispatch = useDispatch();

  return (
    <SpeedDial
      testID="actionBtn"
      isOpen={fabOpen}
      icon={{name: 'add', color: theme.colors.white}}
      openIcon={{name: 'close', color: theme.colors.white}}
      onOpen={() => setFabOpen(!fabOpen)}
      onClose={() => setFabOpen(!fabOpen)}
      color={theme.colors.primary}
      overlayColor="rgba(0, 0, 0, 0)"
    >
      <SpeedDial.Action
        testID="deleteSetsBtn"
        icon={{name: 'delete-outline', color: theme.colors.white}}
        color={theme.colors.error}
        title="Delete All Sets"
        onPress={() => {
          dispatch(deleteAllWorkoutExerciseSets(workoutExerciseId));
          setFabOpen(false);
        }}
      />
      <SpeedDial.Action
        testID="addSetBtn"
        icon={{name: 'add', color: theme.colors.white}}
        color={theme.colors.primary}
        title="Add Set"
        onPress={() => {
          setModalIsVisible(true);
          setFabOpen(false);
        }}
      />
    </SpeedDial>
  );
}
