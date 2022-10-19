import {Card, Text} from '@rneui/themed';
import {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWorkouts} from '../redux/workout/workoutSlice';

export default function Home() {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workout.workouts);

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  console.log(workouts);

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <Card testID="totalWorkoutCount">
        <Card.Title>Total Workouts</Card.Title>
        <View style={{alignItems: 'center'}}>
          <Text>{workouts.length}</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
