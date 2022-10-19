import {LineChart} from 'react-native-chart-kit';

export default function SetsChart({workouts, chartConfig, screenWidth}) {
  var setsByDate = workouts.reduce((acc, item) => {
    let existItem = acc.find(({date}) => item.date === date);
    if (existItem) {
      existItem.total_sets += item.total_sets;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  const data = {
    labels: setsByDate.map(item => item.date),
    datasets: [
      {
        data: setsByDate.map(item => item.total_sets),
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={260}
      verticalLabelRotation={30}
      chartConfig={chartConfig}
      //fromZero={true}
      yAxisInterval={2}
      xLabelsOffset={5}
      bezier
    />
  );
}
