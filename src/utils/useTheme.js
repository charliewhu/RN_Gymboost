import {createTheme, darkColors, lightColors} from '@rneui/themed';
import {useColorScheme} from 'react-native';

export default function useTheme() {
  const colorScheme = useColorScheme();

  const baseTheme = colorScheme === 'dark' ? darkColors : lightColors;

  const grey6 = colorScheme === 'dark' ? '#202020' : '#F5F5F5';

  const theme = createTheme({
    colors: {
      ...baseTheme,
      disabled: baseTheme.grey5,
      grey6: grey6,
    },
    components: {
      ListItem: {
        bottomDivider: true,
      },
    },
  });

  return theme;
}
