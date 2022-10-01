import Ionicons from '@expo/vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

export default function AddButton({testID, onPress}) {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Ionicons name="add" size={30} />
    </TouchableOpacity>
  );
}
