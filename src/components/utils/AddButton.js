import Ionicons from '@expo/vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import useTheme from '../../utils/useTheme';

export default function AddButton({testID, onPress}) {
  const theme = useTheme();

  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Ionicons name="add" size={30} color={theme.colors.black} />
    </TouchableOpacity>
  );
}
