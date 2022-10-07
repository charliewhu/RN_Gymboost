import Ionicons from '@expo/vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import useTheme from '../../utils/useTheme';

export default function IconButton({testID, icon, onPress}) {
  const theme = useTheme();
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Ionicons name={icon} size={30} color={theme.colors.black} />
    </TouchableOpacity>
  );
}
