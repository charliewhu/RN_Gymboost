import {ListItem, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import useTheme from '../../utils/useTheme';

export default function ChartView(props) {
  const theme = useTheme();

  return (
    <>
      <Text
        style={{
          ...styles.chartTitle,
          backgroundColor: theme.colors.background,
        }}
      >
        {props.title}
      </Text>

      <ListItem>
        <View style={styles.chartView}>{props.children}</View>
      </ListItem>
    </>
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
