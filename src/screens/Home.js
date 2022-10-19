import {useIsFocused} from '@react-navigation/native';
import hexToRgba from 'hex-to-rgba';
import {useEffect} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Bars, Chart} from 'rumble-charts';
import ChartView from '../components/home/ChartView';
import ContribChart from '../components/home/ContribChart';
import SetsChart from '../components/home/SetsChart';
import {getWorkouts} from '../redux/workout/workoutSlice';
import useTheme from '../utils/useTheme';

export default function Home() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const workouts = useSelector(state =>
    state.workout.workouts.map(item => ({
      ...item,
      date: new Date(Date.parse(item.created_on)).toDateString(),
    })),
  );

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
    if (isFocused) {
      dispatch(getWorkouts());
    }
  }, [isFocused, dispatch]);

  console.log(workouts);

  return (
    <ScrollView>
      {workouts && (
        <>
          <ChartView title="Days Worked Out">
            <ContribChart
              workouts={workouts}
              chartConfig={chartConfig}
              screenWidth={screenWidth}
            />
          </ChartView>
          <ChartView title="Sets by Date">
            <SetsChart
              workouts={workouts}
              chartConfig={chartConfig}
              screenWidth={screenWidth}
            />
          </ChartView>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Chart
              height={300}
              minY={0}
              series={[
                {
                  data: workouts.map(item => item.total_sets),
                },
              ]}
              width={600}
            >
              <Bars />
            </Chart>
          </View>
        </>
      )}
    </ScrollView>
  );
}
