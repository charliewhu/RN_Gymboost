import Ionicons from '@expo/vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

export default function IconButton({testID, icon, onPress}) {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Ionicons name={icon} size={30} style={{marginHorizontal: 10}} />
    </TouchableOpacity>
  );
}
