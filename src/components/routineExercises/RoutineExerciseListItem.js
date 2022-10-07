import {ListItem} from '@rneui/themed';

export default function RoutineExerciseListItem({item}) {
  return (
    <ListItem testID="workout_exercise_list_item">
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}
