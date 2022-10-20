import {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DataCard from '../components/home/DataCard';
import {getWeekWorkoutIds, getWorkouts} from '../redux/workout/workoutSlice';
import {getWorkoutExercises} from '../redux/workoutExercise/workoutExerciseSlice';
import {
  getSetCount,
  getTotalWeekSets,
  getWorkoutExerciseSets,
} from '../redux/workoutExerciseSet/workoutExerciseSetSlice';

export default function Home() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workout.workouts);
  const totalSets = useSelector(state => getSetCount(state));
  const weekWorkoutIds = useSelector(state => getWeekWorkoutIds(state));
  const totalWeekSets = useSelector(state => getTotalWeekSets(state));

  useEffect(() => {
    dispatch(getWorkouts());
    dispatch(getWorkoutExercises());
    dispatch(getWorkoutExerciseSets());
  }, [dispatch]);

  return (
    <ScrollView>
      <DataCard
        testID="totalWorkouts"
        title="Total Workouts"
        data={workouts.length}
      />

      <DataCard testID="totalSets" title="Total Sets" data={totalSets} />

      <DataCard
        testID="totalWeekWorkouts"
        title="Total Workouts In Past Week"
        data={weekWorkoutIds.length}
      />
      <DataCard
        testID="totalWeekSets"
        title="Total Sets In Past Week"
        data={totalWeekSets}
      />
    </ScrollView>
  );
}
