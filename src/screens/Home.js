import hexToRgba from 'hex-to-rgba';
import {useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContribChart from '../components/home/ContribChart';
import {getWorkouts} from '../redux/workout/workoutSlice';
import useTheme from '../utils/useTheme';

export default function Home() {
  const dispatch = useDispatch();

  const workouts = useSelector(state => state.workout.workouts);

  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: theme.colors.background,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.colors.background,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0.5) => hexToRgba(theme.colors.primary, opacity + 0.02),
  };

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <ScrollView>
      {workouts && (
        <ContribChart
          workouts={workouts}
          theme={theme}
          styles={styles}
          chartConfig={chartConfig}
          screenWidth={screenWidth}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chartTitle: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 30,
  },
  chartView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
