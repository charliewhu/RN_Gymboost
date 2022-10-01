import {Divider, List} from 'react-native-paper';
import AddButton from '../utils/AddButton';

export default function ExerciseListItem({testID, item}) {
  return (
    <>
      <List.Item
        testID={testID}
        title={item.name}
        right={props => (
          <AddButton
            {...props}
            testID="add_exercise_to_workout_btn"
            onPress={() => console.log('add pressed')}
          />
        )}
      />
      <Divider style={{backgroundColor: 'lightgray'}} />
    </>
  );
}
