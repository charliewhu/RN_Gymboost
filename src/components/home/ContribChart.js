import {ContributionGraph} from 'react-native-chart-kit';

export default function ContribChart({workouts, chartConfig, screenWidth}) {
  const workoutContribs = workouts.map(item => ({
    date: new Date(Date.parse(item.created_on)),
    count: 1,
  }));

  return (
    <ContributionGraph
      testID="workoutContribGraph"
      values={workoutContribs}
      numDays={92}
      width={Math.min(screenWidth - 20, 400)}
      height={220}
      chartConfig={chartConfig}
      //showMonthLabels={false}
      //onDayPress={item => console.log(item)}
      gutterSize={3}
    />
  );
}
