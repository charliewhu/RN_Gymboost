import {Card, Text} from '@rneui/themed';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWorkouts} from '../redux/workout/workoutSlice';

export default function Home() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workout.workouts);
  const totalSets = useSelector(state =>
    state.workout.workouts.reduce((prev, curr) => prev + curr.total_sets, 0),
  );

  useEffect(() => {
    dispatch(getWorkouts());
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
    </ScrollView>
  );
}
