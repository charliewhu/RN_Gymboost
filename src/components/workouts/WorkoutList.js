import {FlatList, View} from 'react-native';
import {Divider, List} from 'react-native-paper';

export default function WorkoutList({navigation, workouts}) {
  return (
    <View style={{flex: 1}}>
      {workouts && (
        <FlatList
          testID="workout_list"
          data={workouts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <>
              <List.Item
                testID="workout_list_item"
                title={new Date(Date.parse(item.created_on)).toUTCString()}
                onPress={() =>
                  navigation.navigate('WorkoutExercisesScreen', {id: item.id})
                }
              />
              <Divider style={{backgroundColor: 'lightgray'}} />
            </>
          )}
        />
      )}
    </View>
  );
}
