import {Card, Text} from '@rneui/themed';
import {View} from 'react-native';

export default function DataCard({testID, title, data}) {
  return (
    <Card testID={testID}>
      <Card.Title>{title}</Card.Title>
      <View style={{alignItems: 'center'}}>
        <Text>{data}</Text>
      </View>
    </Card>
  );
}
