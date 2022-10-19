import {Card, Text} from '@rneui/themed';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWorkouts} from '../redux/workout/workoutSlice';
import {getWorkoutExercises} from '../redux/workoutExercise/workoutExerciseSlice';
import {
  getSetCount,
  getWorkoutExerciseSets,
} from '../redux/workoutExerciseSet/workoutExerciseSetSlice';

export default function Home() {
  const dispatch = useDispatch();
  // const today = new Date();
  const workouts = useSelector(state => state.workout.workouts);
  const totalSets = useSelector(state => getSetCount(state));
  // const totalWeekSets = useSelector(state =>
  //   state.workout.workouts
  //     .filter(
  //       item =>
  //         new Date(Date.parse(item.created_on)) >=
  //         new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
  //     )
  //     .reduce((prev, curr) => prev + curr.total_sets, 0),
  // );
  const totalWeekSets = useSelector(state => getTotalWeekSets(state));

  useEffect(() => {
    dispatch(getWorkouts());
    dispatch(getWorkoutExercises());
    dispatch(getWorkoutExerciseSets());
  }, [dispatch]);

  return (
    <ScrollView>
      <Card testID="totalWorkouts">
        <Card.Title>Total Workouts</Card.Title>
        <View style={{alignItems: 'center'}}>
          <Text>{workouts.length}</Text>
        </View>
      </Card>

      <Card testID="totalSets">
        <Card.Title>Total Sets</Card.Title>
        <View style={{alignItems: 'center'}}>
          <Text>{totalSets}</Text>
        </View>
      </Card>

      <Card testID="totalWeekSets">
        <Card.Title>Total Sets In Past Week</Card.Title>
        <View style={{alignItems: 'center'}}>
          <Text>{totalWeekSets}</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
