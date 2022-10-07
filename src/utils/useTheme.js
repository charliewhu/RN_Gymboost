import {createTheme, darkColors, lightColors} from '@rneui/themed';
import {useColorScheme} from 'react-native';

export default function useTheme() {
  const colorScheme = useColorScheme();

  const baseTheme = colorScheme === 'dark' ? darkColors : lightColors;

  const theme = createTheme({
    colors: {
      ...baseTheme,
      disabled: baseTheme.grey5,
    },
    components: {
      ListItem: {
        bottomDivider: true,
      },
    },
  });

  return theme;
}
