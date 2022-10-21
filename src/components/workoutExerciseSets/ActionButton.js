import {SpeedDial} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {
  deleteAllWorkoutExerciseSets,
  postWorkoutExerciseSet,
} from '../../redux/workoutExerciseSet/workoutExerciseSetSlice';

export default function ActionButton({
  theme,
  workoutExerciseId,
  workoutExerciseSets,
  fabOpen,
  setFabOpen,
  setModalIsVisible,
}) {
  const dispatch = useDispatch();

  const handleRepeatLastSet = () => {
    const lastSet = workoutExerciseSets[workoutExerciseSets.length - 1];
    if (lastSet) {
      const data = {
        workout_exercise: lastSet.workout_exercise,
        weight: lastSet.weight,
        reps: lastSet.reps,
        rir: lastSet.rir,
      };
      dispatch(postWorkoutExerciseSet(data));
    }
  };

  const handleDeleteAllSets = () => {
    if (workoutExerciseSets.length > 0) {
      dispatch(deleteAllWorkoutExerciseSets(workoutExerciseId));
    }
  };

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
          handleDeleteAllSets();
          setFabOpen(false);
        }}
      />
      <SpeedDial.Action
        testID="repeatLastSetBtn"
        icon={{name: 'playlist-add', color: theme.colors.white}}
        color={theme.colors.primary}
        title="Repeat Last Set"
        onPress={() => {
          handleRepeatLastSet();
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
