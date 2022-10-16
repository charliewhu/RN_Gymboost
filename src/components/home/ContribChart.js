import {ListItem, Text} from '@rneui/themed';
import {View} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';

export default function ContribChart({
  workouts,
  theme,
  styles,
  chartConfig,
  screenWidth,
}) {
  const workoutContribs = workouts.map(item => ({
    date: new Date(Date.parse(item.created_on)),
    count: 1,
  }));

  return (
    <>
      <Text
        style={{
          ...styles.chartTitle,
          backgroundColor: theme.colors.background,
        }}
      >
        Days Worked Out
      </Text>

      <ListItem>
        <View style={styles.chartView}>
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
        </View>
      </ListItem>
    </>
  );
}
