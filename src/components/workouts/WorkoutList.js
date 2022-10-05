import {FlatList, View} from 'react-native';
import WorkoutListItem from './WorkoutListItem';

export default function WorkoutList({navigation, workouts}) {
  return (
    <View style={{flex: 1}}>
      {workouts && (
        <FlatList
          testID="workout_list"
          data={workouts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <WorkoutListItem navigation={navigation} item={item} />
          )}
        />
      )}
    </View>
  );
}
